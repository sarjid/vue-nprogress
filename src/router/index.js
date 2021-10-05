import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import contact from "../views/Contact.vue";
//import nprogress
import NProgress from "nprogress";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },

  {
    path: "/contact",
    name: "contact",
    component: contact,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


//add for nprogress bar
router.beforeEach((To,From, next) => {
  NProgress.start()       
  next()    
})     
router.afterEach(() => {  
  NProgress.done()    
})

//end for nprogress bar


export default router;
