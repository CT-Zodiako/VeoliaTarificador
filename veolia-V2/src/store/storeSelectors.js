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

export const useProyeccionesSelector = create((set) => {
    return{
        proy: '',
        cambioSelectorProyeciones: (proy) => set({proy: Number(proy)}),
    }
});

export const useDescripcion = create((set) => {
    return{
        descripcion: '',
        cambioDescripcion: (descripcion) => set({descripcion: descripcion}),
    }
});

export const useHorizonteDesde = create((set) => {
    return{
        horizonteDesde: '',
        cambioHorizonteDesde: (horizonteDesde) => set({horizonteDesde: horizonteDesde}),
    }
});

export const useHorizonteHasta = create((set) => {
    return{
        horizonteHasta: '',
        cambioHorizonteHasta: (horizonteHasta) => set({horizonteHasta: horizonteHasta}),
    }
});

export const useSemestreSelector = create((set) => {
    return{
        semestre: 1,
        cambioSelectorSemestre: (semestre) => set({semestre: Number(semestre)}),
    }
});