<template>
  <div>
    <Hero/>
    <Message/>
    <Hours/>
    <div class="container">
      <div class="mb-24">
        <flickity ref="flickity" :options="flickityOptions" class="carousel">
          <div v-for="photo in photos[0].imageCollection.items" :key="photo.title">
            <div class='carousel-cell'><img :src="photo.url"></div>
          </div>
        </flickity>
      </div>
    </div>
    <FAQ/>
  </div>
</template>

<script>
import { gql } from 'nuxt-graphql-request'
// import flickity from 'vue-flickity'
export default {
  data () {
    return {
      flickityOptions: {
        lazyLoad: 1,
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
                url
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
