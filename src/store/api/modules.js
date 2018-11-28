import {helpdesk} from './menus/helpdesk'
import {settings} from './menus/settings'

const modules={
    data:[
        "Bantuan","Pengaturan","Konfigurasi"
    ]
}


export const ModuleService={
    get(){
        return modules.data;
    },
}

export const MenuService={
    get(module){
        if(module===modules.data[0]){
            return helpdesk.data;
        }else if(module===modules.data[1]){
            return settings.data;
        }else{
            return helpdesk.data;
        }
    },
}