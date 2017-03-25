import VueRouter from 'vue-router'
import hero_detail from './components/hero_detail.vue'
import container from './components/container.vue'
Vue.use(VueRouter)

const routes = [{
  path: '/hero_detail/:id',
  component: hero_detail
},{
  path: '/',
  component: container
}]

export default new VueRouter({
  routes
})