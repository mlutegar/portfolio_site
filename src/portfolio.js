/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  duration: 1400 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Michel Lutegar",
  title: "Olá, eu sou Michel",
  subTitle: emoji(
    "Sou o Michel, desenvolvedor Full-Stack. Pego a sua ideia e cuido pra que ela nasça bem, cresça rápido e chegue inteira até o usuário final. Sua visão, no ar e funcionando."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Highlight stats shown below the hero
const greetingStats = [
  {value: "8+", label: "Projetos entregues"},
  {value: "4", label: "Empresas"},
  {value: "6", label: "Períodos Top-3 (CR)"},
  {value: "3+", label: "Anos de experiência"}
];

// Social Media Links

const socialMediaLinks = {
  github: `https://github.com/${
    import.meta.env.VITE_GITHUB_USERNAME || "mlutegar"
  }`,
  linkedin: "https://www.linkedin.com/in/mlutegar/",
  gmail: import.meta.env.VITE_EMAIL || "mlutegar@gmail.com",
  whatsapp: "5521998795887", // Substitua pelo seu número com código do país
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "O que eu faço",
  subTitle: "DESENVOLVEDOR FULL-STACK FOCADO EM REACT/JSX E DJANGO/PYTHON",
  skills: [
    emoji(
      "⚡ Desenvolvimento de interfaces front-end interativas com React/JSX, HTML5, CSS3 e TypeScript"
    ),
    emoji(
      "⚡ Criação de APIs REST e back-end robustos com Django/Python e FastAPI"
    ),
    emoji(
      "⚡ Integração com bancos de dados MySQL, desenvolvimento de jogos e soluções de e-commerce"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js-square"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "django",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "go",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "c",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "construct3",
      fontAwesomeClassname: "fas fa-gamepad"
    },
    {
      skillName: "orange",
      fontAwesomeClassname: "fas fa-chart-line"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "IBMEC",
      logo: new URL("./assets/images/ibmeclogo.webp", import.meta.url).href,
      subHeader: "Engenharia da Computação",
      duration: "2022 - 2026 (Previsão)",
      desc: "Reconhecido pela faculdade por estar entre os três alunos com maior Coeficiente de Rendimento (CR) do curso durante seis períodos (2022.2, 2023.1, 2023.2, 2024.1, 2024.2 e 2025.2).",
      descBullets: [
        "Médias: 10, 9.9, 9.6, 9.8, 9.8 e 10 nos seis períodos de destaque",
        "Técnico de Laboratório & Desenvolvedor desde 08/2023"
      ]
    },
    {
      schoolName: "Senac",
      logo: new URL("./assets/images/senac.webp", import.meta.url).href,
      subHeader: "Técnico em T.I.",
      duration: "Concluído em 06/2024",
      desc: "Formação técnica completa em Tecnologia da Informação.",
      descBullets: ["Base sólida em desenvolvimento e infraestrutura de TI"]
    }
  ]
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Desenvolvedor de Sistemas & Analista Fullstack",
      company: "ABRAPA",
      companylogo: new URL("./assets/images/abrapa.webp", import.meta.url).href,
      date: "11/2025 – Atual",
      current: true,
      tech: ["CI/CD", "Fly.io", "Data Viz", "LGPD"],
      desc: "Arquitetura, desenvolvimento e manutenção da plataforma MAIA — sistema psicopedagógico de avaliação clínica utilizado em atendimento real de crianças, em parceria com pesquisadora da UFRJ.",
      descBullets: [
        "Implementação de pipeline de entrega contínua (CI/CD) e gerenciamento de infraestrutura em produção no Fly.io",
        "Desenvolvimento de módulos analíticos de dados: gráficos de dispersão, perfis radar e relatórios estatísticos",
        "Conformidade técnica com as diretrizes da LGPD e garantia de alta disponibilidade e segurança dos dados"
      ]
    },
    {
      role: "Desenvolvedor Front-End / E-commerce",
      company: "Lime Labs",
      companylogo: new URL("./assets/images/limelabs.webp", import.meta.url)
        .href,
      date: "09/2024 – 06/2025",
      tech: ["React", "TypeScript", "VTEX IO", "APIs"],
      desc: "Atuação direta no desenvolvimento de plataformas para clientes externos (VTEX IO), realizando levantamento de requisitos a partir do briefing, análise de escopo e entrega técnica.",
      descBullets: [
        "Integração de APIs complexas de checkout e arquitetura de componentes em React e TypeScript",
        "Entrega de ponta a ponta de grandes projetos: Silva Nutrition, Festival Vale do Café e Casarão dos Lustres",
        "Garantia de performance e escalabilidade dos produtos entregues"
      ]
    },
    {
      role: "Técnico de Laboratório & Desenvolvedor",
      company: "IBMEC",
      companylogo: new URL("./assets/images/ibmeclogo.webp", import.meta.url)
        .href,
      date: "08/2023 – Atual",
      current: true,
      tech: ["Sistemas Internos", "Redes", "Suporte"],
      desc: "Suporte especializado à infraestrutura técnica de laboratórios de redes e eletrônica, gerenciando ambientes e orientando usuários em atividades práticas.",
      descBullets: [
        "Desenvolvimento do sistema interno de gestão e governança de ativos (impressoras 3D, plotters e cortadoras laser)",
        "Otimização do fluxo de agendamento e empréstimo de insumos da instituição"
      ]
    },
    {
      role: "Estagiário em Análise de Dados",
      company: "Editora Globo",
      companylogo: new URL(
        "./assets/images/editora_globo.webp",
        import.meta.url
      ).href,
      date: "08/2022 – 08/2023",
      tech: ["Excel", "Power BI", "Análise de Dados"],
      desc: "Criação e atualização de planilhas no Excel, elaboração de relatórios em Excel e Power BI para facilitar a tomada de decisão gerencial.",
      descBullets: [
        "Automação de planilhas e rotinas de consolidação de dados, reduzindo o esforço manual recorrente",
        "Construção de dashboards em Power BI para apoiar a tomada de decisão gerencial"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Works Section - Combined Projects

const works = {
  title: "Trabalhos",
  subtitle: "Uma coleção de projetos que eu trabalhei.",
  projects: [
    {
      image: new URL("./assets/images/useriu.webp", import.meta.url).href,
      projectName: "Useriu",
      projectDesc:
        "Site de roupas femininas com design vibrante e navegação intuitiva. Desenvolvido com React para proporcionar uma experiência de compra moderna e responsiva.",
      footerLink: [
        {
          name: "Visitar Site",
          url: "https://useriu.com.br"
        }
      ]
    },
    {
      image: new URL("./assets/images/pilotage.webp", import.meta.url).href,
      projectName: "Pilotage",
      projectDesc:
        "Site institucional para empresa autorizada pela CVM, focada em gestão de recursos financeiros. Desenvolvido com WordPress para máxima flexibilidade de conteúdo.",
      footerLink: [
        {
          name: "Visitar Site",
          url: "https://pilotage.com.br"
        }
      ]
    },
    {
      image: new URL("./assets/images/charlote.webp", import.meta.url).href,
      projectName: "Charlote",
      projectDesc:
        "Site para marca de salgadinhos com catálogo de produtos e design atrativo. Implementado com Tailwind CSS para um visual moderno e performance otimizada.",
      footerLink: [
        {
          name: "Visitar Site",
          url: "https://charlote.com.br"
        }
      ]
    },
    {
      image: new URL("./assets/images/pvr.webp", import.meta.url).href,
      projectName: "PVR Capital",
      projectDesc:
        "Site institucional para empresa de soluções financeiras com foco em emissão de dívida e M&A. Backend desenvolvido em Node.js para robustez e escalabilidade.",
      footerLink: [
        {
          name: "Visitar Site",
          url: "https://pvr.capital"
        }
      ]
    },
    {
      image: new URL("./assets/images/brazilroute.webp", import.meta.url).href,
      projectName: "Brazilroute",
      projectDesc:
        "Site para consultoria estratégica voltada a empresas de tecnologia expandindo no Brasil. Desenvolvido em React com design profissional que reflete parceria estratégica.",
      footerLink: [
        {
          name: "Visitar Site",
          url: "https://brazilroute.com"
        }
      ]
    },
    {
      image: new URL("./assets/images/ibmec.webp", import.meta.url).href,
      projectName: "IBMEC Empréstimos",
      projectDesc:
        "Sistema completo para cadastro de alunos e gestão de empréstimo/devolução de equipamentos com painel em React e API Django Rest Framework.",
      footerLink: [
        {
          name: "Ver Projeto",
          url: `https://github.com/${
            import.meta.env.VITE_GITHUB_USERNAME || "mlutegar"
          }`
        }
      ]
    },
    {
      image: new URL("./assets/images/ufrj.webp", import.meta.url).href,
      projectName: "UFRJ - Pesquisa",
      projectDesc:
        "Apoio no desenvolvimento de jogo multiplayer para tese de doutorado (UFRJ) em neurociência, criado como instrumento para mensurar a colaboração em grupo.",
      footerLink: [
        {
          name: "Ver Projeto",
          url: `https://github.com/${
            import.meta.env.VITE_GITHUB_USERNAME || "mlutegar"
          }`
        }
      ]
    },
    {
      image: new URL("./assets/images/tedx.webp", import.meta.url).href,
      projectName: "Cronograma TEDx",
      projectDesc:
        "Cronograma dinâmico com exibição de palestrantes e quizzes, desenvolvido com React Hooks e backend Django para gestão de conteúdos.",
      footerLink: [
        {
          name: "Ver Projeto",
          url: `https://github.com/${
            import.meta.env.VITE_GITHUB_USERNAME || "mlutegar"
          }`
        }
      ]
    },
    {
      image: new URL("./assets/images/okka.webp", import.meta.url).href,
      projectName: "Okka Relatórios",
      projectDesc:
        "Web app para registro de atividades corporativas com workflow de aprovação em múltiplos níveis e exportação de relatórios em PDF.",
      footerLink: [
        {
          name: "Ver Projeto",
          url: `https://github.com/${
            import.meta.env.VITE_GITHUB_USERNAME || "mlutegar"
          }`
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Conquistas e Certificações 🏆 "),
  subtitle:
    "Reconhecimentos acadêmicos, certificações e conquistas importantes!",

  achievementsCards: [
    {
      title: "Destaque Acadêmico IBMEC – 6 períodos",
      category: "Acadêmico",
      categoryIcon: "🎓",
      date: "2022 – 2025",
      highlight: true, // card em destaque (vitrine de troféus)
      seal: "Top 3", // selo/medalha exibido no card
      sealLabel: "Reconhecimento Top 3 da turma", // rótulo acessível
      subtitle:
        "Reconhecido pela faculdade por estar entre os três alunos com maior CR do curso durante seis períodos consecutivos.",
      // Métricas-herói (números animam ao entrar na viewport)
      heroMetrics: [
        {value: 9.85, decimals: 2, label: "CR médio"},
        {value: 6, decimals: 0, label: "semestres no Top 3"}
      ],
      // Médias por período viradas em barras/selos visuais
      stats: [
        {label: "2022.2", value: "10"},
        {label: "2023.1", value: "9.9"},
        {label: "2023.2", value: "9.6"},
        {label: "2024.1", value: "9.8"},
        {label: "2024.2", value: "9.8"},
        {label: "2025.2", value: "10"}
      ],
      image: new URL("./assets/images/ibmec_star.webp", import.meta.url).href,
      imageAlt: "IBMEC Logo",
      footerLink: [
        {
          name: "Ver formação",
          url: "#education"
        }
      ]
    },
    {
      title: "Certificação Cisco",
      category: "Certificação",
      categoryIcon: "🌐",
      date: "2024",
      subtitle:
        "Networking Essentials Certificate - Certificação em fundamentos de redes.",
      tags: ["Redes", "Networking Essentials"],
      verified: true, // exibe selo "Verificável"
      image: new URL("./assets/images/cisco.webp", import.meta.url).href,
      imageAlt: "Cisco Logo",
      footerLink: [
        {
          name: "Ver Certificação",
          url: "https://www.linkedin.com/in/mlutegar/details/certifications/"
        }
      ]
    },

    {
      title: "Formação Técnica Senac",
      category: "Formação Técnica",
      categoryIcon: "🛠️",
      date: "2024",
      subtitle:
        "Técnico em T.I. - Formação completa em Tecnologia da Informação concluída em 2024.",
      tags: ["Técnico em T.I.", "Infraestrutura"],
      image: new URL("./assets/images/senac.webp", import.meta.url).href,
      imageAlt: "Senac Logo",
      footerLink: [
        {
          name: "Certificado",
          url: "https://www.linkedin.com/in/mlutegar/details/certifications/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Publications Section

const publicationsSection = {
  title: emoji("Publicações 📚"),
  subtitle:
    "Artigos científicos revisados por pares em congressos brasileiros.",

  publications: [
    {
      title:
        "Investigating image pre-processing techniques to enhance Brazilian license plate recognition",
      titleLang: "en", // título em inglês (leitores de tela / SEO)
      category: "CBIC 2025",
      categoryIcon: "📄",
      date: "2025",
      year: 2025,
      authorRole: "1º autor",
      venue:
        "Anais do 16º Congresso Brasileiro de Inteligência Computacional (CBIC 2025)",
      authors: [
        "Michel Lutegar",
        "André Coelho",
        "Marceu Filho",
        "Rigel Procópio Fernandes",
        "Thiago Silva de Souza",
        "Clayton J. A. Silva"
      ],
      doi: "10.21528/CBIC2025-1191901",
      url: "https://sbia.org.br/eventos/cbic_2025/cbic2025-1191901/",
      subtitle:
        "Sistema embarcado de reconhecimento de placas em tempo real voltado à segurança pública, combinando detecção YOLO e OCR. Avalia 8 técnicas de pré-processamento de imagem para maximizar a acurácia do OCR em placas brasileiras.",
      tags: ["OCR", "YOLO", "Visão Computacional", "Placas veiculares"],
      verified: true, // exibe selo "Verificável" (revisado por pares)
      footerLink: [
        {
          name: "Ver publicação",
          url: "https://sbia.org.br/eventos/cbic_2025/cbic2025-1191901/"
        },
        {
          name: "DOI",
          url: "https://doi.org/10.21528/CBIC2025-1191901"
        }
      ]
    },
    {
      title:
        "Comparative Performance Analysis of LoRa and WiFi Technologies for CanSat Communication Systems",
      titleLang: "en",
      category: "SBrT 2025",
      categoryIcon: "📡",
      date: "2025",
      year: 2025,
      venue:
        "XLIII Simpósio Brasileiro de Telecomunicações e Processamento de Sinais (SBrT 2025)",
      authors: [
        "Andre Costa Coelho",
        "Marceu Veiga De Almeida Filho",
        "Michel Lutegar Dorsi Pereira",
        "Rigel Procópio Fernandes",
        "Thiago Silva de Souza",
        "Clayton Jones Alves Da Silva"
      ],
      doi: "10.14209/sbrt.2025.1571157335",
      url: "https://biblioteca.sbrt.org.br/articles/4984",
      subtitle:
        "Análise comparativa empírica das tecnologias LoRa e WiFi para sistemas CanSat, medindo atraso, perda de pacotes e taxa de transmissão de 1 m a 200 m, com validação em campo por drone.",
      tags: ["LoRa", "WiFi", "CanSat", "Telecomunicações", "IoT"],
      verified: true,
      footerLink: [
        {
          name: "Ver publicação",
          url: "https://biblioteca.sbrt.org.br/articles/4984"
        },
        {
          name: "DOI",
          url: "https://doi.org/10.14209/sbrt.2025.1571157335"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blog",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Palestras",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Currículo",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Entre em Contato ☎️"),
  subtitle:
    "Quer discutir um projeto ou apenas dizer olá? Minha caixa de entrada está aberta para todos.",
  number: "(21) 99879-5887",
  email_address: import.meta.env.VITE_EMAIL || "mlutegar@gmail.com",
  // Optional: endpoint that accepts a POST with {name, email, message}
  // (e.g. Formspree "https://formspree.io/f/xxxx" or Web3Forms).
  // When empty, the form falls back to opening the user's mail client.
  form_action: import.meta.env.VITE_CONTACT_FORM_ACTION || ""
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  greetingStats,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  workExperiences,
  openSource,
  works,
  achievementSection,
  publicationsSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
