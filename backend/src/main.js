import {createApp} from 'vue'
import './style.css'
import store from './store'
import router from './router'
import App from './App.vue'
import currencyUSD from './filters/currency.js'

const app = createApp(App)
app
    .use(store)
    .use(router)
    .mount('#app')

app.config.globalProperties.$filters = {
    currencyUSD
}
