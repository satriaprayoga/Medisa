const actions={
    data:[
        {
            id:1,
            type:'Anastesi',
            subactions:[
                {
                    id:1,
                    name:'Bius Lokal',
                    price:250000
                },
                {
                    id:2,
                    name:'Bius Total',
                    price:350000
                }
            ]
        },
        {
            id:2,
            type:'Perawatan Luka',
            subactions:[
                {
                    id:1,
                    name:'Jahit (1-5)',
                    price:30000
                },
                {
                    id:2,
                    name:'Jahit (6-10)',
                    price:50000
                },
                {
                    id:3,
                    name:'Jahit (>10)',
                    price:50000
                },
                {
                    id:4,
                    name:'Verband',
                    price:50000
                }
            ]
        }
    ]
}

export const ActionService={
    get(id){
        if(!id || id===undefined){
            return actions.data;
        }else{
            return actions.data.filter(x=>x.id===id)[0];
        }
    },
    remove(data){
        var index=actions.data.findIndex(m=>m.id===data.id);
        actions.data.splice(index,1);
    },
    update(data){
        var idx=actions.data.findIndex(m=>m.id===data.id);
        if(idx===-1){
            actions.data.push(data);
        }else{
            actions.data[idx]=data;
        }
        
    }
}