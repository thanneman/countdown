import { formatDistanceToNow, parseISO } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PastEvents = ({ pastEvents, onDelete }) => {
    //sort events by date
    const sortedEvents = pastEvents.slice().sort((a, b) => a.date > b.date ? 1: -1);

    return (
        <>
            {sortedEvents.map((event) => (
                <div className={`event-contrainer ${event.color}`} key={event.id}>
                    <div className="event-header">
                        <h2 className="event-title">{event.title}</h2>
                        <span className={`event-category ${event.color}`}><FontAwesomeIcon icon={event.type} fixedWidth /></span>
                    </div>
                    <div className="event-body">
                        <div className="event-icon"><FontAwesomeIcon icon="check-circle" /></div>
                        <div className="event-text">
                            <span className="event-timing">Happened</span>
                            <span className="event-date">{formatDistanceToNow(parseISO(event.date), {addSuffix: true})}</span>
                        </div>
                        <button className='btn-delete' aria-label="Delete" onClick={() => onDelete(event.id)}><FontAwesomeIcon icon="trash-alt" fixedWidth/></button>
                    </div>
                </div>
            ))}
        </>
    )
}

export default PastEvents