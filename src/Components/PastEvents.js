const PastEvents = ({ pastEvents }) => {
    const now = new Date();
    const days = 1000 * 60 * 60 * 24;

    return (
        <>
            {pastEvents.map((event) => (
                <div className="event-contrainer" key={event.id}>
                    <h2 className="event-title">{event.title}</h2>
                    <div className="event-body">
                        <span className="past-icon">x</span>
                        <span className="past-body">Happened</span>
                        <span className="past-date">{Math.floor((now - event.date) / days)} days ago</span>
                    </div>
                </div>
            ))}
        </>
    )
}

export default PastEvents