export const colors = {
  primaryColor: "#e13566",
  secondaryColor: "#20b5de",
  darkColor: "#2a2827",
  lightColor: "#f8f9fa",
  gradientStartColor: "#ff2a49"
};

export const headerInfo = {
  logo: require("@/assets/hackathon-usp-2018.1.svg"),
  title: "HackathonUSP 2018.1",
  phrase: `Aplicando <strong>ciência de dados</strong> para melhorar
  <span class="text-md-nowrap">o dia a dia universitário</span>`,
  date: `9 e 10 de junho de 2018`,
  location: `Instituto de Matemática e Estatística da USP`,
  subscriptions: `http://uclab.xyz/hack-subscribe`,
  rules: `http://uclab.xyz/hack-rules`
};

export const navInfo = [
  {
    id: `#header`,
    text: `HackathonUSP`
  },
  {
    id: `#about`,
    text: `Tema`
  },
  {
    id: `#prizes`,
    text: `Prêmios`
  },
  {
    id: `#judges`,
    text: `Jurados`
  },
  {
    id: `#judging-criteria`,
    text: `Critérios`
  },
  {
    id: `#promoters`,
    text: `Realização`
  }
];

export const aboutInfo = {
  theme: "Ciência de Dados",
  question: `<strong>Como a ciência de dados pode melhorar o dia a dia
        universitário?</strong>`,
  description: `Considerada o
        <a href="https://www.coursera.org/learn/data-manipulation/lecture/tUjcE/a-fourth-paradigm-of-science">4º paradigma da ciência</a>,
        o HackathonUSP desafia os participantes desta edição
        a criarem soluções usando essa nova forma de ver o mundo`,
  topics: [
    {
      id: 0,
      imgURL: require("@/assets/symbols/databases.svg"),
      title: "Correlacione dados",
      text:
        "Procure diferentes fontes de dados e investigue como elas podem se cruzar"
    },
    {
      id: 1,
      imgURL: require("@/assets/symbols/binaries.svg"),
      title: "Encontre padrões",
      text:
        "Use métodos manuais e automáticos para revelar padrões que estão ocultos"
    },
    {
      id: 2,
      imgURL: require("@/assets/symbols/containers.svg"),
      title: "Dinamize aplicações",
      text:
        "Faça sistemas que possam reagir a mudanças e aprender com o seu próprio funcionamento"
    },
    {
      id: 3,
      imgURL: require("@/assets/symbols/graphs.svg"),
      title: "Visualize conexões",
      text:
        "Crie representações intuitivas e facilite o entendimento de fenômenos complexos"
    }
  ]
};

export const prizesInfo = {
  firstPrize: `Viagem para o <strong>Vale do Silício</strong>
          <br><strong class="text-gold">+</strong><br>
          Curso de curta duração na <strong>Universidade de Stanford</strong>
          <br><strong class="text-gold">+</strong><br>
          <strong>Troféu impresso em 3D</strong> do HackathonUSP
          <br><strong class="text-gold">+</strong><br>
          <strong>Medalha</strong> do HackathonUSP `,
  secondPrize: `Amazon <strong>Kindle 8ª Geração</strong>
          <br><strong class="text-silver">+</strong><br>
          <strong>Medalha</strong> do HackathonUSP`,
  thirdPrize: `Fone de ouvido <strong>JBL</strong>
          <br><strong class="text-bronze">+</strong><br>
          <strong>Medalha</strong> do HackathonUSP`
};

export const judgesInfo = {
  judges: [
    {
      id: 1,
      imgURL: require("@/assets/judges/denis_maua.jpg"),
      imgAlt: "prof. Dênis Maua",
      name: "Denis Mauá",
      bio: `Professor Asistente de Ciência da Computação no IME,
        pesquisa raciocínio probabilistico e suas aplicações
        em inteligênica artificial e aprendizagem de máquina`
    },
    {
      id: 2,
      imgURL: require("@/assets/judges/vitor_paulo.jpg"),
      imgAlt: "Paulo Almeida",
      name: "Paulo Almeida",
      bio: `Coordenador Administrativo da Pró-Reitoria de Pesquisa,
        participa da organização do USP talks, do TEDxUSP e
        é o principal contato com o Coursera na USP`
    },
    {
      id: 3,
      imgURL: require("@/assets/judges/nina_hirata.jpg"),
      imgAlt: "prof. Nina Hirata",
      name: "Nina Hirata",
      bio: `Professora associada de Ciência da Computação do IME
        da graduação e da pós, pesquisa reconhecimento de padrões
        e machine learning, com aplicações em análise de imagens`
    },
    {
      id: 4,
      imgURL: require("@/assets/judges/isa_kotsubo.jpg"),
      imgAlt: "Isa Kotsubo",
      name: "Isa Kotsubo",
      bio: `Graduanda em Engenharia de Minas da Poli, é membro titular
        do Núcleo de Empreendedorismo da USP, onde busca incentivar
        a inovação e o empreendedorismo na universidade`
    },
    {
      id: 5,
      imgURL: require("@/assets/judges/renato_cordeiro.jpg"),
      imgAlt: "Renato Cordeiro",
      name: "Renato Cordeiro",
      bio: `Mestrando em Ciência da Computação do IME estudando
        Engenharia de Software e Ciência de Dados, é co-fundador
        do USPCodeLab e um dos idealizadores do HackathonUSP`
    }
  ]
};

export const judgingCriteriaInfo = {
  criteria: [
    {
      id: 1,
      iconURL: require("@/assets/flaticon/idea-white.svg"),
      name: "Criatividade",
      description: `É uma solução original?
        Repensa, de forma diferente, algo que já existe?`
    },
    {
      id: 2,
      iconURL: require("@/assets/flaticon/paint-palette-white.svg"),
      name: "Design",
      description: `A solução possui uma boa interface?
        Tem uma boa experiência de usuário (UX)?`
    },
    {
      id: 3,
      iconURL: require("@/assets/flaticon/exclamation-white.svg"),
      name: "Impacto",
      description: `A ideia é escalável?
        Pode ser aplicada mundo real?`
    },
    {
      id: 4,
      iconURL: require("@/assets/flaticon/gears-white.svg"),
      name: "Funcionamento",
      description: `A aplicação pode ser usada num exemplo bem definido?
        Foi apresentado algum caso de uso?`
    }
  ]
};

export const promotersInfo = {
  sponsors: [
    {
      id: 1,
      webURL: "https://revelo.com.br/",
      imgURL: require("@/assets/sponsors/revelo-logo-rgb-alpha.svg"),
      name: "Revelo"
    },
    {
      id: 2,
      webURL: "https://www.vtex.com/",
      imgURL: require("@/assets/sponsors/vtex-logo-rgb-alpha.svg"),
      name: "VTEX"
    },
    {
      id: 3,
      webURL: "https://idwall.co/",
      imgURL: require("@/assets/sponsors/idwall-logo-rgb-alpha.svg"),
      name: "idwall"
    },
    {
      id: 4,
      webURL: "https://amaro.com/",
      imgURL: require("@/assets/sponsors/amaro-logo-bw-alpha.svg"),
      name: "Amaro"
    },
    {
      id: 5,
      webURL: "https://br.udacity.com/",
      imgURL: require("@/assets/sponsors/udacity-logo-rgb-alpha.svg"),
      name: "Udacity"
    },
    {
      id: 6,
      webURL: "https://flowsense.com.br/",
      imgURL: require("@/assets/sponsors/flowsense-logo-rgb-alpha.svg"),
      name: "Flowsense"
    },
    {
      id: 7,
      webURL: "https://movile.com/",
      imgURL: require("@/assets/sponsors/movile-logo-rgb-alpha.svg"),
      name: "Movile"
    }
  ],
  supporters: [
    {
      id: 1,
      webURL: "https://prp.usp.br/",
      imgURL: require("@/assets/supporters/prp-logo-rgb-alpha.png"),
      name: "PRP-USP"
    },
    {
      id: 2,
      webURL: "https://www.ime.usp.br/",
      imgURL: require("@/assets/supporters/ime-logo-bw-alpha.png"),
      name: "IME-USP"
    },
    {
      id: 3,
      webURL: "https://www.ime.usp.br/imejr/",
      imgURL: require("@/assets/supporters/imejr-logo-rgb-alpha.svg"),
      name: "IME Jr."
    }
  ],
  organizers: [
    {
      id: 1,
      webURL: "https://codelab.ime.usp.br/",
      imgURL: require("@/assets/organizers/ucl-logo-rgb-alpha.svg"),
      name: "USPCodeLab"
    },
    {
      id: 2,
      webURL: "https://hardwarelivreusp.org/",
      imgURL: require("@/assets/organizers/hl-logo-rgb-alpha.svg"),
      name: "Hardware Livre USP"
    },
    {
      id: 3,
      webURL: "http://uspempreende.org/",
      imgURL: require("@/assets/organizers/neu-logo-rgb-alpha.png"),
      name: "Nucleo de Empreendedorismo da USP"
    }
  ]
};
