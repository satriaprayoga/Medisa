import * as helpDeskMenu from '../api/menus/helpdesk'
import * as masterMenu from '../api/menus/master'

const state={
    modules:[
        "Help Desk",
        "Master Data",
    ],
    activeModule:"",
    drawer:true
}

const getters={
    getModules:(state)=>{
        return state.modules;
    },
    getActiveModule:(state)=>{
        if(state.activeModule.length===0)
            state.activeModule=state.modules[0];
        return state.activeModule;

    },
    getDrawer:(state)=>{
        return state.drawer
    }
}

const mutations={
    changeModule(state,mod){
        state.activeModule=mod;
    },
    toggleDrawer(state){
        state.drawer=!state.drawer;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations
  }

