<template>
  <div class="container">
    <div class="uppercase text-center font-agblack text-xl mb-12">FAQ</div>
    <VueFaqAccordion
      :items="myItems"
    />
  </div>
</template>
<script>
export default {
  data () {
    return {
      myItems: [
        {
          title: 'Placeholder placeholder  placeholder  placeholder  ',
          value: 'Placeholder placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder '
        },
        {
          title: 'Placeholder placeholder  placeholder  placeholder 2 ',
          value: 'Placeholder placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder '
        },
        {
          title: 'Placeholder placeholder  placeholder  placeholder 3 ',
          value: 'Placeholder placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder  placeholder '
        }

      ]
    }
  }
}
</script>
<style src="">
section.faq{
  padding: 0 !important;
  font-family: "Avenir";
}
.faq .faq-wrapper{
  max-width:100% !important;
}
.faq .accordion{
  border: 0 none !important;
}

.faq .accordion__item{
  border: 1px solid #DDD !important;
  margin-bottom:20px;
}

.faq .accordion__item:last-child {
  border-bottom: 1px solid #DDD;
}

.faq .accordion__title-text{
  font-size:16px;
  text-transform: uppercase;
}

.faq .accordion__value{
  font-size:14px;
  line-height: 20px;
}
@media (min-width: 767px) {
  .faq .accordion__title-text{
    font-size:22px;
  }

  .faq .accordion__value{
    font-size:18px;
    line-height: 28px;
  }
}
</style>
