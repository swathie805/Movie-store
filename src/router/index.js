import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../webpages/Homepage.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: Homepage,
        }
    ],
});