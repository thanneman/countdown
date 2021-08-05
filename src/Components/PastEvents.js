import { formatDistanceToNow, parseISO } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PastEvents = ({ pastEvents }) => {
    const sortedEvents = pastEvents.slice().sort((a, b) => a.date > b.date ? 1: -1);

    return (
        <>
            {sortedEvents.slice().sort((a, b) => a.date - b.date).map((event) => (
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
                    </div>
                </div>
            ))}
        </>
    )
}

export default PastEvents