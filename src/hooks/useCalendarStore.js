import { useDispatch, useSelector } from 'react-redux';
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from '../store';

export const useCalendarStore = () => {
    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector((state) => state.calendar);

    const setActiveEvent = (calendarEvent) => {
        //console.log(calendarEvent);
        dispatch(onSetActiveEvent(calendarEvent));
    };

    const startSavingEvent = async (calendarEvent) => {
        //TODO: llegar a backend

        //Todo bien
        if (calendarEvent._id) {
            //TODO: Actualizando
            dispatch(onUpdateEvent({ ...calendarEvent }));
        } else {
            //TODO: Creando
            dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }));
        }
    };

    const startDeletingEvent = async () => {
        //TODO: llegar la backend
        dispatch(onDeleteEvent());
    };

    return {
        //Propierties
        events,
        activeEvent,
        hasEventSelected: !!activeEvent,
        //Metodos
        setActiveEvent,
        startSavingEvent,
        startDeletingEvent,
    };
};
