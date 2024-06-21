import {create} from 'zustand';

export const useApsSelector = create((set) => {
    return{
        aps:'',
        cambioSelector: (aps) => set({aps: Number(aps)}),
    }
});


export const useAnnoSelector = create((set) => {
    return{
        anno:2024,
        cambioSelectorAnno: (anno) => set({anno: Number(anno)}),
    }
});


export const useMesSelector = create((set) => {
    return{
        mes:2,
        cambioSelectorMes: (mes) => set({mes: Number(mes)}),
    }
});