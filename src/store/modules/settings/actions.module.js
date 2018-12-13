import {ActionService} from '../../api/actions'

const state={
    actions:[],
    action:{},
    subactions:[]
}

const getters={
   getActions:(state)=>{
       state.actions=ActionService.getAll();
       return state.actions;
   },
   getActionId:(state)=>(id)=>{
        state.action=ActionService.get(id);
        return state.action;
   },
   getSubActions:(state)=>(id)=>{
       state.subactions=ActionService.getSubActions(id);
       return state.subactions;
   },
   getSubActionsByType:(state)=>(type)=>{
    state.subactions=ActionService.getSubActionByType(type);
    return state.subactions;
   }
}

const mutations={
    updateAction(state,action){
        ActionService.update(action);
    },
    removeAction(state,action){
        ActionService.remove(data);
    },
    updateSubAction(state,action,subAction){
        ActionService.updateSubAction(action.id,subAction);
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