import { createApp } from 'vue'
import '@/scss/app.scss'
import App from '@/js/components/App.vue'
import bootstrap from '@/js/bootstrap/index.js';

const run = async () => {

    const app = createApp(App);

    await bootstrap(app)

    app.mount("#app");

};

run();