import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import router from '../src/router/router.js';


import "../src/assets/css/custom.min.css"; //import the compiled CSS after setting up file watcher
import "../node_modules/bootstrap/dist/js/bootstrap"; //import bootstrap js
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"; //import bootstrap bundle js



createApp(App).use(router).mount('#app')
