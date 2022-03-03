<template>
  <div class="bg-black">
    <nav class="flex items-center justify-between flex-wrap bg-black p-6 container">
      <div class="">
        <nuxt-link :to="'/'" class="text-white text-xl font-agblack uppercase no-underline hover:text-gray">Bike Oven 2.0</nuxt-link>
      </div>
      <div class="block sm:hidden">
        <button @click="toggle" class="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div :class="open ? 'block': 'hidden'" class="w-full flex-grow sm:flex sm:justify-end sm:items-center sm:w-auto">
        <nuxt-link :to="'/faq'" class="no-underline block mt-4 sm:inline-block sm:mt-0 text-white hover:text-gray mr-8">
          FAQ
        </nuxt-link>
        <a href="https://www.gofundme.com/f/bikeoven" target="_blank" class="bg-orange px-3 py-1 border-2 border-orange uppercase no-underline block mt-4 sm:inline-block sm:mt-0 text-white hover:text-gray mr-4 hover:bg-black hover:border-white hover:border-2">
          GoFundMe
        </a>
        <a href="https://form.jotform.com/220280080907045"  target="_blank" class="bg-red px-3 py-1 border-2 border-red uppercase no-underline block mt-4 sm:inline-block sm:mt-0 text-white hover:text-gray mr-4 hover:bg-black hover:border-white hover:border-2">
          DONATE A BIKE
        </a>
        <a href="https://form.jotform.com/220608819689066"  target="_blank" class="bg-fuschia px-3 py-1 border-2 border-fuschia uppercase no-underline block mt-4 sm:inline-block sm:mt-0 text-white hover:text-gray mr-4 hover:bg-black hover:border-white hover:border-2">
          VOLUNTEER
        </a> 

      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
  	  open: false
    }
  },
  methods: {
  	toggle () {
    	this.open = !this.open
    },
    close () {
    	this.open = false
    }
  },
  watch: {
    '$route' () {
      this.$nextTick(this.close)
    }
  }
}
</script>
