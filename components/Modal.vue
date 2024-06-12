<template>
  <div class="text-left p-4 pb-0 bg-white">
    <button class="popup-close" @click="$emit('close')"></button>
    <div class="flex mb-0">
      <div>
        <iframe src="https://laclippers-forms.formstack.com/forms/chuckmark_sign_up_2023" title="Chuckmark Sign Up 2023"></iframe>
      </div>
    </div>
  </div>
</template>
<script>
// import postscribe from 'postscribe'
export default {
  data() {
    return {
    }
  },
  // mounted: function () {
  //   postscribe('#form', `<script src="https://laclippers-forms.formstack.com/forms/js.php/intuit_dome_premium_experiences"><\/script>`)
  // }
}
</script>

<style >
.vm--modal{
  overflow:visible !important;
}
button.popup-close {
  float:right;
  margin-right:-30px;
  margin-top:-30px;
  border-radius: 50%;
  padding: 0.5em;
  width: 30px;
  height: 30px;
  border: 2px solid #333;
  color: #333;
  position: relative;
  background: white;
}
button.popup-close:hover {
  border: 2px solid #777;
  background-color: #ccc;
  color: #ffffff;
}

button.popup-close::before {
  content: " ";
  position: absolute;
  display: block;
  background-color: #333;
  width: 2px;
  left: 12px;
  top: 5px;
  bottom: 5px;
  transform: rotate(45deg);
}
button.popup-close::after {
  content: " ";
  position: absolute;
  display: block;
  background-color: #666;
  height: 2px;
  top:12px;
  left: 5px;
  right: 5px;
  transform: rotate(45deg);
}

@media screen and (min-width:640px){
  button.popup-close {
    margin-right:-30px;
    margin-top:-30px;
  }
}
</style>