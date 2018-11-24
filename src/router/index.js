import Vue from 'vue'
import Router from 'vue-router'

const Hospital=()=>import('../modules/master/components/Hospital')

Vue.use(Router)

const router= new Router({
    mode: 'hash', // https://router.vuejs.org/api/#mode
    linkActiveClass: 'open active',
    routes:[
        {
            path:'/hospital',
            name:'hospital_info',
            component:Hospital
        }
    ]
});

export default router;