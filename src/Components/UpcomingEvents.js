import { formatDistanceToNow } from 'date-fns'

const UpcomingEvents = ({ upcomingEvents}) => {
    
    //const sortedEvents = upcomingEvents.slice().sort((a, b) => a.date - b.date)

    return (
        <>
            {upcomingEvents.slice().sort((a, b) => a.date - b.date).map((event) => (
                <div className="event-contrainer" key={event.id}>
                    <h2 className="event-title">{event.title}</h2>
                    <div className="event-body">
                        {/* <span className="past-icon">x</span> */}
                        <span className="future-body">Happening </span>
                        <span className="past-date">{formatDistanceToNow(new Date(event.date), {addSuffix: true})}</span>
                    </div>
                </div>
            ))}
        </>
    )
}

export default UpcomingEvents
