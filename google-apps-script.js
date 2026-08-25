/**
 * ============================================================================
 * TLE INFORMÁTICA - SISTEMA ERP
 * GOOGLE APPS SCRIPT - API BACKEND PARA GOOGLE SHEETS
 * ============================================================================
 * 
 * INSTRUÇÕES DE INSTALAÇÃO:
 * 1. Crie uma nova planilha no Google Sheets (ex: "TLE ERP - Banco de Dados").
 * 2. No menu superior, clique em "Extensões" > "Apps Script".
 * 3. Apague qualquer código existente no editor e cole TODO este código.
 * 4. No menu de funções, selecione "setupSheets" e clique em "Executar" para
 *    criar automaticamente todas as abas e cabeçalhos formatados (conceda a permissão se solicitado).
 * 5. Clique no botão azul "Implantar" (Deploy) > "Nova implantação" (New deployment).
 * 6. Tipo: Selecione o ícone de engrenagem e escolha "App da Web" (Web app).
 * 7. Configurações:
 *    - Descrição: TLE ERP API v1
 *    - Executar como: Eu (seu email)
 *    - Quem pode acessar: Qualquer pessoa (Anyone)
 * 8. Clique em "Implantar" e copie a URL do Web App (termina em /exec).
 * 9. Cole essa URL no painel "Google Sheets" dentro do sistema ERP.
 * ============================================================================
 */

// Configuração das Abas e Colunas do Sistema
const SHEETS_CONFIG = {
  clients: {
    sheetName: 'Clientes',
    color: '#0284c7',
    headers: ['id', 'name', 'type', 'document', 'phone', 'email', 'cep', 'address', 'city', 'equipments', 'notes', 'createdAt']
  },
  products: {
    sheetName: 'Produtos',
    color: '#0d9488',
    headers: ['id', 'name', 'category', 'sku', 'costPrice', 'sellPrice', 'stock', 'minStock', 'supplier']
  },
  services: {
    sheetName: 'Servicos',
    color: '#6366f1',
    headers: ['id', 'name', 'category', 'timeEstimate', 'price', 'warranty', 'description']
  },
  serviceOrders: {
    sheetName: 'OrdensServico',
    color: '#f59e0b',
    headers: ['id', 'clientId', 'clientName', 'clientPhone', 'equipmentType', 'brandModel', 'serialNumber', 'accessories', 'reportedDefect', 'technicalDiagnostic', 'technician', 'status', 'itemsJson', 'discount', 'total', 'paymentStatus', 'paymentMethod', 'createdAt', 'promisedAt']
  },
  notes: {
    sheetName: 'Anotacoes',
    color: '#8b5cf6',
    headers: ['id', 'title', 'category', 'color', 'content', 'pinned', 'createdAt']
  },
  users: {
    sheetName: 'Usuarios',
    color: '#334155',
    headers: ['username', 'password', 'name', 'role']
  }
};

/**
 * Função de Inicialização Automática das Abas
 * Executar uma vez no editor do Apps Script para gerar a estrutura.
 */
function setupSheets() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  for (const key in SHEETS_CONFIG) {
    const config = SHEETS_CONFIG[key];
    let sheet = ss.getSheetByName(config.sheetName);
    
    if (!sheet) {
      sheet = ss.insertSheet(config.sheetName);
    }
    
    // Configurar Cabeçalhos se a aba estiver vazia
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(config.headers);
      
      const headerRange = sheet.getRange(1, 1, 1, config.headers.length);
      headerRange.setFontWeight('bold');
      headerRange.setFontColor('#ffffff');
      headerRange.setBackground(config.color);
      headerRange.setHorizontalAlignment('center');
      sheet.setFrozenRows(1);
      
      // Auto-ajuste de colunas
      for (let col = 1; col <= config.headers.length; col++) {
        sheet.autoResizeColumn(col);
      }
    }
  }
  
  // Remover a "Sheet1" / "Página1" inicial se existir e estiver vazia
  const defaultSheet = ss.getSheetByName('Sheet1') || ss.getSheetByName('Página1');
  if (defaultSheet && ss.getSheets().length > 1 && defaultSheet.getLastRow() === 0) {
    try { ss.deleteSheet(defaultSheet); } catch (e) {}
  }

  Logger.log('Todas as abas do TLE ERP foram configuradas com sucesso!');
}

/**
 * Handler GET - Leitura e Ping
 */
function doGet(e) {
  try {
    const action = e && e.parameter ? e.parameter.action : 'read';
    
    if (action === 'ping') {
      return createJsonResponse({
        status: 'success',
        message: 'Conexão com Google Sheets estabelecida com sucesso!',
        timestamp: new Date().toISOString()
      });
    }

    // Leitura completa de todas as tabelas
    const db = readAllSheets();
    return createJsonResponse({
      status: 'success',
      data: db,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    return createJsonResponse({
      status: 'error',
      message: error.toString()
    });
  }
}

/**
 * Handler POST - Gravação e Sincronização
 */
function doPost(e) {
  try {
    let payload = {};
    if (e && e.postData && e.postData.contents) {
      try {
        payload = JSON.parse(e.postData.contents);
      } catch (err) {
        payload = e.parameter || {};
      }
    } else if (e && e.parameter) {
      payload = e.parameter;
    }

    const action = payload.action || 'sync_all';
    const db = payload.db || payload.data;

    if (action === 'sync_all' && db) {
      writeAllSheets(db);
      return createJsonResponse({
        status: 'success',
        message: 'Planilha Google Sheets atualizada com sucesso!',
        timestamp: new Date().toISOString()
      });
    }

    return createJsonResponse({
      status: 'error',
      message: 'Ação não reconhecida ou dados ausentes.'
    });

  } catch (error) {
    return createJsonResponse({
      status: 'error',
      message: error.toString()
    });
  }
}

/**
 * Lê todas as abas e monta o objeto de banco de dados
 */
function readAllSheets() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const db = {
    auth: {
      currentUser: null,
      users: []
    },
    clients: [],
    products: [],
    services: [],
    serviceOrders: [],
    notes: []
  };

  // Ler cada aba configurada
  for (const key in SHEETS_CONFIG) {
    const config = SHEETS_CONFIG[key];
    const sheet = ss.getSheetByName(config.sheetName);
    if (!sheet) continue;

    const data = sheet.getDataRange().getValues();
    if (data.length <= 1) continue; // Apenas cabeçalho ou vazia

    const headers = data[0];
    const rows = data.slice(1);

    const items = rows.map(row => {
      const item = {};
      headers.forEach((header, index) => {
        let value = row[index];
        
        // Tratamento de tipos especiais
        if (header === 'itemsJson') {
          try {
            item.items = typeof value === 'string' && value.trim() ? JSON.parse(value) : [];
          } catch (e) {
            item.items = [];
          }
        } else if (header === 'pinned') {
          item[header] = (value === true || value === 'TRUE' || value === 'true');
        } else if (['costPrice', 'sellPrice', 'stock', 'minStock', 'price', 'discount', 'total'].includes(header)) {
          item[header] = Number(value) || 0;
        } else if (value instanceof Date) {
          // Converter Date do Google Sheets para string YYYY-MM-DD
          item[header] = Utilities.formatDate(value, Session.getScriptTimeZone(), 'yyyy-MM-dd');
        } else {
          item[header] = value !== undefined && value !== null ? String(value) : '';
        }
      });
      return item;
    });

    if (key === 'users') {
      db.auth.users = items;
    } else {
      db[key] = items;
    }
  }

  return db;
}

/**
 * Escreve todos os dados do banco nas respectivas abas do Google Sheets
 */
function writeAllSheets(db) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  for (const key in SHEETS_CONFIG) {
    const config = SHEETS_CONFIG[key];
    let sheet = ss.getSheetByName(config.sheetName);
    
    if (!sheet) {
      sheet = ss.insertSheet(config.sheetName);
    }

    let items = [];
    if (key === 'users') {
      items = (db.auth && db.auth.users) ? db.auth.users : [];
    } else {
      items = db[key] || [];
    }

    // Limpar conteúdo antigo preservando cabeçalho
    sheet.clearContents();
    
    // Adicionar cabeçalho formatado
    sheet.appendRow(config.headers);
    const headerRange = sheet.getRange(1, 1, 1, config.headers.length);
    headerRange.setFontWeight('bold');
    headerRange.setFontColor('#ffffff');
    headerRange.setBackground(config.color);
    headerRange.setHorizontalAlignment('center');
    sheet.setFrozenRows(1);

    if (items.length === 0) continue;

    // Mapear linhas
    const rows = items.map(item => {
      return config.headers.map(header => {
        if (header === 'itemsJson') {
          return JSON.stringify(item.items || []);
        }
        const val = item[header];
        if (val === undefined || val === null) return '';
        return val;
      });
    });

    // Gravar em lote (batch) para alta performance
    if (rows.length > 0) {
      sheet.getRange(2, 1, rows.length, config.headers.length).setValues(rows);
    }

    // Autoajuste de colunas
    for (let col = 1; col <= config.headers.length; col++) {
      sheet.autoResizeColumn(col);
    }
  }
}

/**
 * Auxiliar para formatar respostas JSON com cabeçalhos CORS
 */
function createJsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
