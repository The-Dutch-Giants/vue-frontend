<template id="app-template">

    <Header />

    <router-view />
    <Menu v-if="menu" />

</template>

<script>

import { Vue, Options } from 'vue-class-component'

export default Options({

    name: 'AppTemplate',
})(
    class AppTemplate extends Vue {

        menu = true;
    }
)
</script>