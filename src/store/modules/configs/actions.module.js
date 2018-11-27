import {ActionService} from '../../api/actions'
import { stat } from 'fs';

const state={
    action:{},
    actions:[]
}

const getters={
    get:(state)=>(id)=>{
        if(!id || id===undefined){
            state.actions=ActionService.get;
        }else{
            state.actions=ActionService.get(id);
        }
    }
}

const mutations={
    remove(state,data){
        state.action=data;
        ActionService.remove(state.action);
    },
    update(state,data){
        ActionService.update(data);
        state.action=ActionService.get(data.id);
    }
}

const actions={
    remove({commit},data){
        commit('remove',data);
    },
    update({commit},data){
        commit('update',data);
    }
}

export default{
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}