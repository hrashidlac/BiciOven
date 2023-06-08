<template>
  <div>
    
    <Hero/>
    <!-- <Message/> -->
    <div class="font-agbold font-bold text-2xl py-12 border-orange border-b-8">
      <div class="container text-center " v-html="$md.render(welcomemsg[0].body2)"></div>
    </div>
    
    <div class="container py-24">
      <div class="uppercase text-center font-agblack text-xl sm:text-3xl mb-12">Photos</div>
      <flickity ref="flickity" :options="flickityOptions" class="carousel">
        <div v-for="photo in photos[0].imageCollection.items" :key="photo.title" class='carousel-cell'>
          <img class="carousel-image" :data-flickity-lazyload="photo.url">
        </div>
      </flickity>
    </div>
    
    <div class="hours py-24 border-orange border-t-8 border-b-8">
      <div class="container">
        <div class="sm:grid sm:grid-cols-2 sm:gap-24">
          <div class="sm:grid-cols-1 text-black mb-12 sm:mb-0">
            <div class="uppercase font-agblack text-xl sm:text-3xl mb-4 lg:mb-12" v-html="$md.render(hoursmsg[0].title)"></div>
            <div class="bg-white bg-opacity-80 text-black py-6 uppercase font-agbold font-bold text-xl sm:text-2xl">
              <div class="" v-html="$md.render(hoursmsg[0].body2)"></div>
            </div>
          </div>

          <div class="sm:grid-cols-1 text-black mb-12 sm:mb-0">
            <div class="uppercase font-agblack text-xl sm:text-3xl mb-4 lg:mb-12" v-html="$md.render(costsmsg[0].title)"></div>
            <div class="bg-white bg-opacity-80 text-black py-6 uppercase font-agbold font-bold text-xl sm:text-2xl">
              <div class="" v-html="$md.render(costsmsg[0].body2)"></div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <Footer/>
  </div>
</template>

<script>
import { gql } from 'nuxt-graphql-request'
// import flickity from 'vue-flickity'
export default {
  data () {
    return {
      flickityOptions: {
        lazyLoad: 2,
        fullscreen: true,
        wrapAround: true
      }
    }
  },
  methods: {
    next () {
      this.$refs.flickity.next()
    },
    previous () {
      this.$refs.flickity.previous()
    }
  },
  async asyncData ({ $graphql }) {
    const query = gql`
      query  {
        photoCollection(where:  { slug: "home-gallery" }){
          items{
            imageCollection{
              items {
                title
                url(transform: {width: 1000, height: 700})
              }
            }
          }
        }
      }
    `
    const welcome = gql`
      query  {
        pageCollection (where:  { slug: "home-welcome-message" }) {
          items {
            title
            slug
            body2
          }
        }
      }
    `
    const hours = gql`
      query  {
        pageCollection (where:  { slug: "hours-of-operation" }) {
          items {
            title
            slug
            body2
          }
        }
      }
    `
    const costs = gql`
      query  {
        pageCollection (where:  { slug: "costs-and-policy" }) {
          items {
            title
            slug
            body2
          }
        }
      }
    `
    const post = await $graphql.default.request(query)
    const photos = post.photoCollection.items

    const welcomepage = await $graphql.default.request(welcome)
    const welcomemsg = welcomepage.pageCollection.items

    const hourspage = await $graphql.default.request(hours)
    const hoursmsg = hourspage.pageCollection.items

    const costspage = await $graphql.default.request(costs)
    const costsmsg = costspage.pageCollection.items
    //console.log(photos)
    return { photos, welcomemsg, hoursmsg, costsmsg }
  }
}
</script>

<style scoped>
.welcome a{
  background:red;
}
.carousel-cell{
  margin-right:10px;
}

.carousel.is-fullscreen .carousel-image {
  height: auto;
  max-height: 100%;
}

@media (min-width: 767px){
  .carousel-image {
    display: block;
    height: 400px;
    /* set min-width, allow images to set cell width */
    min-width: 200px;
    max-width: 100%;
    margin-right: 10px;
    /* vertically center */
    top: 0;
  }
}
</style>
