import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueProgressBar from '@aacassandra/vue3-progressbar';
const options = {
  color: '#000000',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '1s',
    opacity: '0.6s',
    termination: 300
  }
};

createApp(App)
  .use(store)
  .use(VueProgressBar, options)
  .use(router)
  .use(VueAxios, axios)
  .mount('#app');
