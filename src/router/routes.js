import {createRouter, createWebHistory} from "vue-router";
import Landing from "../pages/LandingView.vue";
import Login from "../pages/panel/LoginView.vue";
import Panel from "../pages/panel/MainView.vue";
import Subscribe from "../pages/panel/SubscriptionView.vue";
import BalanceVIew from "../pages/panel/BalanceVIew.vue";
import HelpView from "../pages/panel/HelpView.vue";
import ProfileView from "../pages/panel/ProfileView.vue";
import SupportView from "../pages/panel/SupportView.vue";
import DownloadView from "../pages/panel/DownloadView.vue";

const routes = [
    {
        path: "/",
        component: Landing,
    },
    {
        path: "/login",
        component: Login,
        meta: {
            hideMenu: true
        }
    },
    {
        path: "/panel",
        component: Panel,
    },
    {
        path: "/sub",
        component: Subscribe,
    },
    {
        path: "/balance",
        component: BalanceVIew,
    },
    {
        path: "/help",
        component: HelpView,
    },
    {
        path: "/profile",
        component: ProfileView,
    },
    {
        path: "/support",
        component: SupportView,
    },
    {
        path: "/download",
        component: DownloadView,
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
