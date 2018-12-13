const state={
    modules:[
        "Bantuan",
        "HRM",
        "Konfigurasi"
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

const actions={
    changeModule({commit},mod){
        commit('changeModule',mod);
    },
    toggleDrawer({commit}){
        commit('toggleDrawer');
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
  }
