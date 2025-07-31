/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Michel Lutegar",
  title: "Olá, eu sou Michel",
  subTitle: emoji(
    "Desenvolvedor Full-Stack apaixonado 🚀 com experiência em React/JSX no front-end e Django/Python no back-end, criando aplicações web completas, escaláveis e de alta performance."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mlutegar",
  linkedin: "https://www.linkedin.com/in/mlutegar/",
  gmail: "mlutegar@gmail.com",
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
    emoji("⚡ Criação de APIs REST e back-end robustos com Django/Python e FastAPI"),
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
      logo: require("./assets/images/ibmec.png"),
      subHeader: "Engenharia da Computação",
      duration: "2022 - 2026 (Previsão)",
      desc: "Reconhecido pela faculdade por estar entre os três alunos com maior Coeficiente de Rendimento (CR) do curso durante cinco períodos consecutivos.",
      descBullets: [
        "Médias: 10.0, 9.9, 9.6, 9.8, 9.8 nos últimos períodos",
        "Assistente de Laboratório desde 08/2023"
      ]
    },
    {
      schoolName: "Senac",
      logo: require("./assets/images/senac.png"),
      subHeader: "Técnico em T.I.",
      duration: "Concluído em 06/2024",
      desc: "Formação técnica completa em Tecnologia da Informação.",
      descBullets: ["Base sólida em desenvolvimento e infraestrutura de TI"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/React", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend/Python",
      progressPercentage: "80%"
    },
    {
      Stack: "Database/SQL",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Desenvolvedor Front-End",
      company: "Lime Labs",
      companylogo: require("./assets/images/limelabs.jpg"),
      date: "09/2024 – Atual",
      desc: "Desenvolvimento de sites e soluções de e-commerce na plataforma VTEX IO, com personalização de componentes e implementação de interfaces responsivas.",
      descBullets: [
        "Desenvolvimento do site Silva Nutrition (www.silvanutrition.com.br)",
        "Implementação de interfaces em React, HTML, CSS e TypeScript",
        "Integrações com APIs para funcionalidades de checkout e carrinho"
      ]
    },
    {
      role: "Assistente de Laboratório",
      company: "IBMEC",
      companylogo: require("./assets/images/ibmec.png"),
      date: "08/2023 – Atual",
      desc: "Responsável pela organização do laboratório, manutenção de equipamentos e orientação de alunos em atividades práticas."
    },
    {
      role: "Estagiário em Análise de Dados",
      company: "Editora Globo",
      companylogo: require("./assets/images/editora_globo.webp"),
      date: "08/2022 – 08/2023",
      desc: "Criação e atualização de planilhas no Excel, elaboração de relatórios em Excel e Power BI para facilitar a tomada de decisão gerencial."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projetos Relevantes",
  subtitle: "PRINCIPAIS PROJETOS DESENVOLVIDOS EM DIFERENTES CONTEXTOS",
  projects: [
    {
      image: require("./assets/images/ibmec.png"),
      projectName: "Sistema de Empréstimo - IBMEC",
      projectDesc: "Sistema completo para cadastro de alunos e gestão de empréstimo/devolução de equipamentos com painel em React e API Django Rest Framework.",
      footerLink: [
        {
          name: "Ver Projeto",
          url: "https://github.com/mlutegar" // Adicionar link real do projeto
        }
      ]
    },
    {
      image: require("./assets/images/ufrj.png"),
      projectName: "Jogo Multiplayer - UFRJ",
      projectDesc: "Jogo multiplayer online desenvolvido em Construct 3 para até 5 usuários simultâneos, com back-end em Python para análise de dados de IA.",
      footerLink: [
        {
          name: "Ver Projeto",
          url: "https://github.com/mlutegar" // Adicionar link real do projeto
        }
      ]
    },
    {
      image: require("./assets/images/tedx.png"),
      projectName: "Cronograma TEDx",
      projectDesc: "Cronograma dinâmico com exibição de palestrantes e quizzes, desenvolvido com React Hooks e backend Django para gestão de conteúdos.",
      footerLink: [
        {
          name: "Ver Projeto",
          url: "https://github.com/mlutegar" // Adicionar link real do projeto
        }
      ]
    },
    {
      image: require("./assets/images/okka.png"),
      projectName: "Ferramenta de Relatórios - Okka",
      projectDesc: "Web app para registro de atividades corporativas com workflow de aprovação em múltiplos níveis e exportação de relatórios em PDF.",
      footerLink: [
        {
          name: "Ver Projeto",
          url: "https://github.com/mlutegar" // Adicionar link real do projeto
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Conquistas e Certificações 🏆 "),
  subtitle:
    "Reconhecimentos acadêmicos, certificações e conquistas importantes!",

  achievementsCards: [
    {
      title: "Reconhecimento Acadêmico IBMEC",
      subtitle:
        "Reconhecido pela faculdade por estar entre os três alunos com maior Coeficiente de Rendimento (CR) do curso durante cinco períodos consecutivos.",
      image: require("./assets/images/ibmec_star.png"),
      imageAlt: "IBMEC Logo",
      footerLink: [
        {
          name: "Mais informações",
          url: ""
        }
      ]
    },
    {
      title: "Certificação Cisco",
      subtitle:
        "Networking Essentials Certificate - Certificação em fundamentos de redes.",
      image: require("./assets/images/cisco.png"),
      imageAlt: "Cisco Logo",
      footerLink: [
        {
          name: "Ver Certificação",
          url: ""
        }
      ]
    },

    {
      title: "Formação Técnica Senac",
      subtitle: "Técnico em T.I. - Formação completa em Tecnologia da Informação concluída em 2024.",
      image: require("./assets/images/senac.png"),
      imageAlt: "Senac Logo",
      footerLink: [
        {name: "Certificado", url: ""}
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
  email_address: "mlutegar@gmail.com"
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
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
