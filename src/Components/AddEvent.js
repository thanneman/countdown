import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AddEvent = ({ onAdd, toggleModal }) => {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [type, setType] = useState('')
    const [color, setColor] = useState('')

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

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <button className='btn' onClick={onClick}><FontAwesomeIcon icon="times" /></button>
            <div className="form-control">
                <label>Title</label>
                <input
                    type="text"
                    placeholder="Add Title"
                    value={title}
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
                <select onChange={(e) => setType(e.target.value)} defaultValue="">
                    <option hidden value="">Select Event Type</option>
                    <option value="glass-cheers">Holiday</option>
                    <option value="user-friends">Meeting</option>
                    <option value="calendar-alt">Task</option>
                    <option value="plane">Travel</option>
                    <option value="music">Music</option>
                    <option value="biking">Sports</option>
                </select>
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
                        />
                        <label className="red" htmlFor="red"></label>
                        
                        <input
                            type="radio"
                            name="color"
                            id="green"
                            value="green"
                            checked={color === 'green'}
                            onChange={(e) => setColor(e.target.value)}
                            className="form-check-input"
                        />
                        <label className="green" htmlFor="green"></label>
                    
                        <input
                            type="radio"
                            name="color"
                            id="blue"
                            value="blue"
                            checked={color === 'blue'}
                            onChange={(e) => setColor(e.target.value)}
                            className="form-check-input"
                        />
                        <label className="blue" htmlFor="blue"></label>
                    
                        <input
                            type="radio"
                            name="color"
                            id="purple"
                            value="purple"
                            checked={color === 'purple'}
                            onChange={(e) => setColor(e.target.value)}
                            className="form-check-input"
                        />
                        <label className="purple" htmlFor="purple"></label>
                    
                        <input
                            type="radio"
                            name="color"
                            id="grey"
                            value="grey"
                            checked={color === 'grey'}
                            onChange={(e) => setColor(e.target.value)}
                            className="form-check-input"
                        />
                        <label className="grey" htmlFor="grey"></label>
                </div>
            </div>
            <input className='btn-block' type='submit' value='Add' />
        </form>
    )
}

export default AddEvent
