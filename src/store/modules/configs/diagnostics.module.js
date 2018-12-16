import {DiagnosticsService} from '../../api/diagnostics'

const state={
    diagnostics:[],
    diagnostic:{}
}

const getters={
    getDiagnostics:(state)=>{
        state.diagnostics=DiagnosticsService.getAll();
        return state.diagnostics;
    },
    getDiagnosticId:(state)=>(id)=>{
        state.diagnostic=DiagnosticsService.get(id);
        return state.diagnostic;
   },
}
const mutations={
    update(state,data){
        DiagnosticsService.update(data);
    },
    remove(state,data){
        DiagnosticsService.remove(data);
    }
}

const actions={
    update({commit},data){
        commit('update',data);
    },
    remove({commit},data){
        commit('remove',data);
    }
}

export default{
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}