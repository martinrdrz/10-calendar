import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { addHours } from 'date-fns';
import { localizer, getMessagesES } from '../../helpers';
import { Navbar, CalendarEvent } from '../';

const events = [
    {
        title: 'Cumpleaños del Jefe',
        notes: 'Hay que comprar el pastel',
        start: new Date(),
        end: addHours(new Date(), 2),
        bgColor: '#fafafa',
        user: {
            _id: '123',
            name: 'Fernando',
        },
    },
];

export const CalendarPage = () => {
    const eventStyleGetter = (event, start, end, isSelected) => {
        const style = {
            backgroundColor: '#347CF7',
            borderRadius: '5px',
            opacity: 0.8,
            color: 'while',
        };
        return { style };
    };

    return (
        <>
            <Navbar />
            <Calendar
                culture="es"
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 'calc(100vh - 80px)' }}
                messages={getMessagesES()}
                eventPropGetter={eventStyleGetter}
                components={{
                    event: CalendarEvent,
                }}
            />
        </>
    );
};
