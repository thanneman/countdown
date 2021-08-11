import { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AddEvent = ({ onAdd, toggleModal }) => {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [type, setType] = useState('')
    const [color, setColor] = useState('')
    const inputRef = useRef()

    const onSubmit = (e) => {
        e.preventDefault()

        const localDate = date.toString()

        if(!title) {
            alert('Please add event title')
            return
        }
        if (!date) {
            alert('Please add event date')
            return
        }
        if (!type) {
            alert('Please add an event type')
            return
        }
        if (!color) {
            alert('Please select a color')
            return
        }

        onAdd({ title, date: localDate, type, color })

        setTitle('')
        setDate('')
        setType('')
        setColor('')
    }

    const onClick = (e) => {
        e.preventDefault()
        toggleModal()
    }

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <>
            <form className="add-form" onSubmit={onSubmit} >
                <div className="form-header">
                    <h2>New Event</h2>
                    <button className='btn-close' onClick={onClick}><FontAwesomeIcon icon="times" fixedWidth/></button>
                </div>
                <div className="form-control">
                    <label>Title</label>
                    <input
                        type="text"
                        placeholder="Add Title"
                        value={title}
                        ref={inputRef}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label>Date</label>
                    <input
                        type="date"
                        placeholder="MM-DD-YYYY"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label>Category</label>
                    <div className="radio-categories">
                            <input
                                type="radio"
                                name="categories"
                                id="holiday"
                                value="glass-cheers"
                                checked={type === 'glass-cheers'}
                                onChange={(e) => setType(e.target.value)}
                                className="form-check-input"
                            /><label className="holiday" htmlFor="holiday"><FontAwesomeIcon icon="glass-cheers" /></label>
                            <input
                                type="radio"
                                name="categories"
                                id="meeting"
                                value="user-friends"
                                checked={type === 'user-friends'}
                                onChange={(e) => setType(e.target.value)}
                                className="form-check-input"
                            /><label className="meeting" htmlFor="meeting"><FontAwesomeIcon icon="user-friends" /></label>
                            <input
                                type="radio"
                                name="categories"
                                id="task"
                                value="calendar-alt"
                                checked={type === 'calendar-alt'}
                                onChange={(e) => setType(e.target.value)}
                                className="form-check-input"
                            /><label className="task" htmlFor="task"><FontAwesomeIcon icon="calendar-alt" /></label>
                            <input
                                type="radio"
                                name="categories"
                                id="travel"
                                value="plane"
                                checked={type === 'plane'}
                                onChange={(e) => setType(e.target.value)}
                                className="form-check-input"
                            /><label className="travel" htmlFor="travel"><FontAwesomeIcon icon="plane" /></label>
                            <input
                                type="radio"
                                name="categories"
                                id="music"
                                value="music"
                                checked={type === 'music'}
                                onChange={(e) => setType(e.target.value)}
                                className="form-check-input"
                            /><label className="music" htmlFor="music"><FontAwesomeIcon icon="music" /></label>
                            <input
                                type="radio"
                                name="categories"
                                id="sports"
                                value="biking"
                                checked={type === 'biking'}
                                onChange={(e) => setType(e.target.value)}
                                className="form-check-input"
                            /><label className="sports" htmlFor="sports"><FontAwesomeIcon icon="biking" /></label>
                    </div>
                </div>
                <div className="form-control">
                    <label>Color</label>
                    <div className="radio-colors">
                            <input
                                type="radio"
                                name="color"
                                id="red"
                                value="red"
                                checked={color === 'red'}
                                onChange={(e) => setColor(e.target.value)}
                                className="form-check-input"
                            /><label className="red" htmlFor="red"></label>
                            <input
                                type="radio"
                                name="color"
                                id="green"
                                value="green"
                                checked={color === 'green'}
                                onChange={(e) => setColor(e.target.value)}
                                className="form-check-input"
                            /><label className="green" htmlFor="green"></label>
                            <input
                                type="radio"
                                name="color"
                                id="blue"
                                value="blue"
                                checked={color === 'blue'}
                                onChange={(e) => setColor(e.target.value)}
                                className="form-check-input"
                            /><label className="blue" htmlFor="blue"></label>
                            <input
                                type="radio"
                                name="color"
                                id="purple"
                                value="purple"
                                checked={color === 'purple'}
                                onChange={(e) => setColor(e.target.value)}
                                className="form-check-input"
                            /><label className="purple" htmlFor="purple"></label>
                            <input
                                type="radio"
                                name="color"
                                id="grey"
                                value="grey"
                                checked={color === 'grey'}
                                onChange={(e) => setColor(e.target.value)}
                                className="form-check-input"
                            /><label className="grey" htmlFor="grey"></label>
                    </div>
                </div>
                <button className='btn-block' type='submit' >Add Event</button>
            </form>
            <div className="overlay"></div>
        </>
    )
}

export default AddEvent
