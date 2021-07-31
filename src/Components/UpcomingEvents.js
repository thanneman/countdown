import { formatDistanceToNow } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

const UpcomingEvents = ({ upcomingEvents}) => {
    return (
        <>
            {upcomingEvents.slice().sort((a, b) => a.date - b.date).map((event) => (
                <div className={`event-contrainer ${event.type}`} key={event.id}>
                    <h2 className="event-title">{event.title}</h2>
                    <div className="event-body">
                        <span className="event-icon"><FontAwesomeIcon icon={faClock} /></span>
                        <div className="event-text">
                            <span className="event-timing">Happening </span>
                            <span className="event-date">{formatDistanceToNow(new Date(event.date), {addSuffix: true})}</span>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default UpcomingEvents
