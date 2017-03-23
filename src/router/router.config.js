import Index from '../pages/index.vue'
import Home from '../pages/home.vue'
import UserData from '../pages/userdata.vue'
import MouserData from '../pages/mouserdata.vue'
import Rank from '../pages/ranking.vue'
import Order from '../pages/order.vue'
export default [
   
        { path: '/', redirect:'/home' },
        { path: '/home', component: Home },
        { path: '/userdata', component: UserData },
        {path:'/MouserData',component:MouserData},
        {path:'/ranking',component:Rank},
        {path:'/order',component:Order}
      
]