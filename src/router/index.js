import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import contact from "../views/Contact.vue";
//import nprogress
import NProgress from "nprogress";

// Sometimes calling an API would necessitate without any change in URL. It means Vue route guards will not work here, and no more calls to beforeEnter or beforeEach will be made. In this case, you will need to deal with your HTTP client. If you are using Axios, it allows you to intercept your requests and responses by using interceptors and add some functionalities, like starting and stopping a progress bar just like this:

// const apiClient = axios.create({ ... })

// // Called on request

// apiClient.interceptors.request.use(config => { 
//   NProgress.start()
//   return config
// })

// // Called on response

// apiClient.interceptors.response.use(response => { 
//   NProgress.done()
//   return response
// })

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
