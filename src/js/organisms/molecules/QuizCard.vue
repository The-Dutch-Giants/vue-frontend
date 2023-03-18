<template>
    <div id="quizcard" class="card">
        <img src="src/img/pf-placeholder.png" alt="profile pic">
        <div>
            <span class="title">Quiz tijd!</span>
            <span>{{ txt }}</span>

            <a v-for="item in options" href="#">{{ item.label }}</a>
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

    }
)

</script>
<style src="@/scss/organisms/molecules/quizcard.scss" lang="scss"></style>