export const hrm={
    data:{
        title:'HRM',
    name:'hrm',
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
