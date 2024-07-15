import { useDispatch, useSelector } from 'react-redux';
import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSetActiveEvent, onUpdateEvent } from '../store';
import { calendarApi } from '../api';
import { convertEventsToDateEvents } from '../helpers';

export const useCalendarStore = () => {
    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector((state) => state.calendar);
    const { user } = useSelector((state) => state.auth);

    const setActiveEvent = (calendarEvent) => {
        //console.log(calendarEvent);
        dispatch(onSetActiveEvent(calendarEvent));
    };

    const startSavingEvent = async (calendarEvent) => {
        //TODO: Update event
        if (calendarEvent._id) {
            //TODO: Actualizando
            dispatch(onUpdateEvent({ ...calendarEvent }));
        } else {
            //TODO: Creando
            const { data } = await calendarApi.post('/events', calendarEvent);
            dispatch(onAddNewEvent({ ...calendarEvent, id: data.evento.id, user }));
        }
    };

    const startDeletingEvent = async () => {
        //TODO: llegar la backend
        dispatch(onDeleteEvent());
    };

    const startLoadingEvents = async () => {
        try {
            const { data } = await calendarApi.get('/events');
            const events = convertEventsToDateEvents(data.eventos);
            dispatch(onLoadEvents(events));
            //console.log(events);
        } catch (error) {
            console.log('Error cargando eventos');
            console.log(error);
        }
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
        startLoadingEvents,
    };
};
