import { createRouter, createWebHistory } from "vue-router";

import Error from "@/js/organisms/Error.vue";

import Home from "@/js/organisms/route/Home.vue";
import CorrectAnswer from "@/js/organisms/route/CorrectAnswer.vue";
import AppTemplate from '@/js/organisms/AppTemplate.vue';

export default function (app) {

    const routes = [

        {
            path: "/",
            component: AppTemplate,
            redirect: { name: "Home" },
            children: [
                {
                    name: "Home",
                    path: "/",
                    component: Home,
                },
                {
                    name: "CorrectAnswer.vue",
                    path: '/correct-answer',
                    component: CorrectAnswer,
                }
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