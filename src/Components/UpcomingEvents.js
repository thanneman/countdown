const UpcomingEvents = ({ upcomingEvents}) => {
    const now = new Date();
    const days = 1000 * 60 * 60 * 24;

    return (
        <>
            {upcomingEvents.map((event) => (
                <div className="event-contrainer" key={event.id}>
                <h2 className="event-title">{event.title}</h2>
                <div className="event-body">
                    <span className="past-icon">x</span>
                        <span className="future-body">Happening</span>
                        <span className="past-date">in {Math.floor((event.date - now) / days)} days</span>
                    </div>
                </div>
            ))}
        </>
    )
}

export default UpcomingEvents
