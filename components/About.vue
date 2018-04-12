<template>
  <section id="about">
    <b-container fluid>
      <!-- MAPA E LOGO -->
      <b-row class="linha">
        <b-col sm="12" md="6">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.248786338129!2d-46.73349804987144!3d-23.55950666733279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5614445ea63f%3A0x81bb971c3a8f0fcf!2sInstituto+de+Matem%C3%A1tica+e+Estat%C3%ADstica!5e0!3m2!1spt-BR!2sbr!4v1523564495736" class="mapa" frameborder="0" style="border:0;" allowfullscreen>a</iframe>
        </b-col>
        <b-col sm="12" md="6">
          <img class="logo" src="~/assets/logohusp2018.jpg">
        </b-col>
      </b-row>

      <!-- TEXTOS -->
      <b-row class="linha">
        <b-col class="descricao">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu dignissim massa. Nulla id vehicula lorem. Donec fermentum malesuada lectus. Sed aliquam luctus lacinia. Nam pretium, lacus quis ornare vulputate, eros risus mattis turpis, nec interdum metus urna et purus. Fusce tincidunt suscipit nulla sed congue. Aenean sollicitudin, nulla in malesuada iaculis, felis ante laoreet neque, et porta justo lectus sed nisi. Donec ac quam nec lorem pretium egestas quis ac quam. Sed mollis velit in metus mollis pretium. Maecenas ornare non tellus ac aliquet. 
          </p>
        </b-col>
        <b-col class="descricao">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu dignissim massa. Nulla id vehicula lorem. Donec fermentum malesuada lectus. Sed aliquam luctus lacinia. Nam pretium, lacus quis ornare vulputate, eros risus mattis turpis, nec interdum metus urna et purus. Fusce tincidunt suscipit nulla sed congue. Aenean sollicitudin, nulla in malesuada iaculis, felis ante laoreet neque, et porta justo lectus sed nisi. Donec ac quam nec lorem pretium egestas quis ac quam. Sed mollis velit in metus mollis pretium. Maecenas ornare non tellus ac aliquet. 
          </p>
        </b-col>
        <b-col class="descricao">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu dignissim massa. Nulla id vehicula lorem. Donec fermentum malesuada lectus. Sed aliquam luctus lacinia. Nam pretium, lacus quis ornare vulputate, eros risus mattis turpis, nec interdum metus urna et purus. Fusce tincidunt suscipit nulla sed congue. Aenean sollicitudin, nulla in malesuada iaculis, felis ante laoreet neque, et porta justo lectus sed nisi. Donec ac quam nec lorem pretium egestas quis ac quam. Sed mollis velit in metus mollis pretium. Maecenas ornare non tellus ac aliquet. 
          </p>
        </b-col>
      </b-row>

      <!-- CTA -->
      <b-row class="linha">
        <b-col md="12">
          <b-button class="inscrever-btn">Inscreva-se</b-button>
        </b-col>
        <b-col md="12" style="padding-top: 1%;">
          <a href="#" class="regulamento-ref">Clique aqui para ler o regulamento</a>
        </b-col>
      </b-row>
    </b-container>
  </section>
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

p {
  text-align: justify;
}

.mapa,
.logo {
  height: 100%;
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
