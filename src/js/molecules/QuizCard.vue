<template>
    <div id="quizcard">
        <img src="../../img/pf-placeholder.png" alt="profile pic">
        <div>
            <span class="title">Quiz tijd!</span>
            <span id="txt">{{ txt }}</span>

            <a v-for="item in options" @click="submitAnswer(item)">{{ item.label }}</a>
        </div>
    </div>
</template>

<script>

import { Vue, Options } from 'vue-class-component'

export default Options({

    name: 'QuizCard',
    props: {
        txt: String,
        options: Array,
    }
})(
    class QuizCard extends Vue {

        submitAnswer(item){

            if(item.isCorrect) {
                this.$router.push({path: 'correct-answer'})
            } else {
                //TODO: notify user of wrong answer
            }
        }
    }
)

</script>
<style src="@/scss/molecules/quizcard.scss" lang="scss"></style>