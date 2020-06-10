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
            import ("../veiws/home/Home.vue")
    },
    {
        path: "/cart",
        component: () =>
            import ("../veiws/cart/Cart.vue")
    },
    {
        path: "/category",
        component: () =>
            import ("../veiws/category/Category.vue")
    },
    {
        path: "/profile",
        component: () =>
            import ("../veiws/profile/Profile.vue")
    }
]

const router = new VueRouter({
    routes,
    mode: "history"
})

export default router