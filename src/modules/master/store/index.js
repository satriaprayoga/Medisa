const state={
    hospitalInfo:{
        code:'RSDD-S-01',
        registered_date:new Date(),
        name:'Rumah Sakit Dompet Dhuafa',
        type:'RSU',
        class:'C',
        director:'dr.Tuan Besar Direktur, SpKM',
        address:'Jl. Sehat No 1, Jakarta'
    },
    medics:[
        {
            id:1,
            name:'Herman Ngantuk',
            type:'Dokter',
            specialist:'Obsgin'
        },
        {
            id:2,
            name:'Herman Seger',
            type:'Dokter',
            specialist:'Anak'
        },
        {
            id:3,
            name:'Herman Aja',
            type:'Dokter',
            specialist:'Umum'
        },
        {
            id:4,
            name:'Ani',
            type:'Perawat',
            specialist:'-'
        },
        {
            id:5,
            name:'Tini',
            type:'Perawat',
            specialist:'-'
        },
        {
            id:6,
            name:'Susi',
            type:'Perawat',
            specialist:'-'
        },
        {
            id:7,
            name:'Rini',
            type:'Bidan',
            specialist:'-'
        },
        {
            id:8,
            name:'Tuti',
            type:'Bidan',
            specialist:'-'
        }
    ]
}

const getters={
    getHospitalInfo:(state)=>{
        return state.hospitalInfo;
    },
    getMedics:(state)=>{
        return state.medics;
    },
    getMedic:(state)=>(id)=>{
        var medic=state.medics.filter(med=>med.id===id)
        return medic[0];
    }
}

const mutations={
    setHospitalInfo(state,data){
        state.hospitalInfo=data;
    },
    addMedics(state,e){
        state.medics.push({
            name:e.name,
            type:e.type,
            specialist:e.specialist
        });
    }
}

const actions={
    updateHospitalInfo({commit},data){
        commit('setHospitalInfo',data);
    },
    addMedics({commit},data){
        commit('addMedics',data);
    }
}

export default{
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}