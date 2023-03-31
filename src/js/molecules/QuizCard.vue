<template>
    <div id="quizcard">
        <img src="../../img/pf-placeholder.png" alt="profile pic">
        <div>
            <span class="title">Quiz tijd!</span>

            <span id="txt">{{ txt }}</span>

            <a v-for="item in options" @click="submitAnswer(item)">{{ item.label }}</a>
        </div>
    </div>

    <WrongAwnserModal v-if="showwrong" @closemodal="showwrong=false" />

</template>

<script>

import { Vue, Options } from 'vue-class-component'
import WrongAwnserModal from '@/js/molecules/WrongAwnserModal.vue';

export default Options({

    name: 'QuizCard',
    props: {
        txt: String,
        options: Array,
    }
})(
    class QuizCard extends Vue {
        showwrong = false;


        submitAnswer(item){
            
            if(item.isCorrect) {
                this.$router.push({path: 'correct-answer'})
            } else {
                this.showwrong = true;
            }
        }
    }
)

</script>
<style src="@/scss/molecules/quizcard.scss" lang="scss"></style>