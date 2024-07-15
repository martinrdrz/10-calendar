import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { localizer, getMessagesES } from '../../helpers';
import { Navbar, CalendarEvent, CalendarModal, FabAddNew, FabDelete } from '../';
import { useEffect, useState } from 'react';
import { useUiStore, useCalendarStore } from '../../hooks';

export const CalendarPage = () => {
    const { events, setActiveEvent, startLoadingEvents } = useCalendarStore();
    const { openDateModal } = useUiStore();
    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week');

    const eventStyleGetter = (event, start, end, isSelected) => {
        const style = {
            backgroundColor: '#347CF7',
            borderRadius: '5px',
            opacity: 0.8,
            color: 'while',
        };
        return { style };
    };

    const onDoubleClick = (event) => {
        //console.log({ doubleClick: event });
        openDateModal();
    };

    const onSelect = (event) => {
        //console.log({ click: event });
        setActiveEvent(event);
    };

    const onViewChanged = (event) => {
        localStorage.setItem('lastView', event);
        setLastView(event);
    };

    useEffect(() => {
        startLoadingEvents();
    }, []);

    return (
        <>
            <Navbar />
            <Calendar
                culture='es'
                localizer={localizer}
                events={events}
                defaultView={lastView}
                startAccessor='start'
                endAccessor='end'
                style={{ height: 'calc(100vh - 80px)' }}
                messages={getMessagesES()}
                eventPropGetter={eventStyleGetter}
                components={{
                    event: CalendarEvent,
                }}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelect}
                onView={onViewChanged}
            />
            <FabAddNew />
            <FabDelete />
            <CalendarModal />
        </>
    );
};
