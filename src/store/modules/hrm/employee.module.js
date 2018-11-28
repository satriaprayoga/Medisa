import {MedicService,NonMedicService,TypeService} from '../../api/employee'

const state={
    medic:{},
    nonmedic:{},
    medics:[],
    nonmedics:[],
    medicTypes:[],
    nonMedicTypes:[]
}

const getters={
    getMedics:(state)=>{
        state.medics=MedicService.getAll();
    //    console.log(state.medics);
        return state.medics;
    },
    getMedicId:(state)=>(id)=>{
        state.medic=MedicService.get(id);
        console.log(state.medic);
        return state.medic;
    },
    getNonMedics:(state)=>{
        state.nonmedics=NonMedicService.getAll();
        return state.nonmedics;
    },
    getNonMedicId:(state)=>(id)=>{
        state.nonmedic=NonMedicService.get(id);
        return state.nonmedic;
    },
    getMedicTypes:(state)=>{
        state.medicTypes=TypeService.getMedicTypes();
        console.log(state.medicTypes);
        return state.medicTypes;
    },
    getNonMedicTypes:(state)=>{
        state.nonMedicTypes=TypeService.getNonMedicTypes();
        return state.nonMedicTypes;
    }
}

const mutations={
    removeMedic(state,data){
        MedicService.remove(data);
    },
    updateMedic(state,data){
       MedicService.update(data);
    },
    removeNonMedic(state,data){
        NonMedicService.remove(data);
    },
    updateNonMedic(state,data){
       NonMedicService.update(data);
    }
}

const actions={
    removeMedic({commit},data){
        commit("removeMedic",data);
    },
    updateMedic({commit},data){
        commit("updateMedic",data);
    },
    removeNonMedic({commit},data){
        commit("removeNonMedic",data);
    },
    updateNonMedic({commit},data){
        commit("updateNonMedic",data);
    }
}

export default{
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}