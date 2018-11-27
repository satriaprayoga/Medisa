import { stat } from "fs";

const state={
    hospitalInfo:{
        code:'RSDD-S-01',
        registered_date:new Date(),
        name:'Rumah Sakit Dompet Dhuafa',
        type:'RSU',
        class:'C',
        director:'dr.Tuan Besar Direktur, SpKM',
        address:'Jl. Sehat No 1, Jakarta'
    },
    medics:[
        {
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
        }
    ],
    nonMedics:[
        {
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
    actions:[
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

const getters={
    getHospitalInfo:(state)=>{
        return state.hospitalInfo;
    },
    getMedics:(state)=>{
        return state.medics;
    },
    getNonMedics:(state)=>{
        return state.nonMedics;
    },
    getMedic:(state)=>(id)=>{
        return state.medics.filter(m=>m.id===id)[0];
    },
    getNonMedic:(state)=>(id)=>{
        return state.nonMedics.filter(m=>m.id===id)[0];
    },
    getActions:(state)=>{
        return state.actions;
    },
    getAction:(state)=>(id)=>{
        return state.actions.filter(a=>a.id===id)[0];
    },
    getSubActions:(state)=>(action)=>{
        const act=state.actions.filter(a=>a.id===action.id)[0];
        if(act && act.subactions.length>0){
            return act.subactions;
        }else{
            return null;
        }
    }
    
}

const mutations={
    setHospitalInfo(state,data){
        state.hospitalInfo=data;
    },
    addMedics(state,e){
        state.medics.push({
            name:e.name,
            type:e.type,
            specialist:e.specialist
        });
    },
    addNonMedics(state,e){
        state.nonMedics.push({
            name:e.name,
            type:e.type,
            specialist:e.specialist
        });
    },
    updateMedics(state,medic){
        var index=state.medics.findIndex(m=>m.id===medic.id);
        state.medics[index]={
            id:medic.id,
            name:medic.name,
            type:medic.type,
            specialist:medic.specialist
        };
    },
    deleteMedic(state,medic){
        var index=state.medics.findIndex(m=>m.id===medic.id);
        state.medics.splice(index,1);
    },
    updateNonMedics(state,nonmedic){
        var index=state.nonMedics.findIndex(m=>m.id===nonmedic.id);
        state.nonMedics[index]={
            id:nonmedic.id,
            name:nonmedic.name,
            type:nonmedic.type,
            specialist:nonmedic.specialist
        };
    },
    deleteNonMedic(state,nonmedic){
        var index=state.nonMedics.findIndex(m=>m.id===nonmedic.id);
        state.nonMedics.splice(index,1);
    },
    addAction(state,action){
        state.actions.push(action);
    },
    updateAction(state,action){
        var index=state.actions.findIndex(a=>a.id===action.id);
        state.actions[index]={
            id:action.id,
            type:action.type,
            subactions:action.subactions
        }
    },
    deleteAction(state,action){
        var index=state.action.findIndex(a=>a.id===action.id);
        state.actions.splice(index,1)
    }
}

const actions={
    updateHospitalInfo({commit},data){
        commit('setHospitalInfo',data);
    },
    addMedics({commit},data){
        commit('addMedics',data);
    },
    updateMedics({commit},data){
        commit('updateMedics',data);
    },
    deleteMedic({commit},data){
        commit('deleteMedic',data)
    },
    addNonMedics({commit},data){
        commit('addNonMedics',data);
    },
    updateNonMedics({commit},data){
        commit('updateNonMedics',data);
    },
    deleteNonMedic({commit},data){
        commit('deleteNonMedic',data)
    },
}

export default{
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}