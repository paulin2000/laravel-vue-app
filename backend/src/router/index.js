import {createRouter, createWebHistory} from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Products from "../views/Products/Products.vue"
import AppLayout from "../components/AppLayout.vue"
import store from "../store"
// import RequestPassword from "../views/RequestPassword.vue";
// import ResetPassword from "../views/ResetPassword.vue";
import Login from "../views/Login.vue";
import NotFound from "../views/NotFound.vue"

const routes = [
    {
        path: '/app',
        name: 'app',
        redirect: '/app/dashboard',
        component: AppLayout,
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: 'dashboard',
                name: 'app.dashboard',
                component: Dashboard
            },
            {
                path: 'products',
                name: 'app.products',
                component: Products
            }
        ]
    },

    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            requiresGuest: true
        }
    },
    {
        path:'/:pathMatch(.*)',
        name: 'notfound',
        component: NotFound
    }

]

const router = createRouter(
    {
        history: createWebHistory(),
        routes
    }
)

router.beforeEach((to, from, next) => {
    console.log(store.state.user, "STORE")
    if (to.meta.requiresAuth && !store.state.user.token) {
        next({name: 'login'})
    } else if (to.meta.requiresGuest && store.state.user?.token) {
        next({name: 'app.dashboard'})
    } else {
        next();
    }
})
export default router
