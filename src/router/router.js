import { createRouter, createWebHistory } from 'vue-router';
import about from '../views/about.vue'
import homepage from '../views/homepage.vue'
import contact from '../views/contact.vue'
import product from '../views/product.vue'
import login from '../views/login.vue'
import shop from '../views/shop.vue'


const routes = [
    {
        path:'/',
        name:'home',
        component:homepage
    },
    {
        path:'/about',
        name:'about',
        component:about
    },
    {
        path:'/contact',
        name:'contact',
        component:contact
    },
    {
        path:'/shop',
        name:'shop',
        component:shop
    },
    {
        path:'/login',
        name:'login',
        component:login
    }
]

const router = createRouter({
  // 3. Provide the history implementation to use. We are using the HTML5 history mode.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;