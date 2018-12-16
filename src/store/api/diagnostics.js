
const diagnostics={
    data:[
        {
            id:1,
            dtd:'001',
            code:'A00',
            name:'Kolera'
        },
        {
            id:2,
            dtd:'033',
            code:'B00',
            name:'Infeksi herpesvirus (Herpes Simpleks)'
        },
        {
            id:3,
            dtd:'035',
            code:'B05',
            name:'Campak'
        }
    ]
        
}

export const DiagnosticsService={
    getAll(){
        return diagnostics.data;
    },
    get(id){
        if(!id || id===undefined){
            return diagnostics.data;
        }else{
            return diagnostics.data.filter(x=>x.id===id)[0];
        } 
    },
    remove(data){
        var idx=diagnostics.data.findIndex(x=>x.id===data.id);
        diagnostics.data.splice(idx,1);
    },
    update(data){
        var idx=diagnostics.data.findIndex(m=>m.id===data.id);
        if(idx===-1){
            diagnostics.data.push(data);
        }else{
            diagnostics.data[idx]=data;
        }
        
    },
}