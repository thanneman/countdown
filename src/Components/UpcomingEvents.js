import { formatDistanceToNow, parseISO } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const UpcomingEvents = ({ upcomingEvents, onDelete }) => {
    const sortedEvents = upcomingEvents.slice().sort((a, b) => a.date > b.date ? 1: -1);

    return (
        <>
            {sortedEvents.map((event) => (
                <div className={`event-contrainer ${event.type} ${event.color}`} key={event.id}>
                    <div className="event-header">
                        <h2 className="event-title">{event.title}</h2>
                        <span className={`event-category ${event.color}`}><FontAwesomeIcon icon={event.type} fixedWidth /></span>
                    </div>
                    <div className="event-body">
                        <span className="event-icon"><FontAwesomeIcon icon="clock" /></span>
                        <div className="event-text">
                            <span className="event-timing">Happening </span>
                            <span className="event-date">{formatDistanceToNow(parseISO(event.date), {addSuffix: true})}</span>
                        </div>
                        <button className='btn-delete' onClick={() => onDelete(event.id)}><FontAwesomeIcon icon="trash-alt" fixedWidth/></button>
                    </div>
                </div>
            ))}
        </>
    )
}

export default UpcomingEvents