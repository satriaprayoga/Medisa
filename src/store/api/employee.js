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

const nonmedics={
    data:[{
        id:1,
        name:'Budi',
        type:'Kasir',
        specialist:'-'
    },
    {
        id:2,
        name:'Johan',
        type:'Umum',
        specialist:'-'
    },
    {
        id:3,
        name:'Dadang',
        type:'Sekuriti',
        specialist:'-'
    },
    {
        id:4,
        name:'Bahar',
        type:'OB',
        specialist:'-'
    },
    {
        id:5,
        name:'Doni',
        type:'OB',
        specialist:'-'
    },
    {
        id:6,
        name:'Mia',
        type:'Koki',
        specialist:'-'
    },
    {
        id:7,
        name:'Dudung',
        type:'Keuangan',
        specialist:'-'
    },
    {
        id:8,
        name:'Dodi',
        type:'Keuangan',
        specialist:'-'
    }],
};

export const NonMedicService={
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