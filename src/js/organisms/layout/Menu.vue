<template>
    <div class="card" id="menu">
        <a v-for="item in items" :href="item.url">{{ item.label }}</a>
    </div>
</template>

<script>

import { Vue, Options } from 'vue-class-component'

export default Options({

    name: 'Menu',
})(
    class Menu extends Vue {

        items = [
            {
                label: "Home",
                url: "/"
            },
            {
                label: "Account",
                url: "/account"
            }
        ]
    }
)

</script>

<style src="@/scss/organisms/layout/menu.scss" lang="scss"></style>