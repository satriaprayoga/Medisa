const state={
    hospitalInfo:{
        code:'RSDD-S-01',
        registered_data:new Date(),
        name:'Rumah Sakit Dompet Dhuafa',
        type:'RSU',
        class:'C',
        director:'dr.Tuan Besar Direktur, SpKM',
        address:'Jl. Sehat No 1, Jakarta'
    }
}

const getters={
    getHospitalInfo:(state)=>{
        return state.hospitalInfo;
    }
}

const mutations={
    setHospitalInfo(state,data){
        state.hospitalInfo=data
    }
}

const actions={
    updateHospitalInfo({commit},data){
        commit('setHospitalInfo',data);
    }
}

export default{
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}