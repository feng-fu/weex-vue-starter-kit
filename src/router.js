import VueRouter from 'vue-router'
import hero_detail from './components/hero_detail.vue'
Vue.use(VueRouter)

const routes = [{
  path: '/hero_detail/:id',
  component: hero_detail
}]

export default new VueRouter({
  routes
})