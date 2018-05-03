<template>
  <b-row id="judges" tag="section" class="judges text-center px-3 px-sm-5 py-5">

    <b-col sm="12" class="px-lg-5 py-5">
      <h1 class="text-primary pb-3">Jurados</h1>
    </b-col>

    <b-col sm="4" class="judges__profile py-3 py-md-0">
      <img src="@/assets/judges/denis_maua.jpg" alt="prof. Dênis Maua"
           class="w-50 py-3"
           style="border-radius: 50%;">
      <strong>Denis Mauá</strong>
      <small>
        Professor Asistente de Ciência da Computação no IME,
        pesquisa raciocínio probabilistico e suas aplicações
        em inteligênica artificial e aprendizagem de máquina
      </small>
    </b-col>

    <b-col sm="4" class="judges__profile py-3 py-md-0">
      <img src="@/assets/judges/vitor_paulo.jpg" alt="Paulo Almeida"
           class="w-50 py-3"
           style="border-radius: 50%;">
      <strong>Paulo Almeida</strong>
      <small>
        Coordenador Administrativo da Pró-Reitoria de Pesquisa,
        participa da organização do USP talks, do TEDxUSP e 
        é o principal contato com o Coursera na USP
      </small>
    </b-col>

    <b-col sm="4" class="judges__profile py-3 py-md-0">
      <img src="@/assets/judges/nina_hirata.jpg" alt="prof. Nina Hirata"
           class="w-50 py-3"
           style="border-radius: 50%;">
      <strong>Nina Hirata</strong>
      <small>
        Professora associada de Ciência da Computação do IME
        da graduação e da pós, pesquisa reconhecimento de padrões
        e machine learning, com aplicações em análise de imagens.
      </small>
    </b-col>

    <b-col sm="4" offset-sm="2" class="judges__profile py-3 py-md-0">
      <img src="@/assets/judges/isa_kotsubo.jpg" alt="Isa Kotsubo"
           class="w-50 py-3"
           style="border-radius: 50%;">
      <strong>Isa Kotsubo</strong>
      <small>
        Graduanda em Engenharia de Minas na Escola Politécnica da USP, 
        buscando incentivar inovação e empreendedorismo na universidade
        e membro do Núcleo de Empreendedorismo da USP
      </small>
    </b-col>

    <b-col sm="4" class="judges__profile py-5 py-md-0">
      <img src="@/assets/judges/renato_cordeiro.jpg" alt="Renato Cordeiro"
           class="circle w-50 py-3"
           style="border-radius: 50%;">
      <strong>Renato Cordeiro</strong>
      <small>
        Mestrando em Computação estudando Engenharia de Software e 
        Ciência de Dados, é co-fundador do USPCodeLab e um dos 
        idealizadores do HackathonUSP
      </small>
    </b-col>
  </b-row>
</template>

<style lang="scss">
.judges {
  min-height: calc(100vh - #{$navbar-height});
  background-color: theme-color("light");

  &__profile {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
