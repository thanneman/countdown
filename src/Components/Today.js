import React from 'react'

const Today = () => {
    const today = new Date();
    const todayDate = today.getDate();
    const todayMonth = today.toLocaleString('default', { month: 'long' });

    return (
        <section className="today-container">
            <div className="today">
                <div className="today-block">
                    <span className="today-label">Today is</span>
                    <span className="today-date">{todayMonth} {todayDate} </span>
                </div>
            </div>
        </section>
    )
}

export default Today
