<template>
  <div style="background-image: url(https://clippersweb.blob.core.windows.net/utility/img/dark-grey-texture.png)">
    <a
        @click="showModal"
        class="btn btn-lg btn-outline border-black text-black hover:bg-greyccc hover:cursor-pointer"
        >INTERESTED IN Premium Experiences?</a
      >
    <!-- Form -->
    <div class="p-4 pt-8 bg-white lg:max-w-[750px] mx-auto">
      <div class="container bg-black">
        <iframe src="https://laclippers-forms.formstack.com/forms/chuckmark_sign_up_2023" title="Chuckmark Sign Up 2023"></iframe>
      </div>
    </div>
  </div>
</template>
<script>
import Modal from "./Modal.vue";
export default {
  methods: {
    showModal() {
      this.$modal.show(Modal);
    },
  },
}
</script>

<style scoped>
iframe{
  width:100% !important;
  height:2300px;
}
</style>