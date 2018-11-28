export const settings={
    data:{
        title:'HRM',
    name:'settings',
    items:[
        {
            title:'Pegawai',
            name:'employee',
            subItems:[
                {title:'Medis',name:'medic',to:'/employee_medics'},
                {title:'Non Medis',name:'non_medic',to:'/employee_non_medics'}
            ]
        }
    ]
    }
};
