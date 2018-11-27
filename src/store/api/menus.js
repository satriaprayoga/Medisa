const modules={
    data:[
        {
            id:0,
            name:'Bantuan',
            value:'help'
        },
        {
            id:1,
            name:'Pengaturan',
            value:'settings',
        },
        {
            id:2,
            name:'Konfigurasi',
            value:'configs'
        }
    ]
}

export const ModuleService={
    get(){
        return modules.data;
    },
    getById(id){
        return modules.data.filter(mod=>mod.id===id)[0];
    },
    add(mod){
        modules.data.push(mod);
    },
    remove(mod){
        var idx=modules.data.findIndex(m=>m.id===mod.id);
        modules.data.splice(idx,1);
    }
}