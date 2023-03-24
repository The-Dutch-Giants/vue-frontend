<template >
    <header id="header-view" >

        <img src="@/img/placeholder-image.png" alt="Virtuele-helden Logo">
        <section >
            <div class="header-item" @mouseover="hover = true" >
                <img class="profile" src="@/img/pf-placeholder.png" alt="profile-picture"> 
                <span>Team 5</span>
            </div>

            <i @click="menu = !menu" class="bx bx-menu"></i>
        </section>

    </header>
        <div v-if="hover" class="menucard" @mouseleave="hover = false">
            <div class="menu-item">
                Account
            </div>
            <div class="menu-item">
                Uitloggen
            </div>
        </div>
    </template>

<script>

import { Vue, Options } from 'vue-class-component'

export default Options({

    

    name: 'Header'
    })(
        class Header extends Vue {
            hover = false;

        }
)

</script>
<style src="@/scss/organisms/layout/header.scss" lang="scss"></style>
<style src="@/scss/organisms/molecules/menucard.scss" lang="scss"></style>