<template>
    <div id="confetti-wrapper">
        <div v-for="i of 200" :key="i" class="confetti" :class="`confetti-${i}`"></div>
    </div>

  <div id="correct-answer" >

    <div id="succes-wrapper" class="shadow">
        <p>Dat was het juiste antwoord</p>
        <span> Goed gedaan! </span>
        </div>
    
  </div>

</template>

<script>

import { Vue, Options } from 'vue-class-component'

export default Options({

  name: 'CorrectAnswer',
})(
    class CorrectAnswer extends Vue {

        startConfetti = () => {
            setTimeout(function () {
                confetti.start()
            }, 1000, stopConfetti)
        }

        stopConfetti = () => {

        }
    }
)

</script>
<style src="@/scss/organisms/route/correctAnswer.scss" lang="scss"></style>
