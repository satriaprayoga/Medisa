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
    getAll(){
        return actions.data;
    },
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
        
    },
    getSubActions(id){
        if(!id || id===undefined){
            return null;
        }else{
            var action= actions.data.filter(x=>x.id===id)[0];
            console.log(action.subactions);
           
            return action.subactions;
        }
    },
    getSubActionByType(type){
        if(!type || type===undefined){
            return null;
        }else{
            var action= actions.data.filter(x=>x.type===type)[0];
            console.log(action.subactions);
           
            return action.subactions;
        }
    },
    updateSubAction(actionId,subAction){
        var idx=actions.data.findIndex(m=>m.id===data.id);
        if(idx===-1){
           return ;
        }else{
            var idx=actions.data.findIndex(m=>m.id===data.id);
            var subIdx=actions.data[idx].findIndex(m=>m.id===subAction.id);
            if(subIdx===-1){
                actions.data[idx].push(subAction);
            }else{
                actions.data[idx].subactions[subIdx]=subAction;
            }
        }
    }
}