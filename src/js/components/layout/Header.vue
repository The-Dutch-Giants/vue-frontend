<template>
    <header id="header-view">

        <img src="#" alt="Virtuele-helden Logo">
        <section>
            <div>
                <img src="#" alt="profile-picture">
                <span>team 5</span>
            </div>
            <i class="menu"></i>
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
<style src="@/scss/components/layout/header.scss" lang="scss"></style>