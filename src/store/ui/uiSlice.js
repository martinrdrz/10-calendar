//sirve para mantener la infromacion del UI, es decir, si el Modal esta abierto, cerrado o tambien podria ser información relacionada con el navegador, y otras cosas relacionada con la interface.

import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isDateModalOpen: false,
    },
    reducers: {
        onOpenDateModal: (state) => {
            state.isDateModalOpen = true;
        },
        onCloseDateModal: (state) => {
            state.isDateModalOpen = false;
        },
    },
});

export const { onOpenDateModal, onCloseDateModal } = uiSlice.actions;
