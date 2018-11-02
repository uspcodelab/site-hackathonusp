export const colors = {
  primaryColor: "#e9c241",
  secondaryColor: "#70beb6",
  darkColor: "#2a2827",
  lightColor: "#f8f9fa",
  gradientStartColor: "#4DC0B5",
  gradientEndColor: "#4DC0B5" // #76e8dc   If not provided, gradient will end at PrimaryColor
};

export const headerInfo = {
  logo: require("@/assets/hackathon-usp-2018.2.svg"),
  title: "HackathonUSP 2018.2",
  phrase: `A tecnologia a favor da <strong>sustentabilidade financeira<strong> das universidades`,
  date: `10 e 11 de novembro de 2018`,
  location: `Instituto de Matemática e Estatística da USP`,
  subscriptions: `http://uclab.xyz/hack-subscribe`,
  rules: `http://uclab.xyz/hack-rules`,
  submit: ``
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
  theme: "Tecnologia Financeira",
  question: `Como usar a tecnologia em prol da <strong>sustentabilidade financeira</strong> das universidades?`,
  description: ` Explorando a área que gerou os primeiros unicórnios brasileiros, o HackathonUSP 
                 desafia os participantes desta edição a criarem soluções que misturam tecnologia
                 com o mundo financeiro`,
  topics: [
    {
      imgURL: require("@/assets/symbols/data.svg"),
      title: "Explore tendências",
      text:
        "Use métodos automáticos para mostrar onde recursos são direcionados"
    },
    {
      imgURL: require("@/assets/symbols/balance.svg"),
      title: "Visualize as opções",
      text:
        "Identifique oportunidades para melhorar a eficiência do uso de recursos"
    },
    {
      imgURL: require("@/assets/symbols/money-flower.svg"),
      title: "Encontre novas aplicações",
      text: "Proponha novas fontes de recurso ou explore as não utilizadas"
    },
    {
      imgURL: require("@/assets/symbols/money.svg"),
      title: "Estimule as trocas",
      text: "Promova o reúso de recursos em vez da aquisição de novos produtos"
    }
  ]
};

export const prizesInfo = {
  firstPrize: `Samsung <strong>Smartwatch</strong>
          <br><strong class="text-gold">+</strong><br>
          <strong>Troféu impresso em 3D</strong> do HackathonUSP
          <br><strong class="text-gold">+</strong><br>
          <strong>Medalha</strong> do HackathonUSP `,
  secondPrize: `Google <strong>Home Mini</strong>
          <br><strong class="text-silver">+</strong><br>
          Google <strong>Chromecast</strong>
          <br><strong class="text-silver">+</strong><br>
          <strong>Medalha</strong> do HackathonUSP`,
  thirdPrize: `JBL <strong>Go 2</strong>
          <br><strong class="text-bronze">+</strong><br>
          Cupom de crédito na <strong>Udemy</strong>
          <br><strong class="text-silver">+</strong><br>
          <strong>Medalha</strong> do HackathonUSP`
};

export const judgesInfo = {
  judges: [
    {
      imgURL: require("@/assets/judges/placeholder.png"),
      imgAlt: "placeholder",
      name: "Em breve...",
      bio: ``
    },
    {
      imgURL: require("@/assets/judges/placeholder.png"),
      imgAlt: "placeholder",
      name: "Em breve...",
      bio: ``
    },
    {
      imgURL: require("@/assets/judges/placeholder.png"),
      imgAlt: "placeholder",
      name: "Em breve...",
      bio: ``
    }
    // {
    //   imgURL: require("@/assets/judges/placeholder.png"),
    //   imgAlt: "placeholder",
    //   name: "Em breve...",
    //   bio: ``
    // },
    // {
    //   imgURL: require("@/assets/judges/placeholder.png"),
    //   imgAlt: "placeholder",
    //   name: "Em breve...",
    //   bio: ``
    // }
  ]
};

export const judgingCriteriaInfo = {
  criteria: [
    {
      iconURL: require("@/assets/flaticon/idea-white.svg"),
      name: "Criatividade",
      description: `É uma solução original?
        Repensa, de forma diferente, algo que já existe?`
    },
    {
      iconURL: require("@/assets/flaticon/paint-palette-white.svg"),
      name: "Design",
      description: `A solução possui uma boa interface?
        Tem uma boa experiência de usuário (UX)?`
    },
    {
      iconURL: require("@/assets/flaticon/exclamation-white.svg"),
      name: "Impacto",
      description: `A ideia é escalável?
        Pode ser aplicada mundo real?`
    },
    {
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
      webURL: "https://pagseguro.uol.com.br",
      imgURL: require("@/assets/sponsors/pagseguro-uol.png"),
      name: "PagSeguro"
    },
    {
      webURL: "https://banco.bradesco/",
      imgURL: require("@/assets/sponsors/bradesco.svg"),
      name: "Bradesco"
    },
    {
      webURL: "https://www.vtex.com/",
      imgURL: require("@/assets/sponsors/vtex-logo-rgb-alpha.svg"),
      name: "VTEX"
    },
    {
      webURL: "https://www.tfgco.com",
      imgURL: require("@/assets/sponsors/tfg-logo.svg"),
      name: "TFG"
    },
    {
      webURL: "https://www.taqtile.com.br",
      imgURL: require("@/assets/sponsors/taqtile.png"),
      name: "Taqtile"
    },
    {
      webURL: "https://www.udemy.com.br",
      imgURL: require("@/assets/sponsors/udemy_logo_vertical_TM_RGB.png"),
      name: "Udemy"
    }
    // {
    //
    //   webURL: "https://br.udacity.com/",
    //   imgURL: require("@/assets/sponsors/udacity-logo-rgb-alpha.svg"),
    //   name: "Udacity"
    // },
    // {
    //
    //   webURL: "https://flowsense.com.br/",
    //   imgURL: require("@/assets/sponsors/flowsense-logo-rgb-alpha.svg"),
    //   name: "Flowsense"
    // },
    // {
    //
    //   webURL: "https://movile.com/",
    //   imgURL: require("@/assets/sponsors/movile-logo-rgb-alpha.svg"),
    //   name: "Movile"
    // }
  ],
  supporters: [
    {
      webURL: "https://prp.usp.br/",
      imgURL: require("@/assets/supporters/prp-logo-rgb-alpha.png"),
      name: "PRP-USP"
    },
    {
      webURL: "https://www.ime.usp.br/",
      imgURL: require("@/assets/supporters/ime-logo-bw-alpha.png"),
      name: "IME-USP"
    },
    {
      webURL: "https://www.ime.usp.br/imejr/",
      imgURL: require("@/assets/supporters/imejr-logo-rgb-alpha.svg"),
      name: "IME Jr."
    },
    {
      webURL: "",
      imgURL: require("@/assets/supporters/logo-codelab.png"),
      name: "USPCodeLab São Carlos"
    }
  ],
  organizers: [
    {
      webURL: "https://codelab.ime.usp.br/",
      imgURL: require("@/assets/organizers/ucl-logo-rgb-alpha.svg"),
      name: "USPCodeLab"
    },
    {
      webURL: "https://hardwarelivreusp.org/",
      imgURL: require("@/assets/organizers/hl-logo-rgb-alpha.svg"),
      name: "Hardware Livre USP"
    },
    {
      webURL: "http://uspempreende.org/",
      imgURL: require("@/assets/organizers/neu-logo-rgb-alpha.png"),
      name: "Nucleo de Empreendedorismo da USP"
    }
  ]
};
