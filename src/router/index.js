import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../webpages/Homepage.vue";
import Loginpage from "../webpages/Loginpage.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: Homepage,
        },
        {
            path: "/login",
            component: Loginpage,
        }
    ],
});