import Vue from "vue";
import App from "./App.vue";
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';
//import store from './store';
//import routes from './routes/index copy'

//import axios from './axios';
//import router from "./routes/index";
/*import moment from "moment";
// import VueMeta from 'vue-meta'
import router from "./routes/index";
import store from "./store/store";*/

Vue.config.productionTip = false

new Vue({
    vuetify,
    router,
    store,

    render: h => h(App)
}).$mount('#app')