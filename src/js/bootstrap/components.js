//Layout
import { Header, Footer } from '@/js/organisms/layout';
import { QuizCard } from '@/js/organisms/molecules';

export default async function (app) {

    // Layout
    app.component(Header.name, Header);
    app.component(Footer.name, Footer);

    // Molecules
    app.component(QuizCard.name, QuizCard);

}