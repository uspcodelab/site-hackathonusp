<template>
  <b-row id="about" tag="section" class="about-section px-3 py-5 px-sm-5">
    <!-- MAPA E LOGO -->
    <b-col sm="12" md="6">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.248786338129!2d-46.73349804987144!3d-23.55950666733279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5614445ea63f%3A0x81bb971c3a8f0fcf!2sInstituto+de+Matem%C3%A1tica+e+Estat%C3%ADstica!5e0!3m2!1spt-BR!2sbr!4v1523564495736" 
              class="mapa" frameborder="0" style="" allowfullscreen>a</iframe>
    </b-col>
    <b-col sm="12" md="6" class="p-4">
      <h3>Onde? <br> IME-USP</h3>
      <h3>Quando? <br> 09 e 10 de junho</h3>
      <img class="logo" src="~/assets/logohusp2018.jpg">
      <p class="px-4">
        O HackathonUSP é o maior hackathon universitário do Brasil, é organizado pelo grupo USPCodeLab, em parceria com o NEU (Núcleo de Empreendedorismo da USP) e com o 
        HardwareLivreUSP. O público do evento consiste de estudantes da USP. O tema ou problema a ser resolvido sempre está ligado ao dia-a-dia universitário na USP, como,
        produção científica, administração pública e convivência entre alunos. O HackathonUSP visa ser a faísca inicial para os próprios alunos da USP gerarem inovação que
        melhore a vida universitária.
      </p>
    </b-col>

    <!-- CTA -->
    <b-col sm="12">
      <b-button class="inscrever-btn my-3">Inscreva-se</b-button>
    </b-col>
    <b-col md="12" style="padding-top: 1%;">
      <a href="#" class="regulamento-ref">Clique aqui para ler o regulamento</a>
    </b-col>
  </b-row>
</template>

<style>
/*
ROSA:
ff195b
ff0049

AZUL:
19baff
00b2ff
*/
#about {
  background-color: #ff195b;
  color: white;
  min-height: 100vh;
  padding-bottom: 5vh;
  padding-top: 5vh;
  text-align: center;
}
.mapa {
  height: 100%;
  width: 100%;
}

p {
  text-align: justify;
}

.logo {
  height: 50%;
  padding: 1vw;
  width: 100%;
}

.linha {
  padding: 1vh 3vw;
}

.descricao {
  padding: 0 1vw;
}

.inscrever-btn {
  background-color: #19baff;
  color: white;
  font-size: 24px;
  font-weight: bold;
}
.inscrever-btn:hover {
  background-color: #00b2ff;
  border-color: #00b2ff;
}

.regulamento-ref {
  color: white;
}
</style>
