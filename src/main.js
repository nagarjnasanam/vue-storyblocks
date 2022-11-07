import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { StoryblokVue, apiPlugin } from '@storyblok/vue';
// import Grid from "./components/Grid.vue";
// import Page from "./components/Page.vue";
// import Teaser from "./components/Teaser.vue";
// import Feature from "./components/Feature.vue";


import './assets/main.css'

const app = createApp(App)
 
// app.component("Grid", Grid);
// app.component("Page", Page);
// app.component("Teaser", Teaser);
// app.component("Feature", Feature);
app.use(StoryblokVue,{
    accessToken: 'PjzPQlIRZrnZQ8SmCc25jQtt',
    bridge: process.env.NODE_ENV !== 'production', // optimizes by excluding the bridge on production
    use: [apiPlugin],
})

app.use(router)

app.mount('#app')
