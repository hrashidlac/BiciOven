<template>
  <div>
    <Hero/>
    <Message/>
    <div class="container py-24">
      <div class="uppercase text-center font-agblack text-xl sm:text-3xl mb-12">Photos</div>
      <flickity ref="flickity" :options="flickityOptions" class="carousel">
        <div v-for="photo in photos[0].imageCollection.items" :key="photo.title" class='carousel-cell'>
          <img class="carousel-image" :data-flickity-lazyload="photo.url">
        </div>
      </flickity>
    </div>
    <Hours/>
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
    const post = await $graphql.default.request(query)
    const photos = post.photoCollection.items
    return { photos }
  }
}
</script>

<style scoped>
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
