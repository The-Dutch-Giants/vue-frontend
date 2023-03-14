<template>

    <router-view />

</template>

<script>

import { Vue, Options } from 'vue-class-component'

export default Options({

    name: 'App',
})(
    class App extends Vue {

    }
)

</script>