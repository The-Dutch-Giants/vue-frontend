<template>

    <div class="error-page">
        <h1>Deze pagina bestaat niet</h1>
        <div>
            <p>Neem contact op met </p>
            <a href="mailto: 1014698@hr.nl"> Rob de Willigen </a>
            <p>wanneer deze melding zich blijft voordoen.</p>
        </div>
    </div>

</template>

<script>

import { Options, Vue } from "vue-class-component";


export default Options({
    name: "Error"
})(
    class Error extends Vue {

    }
);

</script>