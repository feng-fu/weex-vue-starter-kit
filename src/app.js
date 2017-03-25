import App from './index.vue'
import router from './router.js'

new Vue({
  el: '#root',
  router,
  render: h => h(App)
})
