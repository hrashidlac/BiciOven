<template>
  <div>
    <div class="hero text-white uppercase flex flex-col justify-center items-center h-24 lg:h-48 bg-center bg-cover px-4">
       <h1 class="text-6xl font-agblack">PHOTOS</h1>
    </div>
    
    <div class="container py-24">
      <div class="masonry sm:masonry-sm md:masonry-md">
        <div v-for="photo in photos[0].imageCollection.items" :key="photo.url" class="break-inside mb-8">
          <img :src="photo.url">
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
    }
  },
  async asyncData ({ $graphql }) {
    const query = gql`
      query  {
        photoCollection(where:  { slug: "photos-page" }){
          items{
            imageCollection{
              items {
                title
                url(transform: {width: 1250, height: 850})
              }
            }
          }
        }
      }
    `
    const post = await $graphql.default.request(query)
    const photos = post.photoCollection.items
    //console.log(photos)
    return { photos }
  }
}
</script>

<style scoped>
.hero{
  background:transparent url(@/assets/img/hours.jpg) no-repeat center center;        
  background-size:cover;
  height:250px;
}
@media (min-width: 767px) {
  .hero{
    background:transparent url(@/assets/img/hours.jpg) no-repeat center center;        
    background-size:cover;
    height:450px;
  }
}
</style>
