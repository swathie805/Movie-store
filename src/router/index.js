import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../webpages/Homepage.vue";
import Loginpage from "../webpages/Loginpage.vue";
import Purchasepage from "../webpages/Purchasepage.vue";

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
        },
        {
            path: "/purchase",
            component: Purchasepage,
        }
    ],
});