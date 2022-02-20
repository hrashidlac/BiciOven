<template>
  <div class="hero border-b-8 border-orange relative flex sm:justify-center sm:min-h-screen sm:items-center sm:pt-0">
    <img class="slogan" src="@/assets/img/slogan.png">
  </div>
</template>
<style scoped>
.hero{
  height:450px;
  width:100%;
  background:transparent url(@/assets/img/hero-mobile.jpg) no-repeat center center;
  background-size:cover;
}
.slogan{
  padding-top:120px;
  height:240px;
  width:180px;
  margin:0 auto;
}
@media (min-width: 767px) {
  .hero{
    height:750px;
    background:transparent url(@/assets/img/hero.jpg) no-repeat center center;
    background-size:cover;
  }
  .slogan{
    max-width:300px;
    width:auto;
    padding-top:0;
    height:auto;
  }
}
</style>
