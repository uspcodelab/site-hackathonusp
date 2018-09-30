<template>
  <div>
    <the-navbar :logo="headerInfo.logo"/>
    <b-container fluid>
      <countdown v-if="beforeSubs" :date="subsStart" :colors="colors" title="Inscrições em breve!" />
      <countdown v-if="afterSubs && beforeEvent" :date="eventDay" :colors="colors" title="HackathonUSP 2018" />
      <the-header :subs="subs" :info="headerInfo" :colors="colors"/>
      <main>
        <about :info="aboutInfo" :colors="colors" />
        <prizes :info="prizesInfo" :colors="colors" />
        <judges :info="judgesInfo" :colors="colors" />
        <judging-criteria :info="judgingCriteriaInfo" :colors="colors" />
        <promoters :info="promotersInfo" :colors="colors" />
      </main>
      <the-footer :colors="colors" />
    </b-container>
  </div>
</template>

<script>
import TheNavbar from "~/components/Navbar.vue";
import Countdown from "~/components/Countdown.vue";
import TheHeader from "~/components/TheHeader.vue";
import TheFooter from "~/components/TheFooter.vue";
import About from "~/components/About.vue";
import Prizes from "~/components/Prizes.vue";
import Promoters from "~/components/Promoters.vue";
import Judges from "~/components/Judges.vue";
import JudgingCriteria from "~/components/JudgingCriteria.vue";

export default {
  components: {
    TheNavbar,
    Countdown,
    TheHeader,
    TheFooter,
    About,
    Prizes,
    Promoters,
    Judges,
    JudgingCriteria
  },
  data() {
    return {
      beforeSubs: false,
      afterSubs: false,
      beforeEvent: true,
      now: "",
      colors: {
        primaryColor: "#e9c241",
        secondaryColor: "#70beb6",
        darkColor: "#2a2827",
        lightColor: "#f8f9fa",
        gradientStartColor: "#70beb6"
      },
      headerInfo: {
        logo: require("@/assets/hackathon-usp-2018.2.svg"),
        title: "HackathonUSP 2018.2",
        phrase: `A tecnologia a favor da <strong>sustentabilidade financeira<strong> das universidades`,
        date: `10 e 11 de novembro de 2018`,
        location: `Instituto de Matemática e Estatística da USP`,
        subscriptions: `http://uclab.xyz/hack-subscribe`,
        rules: `http://uclab.xyz/hack-rules`
      },
      aboutInfo: {
        theme: "Título",
        question: `Pergunta`,
        description: `Descrição do tema`,
        topics: [
          {
            id: 0,
            imgURL: require("@/assets/symbols/money-flower.svg"),
            title: "Correlacione dados",
            text:
              "Procure diferentes fontes de dados e investigue como elas podem se cruzar"
          },
          {
            id: 1,
            imgURL: require("@/assets/symbols/shield.svg"),
            title: "Encontre padrões",
            text:
              "Use métodos manuais e automáticos para revelar padrões que estão ocultos"
          },
          {
            id: 2,
            imgURL: require("@/assets/symbols/balance.svg"),
            title: "Dinamize aplicações",
            text:
              "Faça sistemas que possam reagir a mudanças e aprender com o seu próprio funcionamento"
          },
          {
            id: 3,
            imgURL: require("@/assets/symbols/data.svg"),
            title: "Visualize conexões",
            text:
              "Crie representações intuitivas e facilite o entendimento de fenômenos complexos"
          },
          {
            id: 4,
            imgURL: require("@/assets/symbols/money.svg"),
            title: "Visualize conexões",
            text:
              "Crie representações intuitivas e facilite o entendimento de fenômenos complexos"
          }
        ]
      },
      prizesInfo: {
        firstPrize: `Apple <strong>iPad Mini</strong>
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
      },
      judgesInfo: {
        judges: [
          {
            id: 1,
            imgURL: require("@/assets/judges/placeholder.png"),
            imgAlt: "placeholder",
            name: "Em breve...",
            bio: ``
          },
          {
            id: 2,
            imgURL: require("@/assets/judges/placeholder.png"),
            imgAlt: "placeholder",
            name: "Em breve...",
            bio: ``
          },
          {
            id: 3,
            imgURL: require("@/assets/judges/placeholder.png"),
            imgAlt: "placeholder",
            name: "Em breve...",
            bio: ``
          },
          {
            id: 4,
            imgURL: require("@/assets/judges/placeholder.png"),
            imgAlt: "placeholder",
            name: "Em breve...",
            bio: ``
          },
          {
            id: 5,
            imgURL: require("@/assets/judges/placeholder.png"),
            imgAlt: "placeholder",
            name: "Em breve...",
            bio: ``
          }
        ]
      },
      judgingCriteriaInfo: {
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
      },
      promotersInfo: {
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
      }
    };
  },
  computed: {
    subs() {
      return !this.beforeSubs && !this.afterSubs;
    },
    eventDay() {
      return new Date("November, 10, 2018, 15:00:00");
    },
    subsStart() {
      return new Date("November, 17, 2018, 19:00:00");
    },
    subsEnd() {
      return new Date("November, 21, 2018, 22:00:00");
    }
  },
  mounted() {
    this.timer_loop();
  },
  methods: {
    timer_loop() {
      this.now = new Date();
      this.beforeSubs = this.now < this.subsStart;
      this.afterSubs = this.now > this.subsEnd;
      this.beforeEvent = this.now < this.eventDay;
      setTimeout(this.timer_loop, 1000);
    }
  }
};
</script>
