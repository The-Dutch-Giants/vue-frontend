<template>
    <div id="modal-container">
        <span>Helaas u heeft het verkeerde antwoord geselecteerd!</span> <br>
        <img class="modal-img" src="@/img/red-cross.png" alt="Wrong awnser image"> <br>
        <button @click="$emit('closemodal')">Laat me de volgende vraag zien! </button>
    </div>
</template>

<script>

import { Vue, Options } from 'vue-class-component'

export default Options({

    name: 'WrongAwnserModal',
    methods: {
    submit() {
      this.$emit('closemodal')
    }
  }
})(
    class WrongAwnserModal extends Vue {

    }
)

</script>

<style src="@/scss/molecules/wrongawnser.scss" lang="scss"></style>