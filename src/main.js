import { createApp } from 'vue'
import App from './App.vue'
import './main.css'
import store from "./store";

store.actions.loadInitial();
createApp(App)
    .provide("store", store)
    .mount('#app')
