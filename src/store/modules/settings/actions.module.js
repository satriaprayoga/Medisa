import {ActionService} from '../../api/actions'

const state={
    actions:[],
    action:{}
}

const getters={
   getActions:(state)=>{
       state.actions=ActionService.getAll();
       return state.actions;
   },
   getActionId:(state)=>(id)=>{
        state.action=ActionService.get(id);
        return state.action;
   }
}

const mutations={
    updateAction(state,action){
        ActionService.update(action);
    },
    removeAction(state,action){
        ActionService.remove(data);
    }
}

const actions={
    updateAction({commit},data){
        commit('updateAction',data);
    }
}

export default{
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}