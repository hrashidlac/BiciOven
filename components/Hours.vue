<template>
  <div class="hours py-24 border-orange border-b-8">
    <div class="container">
      <div class="sm:grid sm:grid-cols-2 sm:gap-24">
        <div class="sm:grid-cols-1 text-white mb-48 sm:mb-0">
          <div class="uppercase text-center font-agblack text-base sm:text-xl mb-12">Hours of Operation</div>
          <div class="bg-white bg-opacity-80 text-black p-12 uppercase font-agbold font-bold">
            <div class="mb-4 sm:mb-2 text-sm sm:text-xl">Saturday : 10 - 6</div>
            <div class="mb-4 sm:mb-2  text-sm sm:text-xl">sunday : 10 -6 </div>
            <div class="mb-8 sm:mb-12  text-sm sm:text-xl">monday : 10 - 5</div>
            <p class="mb-2 text-xs sm:text-lg">
              the oven is looking for volunteers
              for other nights of the week.
              to get involved please fill out the 
              volunteer form.<br>&nbsp;
            </p>
        </div>
        </div>
        <div class="sm:grid-cols-1 text-white mb-8 sm:mb-0">
          <div class="uppercase text-center font-agblack text-base sm:text-xl mb-12">Costs & Policy</div>
          <div class="bg-white bg-opacity-80 text-black p-12 font-agreg uppercase font-agbold font-bold">
            
            <div class="mb-4 sm:mb-2 text-sm sm:text-xl">stand time : $10 / hour</div>
            <div class="mb-4 sm:mb-2 text-sm sm:text-xl">no one turned away </div>
            <div class="mb-4 sm:mb-2 text-sm sm:text-xl">for lack of funds</div>
            
            <p class="mb-2 text-xs sm:text-lg">
              the oven is a workshop focused on
              teaching bike mechanics.  stand time
              includes use of all tools and advice
              from our mechanics on how to fix and 
              build your own bike.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.hours{
  width:100%;
  background:transparent url(@/assets/img/hours-mobile.jpg) no-repeat center center;
  background-size:cover;
}
@media (min-width: 767px) {
  .hours{
    background:transparent url(@/assets/img/hours.jpg) no-repeat center center;        
    background-size:cover;
  }
}
</style>
