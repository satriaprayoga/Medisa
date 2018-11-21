import * as helpDeskMenu from '../api/menus/helpdesk'
import * as masterMenu from '../api/menus/master'

const state={
    modules:[
        "Help Desk",
        "Master Data",
    ],
    activeModule:"",
    activeMenu:{}
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
    getActiveMenu:(state)=>{
        if(state.activeMenu===null)
            mutations.changeMenu(state,helpDeskMenu);
        return state.activeMenu;
    }
}

const mutations={
    changeModule(state,mod){
        state.activeModule=mod;
    },
    changeMenu(state){
        if(state.activeModule===state.modules[1]){
           mutations.addMenu(state,masterMenu);
        }else{
            mutations.addMenu(state,helpDeskMenu);
        }
    },
    addMenu(state,menu){
        Object.keys(menu).forEach(function(key){
            var temp=menu[key];
            console.log(temp);
            state.activeMenu=temp;
          
        });
        console.log(state.activeMenu);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations
  }

