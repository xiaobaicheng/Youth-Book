import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import VueTouch from 'vue-touch'
import axios from "axios"
import { Tabbar, TabbarItem,Button  } from 'vant';
import 'vant/lib/index.css';

const app = createApp(App)
installElementPlus(app)
app.use(VueTouch, { name: 'v-touch' })
axios.defaults.baseURL="http://124.221.168.57:8099";
app.config.globalProperties.$axios = axios;
app.use(Tabbar);
app.use(TabbarItem);
app.use(Button);

app.use(store).use(router).mixin({
    data(){
        return{
            baseURL:'http://124.221.168.57:8099'
        }
    }
})
.mount('#app')