/**
 * TLE INFORMÁTICA - SISTEMA ERP DE INFORMÁTICA & ASSISTÊNCIA TÉCNICA
 * Core Application Engine & Data Layer (Vanilla JS)
 */

// ==========================================
// 1. BANCO DE DADOS INICIAL (DEMO SEED DATA)
// ==========================================
const DEFAULT_DB = {
  auth: {
    currentUser: null,
    users: [
      { username: 'thallesfl2021@gmail.com', password: 'Brasil2026@', name: 'Thalles - Administrador', role: 'Administrador' },
      { username: 'admin', password: '123', name: 'Admin Demo', role: 'Administrador' },
      { username: 'tecnico', password: '123', name: 'Técnico Especialista', role: 'Técnico' }
    ]
  },
  clients: [
    {
      id: 'CLI-1001',
      name: 'Mariana Souza',
      type: 'PF',
      document: '321.654.987-11',
      phone: '(11) 97123-8899',
      email: 'mariana.souza@email.com',
      cep: '01310-100',
      address: 'Av. Paulista, 1200 - Apto 42',
      city: 'São Paulo/SP',
      equipments: 'MacBook Air M1 Cinza Espacial',
      notes: 'Cliente prefere atendimento no período da tarde.',
      createdAt: '2026-08-10'
    },
    {
      id: 'CLI-1002',
      name: 'Lucas Albuquerque',
      type: 'PF',
      document: '123.456.789-00',
      phone: '(11) 98765-4321',
      email: 'lucas.albuquerque@gmail.com',
      cep: '05422-000',
      address: 'Rua dos Pinheiros, 450',
      city: 'São Paulo/SP',
      equipments: 'Notebook Dell Inspiron 15 3000',
      notes: 'Usa para trabalho de programação.',
      createdAt: '2026-08-12'
    },
    {
      id: 'CLI-1003',
      name: 'Tech Solutions & Redes LTDA',
      type: 'PJ',
      document: '12.345.678/0001-90',
      phone: '(11) 99888-7766',
      email: 'contato@techsolutions.com.br',
      cep: '04538-133',
      address: 'Rua Funchal, 200 - Sala 801',
      city: 'São Paulo/SP',
      equipments: 'Servidor HP ProLiant DL380, 5 Desktops Core i5',
      notes: 'Contrato corporativo de suporte de rede e servidores.',
      createdAt: '2026-08-15'
    }
  ],
  products: [
    {
      id: 'PRD-101',
      name: 'SSD NVMe 1TB Kingston NV2 M.2 2280',
      category: 'Armazenamento',
      sku: 'SSD-NV1TB',
      costPrice: 210.00,
      sellPrice: 389.90,
      stock: 14,
      minStock: 5,
      supplier: 'AllTech Distribuidora'
    },
    {
      id: 'PRD-102',
      name: 'Memória RAM 16GB DDR4 3200MHz Corsair Vengeance',
      category: 'Hardware',
      sku: 'RAM-16DDR4',
      costPrice: 130.00,
      sellPrice: 249.00,
      stock: 12,
      minStock: 4,
      supplier: 'Distribuidora TI'
    },
    {
      id: 'PRD-103',
      name: 'Pasta Térmica Arctic MX-4 4g Alta Condutividade',
      category: 'Outros',
      sku: 'PST-MX4',
      costPrice: 28.00,
      sellPrice: 65.00,
      stock: 3,
      minStock: 6,
      supplier: 'Pichau B2B'
    },
    {
      id: 'PRD-104',
      name: 'Fonte ATX 650W 80 Plus Bronze Corsair CV650',
      category: 'Hardware',
      sku: 'FNT-650W',
      costPrice: 220.00,
      sellPrice: 420.00,
      stock: 7,
      minStock: 3,
      supplier: 'AllTech Distribuidora'
    },
    {
      id: 'PRD-105',
      name: 'Cabo HDMI 2.1 Ultra HD 8K 2m Blindado',
      category: 'Cabos',
      sku: 'CAB-HDMI8K',
      costPrice: 18.00,
      sellPrice: 49.00,
      stock: 22,
      minStock: 8,
      supplier: 'CabosBrasil'
    },
    {
      id: 'PRD-106',
      name: 'Teclado Mecânico Gamer RGB Switch Blue',
      category: 'Periféricos',
      sku: 'PER-TECRGB',
      costPrice: 95.00,
      sellPrice: 199.00,
      stock: 2,
      minStock: 5,
      supplier: 'Redragon Store'
    }
  ],
  services: [
    {
      id: 'SRV-201',
      name: 'Formatação Completa + Backup + Softwares Essenciais',
      category: 'Formatação',
      timeEstimate: '3 Horas',
      price: 150.00,
      warranty: '90 dias',
      description: 'Instalação limpa do Windows 11/10, pacote Office, otimização de inicialização e backup de arquivos pessoais.'
    },
    {
      id: 'SRV-202',
      name: 'Higienização Completa + Troca de Pasta Térmica Prata',
      category: 'Limpeza/Higienização',
      timeEstimate: '2 Horas',
      price: 120.00,
      warranty: '90 dias',
      description: 'Desmontagem técnica, desoxidação dos contatos, limpeza ultra-sônica de coolers e aplicação de pasta térmica Arctic MX-4.'
    },
    {
      id: 'SRV-203',
      name: 'Reparo Avançado em Placa-Mãe (Curto / Circuito de Carga)',
      category: 'Reparo em Placa',
      timeEstimate: '48 Horas',
      price: 380.00,
      warranty: '90 dias',
      description: 'Diagnóstico em bancada com microscópio térmico, injeção de tensão, substituição de mosfets e capacitores cerâmicos danificados.'
    },
    {
      id: 'SRV-204',
      name: 'Substituição de Tela / Display LED de Notebook',
      category: 'Manutenção',
      timeEstimate: '4 Horas',
      price: 180.00,
      warranty: '90 dias',
      description: 'Troca da tela quebrada ou com listras, testes de taxas de atualização e alinhamento de moldura.'
    },
    {
      id: 'SRV-205',
      name: 'Recuperação Forense de Dados em HD / SSD Corrompido',
      category: 'Backup/Recuperação',
      timeEstimate: '24 Horas',
      price: 350.00,
      warranty: '30 dias',
      description: 'Varredura profunda setor por setor em partições RAW ou formatadas acidentalmente.'
    }
  ],
  serviceOrders: [
    {
      id: 'OS-1001',
      clientId: 'CLI-1001',
      clientName: 'Mariana Souza',
      clientPhone: '(11) 97123-8899',
      equipmentType: 'Notebook / MacBook',
      brandModel: 'Apple MacBook Air M1',
      serialNumber: 'C02G871MQ6LR',
      accessories: 'Carregador USB-C Original e Capa de Proteção',
      reportedDefect: 'Equipamento parou de ligar subitamente após tempestade elétrica.',
      technicalDiagnostic: 'Identificado curto no PWM de carga primária de 19V e capacitor em fuga. Feita desoxidação e substituição do componente.',
      technician: 'Thalles',
      status: 'Pronto',
      items: [
        { type: 'service', id: 'SRV-203', name: 'Reparo Avançado em Placa-Mãe (Curto / Circuito de Carga)', qty: 1, price: 380.00 }
      ],
      discount: 30.00,
      total: 350.00,
      paymentStatus: 'Pago',
      paymentMethod: 'PIX',
      createdAt: '2026-08-20',
      promisedAt: '2026-08-23'
    },
    {
      id: 'OS-1002',
      clientId: 'CLI-1002',
      clientName: 'Lucas Albuquerque',
      clientPhone: '(11) 98765-4321',
      equipmentType: 'Notebook',
      brandModel: 'Dell Inspiron 15 3501',
      serialNumber: 'DL-88741-BR',
      accessories: 'Fonte de alimentação original Dell 65W',
      reportedDefect: 'Lentidão insuportável no boot e superaquecimento da ventoinha.',
      technicalDiagnostic: 'HD mecânico original com 100% de uso e pasta térmica ressecada. Recomendado upgrade para SSD NVMe 1TB e manutenção preventiva.',
      technician: 'Thalles',
      status: 'Em Andamento',
      items: [
        { type: 'service', id: 'SRV-201', name: 'Formatação Completa + Backup + Softwares Essenciais', qty: 1, price: 150.00 },
        { type: 'service', id: 'SRV-202', name: 'Higienização Completa + Troca de Pasta Térmica Prata', qty: 1, price: 120.00 },
        { type: 'product', id: 'PRD-101', name: 'SSD NVMe 1TB Kingston NV2 M.2 2280', qty: 1, price: 389.90 }
      ],
      discount: 19.90,
      total: 640.00,
      paymentStatus: 'Pendente',
      paymentMethod: 'Cartão de Crédito',
      createdAt: '2026-08-23',
      promisedAt: '2026-08-25'
    },
    {
      id: 'OS-1003',
      clientId: 'CLI-1003',
      clientName: 'Tech Solutions & Redes LTDA',
      clientPhone: '(11) 99888-7766',
      equipmentType: 'Servidor',
      brandModel: 'HP ProLiant DL380 Gen10',
      serialNumber: 'HP-SRV-9921',
      accessories: 'Cabos de força e trilhos de rack',
      reportedDefect: 'Reinicialização espontânea sob carga alta e alerta de memória no painel iLO.',
      technicalDiagnostic: 'Fonte 1 primária com oscilação na linha 12V. Necessário upgrade de 32GB RAM e nova fonte.',
      technician: 'Thalles',
      status: 'Aprovado',
      items: [
        { type: 'service', id: 'SRV-202', name: 'Higienização Completa + Troca de Pasta Térmica Prata', qty: 1, price: 120.00 },
        { type: 'product', id: 'PRD-104', name: 'Fonte ATX 650W 80 Plus Bronze Corsair CV650', qty: 1, price: 420.00 },
        { type: 'product', id: 'PRD-102', name: 'Memória RAM 16GB DDR4 3200MHz Corsair Vengeance', qty: 2, price: 249.00 }
      ],
      discount: 40.00,
      total: 998.00,
      paymentStatus: 'Pendente',
      paymentMethod: 'Boleto Bancário',
      createdAt: '2026-08-24',
      promisedAt: '2026-08-27'
    }
  ],
  notes: [
    {
      id: 'NOT-1',
      title: 'Procedimento: Configuração Mikrotik VPN & Firewall',
      category: 'Procedimentos',
      color: '#00d2ff',
      content: '1. Acessar WinBox pelo IP padrão 192.168.88.1\n2. Criar Bridge local e regras de FastTrack no Firewall Filter\n3. Liberar portas VPN WireGuard (UDP 51820)\n4. Sempre salvar backup da configuração (.rsc) antes de reiniciar.',
      pinned: true,
      createdAt: '2026-08-21'
    },
    {
      id: 'NOT-2',
      title: 'Peças Urgentes para Repor no Fornecedor',
      category: 'Urgente',
      color: '#ef4444',
      content: '• 5x Pastas Térmicas Arctic MX-4 4g\n• 3x Telas LED 15.6 Slim 30 Pinos Full HD\n• 4x SSDs 500GB SATA 3 Kingston\n• 2x Fontes 600W 80 Plus Bronze',
      pinned: true,
      createdAt: '2026-08-22'
    },
    {
      id: 'NOT-3',
      title: 'Checklist Padrão de Entrega O.S.',
      category: 'Lembretes',
      color: '#10b981',
      content: '✔ Testar todas as portas USB e saída HDMI\n✔ Verificar áudio, microfone e webcam\n✔ Testar funcionamento em bateria e carregador\n✔ Limpar carcaça e tela com álcool isopropílico 99%\n✔ Colocar lacre casca de ovo TLE Informática',
      pinned: false,
      createdAt: '2026-08-23'
    },
    {
      id: 'NOT-4',
      title: 'Ideias de Novos Serviços para TLE',
      category: 'Ideias',
      color: '#8b5cf6',
      content: '• Oferecer contrato de manutenção preventiva mensal para escritórios de contabilidade e advocacia.\n• Montagem personalizada de PCs Gamers com cable management profissional e iluminação RGB sincronizada.',
      pinned: false,
      createdAt: '2026-08-24'
    }
  ]
};

// ==========================================
// 2. GERENCIADOR DE ESTADO & STORAGE
// ==========================================
class DatabaseManager {
  static STORAGE_KEY = 'TLE_ERP_DATABASE_V1';

  static getDB() {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      if (!data) {
        this.saveDB(DEFAULT_DB, false);
        return JSON.parse(JSON.stringify(DEFAULT_DB));
      }
      const parsed = JSON.parse(data);
      // Garantir que as credenciais do Thalles estejam sempre atualizadas
      if (parsed.auth && Array.isArray(parsed.auth.users)) {
        const thallesUser = parsed.auth.users.find(u => u.username.toLowerCase() === 'thallesfl2021@gmail.com');
        if (!thallesUser) {
          parsed.auth.users.unshift({
            username: 'thallesfl2021@gmail.com',
            password: 'Brasil2026@',
            name: 'Thalles - Administrador',
            role: 'Administrador'
          });
          this.saveDB(parsed, false);
        } else if (thallesUser.password !== 'Brasil2026@') {
          thallesUser.password = 'Brasil2026@';
          this.saveDB(parsed, false);
        }
      }
      return parsed;
    } catch (e) {
      console.error('Erro ao ler do localStorage', e);
      return JSON.parse(JSON.stringify(DEFAULT_DB));
    }
  }

  static saveDB(db, triggerSync = true) {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(db));
      if (triggerSync && typeof GoogleSheetsManager !== 'undefined') {
        GoogleSheetsManager.autoSyncHook();
      }
    } catch (e) {
      console.error('Erro ao salvar no localStorage', e);
    }
  }

  static resetToDefault() {
    this.saveDB(DEFAULT_DB, true);
    return JSON.parse(JSON.stringify(DEFAULT_DB));
  }
}

// Instância Global do App
let DB = DatabaseManager.getDB();
let currentOSItems = []; // buffer temporário de peças/serviços ao cadastrar O.S.

// ==========================================
// 3. UTILITÁRIOS & HELPERS
// ==========================================
const Helpers = {
  formatCurrency(value) {
    const num = Number(value) || 0;
    return num.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  },

  formatDate(dateStr) {
    if (!dateStr) return '-';
    const parts = dateStr.split('-');
    if (parts.length === 3) {
      return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
    return dateStr;
  },

  getStatusBadge(status) {
    const map = {
      'Orçamento': 'badge-orcamento',
      'Aprovado': 'badge-aprovado',
      'Em Andamento': 'badge-andamento',
      'Aguardando Peças': 'badge-aguardando',
      'Pronto': 'badge-pronto',
      'Entregue': 'badge-entregue',
      'Cancelado': 'badge-cancelado'
    };
    const badgeClass = map[status] || 'badge-orcamento';
    return `<span class="badge ${badgeClass}"><i class="fas fa-circle" style="font-size: 6px;"></i> ${status}</span>`;
  },

  getStockBadge(stock, minStock) {
    const s = Number(stock) || 0;
    const m = Number(minStock) || 0;
    if (s <= 0) {
      return `<span class="stock-badge stock-empty"><i class="fas fa-times-circle"></i> Esgotado (${s})</span>`;
    } else if (s <= m) {
      return `<span class="stock-badge stock-low"><i class="fas fa-exclamation-triangle"></i> Baixo (${s}/${m})</span>`;
    }
    return `<span class="stock-badge stock-ok"><i class="fas fa-check-circle"></i> Normal (${s})</span>`;
  },

  showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    let icon = 'fa-info-circle';
    if (type === 'success') icon = 'fa-check-circle';
    if (type === 'error') icon = 'fa-exclamation-circle';
    if (type === 'warning') icon = 'fa-exclamation-triangle';

    toast.innerHTML = `
      <i class="fas ${icon}" style="font-size: 1.2rem; color: var(--primary-cyan);"></i>
      <div class="toast-msg">${message}</div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  },

  generateId(prefix, existingList) {
    const nextNum = 1000 + existingList.length + 1;
    return `${prefix}-${nextNum}`;
  }
};

// ==========================================
// 4. SISTEMA DE AUTENTICAÇÃO
// ==========================================
const Auth = {
  init() {
    const sessionUser = sessionStorage.getItem('TLE_AUTH_USER');
    if (sessionUser) {
      try {
        DB.auth.currentUser = JSON.parse(sessionUser);
        this.renderLoggedInState();
      } catch (e) {
        this.showLogin();
      }
    } else {
      this.showLogin();
    }

    // Formulário de Login
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('login-username').value.trim().toLowerCase();
        const password = document.getElementById('login-password').value.trim();

        const user = DB.auth.users.find(u => 
          (u.username.toLowerCase() === username || (u.email && u.email.toLowerCase() === username)) && 
          u.password === password
        );
        if (user) {
          DB.auth.currentUser = user;
          sessionStorage.setItem('TLE_AUTH_USER', JSON.stringify(user));
          this.renderLoggedInState();
          Helpers.showToast(`Bem-vindo, ${user.name}!`, 'success');
        } else {
          Helpers.showToast('E-mail ou senha incorretos. Verifique suas credenciais.', 'error');
        }
      });
    }

    // Botão de Logout
    const btnLogout = document.getElementById('btn-logout');
    if (btnLogout) {
      btnLogout.addEventListener('click', () => {
        this.logout();
      });
    }
  },

  showLogin() {
    const loginScreen = document.getElementById('login-screen');
    const appContainer = document.getElementById('app-container');
    if (loginScreen) loginScreen.style.display = 'flex';
    if (appContainer) appContainer.style.display = 'none';
  },

  renderLoggedInState() {
    const loginScreen = document.getElementById('login-screen');
    const appContainer = document.getElementById('app-container');
    if (loginScreen) loginScreen.style.display = 'none';
    if (appContainer) appContainer.style.display = 'flex';

    const userNameEl = document.getElementById('profile-user-name');
    const userRoleEl = document.getElementById('profile-user-role');
    const avatarEl = document.getElementById('profile-avatar');

    if (DB.auth.currentUser) {
      if (userNameEl) userNameEl.textContent = DB.auth.currentUser.name;
      if (userRoleEl) userRoleEl.textContent = DB.auth.currentUser.role;
      if (avatarEl) avatarEl.textContent = DB.auth.currentUser.name.charAt(0).toUpperCase();
    }

    // Inicializar visualizações
    Navigation.init();
    Dashboard.render();
    ClientsModule.render();
    ProductsModule.render();
    ServicesModule.render();
    ServiceOrdersModule.render();
    NotesModule.render();
  },

  logout() {
    DB.auth.currentUser = null;
    sessionStorage.removeItem('TLE_AUTH_USER');
    this.showLogin();
    Helpers.showToast('Sessão encerrada com sucesso.', 'info');
  }
};

// ==========================================
// 5. NAVEGAÇÃO ENTRE ABAS
// ==========================================
const Navigation = {
  currentTab: 'tab-dashboard',

  init() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const targetTab = item.getAttribute('data-tab');
        if (targetTab) {
          this.switchTab(targetTab);
        }
      });
    });

    // Mobile sidebar toggle
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    if (toggleBtn && sidebar) {
      toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
      });
    }

    // Fechar sidebar ao clicar fora em telas pequenas
    document.addEventListener('click', (e) => {
      if (window.innerWidth <= 992 && sidebar && sidebar.classList.contains('open')) {
        if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
          sidebar.classList.remove('open');
        }
      }
    });
  },

  switchTab(tabId) {
    this.currentTab = tabId;

    // Atualizar links ativos
    document.querySelectorAll('.nav-item').forEach(item => {
      if (item.getAttribute('data-tab') === tabId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Atualizar painéis
    document.querySelectorAll('.tab-pane').forEach(pane => {
      if (pane.id === tabId) {
        pane.classList.add('active');
      } else {
        pane.classList.remove('active');
      }
    });

    // Atualizar breadcrumb
    const breadcrumb = document.getElementById('page-breadcrumb-title');
    const titleMap = {
      'tab-dashboard': 'Visão Geral & Métricas',
      'tab-clientes': 'Gestão de Clientes',
      'tab-produtos': 'Produtos & Estoque',
      'tab-servicos': 'Catálogo de Serviços',
      'tab-ordens': 'Ordens de Serviço (O.S.)',
      'tab-anotacoes': 'Anotações & Procedimentos',
      'tab-configuracoes': 'Configurações & Banco de Dados'
    };
    if (breadcrumb) {
      breadcrumb.textContent = titleMap[tabId] || 'Módulo';
    }

    // Fechar mobile sidebar se aberta
    const sidebar = document.querySelector('.sidebar');
    if (sidebar && window.innerWidth <= 992) {
      sidebar.classList.remove('open');
    }

    // Re-renderizar módulo para manter dados sempre atualizados
    if (tabId === 'tab-dashboard') Dashboard.render();
    if (tabId === 'tab-clientes') ClientsModule.render();
    if (tabId === 'tab-produtos') ProductsModule.render();
    if (tabId === 'tab-servicos') ServicesModule.render();
    if (tabId === 'tab-ordens') ServiceOrdersModule.render();
    if (tabId === 'tab-anotacoes') NotesModule.render();
    if (tabId === 'tab-configuracoes') SettingsModule.render();
  }
};

// ==========================================
// 6. DASHBOARD & MÉTRICAS
// ==========================================
const Dashboard = {
  render() {
    // 1. Total Faturamento
    const totalRevenue = DB.serviceOrders.reduce((sum, os) => {
      return sum + (Number(os.total) || 0);
    }, 0);

    // 2. O.S. Ativas (Em Andamento, Aprovado, Aguardando Peças, Orçamento)
    const activeOSCount = DB.serviceOrders.filter(os => 
      ['Orçamento', 'Aprovado', 'Em Andamento', 'Aguardando Peças'].includes(os.status)
    ).length;

    // 3. Clientes Cadastrados
    const clientCount = DB.clients.length;

    // 4. Produtos com Estoque Baixo
    const lowStockCount = DB.products.filter(p => Number(p.stock) <= Number(p.minStock)).length;

    // Atualizar contadores no DOM
    const elRev = document.getElementById('stat-faturamento');
    const elOS = document.getElementById('stat-os-ativas');
    const elCli = document.getElementById('stat-clientes');
    const elStock = document.getElementById('stat-estoque-baixo');

    if (elRev) elRev.textContent = Helpers.formatCurrency(totalRevenue);
    if (elOS) elOS.textContent = activeOSCount;
    if (elCli) elCli.textContent = clientCount;
    if (elStock) elStock.textContent = lowStockCount;

    // Atualizar Badge de O.S. na sidebar
    const navBadgeOS = document.getElementById('nav-badge-os');
    if (navBadgeOS) navBadgeOS.textContent = activeOSCount;

    // Renderizar O.S. Recentes
    this.renderRecentOS();
    this.renderStockAlerts();
  },

  renderRecentOS() {
    const tbody = document.getElementById('dashboard-recent-os-tbody');
    if (!tbody) return;

    const recent = [...DB.serviceOrders].reverse().slice(0, 5);

    if (recent.length === 0) {
      tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-dim); padding: 24px;">Nenhuma Ordem de Serviço cadastrada ainda.</td></tr>`;
      return;
    }

    tbody.innerHTML = recent.map(os => `
      <tr>
        <td class="mono" style="font-weight: 700; color: var(--primary-cyan);">${os.id}</td>
        <td><strong>${os.clientName}</strong></td>
        <td>${os.equipmentType} - ${os.brandModel}</td>
        <td>${Helpers.getStatusBadge(os.status)}</td>
        <td style="font-weight: 700; color: var(--text-white);">${Helpers.formatCurrency(os.total)}</td>
        <td>
          <button class="btn-icon" title="Ver / Editar" onclick="ServiceOrdersModule.openEditModal('${os.id}')">
            <i class="fas fa-edit"></i>
          </button>
          <button class="btn-icon print" title="Imprimir O.S." onclick="ServiceOrdersModule.openPrintPreview('${os.id}')">
            <i class="fas fa-print"></i>
          </button>
        </td>
      </tr>
    `).join('');
  },

  renderStockAlerts() {
    const container = document.getElementById('dashboard-stock-alerts');
    if (!container) return;

    const lowStockItems = DB.products.filter(p => Number(p.stock) <= Number(p.minStock));

    if (lowStockItems.length === 0) {
      container.innerHTML = `<div style="color: var(--success); font-size: 0.9rem; padding: 12px; display: flex; align-items: center; gap: 8px;"><i class="fas fa-check-circle"></i> Todos os produtos estão com níveis de estoque saudáveis!</div>`;
      return;
    }

    container.innerHTML = lowStockItems.map(p => `
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 14px; background: rgba(245, 158, 11, 0.08); border: 1px solid rgba(245, 158, 11, 0.2); border-radius: var(--radius-md); margin-bottom: 8px;">
        <div>
          <strong style="color: var(--text-white); font-size: 0.9rem;">${p.name}</strong>
          <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 2px;">SKU: ${p.sku} | Fornecedor: ${p.supplier}</div>
        </div>
        <div style="text-align: right;">
          ${Helpers.getStockBadge(p.stock, p.minStock)}
        </div>
      </div>
    `).join('');
  }
};

// ==========================================
// 7. MÓDULO DE CLIENTES
// ==========================================
const ClientsModule = {
  render(filterText = '') {
    const tbody = document.getElementById('clients-table-tbody');
    if (!tbody) return;

    const query = filterText.toLowerCase().trim();
    const filtered = DB.clients.filter(c => 
      c.name.toLowerCase().includes(query) ||
      c.document.includes(query) ||
      c.phone.includes(query) ||
      c.email.toLowerCase().includes(query) ||
      c.city.toLowerCase().includes(query)
    );

    const countBadge = document.getElementById('clients-count-badge');
    if (countBadge) countBadge.textContent = `${filtered.length} Clientes`;

    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--text-dim); padding: 30px;">Nenhum cliente encontrado.</td></tr>`;
      return;
    }

    tbody.innerHTML = filtered.map(c => `
      <tr>
        <td class="mono" style="font-weight: 700; color: var(--primary-cyan);">${c.id}</td>
        <td>
          <div style="font-weight: 700; color: var(--text-white);">${c.name}</div>
          <div style="font-size: 0.78rem; color: var(--text-muted);">${c.type} - ${c.document}</div>
        </td>
        <td>
          <div>${c.phone}</div>
          <div style="font-size: 0.78rem; color: var(--text-dim);">${c.email || 'Sem e-mail'}</div>
        </td>
        <td>${c.city || '-'}</td>
        <td style="max-width: 200px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${c.equipments || ''}">
          ${c.equipments || '<span style="color: var(--text-dim);">Nenhum</span>'}
        </td>
        <td>${Helpers.formatDate(c.createdAt)}</td>
        <td>
          <div class="table-actions">
            <button class="btn-icon whatsapp" title="Enviar WhatsApp" onclick="ClientsModule.openWhatsApp('${c.phone}', '${c.name}')">
              <i class="fab fa-whatsapp"></i>
            </button>
            <button class="btn-icon" title="Editar Cliente" onclick="ClientsModule.openEditModal('${c.id}')">
              <i class="fas fa-edit"></i>
            </button>
            <button class="btn-icon delete" title="Excluir Cliente" onclick="ClientsModule.deleteClient('${c.id}')">
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
        </td>
      </tr>
    `).join('');
  },

  openAddModal() {
    document.getElementById('client-form').reset();
    document.getElementById('client-id').value = '';
    document.getElementById('client-modal-title').innerHTML = `<i class="fas fa-user-plus" style="color: var(--primary-cyan);"></i> Novo Cliente`;
    Modal.open('client-modal');
  },

  openEditModal(id) {
    const client = DB.clients.find(c => c.id === id);
    if (!client) return;

    document.getElementById('client-id').value = client.id;
    document.getElementById('client-name').value = client.name;
    document.getElementById('client-type').value = client.type;
    document.getElementById('client-doc').value = client.document;
    document.getElementById('client-phone').value = client.phone;
    document.getElementById('client-email').value = client.email || '';
    document.getElementById('client-cep').value = client.cep || '';
    document.getElementById('client-address').value = client.address || '';
    document.getElementById('client-city').value = client.city || '';
    document.getElementById('client-equipments').value = client.equipments || '';
    document.getElementById('client-notes').value = client.notes || '';

    document.getElementById('client-modal-title').innerHTML = `<i class="fas fa-user-edit" style="color: var(--primary-cyan);"></i> Editar Cliente (${client.id})`;
    Modal.open('client-modal');
  },

  save(e) {
    e.preventDefault();
    const id = document.getElementById('client-id').value;
    const name = document.getElementById('client-name').value.trim();
    const type = document.getElementById('client-type').value;
    const documentVal = document.getElementById('client-doc').value.trim();
    const phone = document.getElementById('client-phone').value.trim();
    const email = document.getElementById('client-email').value.trim();
    const cep = document.getElementById('client-cep').value.trim();
    const address = document.getElementById('client-address').value.trim();
    const city = document.getElementById('client-city').value.trim();
    const equipments = document.getElementById('client-equipments').value.trim();
    const notes = document.getElementById('client-notes').value.trim();

    if (!name || !phone) {
      Helpers.showToast('Por favor, informe pelo menos o Nome e o WhatsApp do cliente.', 'warning');
      return;
    }

    if (id) {
      // Edição
      const index = DB.clients.findIndex(c => c.id === id);
      if (index !== -1) {
        DB.clients[index] = {
          ...DB.clients[index],
          name, type, document: documentVal, phone, email, cep, address, city, equipments, notes
        };
        Helpers.showToast(`Cliente ${name} atualizado com sucesso!`, 'success');
      }
    } else {
      // Novo
      const newId = Helpers.generateId('CLI', DB.clients);
      const newClient = {
        id: newId,
        name, type, document: documentVal, phone, email, cep, address, city, equipments, notes,
        createdAt: new Date().toISOString().split('T')[0]
      };
      DB.clients.unshift(newClient);
      Helpers.showToast(`Cliente ${name} cadastrado com sucesso!`, 'success');
    }

    DatabaseManager.saveDB(DB);
    Modal.close('client-modal');
    this.render();
    Dashboard.render();
  },

  deleteClient(id) {
    const client = DB.clients.find(c => c.id === id);
    if (!client) return;

    if (confirm(`Tem certeza que deseja excluir o cliente "${client.name}"?`)) {
      DB.clients = DB.clients.filter(c => c.id !== id);
      DatabaseManager.saveDB(DB);
      this.render();
      Dashboard.render();
      Helpers.showToast(`Cliente ${client.name} excluído.`, 'info');
    }
  },

  openWhatsApp(phone, name) {
    const cleanPhone = phone.replace(/\D/g, '');
    const fullPhone = cleanPhone.length <= 11 ? `55${cleanPhone}` : cleanPhone;
    const msg = encodeURIComponent(`Olá ${name}, tudo bem? Aqui é da TLE INFORMÁTICA! Entramos em contato referente aos seus equipamentos.`);
    window.open(`https://api.whatsapp.com/send?phone=${fullPhone}&text=${msg}`, '_blank');
  }
};

// ==========================================
// 8. MÓDULO DE PRODUTOS & ESTOQUE
// ==========================================
const ProductsModule = {
  render(filterText = '', categoryFilter = '') {
    const tbody = document.getElementById('products-table-tbody');
    if (!tbody) return;

    const query = filterText.toLowerCase().trim();
    const filtered = DB.products.filter(p => {
      const matchText = p.name.toLowerCase().includes(query) || p.sku.toLowerCase().includes(query) || p.supplier.toLowerCase().includes(query);
      const matchCat = categoryFilter === '' || p.category === categoryFilter;
      return matchText && matchCat;
    });

    const countBadge = document.getElementById('products-count-badge');
    if (countBadge) countBadge.textContent = `${filtered.length} Itens`;

    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="8" style="text-align: center; color: var(--text-dim); padding: 30px;">Nenhum produto cadastrado.</td></tr>`;
      return;
    }

    tbody.innerHTML = filtered.map(p => {
      const margin = p.costPrice > 0 ? (((p.sellPrice - p.costPrice) / p.costPrice) * 100).toFixed(0) : 0;
      return `
        <tr>
          <td class="mono" style="font-weight: 700; color: var(--primary-cyan);">${p.sku}</td>
          <td>
            <div style="font-weight: 700; color: var(--text-white);">${p.name}</div>
            <div style="font-size: 0.78rem; color: var(--text-muted);">${p.supplier}</div>
          </td>
          <td><span class="badge" style="background: rgba(56, 189, 248, 0.1); color: var(--primary-cyan);">${p.category}</span></td>
          <td class="mono" style="color: var(--text-muted);">${Helpers.formatCurrency(p.costPrice)}</td>
          <td class="mono" style="font-weight: 700; color: var(--text-white);">${Helpers.formatCurrency(p.sellPrice)}</td>
          <td>
            <span style="font-size: 0.8rem; font-weight: 700; color: var(--success);">+${margin}%</span>
          </td>
          <td>
            <div style="display: flex; align-items: center; gap: 8px;">
              ${Helpers.getStockBadge(p.stock, p.minStock)}
              <div style="display: flex; gap: 2px;">
                <button class="btn-icon" style="width: 22px; height: 22px; font-size: 0.7rem;" title="Diminuir Estoque" onclick="ProductsModule.quickAdjustStock('${p.id}', -1)">-</button>
                <button class="btn-icon" style="width: 22px; height: 22px; font-size: 0.7rem;" title="Aumentar Estoque" onclick="ProductsModule.quickAdjustStock('${p.id}', 1)">+</button>
              </div>
            </div>
          </td>
          <td>
            <div class="table-actions">
              <button class="btn-icon" title="Editar Produto" onclick="ProductsModule.openEditModal('${p.id}')">
                <i class="fas fa-edit"></i>
              </button>
              <button class="btn-icon delete" title="Excluir Produto" onclick="ProductsModule.deleteProduct('${p.id}')">
                <i class="fas fa-trash-alt"></i>
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join('');
  },

  quickAdjustStock(id, delta) {
    const product = DB.products.find(p => p.id === id);
    if (!product) return;

    product.stock = Math.max(0, Number(product.stock) + delta);
    DatabaseManager.saveDB(DB);
    this.render();
    Dashboard.render();
    Helpers.showToast(`Estoque de "${product.name}" ajustado para ${product.stock}.`, 'info');
  },

  openAddModal() {
    document.getElementById('product-form').reset();
    document.getElementById('product-id').value = '';
    document.getElementById('product-modal-title').innerHTML = `<i class="fas fa-box-open" style="color: var(--primary-cyan);"></i> Novo Produto`;
    Modal.open('product-modal');
  },

  openEditModal(id) {
    const product = DB.products.find(p => p.id === id);
    if (!product) return;

    document.getElementById('product-id').value = product.id;
    document.getElementById('product-name').value = product.name;
    document.getElementById('product-category').value = product.category;
    document.getElementById('product-sku').value = product.sku;
    document.getElementById('product-cost').value = product.costPrice;
    document.getElementById('product-sell').value = product.sellPrice;
    document.getElementById('product-stock').value = product.stock;
    document.getElementById('product-min-stock').value = product.minStock;
    document.getElementById('product-supplier').value = product.supplier || '';

    document.getElementById('product-modal-title').innerHTML = `<i class="fas fa-edit" style="color: var(--primary-cyan);"></i> Editar Produto (${product.sku})`;
    Modal.open('product-modal');
  },

  save(e) {
    e.preventDefault();
    const id = document.getElementById('product-id').value;
    const name = document.getElementById('product-name').value.trim();
    const category = document.getElementById('product-category').value;
    const sku = document.getElementById('product-sku').value.trim();
    const costPrice = Number(document.getElementById('product-cost').value) || 0;
    const sellPrice = Number(document.getElementById('product-sell').value) || 0;
    const stock = Number(document.getElementById('product-stock').value) || 0;
    const minStock = Number(document.getElementById('product-min-stock').value) || 0;
    const supplier = document.getElementById('product-supplier').value.trim();

    if (!name || !sku) {
      Helpers.showToast('Informe o nome do produto e o código SKU.', 'warning');
      return;
    }

    if (id) {
      const index = DB.products.findIndex(p => p.id === id);
      if (index !== -1) {
        DB.products[index] = {
          ...DB.products[index],
          name, category, sku, costPrice, sellPrice, stock, minStock, supplier
        };
        Helpers.showToast(`Produto ${name} atualizado!`, 'success');
      }
    } else {
      const newId = Helpers.generateId('PRD', DB.products);
      const newProduct = {
        id: newId,
        name, category, sku, costPrice, sellPrice, stock, minStock, supplier
      };
      DB.products.unshift(newProduct);
      Helpers.showToast(`Produto ${name} adicionado ao estoque!`, 'success');
    }

    DatabaseManager.saveDB(DB);
    Modal.close('product-modal');
    this.render();
    Dashboard.render();
  },

  deleteProduct(id) {
    const product = DB.products.find(p => p.id === id);
    if (!product) return;

    if (confirm(`Tem certeza que deseja excluir o produto "${product.name}"?`)) {
      DB.products = DB.products.filter(p => p.id !== id);
      DatabaseManager.saveDB(DB);
      this.render();
      Dashboard.render();
      Helpers.showToast(`Produto ${product.name} excluído.`, 'info');
    }
  }
};

// ==========================================
// 9. MÓDULO DE SERVIÇOS
// ==========================================
const ServicesModule = {
  render(filterText = '', categoryFilter = '') {
    const tbody = document.getElementById('services-table-tbody');
    if (!tbody) return;

    const query = filterText.toLowerCase().trim();
    const filtered = DB.services.filter(s => {
      const matchText = s.name.toLowerCase().includes(query) || s.description.toLowerCase().includes(query);
      const matchCat = categoryFilter === '' || s.category === categoryFilter;
      return matchText && matchCat;
    });

    const countBadge = document.getElementById('services-count-badge');
    if (countBadge) countBadge.textContent = `${filtered.length} Serviços`;

    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-dim); padding: 30px;">Nenhum serviço cadastrado.</td></tr>`;
      return;
    }

    tbody.innerHTML = filtered.map(s => `
      <tr>
        <td class="mono" style="font-weight: 700; color: var(--primary-cyan);">${s.id}</td>
        <td>
          <div style="font-weight: 700; color: var(--text-white);">${s.name}</div>
          <div style="font-size: 0.78rem; color: var(--text-muted); max-width: 320px;">${s.description}</div>
        </td>
        <td><span class="badge" style="background: rgba(14, 165, 233, 0.12); color: var(--info);">${s.category}</span></td>
        <td><i class="far fa-clock" style="color: var(--text-dim);"></i> ${s.timeEstimate}</td>
        <td style="font-size: 0.82rem; color: var(--success); font-weight: 600;">
          <i class="fas fa-shield-alt"></i> ${s.warranty}
        </td>
        <td class="mono" style="font-weight: 800; font-size: 1rem; color: var(--primary-cyan);">${Helpers.formatCurrency(s.price)}</td>
        <td>
          <div class="table-actions">
            <button class="btn-icon" title="Editar Serviço" onclick="ServicesModule.openEditModal('${s.id}')">
              <i class="fas fa-edit"></i>
            </button>
            <button class="btn-icon delete" title="Excluir Serviço" onclick="ServicesModule.deleteService('${s.id}')">
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
        </td>
      </tr>
    `).join('');
  },

  openAddModal() {
    document.getElementById('service-form').reset();
    document.getElementById('service-id').value = '';
    document.getElementById('service-modal-title').innerHTML = `<i class="fas fa-tools" style="color: var(--primary-cyan);"></i> Novo Serviço de T.I.`;
    Modal.open('service-modal');
  },

  openEditModal(id) {
    const srv = DB.services.find(s => s.id === id);
    if (!srv) return;

    document.getElementById('service-id').value = srv.id;
    document.getElementById('service-name').value = srv.name;
    document.getElementById('service-category').value = srv.category;
    document.getElementById('service-time').value = srv.timeEstimate;
    document.getElementById('service-price').value = srv.price;
    document.getElementById('service-warranty').value = srv.warranty;
    document.getElementById('service-desc').value = srv.description;

    document.getElementById('service-modal-title').innerHTML = `<i class="fas fa-edit" style="color: var(--primary-cyan);"></i> Editar Serviço (${srv.id})`;
    Modal.open('service-modal');
  },

  save(e) {
    e.preventDefault();
    const id = document.getElementById('service-id').value;
    const name = document.getElementById('service-name').value.trim();
    const category = document.getElementById('service-category').value;
    const timeEstimate = document.getElementById('service-time').value.trim();
    const price = Number(document.getElementById('service-price').value) || 0;
    const warranty = document.getElementById('service-warranty').value.trim();
    const description = document.getElementById('service-desc').value.trim();

    if (!name || price <= 0) {
      Helpers.showToast('Informe o nome do serviço e o valor cobrado.', 'warning');
      return;
    }

    if (id) {
      const index = DB.services.findIndex(s => s.id === id);
      if (index !== -1) {
        DB.services[index] = {
          ...DB.services[index],
          name, category, timeEstimate, price, warranty, description
        };
        Helpers.showToast(`Serviço ${name} atualizado!`, 'success');
      }
    } else {
      const newId = Helpers.generateId('SRV', DB.services);
      const newService = {
        id: newId,
        name, category, timeEstimate, price, warranty, description
      };
      DB.services.unshift(newService);
      Helpers.showToast(`Serviço ${name} adicionado ao catálogo!`, 'success');
    }

    DatabaseManager.saveDB(DB);
    Modal.close('service-modal');
    this.render();
  },

  deleteService(id) {
    const srv = DB.services.find(s => s.id === id);
    if (!srv) return;

    if (confirm(`Tem certeza que deseja excluir o serviço "${srv.name}"?`)) {
      DB.services = DB.services.filter(s => s.id !== id);
      DatabaseManager.saveDB(DB);
      this.render();
      Helpers.showToast(`Serviço ${srv.name} excluído.`, 'info');
    }
  }
};

// ==========================================
// 10. MÓDULO DE ORDENS DE SERVIÇO (O.S.)
// ==========================================
const ServiceOrdersModule = {
  render(filterText = '', statusFilter = '') {
    const tbody = document.getElementById('orders-table-tbody');
    if (!tbody) return;

    const query = filterText.toLowerCase().trim();
    const filtered = DB.serviceOrders.filter(os => {
      const matchText = os.id.toLowerCase().includes(query) ||
                        os.clientName.toLowerCase().includes(query) ||
                        os.equipmentType.toLowerCase().includes(query) ||
                        os.brandModel.toLowerCase().includes(query) ||
                        os.serialNumber.toLowerCase().includes(query);
      const matchStatus = statusFilter === '' || os.status === statusFilter;
      return matchText && matchStatus;
    });

    const countBadge = document.getElementById('orders-count-badge');
    if (countBadge) countBadge.textContent = `${filtered.length} Ordens`;

    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="8" style="text-align: center; color: var(--text-dim); padding: 30px;">Nenhuma Ordem de Serviço encontrada.</td></tr>`;
      return;
    }

    tbody.innerHTML = filtered.map(os => `
      <tr>
        <td class="mono" style="font-weight: 800; color: var(--primary-cyan); font-size: 0.95rem;">${os.id}</td>
        <td>
          <div style="font-weight: 700; color: var(--text-white);">${os.clientName}</div>
          <div style="font-size: 0.78rem; color: var(--text-muted);">${os.clientPhone}</div>
        </td>
        <td>
          <div style="color: var(--text-white); font-weight: 600;">${os.equipmentType}</div>
          <div style="font-size: 0.78rem; color: var(--text-muted);">${os.brandModel}</div>
        </td>
        <td>${Helpers.getStatusBadge(os.status)}</td>
        <td class="mono" style="font-weight: 800; color: var(--text-white); font-size: 1rem;">${Helpers.formatCurrency(os.total)}</td>
        <td>
          <div>${Helpers.formatDate(os.createdAt)}</div>
          <div style="font-size: 0.75rem; color: var(--text-dim);">Entrega: ${Helpers.formatDate(os.promisedAt)}</div>
        </td>
        <td>
          <div class="table-actions">
            <button class="btn-icon whatsapp" title="Notificar Cliente via WhatsApp" onclick="ServiceOrdersModule.sendOSWhatsApp('${os.id}')">
              <i class="fab fa-whatsapp"></i>
            </button>
            <button class="btn-icon print" title="Imprimir O.S. (A4 / Comprovante)" onclick="ServiceOrdersModule.openPrintPreview('${os.id}')">
              <i class="fas fa-print"></i>
            </button>
            <button class="btn-icon" title="Editar O.S." onclick="ServiceOrdersModule.openEditModal('${os.id}')">
              <i class="fas fa-edit"></i>
            </button>
            <button class="btn-icon delete" title="Excluir O.S." onclick="ServiceOrdersModule.deleteOS('${os.id}')">
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
        </td>
      </tr>
    `).join('');
  },

  populateClientDropdown(selectedClientId = '') {
    const select = document.getElementById('os-client-select');
    if (!select) return;

    select.innerHTML = `<option value="">-- Selecione o Cliente --</option>` +
      DB.clients.map(c => `
        <option value="${c.id}" ${c.id === selectedClientId ? 'selected' : ''}>
          ${c.name} (${c.phone})
        </option>
      `).join('');
  },

  populateItemSelects() {
    const srvSelect = document.getElementById('os-add-service-select');
    const prdSelect = document.getElementById('os-add-product-select');

    if (srvSelect) {
      srvSelect.innerHTML = `<option value="">+ Selecionar Serviço do Catálogo</option>` +
        DB.services.map(s => `<option value="${s.id}">${s.name} - ${Helpers.formatCurrency(s.price)}</option>`).join('');
    }

    if (prdSelect) {
      prdSelect.innerHTML = `<option value="">+ Selecionar Peça / Produto</option>` +
        DB.products.map(p => `<option value="${p.id}">${p.name} (Estoque: ${p.stock}) - ${Helpers.formatCurrency(p.sellPrice)}</option>`).join('');
    }
  },

  openAddModal() {
    currentOSItems = [];
    document.getElementById('os-form').reset();
    document.getElementById('os-id').value = '';
    document.getElementById('os-modal-title').innerHTML = `<i class="fas fa-file-invoice" style="color: var(--primary-cyan);"></i> Nova Ordem de Serviço`;
    
    this.populateClientDropdown();
    this.populateItemSelects();
    this.renderOSItemsList();
    this.recalcTotals();

    // Data de hoje e entrega estimada para daqui a 3 dias
    const today = new Date().toISOString().split('T')[0];
    const promised = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    document.getElementById('os-created-at').value = today;
    document.getElementById('os-promised-at').value = promised;
    document.getElementById('os-technician').value = (DB.auth.currentUser && DB.auth.currentUser.name) || 'Técnico TLE';

    Modal.open('os-modal');
  },

  openEditModal(id) {
    const os = DB.serviceOrders.find(o => o.id === id);
    if (!os) return;

    document.getElementById('os-id').value = os.id;
    this.populateClientDropdown(os.clientId);
    this.populateItemSelects();

    document.getElementById('os-equipment-type').value = os.equipmentType;
    document.getElementById('os-brand-model').value = os.brandModel;
    document.getElementById('os-serial-number').value = os.serialNumber || '';
    document.getElementById('os-accessories').value = os.accessories || '';
    document.getElementById('os-defect').value = os.reportedDefect || '';
    document.getElementById('os-diagnostic').value = os.technicalDiagnostic || '';
    document.getElementById('os-status').value = os.status;
    document.getElementById('os-technician').value = os.technician || 'Thalles';
    document.getElementById('os-payment-status').value = os.paymentStatus || 'Pendente';
    document.getElementById('os-payment-method').value = os.paymentMethod || 'PIX';
    document.getElementById('os-discount').value = os.discount || 0;
    document.getElementById('os-created-at').value = os.createdAt;
    document.getElementById('os-promised-at').value = os.promisedAt || '';

    currentOSItems = JSON.parse(JSON.stringify(os.items || []));
    this.renderOSItemsList();
    this.recalcTotals();

    document.getElementById('os-modal-title').innerHTML = `<i class="fas fa-edit" style="color: var(--primary-cyan);"></i> Editar Ordem de Serviço (${os.id})`;
    Modal.open('os-modal');
  },

  addItem(type) {
    if (type === 'service') {
      const select = document.getElementById('os-add-service-select');
      const srvId = select.value;
      if (!srvId) return;

      const srv = DB.services.find(s => s.id === srvId);
      if (srv) {
        currentOSItems.push({
          type: 'service',
          id: srv.id,
          name: srv.name,
          qty: 1,
          price: srv.price
        });
        select.value = '';
      }
    } else if (type === 'product') {
      const select = document.getElementById('os-add-product-select');
      const prdId = select.value;
      if (!prdId) return;

      const prd = DB.products.find(p => p.id === prdId);
      if (prd) {
        if (prd.stock <= 0) {
          Helpers.showToast(`Atenção: O produto ${prd.name} está sem estoque no momento!`, 'warning');
        }
        currentOSItems.push({
          type: 'product',
          id: prd.id,
          name: prd.name,
          qty: 1,
          price: prd.sellPrice
        });
        select.value = '';
      }
    }

    this.renderOSItemsList();
    this.recalcTotals();
  },

  removeItem(index) {
    currentOSItems.splice(index, 1);
    this.renderOSItemsList();
    this.recalcTotals();
  },

  renderOSItemsList() {
    const list = document.getElementById('os-items-container');
    if (!list) return;

    if (currentOSItems.length === 0) {
      list.innerHTML = `<div style="text-align: center; color: var(--text-dim); padding: 14px; font-size: 0.85rem;">Nenhum serviço ou peça adicionada a esta O.S. ainda.</div>`;
      return;
    }

    list.innerHTML = currentOSItems.map((item, idx) => `
      <div class="os-item-row">
        <span class="badge ${item.type === 'service' ? 'badge-aprovado' : 'badge-andamento'}">
          ${item.type === 'service' ? 'SERVIÇO' : 'PEÇA'}
        </span>
        <div style="flex: 1; font-size: 0.88rem; font-weight: 600; color: var(--text-white);">
          ${item.name}
        </div>
        <div style="font-size: 0.85rem; color: var(--text-muted);">Qtd: ${item.qty}</div>
        <div class="mono" style="font-weight: 700; color: var(--primary-cyan); font-size: 0.9rem;">
          ${Helpers.formatCurrency(item.price * item.qty)}
        </div>
        <button type="button" class="btn-icon delete" style="width: 26px; height: 26px;" onclick="ServiceOrdersModule.removeItem(${idx})">
          <i class="fas fa-times"></i>
        </button>
      </div>
    `).join('');
  },

  recalcTotals() {
    let subtotal = 0;
    currentOSItems.forEach(item => {
      subtotal += (Number(item.price) || 0) * (Number(item.qty) || 1);
    });

    const discount = Number(document.getElementById('os-discount').value) || 0;
    const grandTotal = Math.max(0, subtotal - discount);

    const subtotalEl = document.getElementById('os-subtotal-display');
    const totalEl = document.getElementById('os-total-display');

    if (subtotalEl) subtotalEl.textContent = Helpers.formatCurrency(subtotal);
    if (totalEl) totalEl.textContent = Helpers.formatCurrency(grandTotal);
  },

  save(e) {
    e.preventDefault();
    const id = document.getElementById('os-id').value;
    const clientId = document.getElementById('os-client-select').value;
    const equipmentType = document.getElementById('os-equipment-type').value;
    const brandModel = document.getElementById('os-brand-model').value.trim();
    const serialNumber = document.getElementById('os-serial-number').value.trim();
    const accessories = document.getElementById('os-accessories').value.trim();
    const reportedDefect = document.getElementById('os-defect').value.trim();
    const technicalDiagnostic = document.getElementById('os-diagnostic').value.trim();
    const status = document.getElementById('os-status').value;
    const technician = document.getElementById('os-technician').value.trim();
    const paymentStatus = document.getElementById('os-payment-status').value;
    const paymentMethod = document.getElementById('os-payment-method').value;
    const discount = Number(document.getElementById('os-discount').value) || 0;
    const createdAt = document.getElementById('os-created-at').value;
    const promisedAt = document.getElementById('os-promised-at').value;

    if (!clientId) {
      Helpers.showToast('Por favor, selecione um cliente para a O.S.', 'warning');
      return;
    }
    if (!equipmentType || !brandModel) {
      Helpers.showToast('Informe o tipo e o modelo do equipamento.', 'warning');
      return;
    }

    const client = DB.clients.find(c => c.id === clientId);
    const clientName = client ? client.name : 'Cliente Avulso';
    const clientPhone = client ? client.phone : '';

    let subtotal = 0;
    currentOSItems.forEach(item => {
      subtotal += (Number(item.price) || 0) * (Number(item.qty) || 1);
    });
    const total = Math.max(0, subtotal - discount);

    if (id) {
      const index = DB.serviceOrders.findIndex(o => o.id === id);
      if (index !== -1) {
        DB.serviceOrders[index] = {
          ...DB.serviceOrders[index],
          clientId, clientName, clientPhone, equipmentType, brandModel, serialNumber,
          accessories, reportedDefect, technicalDiagnostic, status, technician,
          items: currentOSItems, discount, total, paymentStatus, paymentMethod,
          promisedAt
        };
        Helpers.showToast(`Ordem de Serviço ${id} atualizada com sucesso!`, 'success');
      }
    } else {
      const newId = Helpers.generateId('OS', DB.serviceOrders);
      const newOS = {
        id: newId,
        clientId, clientName, clientPhone, equipmentType, brandModel, serialNumber,
        accessories, reportedDefect, technicalDiagnostic, status, technician,
        items: currentOSItems, discount, total, paymentStatus, paymentMethod,
        createdAt: createdAt || new Date().toISOString().split('T')[0],
        promisedAt
      };
      DB.serviceOrders.unshift(newOS);

      // Baixa de estoque automática se itens de produto foram adicionados
      currentOSItems.forEach(item => {
        if (item.type === 'product') {
          const prod = DB.products.find(p => p.id === item.id);
          if (prod) {
            prod.stock = Math.max(0, prod.stock - item.qty);
          }
        }
      });

      Helpers.showToast(`Ordem de Serviço ${newId} criada com sucesso!`, 'success');
    }

    DatabaseManager.saveDB(DB);
    Modal.close('os-modal');
    this.render();
    Dashboard.render();
    ProductsModule.render();
  },

  deleteOS(id) {
    const os = DB.serviceOrders.find(o => o.id === id);
    if (!os) return;

    if (confirm(`Tem certeza que deseja excluir a Ordem de Serviço ${id} (${os.clientName})?`)) {
      DB.serviceOrders = DB.serviceOrders.filter(o => o.id !== id);
      DatabaseManager.saveDB(DB);
      this.render();
      Dashboard.render();
      Helpers.showToast(`O.S. ${id} excluída.`, 'info');
    }
  },

  sendOSWhatsApp(id) {
    const os = DB.serviceOrders.find(o => o.id === id);
    if (!os) return;

    const cleanPhone = os.clientPhone.replace(/\D/g, '');
    const fullPhone = cleanPhone.length <= 11 ? `55${cleanPhone}` : cleanPhone;

    let msg = `*TLE INFORMÁTICA - ATUALIZAÇÃO DA ORDEM DE SERVIÇO*\n\n`;
    msg += `Olá, *${os.clientName}*!\n`;
    msg += `Atualização sobre a sua *${os.id}*:\n\n`;
    msg += `💻 *Equipamento:* ${os.equipmentType} ${os.brandModel}\n`;
    msg += `📌 *Status Atual:* ${os.status.toUpperCase()}\n`;
    if (os.technicalDiagnostic) {
      msg += `🔍 *Laudo Técnico:* ${os.technicalDiagnostic}\n`;
    }
    msg += `💰 *Valor Total:* ${Helpers.formatCurrency(os.total)} (${os.paymentStatus})\n`;
    msg += `📅 *Previsão de Entrega:* ${Helpers.formatDate(os.promisedAt)}\n\n`;
    msg += `Qualquer dúvida estamos à disposição!\n_TLE Informática - Soluções & Reparos Especializados_`;

    window.open(`https://api.whatsapp.com/send?phone=${fullPhone}&text=${encodeURIComponent(msg)}`, '_blank');
  },

  openPrintPreview(id) {
    const os = DB.serviceOrders.find(o => o.id === id);
    if (!os) return;

    const client = DB.clients.find(c => c.id === os.clientId) || {
      name: os.clientName, phone: os.clientPhone, document: 'N/A', address: 'Endereço não informado'
    };

    const container = document.getElementById('print-preview-content');
    if (!container) return;

    const itemsRows = (os.items || []).map(item => `
      <tr>
        <td><strong>${item.name}</strong> <span style="font-size:10px; color:#64748b;">(${item.type === 'service' ? 'Serviço' : 'Peça'})</span></td>
        <td style="text-align: center;">${item.qty}</td>
        <td style="text-align: right;">${Helpers.formatCurrency(item.price)}</td>
        <td style="text-align: right; font-weight: 700;">${Helpers.formatCurrency(item.price * item.qty)}</td>
      </tr>
    `).join('');

    container.innerHTML = `
      <div class="print-sheet">
        <!-- Cabeçalho TLE INFORMÁTICA -->
        <div class="print-header">
          <div class="print-brand">
            <img src="./assets/logo.jpg" alt="TLE INFORMÁTICA Logo" class="print-logo" onerror="this.style.display='none'">
            <div>
              <div class="print-company-title">TLE INFORMÁTICA</div>
              <div class="print-company-sub">Assistência Técnica Especializada em Informática, Redes e Eletrônica</div>
              <div class="print-company-sub">WhatsApp: (11) 98765-4321 | E-mail: contato@tleinformatica.com.br</div>
            </div>
          </div>
          <div class="print-os-number-box">
            <div style="font-size: 11px; text-transform: uppercase; font-weight: 700; color: #475569;">ORDEM DE SERVIÇO</div>
            <div class="print-os-number">${os.id}</div>
            <div style="font-size: 10px; color: #64748b; margin-top: 2px;">Data: ${Helpers.formatDate(os.createdAt)}</div>
          </div>
        </div>

        <!-- Dados do Cliente -->
        <div class="print-section-title">1. DADOS DO CLIENTE</div>
        <div class="print-grid">
          <div class="print-field"><strong>Nome / Razão:</strong> ${client.name}</div>
          <div class="print-field"><strong>CPF / CNPJ:</strong> ${client.document || '-'}</div>
          <div class="print-field"><strong>Telefone / WhatsApp:</strong> ${client.phone}</div>
          <div class="print-field"><strong>Endereço:</strong> ${client.address || '-'} - ${client.city || ''}</div>
        </div>

        <!-- Dados do Equipamento -->
        <div class="print-section-title">2. DADOS DO EQUIPAMENTO & DEFEITO</div>
        <div class="print-grid">
          <div class="print-field"><strong>Tipo de Equipamento:</strong> ${os.equipmentType}</div>
          <div class="print-field"><strong>Marca / Modelo:</strong> ${os.brandModel}</div>
          <div class="print-field"><strong>Número de Série:</strong> ${os.serialNumber || 'Não informado'}</div>
          <div class="print-field"><strong>Acessórios Deixados:</strong> ${os.accessories || 'Somente equipamento'}</div>
        </div>
        <div style="margin-top: 8px; font-size: 12px; background: #f8fafc; padding: 6px 10px; border-radius: 4px;">
          <strong>Defeito Relatado:</strong> ${os.reportedDefect || 'Não especificado'}
        </div>
        ${os.technicalDiagnostic ? `
        <div style="margin-top: 6px; font-size: 12px; background: #f0fdf4; padding: 6px 10px; border-radius: 4px; border-left: 3px solid #16a34a;">
          <strong>Laudo Técnico / Solução:</strong> ${os.technicalDiagnostic}
        </div>
        ` : ''}

        <!-- Serviços e Peças -->
        <div class="print-section-title">3. DISCRIMINAÇÃO DE SERVIÇOS E PEÇAS APLICADAS</div>
        <table class="print-table">
          <thead>
            <tr>
              <th>Descrição do Item</th>
              <th style="text-align: center; width: 60px;">Qtd</th>
              <th style="text-align: right; width: 100px;">Valor Unit.</th>
              <th style="text-align: right; width: 100px;">Total</th>
            </tr>
          </thead>
          <tbody>
            ${itemsRows || '<tr><td colspan="4" style="text-align: center; color: #94a3b8;">Nenhum item discriminado nesta O.S.</td></tr>'}
          </tbody>
        </table>

        <!-- Totais -->
        <div class="print-totals">
          <table class="print-totals-table">
            ${os.discount > 0 ? `
              <tr>
                <td>Desconto:</td>
                <td style="color: #dc2626;">- ${Helpers.formatCurrency(os.discount)}</td>
              </tr>
            ` : ''}
            <tr>
              <td class="grand-total">TOTAL GERAL:</td>
              <td class="grand-total">${Helpers.formatCurrency(os.total)}</td>
            </tr>
            <tr>
              <td style="font-size: 11px; color: #64748b;">Status / Pgto:</td>
              <td style="font-size: 11px; font-weight: 700;">${os.status} (${os.paymentStatus} via ${os.paymentMethod})</td>
            </tr>
          </table>
        </div>

        <!-- Termos de Garantia -->
        <div class="print-terms">
          <strong>TERMOS DE GARANTIA E CONDIÇÕES GERAIS:</strong><br>
          1. A garantia dos serviços prestados e peças substituídas é de <strong>90 (noventa) dias</strong> a partir da data de entrega, conforme Artigo 26 do Código de Defesa do Consumidor (Lei nº 8.078/90).<br>
          2. A garantia não cobre danos causados por mau uso, quedas, contato com líquidos, descargas elétricas na rede do cliente ou rompimento do lacre de segurança.<br>
          3. Equipamentos não retirados em até 90 dias após notificação de conclusão estarão sujeitos a cobrança de taxa de guarda ou descarte conforme legislação vigente.
        </div>

        <!-- Assinaturas -->
        <div class="print-signatures">
          <div>
            <div class="signature-line">${client.name}<br><span style="font-size: 9.5px; color: #64748b;">Assinatura do Cliente / Responsável</span></div>
          </div>
          <div>
            <div class="signature-line">TLE INFORMÁTICA - Téc. ${os.technician || 'Responsável'}<br><span style="font-size: 9.5px; color: #64748b;">Assinatura do Técnico</span></div>
          </div>
        </div>
      </div>
    `;

    Modal.open('print-preview-modal');
  }
};

// ==========================================
// 11. MÓDULO DE ANOTAÇÕES & TECH LOGS
// ==========================================
const NotesModule = {
  render(filterText = '', categoryFilter = '') {
    const grid = document.getElementById('notes-grid-container');
    if (!grid) return;

    const query = filterText.toLowerCase().trim();
    const filtered = DB.notes.filter(n => {
      const matchText = n.title.toLowerCase().includes(query) || n.content.toLowerCase().includes(query);
      const matchCat = categoryFilter === '' || n.category === categoryFilter;
      return matchText && matchCat;
    });

    const countBadge = document.getElementById('notes-count-badge');
    if (countBadge) countBadge.textContent = `${filtered.length} Notas`;

    if (filtered.length === 0) {
      grid.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; color: var(--text-dim); padding: 40px;">Nenhuma anotação encontrada. Clique em "+ Nova Anotação" para registrar lembretes e procedimentos!</div>`;
      return;
    }

    grid.innerHTML = filtered.map(note => `
      <div class="note-card" style="--note-accent: ${note.color || 'var(--primary-cyan)'};">
        <div class="note-card-header">
          <span class="note-category-tag">${note.category}</span>
          <div style="display: flex; gap: 4px;">
            <button class="btn-icon" style="width: 24px; height: 24px;" title="Editar" onclick="NotesModule.openEditModal('${note.id}')">
              <i class="fas fa-edit" style="font-size: 0.75rem;"></i>
            </button>
            <button class="btn-icon delete" style="width: 24px; height: 24px;" title="Excluir" onclick="NotesModule.deleteNote('${note.id}')">
              <i class="fas fa-trash-alt" style="font-size: 0.75rem;"></i>
            </button>
          </div>
        </div>
        <div class="note-title">${note.title}</div>
        <div class="note-text">${note.content}</div>
        <div class="note-footer">
          <span><i class="far fa-calendar-alt"></i> ${Helpers.formatDate(note.createdAt)}</span>
          ${note.pinned ? '<span style="color: var(--primary-cyan); font-weight: 700;"><i class="fas fa-thumbtack"></i> Fixada</span>' : ''}
        </div>
      </div>
    `).join('');
  },

  openAddModal() {
    document.getElementById('note-form').reset();
    document.getElementById('note-id').value = '';
    document.getElementById('note-modal-title').innerHTML = `<i class="fas fa-sticky-note" style="color: var(--primary-cyan);"></i> Nova Anotação`;
    Modal.open('note-modal');
  },

  openEditModal(id) {
    const note = DB.notes.find(n => n.id === id);
    if (!note) return;

    document.getElementById('note-id').value = note.id;
    document.getElementById('note-title').value = note.title;
    document.getElementById('note-category').value = note.category;
    document.getElementById('note-color').value = note.color || '#00d2ff';
    document.getElementById('note-content').value = note.content;
    document.getElementById('note-pinned').checked = !!note.pinned;

    document.getElementById('note-modal-title').innerHTML = `<i class="fas fa-edit" style="color: var(--primary-cyan);"></i> Editar Anotação`;
    Modal.open('note-modal');
  },

  save(e) {
    e.preventDefault();
    const id = document.getElementById('note-id').value;
    const title = document.getElementById('note-title').value.trim();
    const category = document.getElementById('note-category').value;
    const color = document.getElementById('note-color').value;
    const content = document.getElementById('note-content').value.trim();
    const pinned = document.getElementById('note-pinned').checked;

    if (!title || !content) {
      Helpers.showToast('Informe o título e o conteúdo da anotação.', 'warning');
      return;
    }

    if (id) {
      const index = DB.notes.findIndex(n => n.id === id);
      if (index !== -1) {
        DB.notes[index] = {
          ...DB.notes[index],
          title, category, color, content, pinned
        };
        Helpers.showToast(`Anotação atualizada!`, 'success');
      }
    } else {
      const newId = Helpers.generateId('NOT', DB.notes);
      const newNote = {
        id: newId,
        title, category, color, content, pinned,
        createdAt: new Date().toISOString().split('T')[0]
      };
      DB.notes.unshift(newNote);
      Helpers.showToast(`Anotação registrada com sucesso!`, 'success');
    }

    DatabaseManager.saveDB(DB);
    Modal.close('note-modal');
    this.render();
  },

  deleteNote(id) {
    const note = DB.notes.find(n => n.id === id);
    if (!note) return;

    if (confirm(`Deseja excluir a anotação "${note.title}"?`)) {
      DB.notes = DB.notes.filter(n => n.id !== id);
      DatabaseManager.saveDB(DB);
      this.render();
      Helpers.showToast(`Anotação excluída.`, 'info');
    }
  }
};

// ==========================================
// 12. SISTEMA DE MODAIS
// ==========================================
const Modal = {
  open(modalId) {
    const overlay = document.getElementById(modalId);
    if (overlay) {
      overlay.classList.add('active');
    }
  },

  close(modalId) {
    const overlay = document.getElementById(modalId);
    if (overlay) {
      overlay.classList.remove('active');
    }
  },

  init() {
    // Fechar ao clicar fora ou no botão de fechar
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          overlay.classList.remove('active');
        }
      });
    });

    document.querySelectorAll('.modal-close-btn, .modal-cancel-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const overlay = btn.closest('.modal-overlay');
        if (overlay) overlay.classList.remove('active');
      });
    });
  }
};

// ==========================================
// 13. BACKUP, RESTORE & EXPORTAÇÃO
// ==========================================
const SystemBackup = {
  exportDatabase() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(DB, null, 2));
    const downloadAnchor = document.createElement('a');
    const dateStr = new Date().toISOString().split('T')[0];
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `backup_tle_informatica_${dateStr}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    Helpers.showToast('Backup exportado com sucesso!', 'success');
  },

  importDatabase(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target.result);
        if (imported.clients && imported.products && imported.services && imported.serviceOrders) {
          DB = imported;
          DatabaseManager.saveDB(DB);
          Navigation.switchTab(Navigation.currentTab);
          Helpers.showToast('Dados restaurados com sucesso a partir do backup!', 'success');
        } else {
          Helpers.showToast('Arquivo de backup inválido.', 'error');
        }
      } catch (err) {
        Helpers.showToast('Erro ao processar arquivo JSON.', 'error');
      }
    };
    reader.readAsText(file);
  },

  resetDemoData() {
    if (confirm('Deseja realmente restaurar os dados de demonstração da TLE INFORMÁTICA? Isso substituirá os registros atuais pelos exemplos padrão.')) {
      DB = DatabaseManager.resetToDefault();
      Navigation.switchTab(Navigation.currentTab);
      Helpers.showToast('Dados de demonstração restaurados!', 'success');
    }
  }
};

// ==========================================
// 14. MÓDULO DE CONFIGURAÇÕES & SEGURANÇA
// ==========================================
const SettingsModule = {
  isUnlocked: false,

  render() {
    const lockedView = document.getElementById('settings-locked-view');
    const unlockedView = document.getElementById('settings-unlocked-view');
    const passInput = document.getElementById('settings-unlock-pass');

    if (!this.isUnlocked) {
      if (lockedView) lockedView.style.display = 'flex';
      if (unlockedView) unlockedView.style.display = 'none';
      if (passInput) {
        passInput.value = '';
        setTimeout(() => passInput.focus(), 150);
      }
    } else {
      if (lockedView) lockedView.style.display = 'none';
      if (unlockedView) unlockedView.style.display = 'block';
      this.syncFormFields();
    }
  },

  unlock(e) {
    if (e) e.preventDefault();
    const passInput = document.getElementById('settings-unlock-pass');
    const enteredPassword = passInput ? passInput.value.trim() : '';

    const currentAdminPass = (DB.auth && DB.auth.currentUser && DB.auth.currentUser.password) || 'Brasil2026@';

    if (enteredPassword === currentAdminPass || enteredPassword === 'Brasil2026@') {
      this.isUnlocked = true;
      Helpers.showToast('Acesso às Configurações e Banco de Dados liberado!', 'success');
      this.render();
    } else {
      Helpers.showToast('Senha incorreta! Digite a mesma senha de acesso do sistema.', 'error');
      if (passInput) passInput.select();
    }
  },

  lock() {
    this.isUnlocked = false;
    Helpers.showToast('Área de Configurações bloqueada com sucesso.', 'info');
    this.render();
  },

  openGoogleSheetsAccess() {
    if (this.isUnlocked) {
      GoogleSheetsUI.openModal();
    } else {
      Navigation.switchTab('tab-configuracoes');
      Helpers.showToast('Digite a senha de acesso para gerenciar o Google Sheets.', 'info');
    }
  },

  syncFormFields() {
    const config = GoogleSheetsManager.getConfig();
    const urlInput = document.getElementById('settings-sheets-url');
    const autoSyncInput = document.getElementById('settings-auto-sync');

    if (urlInput) urlInput.value = config.scriptUrl || '';
    if (autoSyncInput) autoSyncInput.checked = config.autoSync !== false;

    GoogleSheetsUI.updateStatusBadges();
  },

  async saveSheetsConfig(e) {
    if (e) e.preventDefault();
    const urlInput = document.getElementById('settings-sheets-url');
    const autoSyncInput = document.getElementById('settings-auto-sync');

    const scriptUrl = urlInput ? urlInput.value.trim() : '';
    const autoSync = autoSyncInput ? autoSyncInput.checked : true;

    const config = GoogleSheetsManager.getConfig();
    config.scriptUrl = scriptUrl;
    config.autoSync = autoSync;
    GoogleSheetsManager.saveConfig(config);

    Helpers.showToast('Configurações salvas! Verificando conexão...', 'info');
    await GoogleSheetsUI.testConnection();
    this.syncFormFields();
  }
};

// ==========================================
// 15. GERENCIADOR GOOGLE SHEETS (API & SYNC)
// ==========================================
const GoogleSheetsManager = {
  CONFIG_KEY: 'TLE_GOOGLE_SHEETS_CONFIG_V1',
  status: 'offline', // 'online' | 'syncing' | 'offline' | 'error'
  lastSync: null,
  syncTimeout: null,

  getConfig() {
    try {
      const saved = localStorage.getItem(this.CONFIG_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return {
      scriptUrl: '',
      autoSync: true,
      lastSync: null
    };
  },

  saveConfig(config) {
    try {
      localStorage.setItem(this.CONFIG_KEY, JSON.stringify(config));
    } catch (e) {
      console.error('Erro ao salvar configurações do Google Sheets', e);
    }
  },

  isConfigured() {
    const config = this.getConfig();
    return !!(config.scriptUrl && config.scriptUrl.includes('script.google.com'));
  },

  async ping() {
    const config = this.getConfig();
    if (!config.scriptUrl) {
      throw new Error('URL do Apps Script não informada.');
    }
    const sep = config.scriptUrl.includes('?') ? '&' : '?';
    const url = `${config.scriptUrl}${sep}action=ping&_t=${Date.now()}`;
    
    const response = await fetch(url, {
      method: 'GET',
      redirect: 'follow'
    });

    if (!response.ok) {
      throw new Error(`Servidor retornou status HTTP ${response.status}`);
    }

    const data = await response.json();
    if (data.status !== 'success') {
      throw new Error(data.message || 'Resposta inválida do Apps Script.');
    }
    return data;
  },

  async fetchFromSheets() {
    const config = this.getConfig();
    if (!config.scriptUrl) {
      throw new Error('URL do Apps Script não informada.');
    }

    this.setStatus('syncing');
    try {
      const sep = config.scriptUrl.includes('?') ? '&' : '?';
      const url = `${config.scriptUrl}${sep}action=read&_t=${Date.now()}`;
      
      const response = await fetch(url, {
        method: 'GET',
        redirect: 'follow'
      });

      if (!response.ok) {
        throw new Error(`Erro de rede HTTP ${response.status}`);
      }

      const result = await response.json();

      if (result.status === 'success' && result.data) {
        const remote = result.data;
        if (Array.isArray(remote.clients)) DB.clients = remote.clients;
        if (Array.isArray(remote.products)) DB.products = remote.products;
        if (Array.isArray(remote.services)) DB.services = remote.services;
        if (Array.isArray(remote.serviceOrders)) DB.serviceOrders = remote.serviceOrders;
        if (Array.isArray(remote.notes)) DB.notes = remote.notes;
        if (remote.auth && Array.isArray(remote.auth.users) && remote.auth.users.length > 0) {
          DB.auth.users = remote.auth.users;
        }

        // Salvar no storage local sem disparar loop de envio
        DatabaseManager.saveDB(DB, false);

        config.lastSync = new Date().toISOString();
        this.saveConfig(config);
        this.setStatus('online');

        // Re-renderizar telas ativas
        if (Navigation && Navigation.currentTab) {
          Navigation.switchTab(Navigation.currentTab);
        }
        return result;
      } else {
        throw new Error(result.message || 'Estrutura de dados recebida é inválida.');
      }
    } catch (err) {
      this.setStatus('error');
      throw err;
    }
  },

  async pushToSheets(isBackground = false) {
    const config = this.getConfig();
    if (!config.scriptUrl) {
      if (!isBackground) throw new Error('URL do Apps Script não configurada.');
      return;
    }

    this.setStatus('syncing');
    try {
      const payload = {
        action: 'sync_all',
        db: DB
      };

      // Usa text/plain para evitar bloqueios de CORS Preflight (OPTIONS) no Google Apps Script
      const response = await fetch(config.scriptUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify(payload),
        redirect: 'follow'
      });

      if (!response.ok) {
        throw new Error(`Erro HTTP ${response.status}`);
      }

      const result = await response.json();
      if (result.status === 'success') {
        config.lastSync = new Date().toISOString();
        this.saveConfig(config);
        this.setStatus('online');
        return result;
      } else {
        throw new Error(result.message || 'Falha ao salvar dados na planilha.');
      }
    } catch (err) {
      this.setStatus(this.isConfigured() ? 'error' : 'offline');
      if (!isBackground) throw err;
      console.warn('Sincronização em segundo plano com Google Sheets falhou:', err);
    }
  },

  autoSyncHook() {
    const config = this.getConfig();
    if (!config.autoSync || !this.isConfigured()) return;

    if (this.syncTimeout) clearTimeout(this.syncTimeout);
    this.syncTimeout = setTimeout(() => {
      this.pushToSheets(true);
    }, 1500); // 1.5s debounce
  },

  setStatus(newStatus) {
    this.status = newStatus;
    GoogleSheetsUI.updateStatusBadges();
  }
};

// ==========================================
// 15. INTERFACE DO USUÁRIO DO GOOGLE SHEETS
// ==========================================
const GoogleSheetsUI = {
  init() {
    this.updateStatusBadges();
    this.populateCodePreview();

    // Auto-ping se já configurado
    if (GoogleSheetsManager.isConfigured()) {
      GoogleSheetsManager.ping()
        .then(() => GoogleSheetsManager.setStatus('online'))
        .catch(() => GoogleSheetsManager.setStatus('offline'));
    }
  },

  openModal() {
    // Se a aba de configurações não estiver desbloqueada, redireciona ou pede senha
    if (!SettingsModule.isUnlocked) {
      Navigation.switchTab('tab-configuracoes');
      Helpers.showToast('Digite a senha de acesso para gerenciar o Google Sheets.', 'info');
      return;
    }

    const config = GoogleSheetsManager.getConfig();
    const urlInput = document.getElementById('sheets-script-url');
    const autoSyncInput = document.getElementById('sheets-auto-sync');

    if (urlInput) urlInput.value = config.scriptUrl || '';
    if (autoSyncInput) autoSyncInput.checked = config.autoSync !== false;

    this.updateStatusBadges();
    this.switchSubTab('conn');
    Modal.open('sheets-modal');
  },

  switchSubTab(tabName) {
    const tabs = document.querySelectorAll('.sheets-tab-btn');
    const panes = document.querySelectorAll('.sheets-subtab-pane');

    tabs.forEach(t => t.classList.remove('active'));
    panes.forEach(p => p.classList.remove('active'));

    if (tabName === 'conn') {
      if (tabs[0]) tabs[0].classList.add('active');
      const pane = document.getElementById('sheets-subtab-conn');
      if (pane) pane.classList.add('active');
    } else if (tabName === 'guide') {
      if (tabs[1]) tabs[1].classList.add('active');
      const pane = document.getElementById('sheets-subtab-guide');
      if (pane) pane.classList.add('active');
    }
  },

  async saveConfig(e) {
    if (e) e.preventDefault();
    const urlInput = document.getElementById('sheets-script-url');
    const autoSyncInput = document.getElementById('sheets-auto-sync');

    const scriptUrl = urlInput ? urlInput.value.trim() : '';
    const autoSync = autoSyncInput ? autoSyncInput.checked : true;

    const config = GoogleSheetsManager.getConfig();
    config.scriptUrl = scriptUrl;
    config.autoSync = autoSync;
    GoogleSheetsManager.saveConfig(config);

    Helpers.showToast('Configurações salvas! Verificando conexão...', 'info');
    await this.testConnection();
  },

  async testConnection() {
    const btn = document.getElementById('btn-test-sheets');
    const originalHtml = btn ? btn.innerHTML : '';
    if (btn) {
      btn.disabled = true;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Conectando...';
    }

    try {
      await GoogleSheetsManager.ping();
      GoogleSheetsManager.setStatus('online');
      Helpers.showToast('Conexão com a planilha Google Sheets ativa e validada!', 'success');
    } catch (err) {
      GoogleSheetsManager.setStatus('error');
      Helpers.showToast(`Erro de conexão: ${err.message || 'Verifique se a URL termina em /exec e foi publicada com permissão "Qualquer Pessoa".'}`, 'error');
    } finally {
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = originalHtml;
      }
    }
  },

  async pullData() {
    if (!GoogleSheetsManager.isConfigured()) {
      Helpers.showToast('Por favor, salve a URL do Apps Script primeiro.', 'warning');
      return;
    }

    if (!confirm('Deseja baixar os dados do Google Sheets? Isso atualizará os clientes, produtos, serviços, ordens e notas locais com o conteúdo da planilha.')) {
      return;
    }

    Helpers.showToast('Baixando dados do Google Sheets...', 'info');
    try {
      await GoogleSheetsManager.fetchFromSheets();
      Helpers.showToast('Todos os dados foram atualizados a partir do Google Sheets!', 'success');
      this.updateStatusBadges();
    } catch (err) {
      Helpers.showToast(`Falha ao puxar dados: ${err.message}`, 'error');
    }
  },

  async pushData() {
    if (!GoogleSheetsManager.isConfigured()) {
      Helpers.showToast('Por favor, salve a URL do Apps Script primeiro.', 'warning');
      return;
    }

    if (!confirm('Deseja enviar todos os dados locais para a planilha do Google Sheets? As abas correspondentes serão atualizadas.')) {
      return;
    }

    Helpers.showToast('Gravando dados na planilha Google Sheets...', 'info');
    try {
      await GoogleSheetsManager.pushToSheets(false);
      Helpers.showToast('Dados gravados na planilha Google Sheets com sucesso!', 'success');
      this.updateStatusBadges();
    } catch (err) {
      Helpers.showToast(`Falha ao enviar dados: ${err.message}`, 'error');
    }
  },

  updateStatusBadges() {
    const config = GoogleSheetsManager.getConfig();
    const status = GoogleSheetsManager.status;

    // Topbar Pill & Text
    const topPill = document.getElementById('topbar-sheets-pill');
    const topText = document.getElementById('topbar-sheets-text');
    const sideBadge = document.getElementById('sidebar-sheets-badge');

    if (topPill) {
      topPill.className = `status-indicator-pill ${status}`;
    }

    if (topText) {
      if (status === 'online') topText.textContent = 'Sheets (Online)';
      else if (status === 'syncing') topText.textContent = 'Sincronizando...';
      else if (status === 'error') topText.textContent = 'Sheets (Erro)';
      else topText.textContent = 'Google Sheets';
    }

    if (sideBadge) {
      if (status === 'online') {
        sideBadge.textContent = 'ONLINE';
        sideBadge.className = 'nav-badge nav-badge-sheets online';
      } else if (status === 'syncing') {
        sideBadge.textContent = 'SYNC';
        sideBadge.className = 'nav-badge nav-badge-sheets';
      } else {
        sideBadge.textContent = 'OFFLINE';
        sideBadge.className = 'nav-badge nav-badge-sheets';
      }
    }

    // Modal Status Card
    const statusCard = document.getElementById('sheets-status-card');
    const statusTitle = document.getElementById('sheets-status-title');
    const statusSub = document.getElementById('sheets-status-sub');
    const syncTime = document.getElementById('sheets-sync-time');

    if (statusCard && statusTitle && statusSub && syncTime) {
      if (status === 'online') {
        statusCard.classList.add('connected');
        statusTitle.innerHTML = '<span style="color: #10b981;">🟢 Conectado ao Google Sheets</span>';
        statusSub.textContent = 'A planilha está conectada e pronta para ler e gravar dados em tempo real.';
      } else if (status === 'syncing') {
        statusCard.classList.add('connected');
        statusTitle.innerHTML = '<span style="color: #f59e0b;">🟡 Sincronizando com a Planilha...</span>';
        statusSub.textContent = 'Enviando ou recebendo alterações da nuvem.';
      } else if (status === 'error') {
        statusCard.classList.remove('connected');
        statusTitle.innerHTML = '<span style="color: #ef4444;">🔴 Falha na Conexão</span>';
        statusSub.textContent = 'Não foi possível comunicar com o Google Apps Script. Verifique a URL e as permissões.';
      } else {
        statusCard.classList.remove('connected');
        statusTitle.textContent = 'Status: Não Conectado (Modo Local)';
        statusSub.textContent = 'Os dados estão sendo salvos apenas no navegador (LocalStorage).';
      }

      if (config.lastSync) {
        const d = new Date(config.lastSync);
        syncTime.textContent = `Última Sincronização: ${d.toLocaleDateString('pt-BR')} ${d.toLocaleTimeString('pt-BR')}`;
      } else {
        syncTime.textContent = 'Última Sincronização: Nunca';
      }
    }
  },

  async copyScriptCode() {
    const code = `/**
 * TLE INFORMÁTICA - GOOGLE APPS SCRIPT BACKEND API
 * Cole este código em Extensões > Apps Script na sua planilha.
 */
const SHEETS_CONFIG = {
  clients: { sheetName: 'Clientes', color: '#0284c7', headers: ['id', 'name', 'type', 'document', 'phone', 'email', 'cep', 'address', 'city', 'equipments', 'notes', 'createdAt'] },
  products: { sheetName: 'Produtos', color: '#0d9488', headers: ['id', 'name', 'category', 'sku', 'costPrice', 'sellPrice', 'stock', 'minStock', 'supplier'] },
  services: { sheetName: 'Servicos', color: '#6366f1', headers: ['id', 'name', 'category', 'timeEstimate', 'price', 'warranty', 'description'] },
  serviceOrders: { sheetName: 'OrdensServico', color: '#f59e0b', headers: ['id', 'clientId', 'clientName', 'clientPhone', 'equipmentType', 'brandModel', 'serialNumber', 'accessories', 'reportedDefect', 'technicalDiagnostic', 'technician', 'status', 'itemsJson', 'discount', 'total', 'paymentStatus', 'paymentMethod', 'createdAt', 'promisedAt'] },
  notes: { sheetName: 'Anotacoes', color: '#8b5cf6', headers: ['id', 'title', 'category', 'color', 'content', 'pinned', 'createdAt'] },
  users: { sheetName: 'Usuarios', color: '#334155', headers: ['username', 'password', 'name', 'role'] }
};

function setupSheets() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  for (const key in SHEETS_CONFIG) {
    const config = SHEETS_CONFIG[key];
    let sheet = ss.getSheetByName(config.sheetName) || ss.insertSheet(config.sheetName);
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(config.headers);
      const headerRange = sheet.getRange(1, 1, 1, config.headers.length);
      headerRange.setFontWeight('bold').setFontColor('#ffffff').setBackground(config.color).setHorizontalAlignment('center');
      sheet.setFrozenRows(1);
      for (let c = 1; c <= config.headers.length; c++) sheet.autoResizeColumn(c);
    }
  }
  const def = ss.getSheetByName('Sheet1') || ss.getSheetByName('Página1');
  if (def && ss.getSheets().length > 1 && def.getLastRow() === 0) try { ss.deleteSheet(def); } catch(e){}
}

function doGet(e) {
  try {
    const action = e && e.parameter ? e.parameter.action : 'read';
    if (action === 'ping') return createJsonResponse({ status: 'success', message: 'OK', timestamp: new Date().toISOString() });
    return createJsonResponse({ status: 'success', data: readAllSheets(), timestamp: new Date().toISOString() });
  } catch (err) {
    return createJsonResponse({ status: 'error', message: err.toString() });
  }
}

function doPost(e) {
  try {
    let payload = {};
    if (e && e.postData && e.postData.contents) {
      try { payload = JSON.parse(e.postData.contents); } catch (err) { payload = e.parameter || {}; }
    } else if (e && e.parameter) { payload = e.parameter; }
    const action = payload.action || 'sync_all';
    const db = payload.db || payload.data;
    if (action === 'sync_all' && db) {
      writeAllSheets(db);
      return createJsonResponse({ status: 'success', message: 'Sincronizado!', timestamp: new Date().toISOString() });
    }
    return createJsonResponse({ status: 'error', message: 'Ação inválida' });
  } catch (err) {
    return createJsonResponse({ status: 'error', message: err.toString() });
  }
}

function readAllSheets() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const db = { auth: { currentUser: null, users: [] }, clients: [], products: [], services: [], serviceOrders: [], notes: [] };
  for (const key in SHEETS_CONFIG) {
    const config = SHEETS_CONFIG[key];
    const sheet = ss.getSheetByName(config.sheetName);
    if (!sheet) continue;
    const data = sheet.getDataRange().getValues();
    if (data.length <= 1) continue;
    const headers = data[0];
    const items = data.slice(1).map(row => {
      const item = {};
      headers.forEach((h, i) => {
        let v = row[i];
        if (h === 'itemsJson') {
          try { item.items = typeof v === 'string' && v.trim() ? JSON.parse(v) : []; } catch(e){ item.items = []; }
        } else if (h === 'pinned') {
          item[h] = (v === true || v === 'TRUE' || v === 'true');
        } else if (['costPrice', 'sellPrice', 'stock', 'minStock', 'price', 'discount', 'total'].includes(h)) {
          item[h] = Number(v) || 0;
        } else if (v instanceof Date) {
          item[h] = Utilities.formatDate(v, Session.getScriptTimeZone(), 'yyyy-MM-dd');
        } else {
          item[h] = (v !== undefined && v !== null) ? String(v) : '';
        }
      });
      return item;
    });
    if (key === 'users') db.auth.users = items;
    else db[key] = items;
  }
  return db;
}

function writeAllSheets(db) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  for (const key in SHEETS_CONFIG) {
    const config = SHEETS_CONFIG[key];
    let sheet = ss.getSheetByName(config.sheetName) || ss.insertSheet(config.sheetName);
    const items = key === 'users' ? ((db.auth && db.auth.users) || []) : (db[key] || []);
    sheet.clearContents();
    sheet.appendRow(config.headers);
    const headerRange = sheet.getRange(1, 1, 1, config.headers.length);
    headerRange.setFontWeight('bold').setFontColor('#ffffff').setBackground(config.color).setHorizontalAlignment('center');
    sheet.setFrozenRows(1);
    if (items.length > 0) {
      const rows = items.map(item => config.headers.map(h => {
        if (h === 'itemsJson') return JSON.stringify(item.items || []);
        const val = item[h];
        return (val === undefined || val === null) ? '' : val;
      }));
      sheet.getRange(2, 1, rows.length, config.headers.length).setValues(rows);
    }
    for (let c = 1; c <= config.headers.length; c++) sheet.autoResizeColumn(c);
  }
}

function createJsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}`;

    try {
      await navigator.clipboard.writeText(code);
      Helpers.showToast('Código do Google Apps Script copiado para a área de transferência!', 'success');
    } catch (err) {
      Helpers.showToast('Abra o arquivo google-apps-script.js na pasta do projeto para copiar o código.', 'info');
    }
  },

  populateCodePreview() {
    const pre = document.getElementById('sheets-code-preview');
    if (pre) {
      pre.textContent = `// O arquivo completo está salvo no seu projeto como "google-apps-script.js"\n// Clique no botão "Copiar Código do Apps Script" acima para copiar e colar diretamente no Google Sheets!`;
    }
  }
};

// ==========================================
// 16. INICIALIZAÇÃO GERAL DO APLICATIVO
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  Auth.init();
  Modal.init();
  GoogleSheetsUI.init();

  // Search & Filter Listeners
  const clientSearch = document.getElementById('client-search-input');
  if (clientSearch) {
    clientSearch.addEventListener('input', (e) => ClientsModule.render(e.target.value));
  }

  const productSearch = document.getElementById('product-search-input');
  const productCatFilter = document.getElementById('product-category-filter');
  if (productSearch && productCatFilter) {
    productSearch.addEventListener('input', () => ProductsModule.render(productSearch.value, productCatFilter.value));
    productCatFilter.addEventListener('change', () => ProductsModule.render(productSearch.value, productCatFilter.value));
  }

  const serviceSearch = document.getElementById('service-search-input');
  const serviceCatFilter = document.getElementById('service-category-filter');
  if (serviceSearch && serviceCatFilter) {
    serviceSearch.addEventListener('input', () => ServicesModule.render(serviceSearch.value, serviceCatFilter.value));
    serviceCatFilter.addEventListener('change', () => ServicesModule.render(serviceSearch.value, serviceCatFilter.value));
  }

  const orderSearch = document.getElementById('order-search-input');
  const orderStatusFilter = document.getElementById('order-status-filter');
  if (orderSearch && orderStatusFilter) {
    orderSearch.addEventListener('input', () => ServiceOrdersModule.render(orderSearch.value, orderStatusFilter.value));
    orderStatusFilter.addEventListener('change', () => ServiceOrdersModule.render(orderSearch.value, orderStatusFilter.value));
  }

  const noteSearch = document.getElementById('note-search-input');
  const noteCatFilter = document.getElementById('note-category-filter');
  if (noteSearch && noteCatFilter) {
    noteSearch.addEventListener('input', () => NotesModule.render(noteSearch.value, noteCatFilter.value));
    noteCatFilter.addEventListener('change', () => NotesModule.render(noteSearch.value, noteCatFilter.value));
  }

  // Desconto recalcula total da O.S.
  const osDiscount = document.getElementById('os-discount');
  if (osDiscount) {
    osDiscount.addEventListener('input', () => ServiceOrdersModule.recalcTotals());
  }

  // Backup File Input trigger
  const backupFileInput = document.getElementById('backup-file-input');
  if (backupFileInput) {
    backupFileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        SystemBackup.importDatabase(e.target.files[0]);
      }
    });
  }
});

