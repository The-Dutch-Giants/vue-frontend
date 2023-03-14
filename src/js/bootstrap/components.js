//Layout
import { Header, Footer } from '@/js/components/layout';

export default async function (app) {

    // Layout
    app.component(Header.name, Header);
    app.component(Footer.name, Footer);

}