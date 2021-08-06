import { format } from 'date-fns'

const Today = () => {
    return (
        <section className="today-container">
            <div className="today">
                <div className="today-block">
                    <span className="today-label">Today is</span>
                    <span className="today-date">{format(new Date(), 'MMMM dd')}</span>
                </div>
                <span className="arrow"></span>
            </div>
        </section>
    )
}

export default Today
