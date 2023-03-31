<template>
    <section id="app-view">
        <section>
            <div>
                <h1>Welkom bij de quiz streak van Virtuele Helden!</h1>
                <p>Hoe goed is jouw kennis op dit moment over personal branding?</p>
                <p>Beantwoord de volgende vragen en kom erachter</p>
            </div>

            <quiz-card :txt="data.questions[0].label"
                       :options="data.questions[0].options" />
        </section>
        <div class="card shadow">
            <div>
                <span>level {{ data.users[0].level }}</span>
                <div>
                    <span>0</span>
                    <i class="bx bx-star"/>
                </div>
            </div>
            <div class="progress-bar"/>
        </div>
    </section>
</template>

<script>

import { Vue, Options } from 'vue-class-component'
import quizCard from '@/js/molecules/QuizCard.vue';
import data from "@/db.json"

export default Options({

    name: 'Home',
    components: {
        "quiz-card": quizCard
    }
})(
    class Home extends Vue {
        data = data.data

    }
)

</script>
<style src="@/scss/organisms/route/home.scss" lang="scss"></style>