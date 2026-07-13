/*
 * Detailed case-study content, keyed by project slug (slugify(projectName)).
 * Edit freely — each field is optional and the page degrades gracefully.
 *
 * Shape:
 *   tagline   : one-line summary shown under the title
 *   category  : label chip (e.g. "E-commerce", "Institucional", "Sistema")
 *   role      : your role on the project
 *   year      : period
 *   stack     : string[] of technologies
 *   overview  : intro paragraph
 *   challenge : the problem / context paragraph
 *   solution  : string[] of what you built / decisions
 *   results   : string[] of outcomes / impact
 */
const caseStudies = {
  useriu: {
    tagline: "E-commerce de moda feminina com experiência de compra moderna.",
    category: "E-commerce",
    role: "Desenvolvedor Front-End",
    year: "Lime Labs",
    stack: ["React", "TypeScript", "SCSS", "Integração de APIs"],
    overview:
      "Loja online de roupas femininas com identidade visual vibrante e navegação fluida, pensada para converter visitantes em compradores.",
    challenge:
      "A marca precisava de uma vitrine digital rápida e responsiva, capaz de destacar coleções e reduzir o atrito no caminho até a compra.",
    solution: [
      "Arquitetura de componentes reutilizáveis em React/TypeScript para catálogo, cards de produto e páginas de coleção.",
      "Layout totalmente responsivo, priorizando performance em dispositivos móveis.",
      "Integração com APIs de produtos e otimização de carregamento de imagens."
    ],
    results: [
      "Experiência de navegação intuitiva e consistente em todos os tamanhos de tela.",
      "Base de componentes que acelera a criação de novas campanhas."
    ]
  },
  pilotage: {
    tagline: "Site institucional para gestora de recursos autorizada pela CVM.",
    category: "Institucional",
    role: "Desenvolvedor",
    year: "Lime Labs",
    stack: ["WordPress", "PHP", "HTML5", "CSS3"],
    overview:
      "Presença digital institucional para empresa de gestão de recursos financeiros, com foco em credibilidade e conformidade.",
    challenge:
      "Comunicar solidez e confiança de uma empresa regulada pela CVM, mantendo flexibilidade para atualização de conteúdo pela equipe.",
    solution: [
      "Site construído em WordPress para autonomia editorial da equipe.",
      "Design sóbrio e profissional alinhado ao setor financeiro.",
      "Estrutura de conteúdo pensada para SEO e leitura clara."
    ],
    results: [
      "Equipe passou a publicar e atualizar conteúdo sem depender de desenvolvimento.",
      "Imagem institucional condizente com o mercado regulado."
    ]
  },
  charlote: {
    tagline: "Vitrine de produtos para marca de salgadinhos.",
    category: "Institucional",
    role: "Desenvolvedor Front-End",
    year: "Lime Labs",
    stack: ["Tailwind CSS", "HTML5", "JavaScript"],
    overview:
      "Site de marca com catálogo de produtos e visual atrativo, focado em performance e identidade.",
    challenge:
      "Apresentar o portfólio de produtos de forma apetitosa e carregando rápido, com um visual moderno.",
    solution: [
      "Interface construída com Tailwind CSS para consistência e agilidade.",
      "Catálogo de produtos com layout responsivo.",
      "Otimização de assets para carregamento rápido."
    ],
    results: [
      "Visual moderno e coerente com a marca.",
      "Boa performance em dispositivos móveis."
    ]
  },
  "pvr-capital": {
    tagline: "Site institucional com backend em Node.js para empresa de M&A.",
    category: "Institucional",
    role: "Desenvolvedor Full-Stack",
    year: "Lime Labs",
    stack: ["Node.js", "JavaScript", "HTML5", "CSS3"],
    overview:
      "Site para empresa de soluções financeiras com foco em emissão de dívida e fusões e aquisições (M&A).",
    challenge:
      "Transmitir robustez e escalabilidade em um site institucional de alto padrão para o mercado financeiro.",
    solution: [
      "Backend em Node.js para robustez e escalabilidade.",
      "Front-end institucional alinhado ao posicionamento premium da empresa.",
      "Estrutura preparada para crescer com novos conteúdos e serviços."
    ],
    results: [
      "Presença digital sólida e escalável.",
      "Comunicação alinhada ao público corporativo."
    ]
  },
  brazilroute: {
    tagline: "Consultoria estratégica para techs expandindo no Brasil.",
    category: "Institucional",
    role: "Desenvolvedor Front-End",
    year: "Lime Labs",
    stack: ["React", "JavaScript", "SCSS"],
    overview:
      "Site para consultoria voltada a empresas de tecnologia que buscam expandir no mercado brasileiro.",
    challenge:
      "Refletir parceria estratégica e profissionalismo para um público internacional B2B.",
    solution: [
      "Interface em React com design profissional e internacional.",
      "Narrativa de conteúdo focada em valor estratégico.",
      "Layout responsivo e performático."
    ],
    results: [
      "Posicionamento claro como parceiro estratégico.",
      "Experiência coerente com o público corporativo global."
    ]
  },
  "ibmec-emprestimos": {
    tagline:
      "Sistema de gestão de empréstimo de equipamentos para laboratórios.",
    category: "Sistema Full-Stack",
    role: "Desenvolvedor Full-Stack",
    year: "IBMEC",
    stack: ["React", "Django REST Framework", "Python", "SQL"],
    overview:
      "Plataforma completa para cadastro de alunos e controle de empréstimo e devolução de equipamentos dos laboratórios do IBMEC (impressoras 3D, plotters, cortadoras a laser).",
    challenge:
      "Substituir controles manuais por um sistema confiável de governança de ativos, com rastreabilidade de quem retira e devolve cada equipamento.",
    solution: [
      "Painel administrativo em React para gestão de alunos, equipamentos e reservas.",
      "API REST em Django Rest Framework com regras de negócio de empréstimo/devolução.",
      "Modelagem de dados para inventário e histórico de uso."
    ],
    results: [
      "Controle centralizado e rastreável do acervo de equipamentos.",
      "Redução de erros e perdas no processo de empréstimo."
    ]
  },
  "ufrj-pesquisa": {
    tagline:
      "Jogo multiplayer como instrumento de pesquisa em neurociência (UFRJ).",
    category: "Pesquisa / Game",
    role: "Desenvolvedor",
    year: "UFRJ · 2024–2025",
    stack: ["Construct 3", "Python", "API REST"],
    overview:
      "Apoio ao desenvolvimento de um jogo multiplayer usado como instrumento de mensuração de colaboração em grupo, para uma tese de doutorado em neurociência.",
    challenge:
      "Traduzir hipóteses de pesquisa em uma mecânica de jogo capaz de coletar dados confiáveis de comportamento colaborativo entre participantes.",
    solution: [
      "Mecânicas multiplayer construídas em Construct 3.",
      "API em Python para orquestrar partidas e coletar dados dos jogadores.",
      "Instrumentação de eventos para posterior análise científica."
    ],
    results: [
      "Ferramenta funcional para coleta de dados experimentais.",
      "Suporte direto à pesquisa acadêmica de doutorado."
    ]
  },
  "cronograma-tedx": {
    tagline: "Cronograma interativo com palestrantes e quizzes para TEDx.",
    category: "Sistema Full-Stack",
    role: "Desenvolvedor Full-Stack",
    year: "IBMEC · 2025",
    stack: ["React Hooks", "Django", "Python", "REST"],
    overview:
      "Aplicação de cronograma dinâmico para evento TEDx, com exibição de palestrantes e quizzes interativos para o público.",
    challenge:
      "Oferecer uma experiência interativa ao público do evento e permitir gestão fácil dos conteúdos pela organização.",
    solution: [
      "Front-end reativo com React Hooks para cronograma e quizzes em tempo real.",
      "Backend Django para gestão de palestrantes, sessões e perguntas.",
      "Interface pensada para uso durante o evento ao vivo."
    ],
    results: [
      "Maior engajamento do público durante o evento.",
      "Gestão de conteúdo simples para a organização."
    ]
  },
  "okka-relatorios": {
    tagline:
      "Web app corporativo com workflow de aprovação e exportação em PDF.",
    category: "Sistema Full-Stack",
    role: "Desenvolvedor Full-Stack",
    year: "IBMEC · 2024",
    stack: ["React", "Django", "Python", "PDF"],
    overview:
      "Aplicação para registro de atividades corporativas com fluxo de aprovação em múltiplos níveis e geração de relatórios em PDF.",
    challenge:
      "Digitalizar o registro de atividades e o processo de aprovação, garantindo rastreabilidade e relatórios prontos para gestão.",
    solution: [
      "Workflow de aprovação em múltiplos níveis com controle de permissões.",
      "Exportação automática de relatórios em PDF.",
      "Interface em React integrada a backend Django."
    ],
    results: [
      "Processo de aprovação padronizado e auditável.",
      "Relatórios gerados automaticamente, poupando trabalho manual."
    ]
  }
};

export default caseStudies;
