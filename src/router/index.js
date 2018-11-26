import Vue from 'vue'
import Router from 'vue-router'

const Hospital=()=>import('../modules/master/components/Hospital')
const Medic=()=>import('../modules/master/components/Medic')
const MedicForm=()=>import('../modules/master/components/MedicForm')
const NonMedic=()=>import('../modules/master/components/NonMedic')
const NonMedicForm=()=>import('../modules/master/components/NonMedicForm')

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
            path:'/update_employee_medics/:id?',
            name:'Update Pegawai Medis',
            component:MedicForm
        },
        {
            path:'/employee_non_medics',
            name:'Pegawai Non Medis',
            component:NonMedic
        },
        {
            path:'/update_employee_non_medics/:id?',
            name:'Update Pegawai Non Medis',
            component:NonMedicForm
        },
    ]
});

export default router;