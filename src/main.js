import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Home from './components/Home';
import Catalog from './components/Catalog';
import Basket from './components/Basket';

import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

import IonicVue from '@ionic/vue';

Vue.use(IonicVue); 
Vue.use(VueRouter);

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/^ion-/];

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Home },
  { path: '/catalog', component: Catalog },
  { path: '/basket', component: Basket }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

//router.replace({ path: '*', redirect: '/' })

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.

new Vue({
  router,
  render : (h) => h(App)
}).$mount('#app');
