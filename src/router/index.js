import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'

//解决添加相同路由时报错的问题
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error);
};

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