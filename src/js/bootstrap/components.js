//Layout
import { Header, Menu } from '@/js/organisms/layout';
import { QuizCard } from '@/js/molecules';

export default async function (app) {

    // Layout
    app.component(Header.name, Header);
    app.component(Menu.name, Menu);

    // Molecules
    app.component(QuizCard.name, QuizCard);
}