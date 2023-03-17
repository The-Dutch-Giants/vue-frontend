<template>

    <Header />

    <router-view />

</template>

<script>

import { Vue, Options } from 'vue-class-component'

export default Options({

    name: 'AppTemplate',
})(
    class AppTemplate extends Vue {

    }
)

</script>