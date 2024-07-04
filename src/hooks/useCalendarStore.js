import { useDispatch, useSelector } from 'react-redux';
import { onAddNewEvent, onSetActiveEvent } from '../store';

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
        } else {
            //TODO: Creando
            dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }));
        }
    };
    return {
        //Propierties
        events,
        activeEvent,
        //Metodos
        setActiveEvent,
        startSavingEvent,
    };
};
