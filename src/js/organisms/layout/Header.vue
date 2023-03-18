<template>
    <header id="header-view">

        <img src="@/img/placeholder-image.png" alt="Virtuele-helden Logo">
        <section>
            <div>
                <img class="profile" src="@/img/pf-placeholder.png" alt="profile-picture">
                <span>Team 5</span>
            </div>
            <i class="bx bx-menu"></i>
        </section>

    </header>
</template>

<script>

import { Vue, Options } from 'vue-class-component'

export default Options({

    name: 'Header'
})(
    class Header extends Vue {

    }
)

</script>
<style src="@/scss/organisms/layout/header.scss" lang="scss"></style>