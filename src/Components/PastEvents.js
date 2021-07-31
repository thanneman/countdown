import { formatDistanceToNow } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const PastEvents = ({ pastEvents }) => {
    return (
        <>
            {pastEvents.slice().sort((a, b) => a.date - b.date).map((event) => (
                <div className={`event-contrainer ${event.type}`} key={event.id}>
                    <h2 className="event-title">{event.title}</h2>
                    <div className="event-body">
                        <div className="event-icon"><FontAwesomeIcon icon={faCheckCircle} /></div>
                        <div className="event-text">
                            <span className="event-timing">Happened</span>
                            <span className="event-date">{formatDistanceToNow(new Date(event.date), {addSuffix: true})}</span>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default PastEvents