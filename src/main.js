import Vue from 'vue'
import App from './App.vue'
import router from './router' // Importa las rutas desde src/router/index.js

Vue.config.productionTip = false

new Vue({
  router, // Agrega las rutas al Vue instance
  render: h => h(App),
}).$mount('#app')

