<template>
  <div>
    <the-navbar :logo="info.logo"/>
    <b-container fluid>
      <countdown v-if="beforeSubs" :date="subsStart" title="Inscrições em breve!" />
      <countdown v-if="afterSubs && beforeEvent" :date="eventDay" title="HackathonUSP 2018" />
      <the-header :subs="subs" :info="info"/>
      <main>
        <about :info="aboutInfo" />
        <prizes :info="prizesInfo" />
        <judges :info="judgesInfo" />
        <judging-criteria />
        <promoters/>
      </main>
      <the-footer/>
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
      info: {
        logo: require("@/assets/hackathon-usp-2018.1.svg"),
        title: "HackathonUSP 2018.1",
        phrase: `Aplicando <strong>ciência de dados</strong> para melhorar
        <span class="text-md-nowrap">o dia a dia universitário</span>`,
        date: `9 e 10 de junho de 2018`,
        location: `Instituto de Matemática e Estatística da USP`,
        subscriptions: `http://uclab.xyz/hack-subscribe`,
        rules: `http://uclab.xyz/hack-rules`
      },
      aboutInfo: {
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
      },
      prizesInfo: {
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
      },
      judgesInfo: {
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
      }
    };
  },
  computed: {
    subs() {
      return !this.beforeSubs && !this.afterSubs;
    },
    eventDay() {
      return new Date("June, 09, 2018, 15:00:00");
    },
    subsStart() {
      return new Date("May, 16, 2018, 19:00:00");
    },
    subsEnd() {
      return new Date("May, 20, 2018, 22:00:00");
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
