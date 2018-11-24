const master={
    title:'Master',
    name:'master',
    item:[
        {
            title:'Informasi Rumah Sakit',
            name:'rs_info',
            to:'/hospital'
        },
        {
            title:'Pegawai',
            name:'pegawai',
            subItem:[{title:'Medis',name:'medic',to:'/employee_medics'},{title:'Non Medis',name:'non_medic'}]
        },
        
        {
            title:'Fasilitas Medis',
            name:'facility_medic',
            subItem:[
                {
                    title:'Tindakan',
                    name:'tindakan'
                },
                {
                    title:'Diagnosa',
                    name:'diagnose'
                },
                {title:'Kamar Rawat Inap'
                ,name:'room_ri'}
            ]
        },
        {
            title:'Penunjang Medis',
            name:'support_medic'
        },
        {
            title:'Jadwal Dokter',
            name:'schedule_info'
        }
        
    ]
};

export default{
    master
}