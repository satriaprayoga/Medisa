import Vue from 'vue'
import Router from 'vue-router'

const Medic=()=>import('../views/hrm/employee/Medic')
const MedicForm=()=>import('../components/hrm/MedicForm')
const NonMedic=()=>import('../views/hrm/employee/NonMedic')
const NonMedicForm=()=>import('../components/hrm/NonMedicForm')
const Actions=()=>import('../views/configs/Actions')
const Diagnostics=()=>import('../views/configs/Diagnostics')
const DiagnosticForm=()=>import('../components/configs/DiagnosticForm')
const MedicDetail=()=>import('../views/hrm/employee/MedicDetail')


Vue.use(Router)

const router= new Router({
    mode: 'hash', // https://router.vuejs.org/api/#mode
    linkActiveClass: 'open active',
    routes:[
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
        {
            path:'/medic_detail',
            name:'Petugas Medis',
            component:MedicDetail
        },
        {
            path:'/actions',
            name:'Tindakan',
            component:Actions
        },
        {
            path:'/diagnostics',
            name:'Diagnosa',
            component:Diagnostics
        },
        {
            path:'/update_diagnostics/:id?',
            name:'Update Diagnosa',
            component:DiagnosticForm
        }
    ]
});

export default router;