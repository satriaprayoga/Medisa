import Vue from 'vue'
import Router from 'vue-router'

const Hospital=()=>import('../modules/master/components/Hospital')
const Medic=()=>import('../modules/master/components/Medic')
const MedicForm=()=>import('../modules/master/components/MedicForm')

Vue.use(Router)

const router= new Router({
    mode: 'hash', // https://router.vuejs.org/api/#mode
    linkActiveClass: 'open active',
    routes:[
        {
            path:'/hospital',
            name:'Informasi Rumah Sakit',
            component:Hospital
        },
        {
            path:'/employee_medics',
            name:'Pegawai Medis',
            component:Medic
        },
        {
            path:'/add_employee_medics',
            name:'Pegawai Medis Baru',
            component:MedicForm
        }
    ]
});

export default router;