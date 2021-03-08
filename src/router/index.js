import Vue from 'vue';
import Router from 'vue-router';
import Ejercicio1 from '@/components/Ejercicio1';
import Ejercicio2 from '@/components/Ejercicio2';
import Ejercicio3 from '@/components/Ejercicio3';
//import Home from '@/components/Home';
//import Ejercicio3 from '@/components/Ejercicio3';
/*import Login from '../components/Login'
import Register from '../components/Register'
import Dashboard from '../components/Dashboard'
import Producto from '../components/Producto'*/
//import Home from '../components/Ejercicio1';
//import firebase from "firebase/app";
//import { auth } from "../main";
Vue.use(Router)

const router = new Router({

    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        /*{
                    path: '/',
                    name: 'Home',
                    component: Home
                },*/


        {
            path: '/Ejercicio1',
            name: 'Ejercicio1',
            component: Ejercicio1
        },
        {
            path: '/Ejercicio2',
            name: 'Ejercicio2',
            component: Ejercicio2
        },
        {
            path: '/Ejercicio3',
            name: 'Ejercicio3',
            component: Ejercicio3
        }


    ]
});

export default router