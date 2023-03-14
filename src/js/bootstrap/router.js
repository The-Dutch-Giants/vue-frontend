import { createRouter, createWebHistory } from "vue-router";

import Error from "@/js/components/Error.vue";
import App from '@/js/components/App.vue';

import Home from "@/js/components/route/Home.vue";

export default function (app) {

    const routes = [

        {
            path: "/",
            component: App,
            redirect: { name: "Home" },
            children: [
                {
                    name: "Home",
                    path: "/",
                    component: Home,
                },
            ]
        },

        {
            name: "forbidden",
            path: "/forbidden",
            // props: { mode: ErrorMode.FORBIDDEN },
            component: Error,
            meta: {
                authorized: false
            }
        },

        {
            name: "error",
            path: "/error",
            component: Error,
            // props: { mode: ErrorMode.NOT_FOUND },
            meta: {
                authorized: false
            }
        },

        {
            path: "/:pathMatch(.*)*",
            component: Error,
            // props: { mode: ErrorMode.NOT_FOUND },
            meta: {
                authorized: false
            }
        }
    ];

    const router = createRouter({

        routes,
        history: createWebHistory(),
        linkActiveClass: "active"
    });

    app.use(router);
}