import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'

Vue.use(Router)

const routes = [{
        path: "",
        redirect: "/home"
    },
    {
        path: "/home",
        component: () =>
            import ("../views/home/Home.vue")
    },
    {
        path: "/cart",
        component: () =>
            import ("../views/cart/Cart.vue")
    },
    {
        path: "/category",
        component: () =>
            import ("../views/category/Category.vue")
    },
    {
        path: "/profile",
        component: () =>
            import ("../views/profile/Profile.vue")
    }
]

const router = new VueRouter({
    routes,
    mode: "history"
})

export default router