import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const ShopUser = () => import('@/views/user/ShopUser.vue')
const ShopMore = () => import('@/views/more/ShopMore.vue')
const ShopMain = () => import('@/views/main/ShopMain.vue')
const ShopCat = () => import('@/views/catogary/ShopCat.vue')

const router = new VueRouter({
    routes:[
        {
            path:'/user',
            component:ShopUser
        },
        {
            path:'/more',
            component:ShopMore
        },
        {
            path:'/main',
            component:ShopMain
        },
        {
            path:'/cate',
            component:ShopCat
        }
    ]
})

export default router;

