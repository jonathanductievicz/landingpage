// Project and Plan data
const projectsData = {
  projeto1: {
    title: 'Sistema de Controle de Custos',
    client: 'Construtora Regional',
    category: 'Construção Civil',
    description:
      'Desenvolvimento de sistema completo para controle e análise de custos de obras, integrando dados de compras, mão de obra e equipamentos em dashboards interativos.',
    timeline: [
      {
        phase: 'Análise e Planejamento',
        description:
          'Levantamento de requisitos e mapeamento de processos existentes',
      },
      {
        phase: 'Desenvolvimento',
        description:
          'Criação de dashboards em Power BI e scripts de automação em Python',
      },
      {
        phase: 'Integração',
        description:
          'Conexão com sistemas existentes e importação de dados históricos',
      },
      {
        phase: 'Treinamento',
        description: 'Capacitação da equipe e documentação do sistema',
      },
      {
        phase: 'Implementação',
        description: 'Go-live e acompanhamento dos primeiros meses',
      },
    ],
    results:
      '30% de redução no tempo de análise de custos, 15% de economia nos custos totais da obra, e visibilidade em tempo real de todos os indicadores financeiros do projeto.',
  },
  projeto2: {
    title: 'Dashboard Gerencial',
    client: 'Incorporadora Imobiliária',
    category: 'Construção Civil',
    description:
      'Criação de dashboard executivo para acompanhamento de vendas, estoque de unidades, indicadores financeiros e performance comercial da incorporadora.',
    timeline: [
      {
        phase: 'Diagnóstico',
        description: 'Análise dos KPIs existentes e necessidades gerenciais',
      },
      {
        phase: 'Modelagem de Dados',
        description: 'Estruturação do banco de dados e definição de métricas',
      },
      {
        phase: 'Desenvolvimento BI',
        description:
          'Criação de relatórios interativos e dashboards executivos',
      },
      {
        phase: 'Automação',
        description: 'Implementação de atualizações automáticas de dados',
      },
      {
        phase: 'Entrega',
        description: 'Treinamento executivo e suporte contínuo',
      },
    ],
    results:
      'Decisões estratégicas 50% mais rápidas, visibilidade completa do pipeline de vendas, e redução de 70% no tempo de preparação de relatórios gerenciais.',
  },
  projeto3: {
    title: 'Otimização Tributária',
    client: 'Agência de Marketing Digital',
    category: 'Profissionais Liberais',
    description:
      'Reestruturação completa do planejamento tributário com foco na otimização através do Fator R e análise de enquadramento fiscal mais vantajoso.',
    timeline: [
      {
        phase: 'Auditoria Fiscal',
        description: 'Análise completa da situação tributária atual',
      },
      {
        phase: 'Simulações',
        description:
          'Cálculos comparativos entre diferentes regimes tributários',
      },
      {
        phase: 'Reestruturação',
        description: 'Implementação do novo enquadramento fiscal',
      },
      {
        phase: 'Acompanhamento',
        description: 'Monitoramento mensal dos resultados obtidos',
      },
    ],
    results:
      '25% de redução na carga tributária anual, conformidade fiscal 100%, e economia de R$ 180.000 no primeiro ano.',
  },
  projeto4: {
    title: 'Automação Contábil',
    client: 'Consultoria Empresarial',
    category: 'Profissionais Liberais',
    description:
      'Implementação de automação completa dos processos contábeis e fiscais através de RPA e integração de sistemas.',
    timeline: [
      {
        phase: 'Mapeamento',
        description: 'Identificação de processos manuais e gargalos',
      },
      {
        phase: 'Desenvolvimento RPA',
        description: 'Criação de robôs para automação de tarefas repetitivas',
      },
      {
        phase: 'Integração',
        description: 'Conexão entre diferentes sistemas contábeis',
      },
      {
        phase: 'Testes',
        description: 'Validação e ajustes dos processos automatizados',
      },
      {
        phase: 'Produção',
        description: 'Implementação e monitoramento contínuo',
      },
    ],
    results:
      '60% de redução no tempo de processamento contábil, eliminação de 90% dos erros manuais, e liberação da equipe para atividades estratégicas.',
  },
  projeto5: {
    title: 'Gestão Rural Completa',
    client: 'Produtor Rural',
    category: 'Pessoa Física/Rural',
    description:
      'Implementação de sistema completo de gestão rural incluindo LCDPR, ITR, controle de custos e análise de rentabilidade por cultura.',
    timeline: [
      {
        phase: 'Diagnóstico Rural',
        description: 'Análise da atividade rural e obrigações específicas',
      },
      {
        phase: 'Estruturação',
        description: 'Organização da documentação e processos contábeis rurais',
      },
      {
        phase: 'Sistema LCDPR',
        description: 'Implementação do Livro Caixa Digital do Produtor Rural',
      },
      {
        phase: 'Análise ITR',
        description: 'Otimização do Imposto Territorial Rural',
      },
      {
        phase: 'Controle Gerencial',
        description: 'Criação de relatórios de rentabilidade por atividade',
      },
    ],
    results:
      'Conformidade fiscal 100% com todas as obrigações rurais, otimização de 20% nos custos operacionais, e visibilidade completa da rentabilidade por cultura.',
  },
  projeto6: {
    title: 'Planejamento Sucessório',
    client: 'Família Empresária',
    category: 'Pessoa Física/Rural',
    description:
      'Estruturação de planejamento sucessório familiar com criação de holding, proteção patrimonial e otimização tributária para transferência de bens.',
    timeline: [
      {
        phase: 'Diagnóstico Patrimonial',
        description: 'Levantamento completo do patrimônio familiar',
      },
      {
        phase: 'Estruturação Jurídica',
        description: 'Criação da holding familiar e reorganização societária',
      },
      {
        phase: 'Planejamento Tributário',
        description: 'Otimização fiscal para transferência de bens',
      },
      {
        phase: 'Implementação',
        description: 'Execução do plano sucessório',
      },
      {
        phase: 'Acompanhamento',
        description: 'Monitoramento e ajustes periódicos',
      },
    ],
    results:
      'Proteção patrimonial completa, redução de 40% nos impostos sobre transferência de bens, e estrutura sucessória organizada para as próximas gerações.',
  },
  projeto7: {
    title: 'Inteligência Artificial para Análise',
    client: 'Grupo Empresarial',
    category: 'Automação/BI',
    description:
      'Desenvolvimento de sistema de IA para análise preditiva de fluxo de caixa e previsão de cenários financeiros usando machine learning.',
    timeline: [
      {
        phase: 'Coleta de Dados',
        description: 'Estruturação da base de dados históricos',
      },
      {
        phase: 'Modelagem IA',
        description: 'Desenvolvimento de algoritmos de machine learning',
      },
      {
        phase: 'Treinamento',
        description: 'Treinamento dos modelos com dados históricos',
      },
      {
        phase: 'Validação',
        description: 'Testes de precisão e ajustes dos algoritmos',
      },
      {
        phase: 'Produção',
        description: 'Implementação do sistema preditivo',
      },
    ],
    results:
      'Previsões de fluxo de caixa 85% mais precisas, antecipação de problemas financeiros com 3 meses de antecedência, e otimização de 30% na gestão de capital de giro.',
  },
  projeto8: {
    title: 'Integração de Sistemas',
    client: 'Rede de Franquias',
    category: 'Automação/BI',
    description:
      'Integração completa de sistemas contábeis e gerenciais de múltiplas unidades com unificação de dados e relatórios consolidados em tempo real.',
    timeline: [
      {
        phase: 'Mapeamento',
        description: 'Análise dos sistemas existentes em cada unidade',
      },
      {
        phase: 'Arquitetura',
        description: 'Definição da arquitetura de integração',
      },
      {
        phase: 'Desenvolvimento APIs',
        description: 'Criação de interfaces de integração',
      },
      { phase: 'Migração', description: 'Unificação das bases de dados' },
      {
        phase: 'Consolidação',
        description: 'Implementação de relatórios consolidados',
      },
    ],
    results:
      'Unificação completa de dados de 15 unidades, relatórios consolidados em tempo real, e redução de 80% no tempo de fechamento contábil da rede.',
  },
};

const planDetails = {
  essencial: {
    title: 'Plano Essencial - R$ 250/mês',
    content:
      'Ideal para MEI que precisa de uma contabilidade básica mas eficiente. Inclui toda a escrituração necessária, emissão de guias e suporte para pró-labore. Perfeito para quem está começando e precisa de conformidade fiscal.',
  },
  consultivo: {
    title: 'Plano Consultivo - R$ 450/mês',
    content:
      'Nosso plano mais popular! Além de todos os serviços do Essencial, você terá relatórios mensais, consultoria tributária anual e um analista dedicado. Ideal para microempresas que querem crescer com inteligência.',
  },
  premium: {
    title: 'Plano Premium - R$ 950/mês',
    content:
      'Para empresas que precisam de uma visão estratégica completa. Inclui análise de indicadores gerenciais, BPO financeiro parcial e controladoria simplificada. Perfeito para EPP e empresas do Lucro Presumido.',
  },
  personalizado: {
    title: 'Plano Personalizado - Sob Consulta',
    content:
      'Solução completa para empresas do Lucro Presumido e Real. Inclui BPO financeiro completo, controladoria avançada, análise de rentabilidade e auditoria. Vamos criar uma proposta específica para suas necessidades.',
  },
};

// Function to dynamically create project cards
function createProjectCards() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  grid.innerHTML = Object.keys(projectsData)
    .map((key) => {
      const project = projectsData[key];
      const projectId = key;
      return `
        <div class="project-card" data-category="${
          project.category.toLowerCase().split('/')[0]
        }">
          <div class="project-image">
            <i class="fa-solid ${
              {
                'construção civil': 'fa-building',
                'profissionais liberais': 'fa-calculator',
                'pessoa física/rural': 'fa-tractor',
                'automação/bi': 'fa-brain',
              }[project.category.toLowerCase()] || 'fa-chart-line'
            }"></i>
          </div>
          <div class="project-content">
            <span class="project-category">${project.category}</span>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-client">${project.client}</p>
            <p class="project-description">${project.description.substring(
              0,
              100
            )}...</p>
            <div class="project-results">
              <strong>Resultados:</strong> ${project.results.split(',')[0]}
            </div>
            <button
              class="project-btn"
              onclick="openProjectModal('${projectId}')"
            >
              Ver Detalhes
            </button>
          </div>
        </div>
      `;
    })
    .join('');
}

// Function to dynamically create plan cards
function createPlanCards() {
  const plansContainer = document.querySelector('.plans');
  if (!plansContainer) return;

  const plansHTML = `
    <div class="plan">
      <div class="plan-content">
        <h2>Plano Essencial</h2>
        <p class="price">R$ 250<span class="price-note">/mês</span></p>
        <b>Ideal para MEI</b>
        <ul>
          <li><i class="fa-solid fa-calculator"></i>Escrituração contábil e fiscal</li>
          <li><i class="fa-solid fa-file-invoice-dollar"></i>Guias e obrigações mensais</li>
          <li><i class="fa-solid fa-money-check-dollar"></i>Pró-Labore</li>
          <li><i class="fa-solid fa-headset"></i>Atendimento básico</li>
        </ul>
      </div>
      <div class="plan-cta">
        <button class="plan-btn" onclick="openModal('essencial')">Escolher Plano</button>
      </div>
    </div>

    <div class="plan highlight">
      <div class="plan-content">
        <div class="highlight-badge">Mais Popular</div>
        <h2>Plano Consultivo</h2>
        <p class="price">R$ 450<span class="price-note">/mês</span></p>
        <b>Ideal para ME (Microempresa)</b>
        <ul>
          <li><i class="fa-solid fa-circle-check"></i>Tudo do Essencial</li>
          <li><i class="fa-solid fa-chart-pie"></i>Relatórios mensais simplificados</li>
          <li><i class="fa-solid fa-lightbulb"></i>Consultoria tributária anual</li>
          <li><i class="fa-solid fa-user-tie"></i>Analista contábil dedicado</li>
        </ul>
      </div>
      <div class="plan-cta">
        <button class="plan-btn" onclick="openModal('consultivo')">Escolher Plano</button>
      </div>
    </div>

    <div class="plan">
      <div class="plan-content">
        <h2>Plano Premium</h2>
        <p class="price">R$ 950<span class="price-note">/mês</span></p>
        <b>Ideal para EPP (Empresa de Pequeno Porte)</b>
        <ul>
          <li><i class="fa-solid fa-circle-check"></i>Tudo do Consultivo</li>
          <li><i class="fa-solid fa-magnifying-glass-chart"></i>Análise de indicadores gerenciais</li>
          <li><i class="fa-solid fa-hand-holding-dollar"></i>BPO Financeiro parcial</li>
          <li><i class="fa-solid fa-cogs"></i>Controladoria simplificada</li>
        </ul>
      </div>
      <div class="plan-cta">
        <button class="plan-btn" onclick="openModal('premium')">Escolher Plano</button>
      </div>
    </div>

    <div class="plan">
      <div class="plan-content">
        <h2>Plano Personalizado</h2>
        <p class="price">Sob Consulta</p>
        <b>Ideal para Lucro Presumido e Real</b>
        <ul>
          <li><i class="fa-solid fa-star"></i>Tudo do Premium</li>
          <li><i class="fa-solid fa-briefcase"></i>BPO Financeiro completo</li>
          <li><i class="fa-solid fa-cogs"></i>Controladoria completa</li>
          <li><i class="fa-solid fa-bullseye"></i>Análise de rentabilidade e KPIs</li>
          <li><i class="fa-solid fa-tasks"></i>Auditoria contábil e fiscal</li>
        </ul>
      </div>
      <div class="plan-cta">
        <button class="plan-btn" onclick="openModal('personalizado')">Escolher Plano</button>
      </div>
    </div>
  `;
  plansContainer.innerHTML = plansHTML;
}

document.addEventListener('DOMContentLoaded', () => {
  // Loading Screen
  const loadingOverlay = document.getElementById('loadingOverlay');
  if (loadingOverlay) {
    setTimeout(() => {
      loadingOverlay.style.opacity = '0';
      setTimeout(() => {
        loadingOverlay.style.display = 'none';
      }, 500);
    }, 1000);
  }

  createProjectCards();
  createPlanCards();

  // Scroll Progress Bar
  window.addEventListener('scroll', function () {
    const scrollProgress = document.getElementById('scrollProgress');
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    if (scrollProgress) {
      scrollProgress.style.width = scrollPercent + '%';
    }
  });

  // Navbar Scroll Effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile Menu Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (menuToggle && navbar) {
    menuToggle.addEventListener('click', () => {
      navbar.classList.toggle('active');
    });
  }

  if (navLinks && navbar) {
    navLinks.addEventListener('click', () => {
      if (navbar.classList.contains('active')) {
        navbar.classList.remove('active');
      }
    });
  }

  // Scroll Spy for Navigation
  const sections = document.querySelectorAll('section[id]');
  const navLinksArray = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navLinksArray.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });

  // Intersection Observer for Animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.section').forEach((section) => {
    observer.observe(section);
  });

  // Animated Counters
  function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const increment = target / 100;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = Math.floor(current);
    }, 20);
  }

  const statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.stat-number');
            counters.forEach((counter) => {
              if (!counter.classList.contains('animated')) {
                counter.classList.add('animated');
                animateCounter(counter);
              }
            });
            statsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    statsObserver.observe(statsSection);
  }

  // Projects Filter System
  const filterButtons = document.querySelectorAll('.filter-btn');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const projectCards = document.querySelectorAll('.project-card');
      const filter = button.getAttribute('data-filter');

      filterButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');

      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (
          filter === 'all' ||
          category === filter ||
          category.includes(filter)
        ) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // Testimonials Carousel
  let currentTestimonial = 0;
  const testimonials = document.querySelectorAll('.testimonial');
  const testimonialDots = document.querySelectorAll('.testimonial-dot');

  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.classList.toggle('active', i === index);
    });
    testimonialDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  testimonialDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentTestimonial = index;
      showTestimonial(currentTestimonial);
    });
  });

  if (testimonials.length > 0) {
    setInterval(() => {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      showTestimonial(currentTestimonial);
    }, 5000);
  }

  // Form Validation
  const form = document.getElementById('contactForm');
  if (form) {
    const inputs = form.querySelectorAll('.form-input');

    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }

    function validatePhone(phone) {
      const re = /^[\(\)\s\-\+\d]{10,}$/;
      return phone === '' || re.test(phone);
    }

    function showError(inputId, message) {
      const input = document.getElementById(inputId);
      const error = document.getElementById(inputId + 'Error');
      const success = document.getElementById(inputId + 'Success');
      if (!input || !error || !success) return;

      input.classList.add('error');
      input.classList.remove('success');
      error.style.display = 'block';
      error.textContent = message;
      success.style.display = 'none';
    }

    function showSuccess(inputId) {
      const input = document.getElementById(inputId);
      const error = document.getElementById(inputId + 'Error');
      const success = document.getElementById(inputId + 'Success');
      if (!input || !error || !success) return;

      input.classList.remove('error');
      input.classList.add('success');
      error.style.display = 'none';
      success.style.display = 'block';
    }

    function hideValidation(inputId) {
      const input = document.getElementById(inputId);
      const error = document.getElementById(inputId + 'Error');
      const success = document.getElementById(inputId + 'Success');
      if (!input || !error || !success) return;

      input.classList.remove('error', 'success');
      error.style.display = 'none';
      success.style.display = 'none';
    }

    inputs.forEach((input) => {
      input.addEventListener('blur', () => {
        const value = input.value.trim();
        const id = input.id;

        switch (id) {
          case 'name':
            if (value === '') showError(id, 'Por favor, insira seu nome');
            else if (value.length < 2)
              showError(id, 'Nome deve ter pelo menos 2 caracteres');
            else showSuccess(id);
            break;
          case 'email':
            if (value === '') showError(id, 'Por favor, insira seu e-mail');
            else if (!validateEmail(value))
              showError(id, 'Por favor, insira um e-mail válido');
            else showSuccess(id);
            break;
          case 'phone':
            if (!validatePhone(value))
              showError(id, 'Formato de telefone inválido');
            else if (value !== '') showSuccess(id);
            else hideValidation(id);
            break;
          case 'message':
            if (value === '')
              showError(id, 'Por favor, descreva suas necessidades');
            else if (value.length < 10)
              showError(id, 'Mensagem deve ter pelo menos 10 caracteres');
            else showSuccess(id);
            break;
        }
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const submitBtn = document.getElementById('submitBtn');
      const btnText = submitBtn.querySelector('.btn-text');

      let isValid = true;
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const message = document.getElementById('message').value.trim();

      if (name === '' || name.length < 2) {
        showError(
          'name',
          'Nome é obrigatório e deve ter pelo menos 2 caracteres'
        );
        isValid = false;
      }
      if (email === '' || !validateEmail(email)) {
        showError('email', 'E-mail válido é obrigatório');
        isValid = false;
      }
      if (!validatePhone(phone)) {
        showError('phone', 'Formato de telefone inválido');
        isValid = false;
      }
      if (message === '' || message.length < 10) {
        showError(
          'message',
          'Mensagem é obrigatória e deve ter pelo menos 10 caracteres'
        );
        isValid = false;
      }
      if (!isValid) return;

      submitBtn.classList.add('loading');
      submitBtn.disabled = true;
      btnText.textContent = 'Enviando...';

      setTimeout(() => {
        alert(
          'Obrigado! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.'
        );
        form.reset();
        inputs.forEach((input) => hideValidation(input.id));
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        btnText.textContent = 'Receber Proposta';
      }, 2000);
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Keyboard navigation for modals
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeModal();
      closeProjectModal();
    }
  });

  // Add some interactive effects to tech items
  document.querySelectorAll('.tech-item').forEach((item) => {
    item.addEventListener('click', function () {
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = '';
      }, 150);
    });
  });
});

// Plan Modal Functions
function openModal(planType) {
  const modal = document.getElementById('planModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalContent = document.getElementById('modalContent');

  modalTitle.textContent = planDetails[planType].title;
  modalContent.textContent = planDetails[planType].content;
  modal.style.display = 'block';

  modal.addEventListener('click', function (e) {
    if (e.target === modal) closeModal();
  });
}

function closeModal() {
  const modal = document.getElementById('planModal');
  if (modal) modal.style.display = 'none';
}

// Project Modal Functions
function openProjectModal(projectId) {
  const modal = document.getElementById('projectModal');
  const project = projectsData[projectId];
  if (!project) return;

  document.getElementById('projectModalTitle').textContent = project.title;
  document.getElementById('projectModalClient').textContent = project.client;
  document.getElementById(
    'projectModalDescription'
  ).innerHTML = `<p>${project.description}</p>`;

  const timelineHtml = project.timeline
    .map(
      (item) => `
      <div class="timeline-item">
        <div class="timeline-icon"><i class="fa-solid fa-check"></i></div>
        <div class="timeline-content">
          <h4>${item.phase}</h4>
          <p>${item.description}</p>
        </div>
      </div>`
    )
    .join('');

  document.getElementById('projectModalTimeline').innerHTML = `
      <h3 style="color: var(--azul); margin-bottom: 1rem;">Timeline do Projeto</h3>
      ${timelineHtml}`;

  document.getElementById('projectModalResults').innerHTML = `
      <div class="project-results">
        <h3 style="color: var(--verde); margin-bottom: 1rem;">Resultados Obtidos</h3>
        <p>${project.results}</p>
      </div>`;

  modal.style.display = 'block';
  modal.addEventListener('click', function (e) {
    if (e.target === modal) closeProjectModal();
  });
}

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  if (modal) modal.style.display = 'none';
}
