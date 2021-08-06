import { useState } from 'react'
import { format } from 'date-fns'
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
            alert('Please add title')
            return
        }
        if (!date) {
            alert('Please add date')
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
                    <option value="briefcase">Meeting</option>
                    <option value="thumbtack">Task</option>
                    <option value="plane">Travel</option>
                </select>
            </div>
            <div className="form-control">
                <label>Color</label>
                <select onChange={(e) => setColor(e.target.value)} defaultValue="">
                    <option hidden value="">Select Color</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="grey">Grey</option>
                </select>
            </div>
            <input className='btn-block' type='submit' value='Add' />
        </form>
    )
}

export default AddEvent
