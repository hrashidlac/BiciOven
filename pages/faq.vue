<template>
  <div>
    <div class="hero text-white uppercase flex flex-col justify-center items-center h-24 lg:h-48 bg-center bg-cover px-4">
       <h1 class="text-6xl font-agblack">FAQ's</h1>
    </div>
    
   
    <div class="container py-12">
      <div class="mb-12">
        <p>The Bike Oven is an industrious space where we lend you the tools and give you the knowledge to wrench on your own bike. The space is run by volunteers.</p>
        <p>We offer stand time and use of our tools for a suggested donation of $10 an hour, plus parts.</p>
        <p>We are not a bike shop, please be patient.</p>
        <p>Lack of funds is not an issue here. Please ask about our work-trade program.</p>
        <p>You will be turned away if you disrupt the space.</p>
        <p>Although we are not a bike store we do sell refurbished project bicycles that have been serviced by our Wrench volunteer staff.</p>
        <p>In conjunction, we offer "A Build Your Own Bike" program, where you learn to assemble a bicycle from a bare frame!</p>
      </div>
      <div v-for="faq in faqs.faqCollection.items" :key="faq.title" class="mb-12">
        <div><h2 class="text-2xl mb-4">{{faq.question2}}</h2></div>
        <div class="pl-4 answer" v-html="$md.render(faq.answer2)"></div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import { gql } from 'nuxt-graphql-request'
export default {
  data () {
    return {
    }
  },
  async asyncData ({ $graphql }) {
    const query = gql`
      query{
        faqCollection{
          items {
            question2
            answer2
          }
        }
      }
    `
    const faqs = await $graphql.default.request(query)
    return { faqs }
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
p{
  @apply mb-4;
}

.answer a{
  @apply text-orange underline;
}

</style>
