const medics={
    data:[{
        id:1,
        name:'Herman Ngantuk',
        type:'Dokter',
        specialist:'Obsgin'
    },
    {
        id:2,
        name:'Herman Seger',
        type:'Dokter',
        specialist:'Anak'
    },
    {
        id:3,
        name:'Herman Aja',
        type:'Dokter',
        specialist:'Umum'
    },
    {
        id:4,
        name:'Ani',
        type:'Perawat',
        specialist:'-'
    },
    {
        id:5,
        name:'Tini',
        type:'Perawat',
        specialist:'-'
    },
    {
        id:6,
        name:'Susi',
        type:'Perawat',
        specialist:'-'
    },
    {
        id:7,
        name:'Rini',
        type:'Bidan',
        specialist:'-'
    },
    {
        id:8,
        name:'Tuti',
        type:'Bidan',
        specialist:'-'
    }],
};

const nonmedics={
    data:[{
        id:1,
        name:'Herman Ngantuk',
        type:'OB',
    },
    {
        id:2,
        name:'Herman Seger',
        type:'Dokter',
    },
    {
        id:3,
        name:'Herman Aja',
        type:'Dokter',
    },
    {
        id:4,
        name:'Ani',
        type:'Perawat',
    },
    {
        id:5,
        name:'Tini',
        type:'Perawat',
    }],
};

const medicTypes={
    data:[
        {
            id:1,
            name:'Dokter'
        },
        {
            id:2,
            name:'Perawat'
        },
        {
            id:3,
            name:'Bidan'
        },
        {
            id:4,
            name:'Farmasi'
        },
        {
            id:5,
            name:'Tenaga Kesehatan Lain'
        }
    ]
};

const nonMedicTypes={
    data:[
        {
            id:1,
            name:'Keuangan'
        },
        {
            id:2,
            name:'Logistik'
        },
        {
            id:3,
            name:'HRM'
        },
        {
            id:4,
            name:'OB'
        },
        {
            id:5,
            name:'Sekuriti'
        }
    ]
};



export const MedicService={
    getAll(){
        return medics.data;
    },
    get(id){
        if(!id || id===undefined)
            return medics.data;
        else
            return medics.data.filter(m=>m.id===id)[0];
    },
    remove(data){
        var index=medics.data.findIndex(m=>m.id===data.id);
        medics.data.splice(index,1);
    },
    update(data){
        var idx=medics.data.findIndex(m=>m.id===data.id);
        if(idx===-1){
            medics.data.push(data);
        }else{
            medics.data[idx]=data;
        }
        
    }
}

export const NonMedicService={
    getAll(){
        return nonmedics.data;
    },
    get(id){
        if(!id || id===undefined)
            return nonmedics.data;
        else
            return nonmedics.data.filter(m=>m.id===id)[0];
    },
    remove(data){
        var index=nonmedics.data.findIndex(m=>m.id===data.id);
        nonmedics.data.splice(index,1);
    },
    update(data){
        var idx=nonmedics.data.findIndex(m=>m.id===data.id);
        if(idx===-1){
            nonmedics.data.push(data);
        }else{
            nonmedics.data[idx]=data;
        }
        
    }
}

export const TypeService={
    getMedicTypes(){
        return medicTypes.data;
    },
    getNonMedicTypes(){
        return nonMedicTypes.data;
    }
}