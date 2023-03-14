import router from '@/js/bootstrap/router.js';
import components from '@/js/bootstrap/components.js';

export default async function bootstrap(app) {

    router(app);
    await components(app)
}