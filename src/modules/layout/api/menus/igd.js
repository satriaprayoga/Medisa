const igd={
    title:'IGD',
    name:'igd',
    item:[
        {title:'Daftar Pasien',name:"igd_register"},
        {title:'Periksa',name:"patient_check_igd"},
        {
            title:'Pengaturan',
            name:'igd_settings',
            subItem:[
                {
                    title:'Dokter',
                    name:'igd_shift_doctor',
                },
                {
                    title:'Perawat',
                    name:'igd_shift_nurse'
                }
            ]
        }
    ]
}

export default{
    igd
}