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
            name:'Herman Ngantuk',
            type:'Dokter',
            specialist:'Kandungan'
        },
        {
            name:'Herman Seger',
            type:'Dokter',
            specialist:'Anak'
        },
        {
            name:'Herman Aja',
            type:'Dokter',
            specialist:'Umum'
        },
        {
            name:'Ani',
            type:'Perawat',
            specialist:'-'
        },
        {
            name:'Tini',
            type:'Perawat',
            specialist:'-'
        },
        {
            name:'Susi',
            type:'Perawat',
            specialist:'-'
        },
        {
            name:'Rini',
            type:'Bidan',
            specialist:'-'
        },
        {
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