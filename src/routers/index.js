import { createRouter, createWebHistory } from "vue-router";
import todoRouting from "./todo";

const MainPage = () =>import("../pages/MainPage.vue")
const LoginPage = () => import("../pages/LoginPage.vue")

const routeConfig = createRouter({
    history:createWebHistory(),
    routes:[
        {path: "/", component: MainPage},
        {path: "/login", component:LoginPage},
        todoRouting
    ]
})

export default routeConfig