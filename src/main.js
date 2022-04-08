import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import VueTouch from 'vue-touch'

const app = createApp(App)
installElementPlus(app)
app.use(VueTouch, {name: 'v-touch'})

VueTouch.config.swipe = {

     threshold: 100 //手指左右滑动距离

}
app.use(store).use(router).mount('#app')