<template>
  <div style="background-image: url(https://clippersweb.blob.core.windows.net/utility/img/dark-grey-texture.png)">
    <!-- Form -->
    <div class="p-4 pt-8 bg-white lg:max-w-[750px] mx-auto">
      <div class="container">
        <client-only><div id="form"></div></client-only>
      </div>
    </div>
  </div>
</template>
<script>
//components: { [process.client && 'postscribe']: () => import('postscribe') }
//import postscribe from 'postscribe'
export default {
  mounted: function () {
    if (process.client) {
      console.log("test");
      //import postscribe from 'postscribe'
      const postscribe = () => import('postscribe');
      postscribe('#form', `<script src="https://laclippers-forms.formstack.com/forms/js.php/sms_webpage_sign_up"><\/script>`)
    }
  }
}
</script>

<style scoped>
</style>