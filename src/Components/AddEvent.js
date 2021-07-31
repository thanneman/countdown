import { useState } from 'react'

const AddEvent = ({ onAdd }) => {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [type, setType] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!title) {
            alert('Please add title')
            return
        } else if (!date) {
            alert('Please add date')
        }

        onAdd({ title, date, type })

        setTitle('')
        setDate('')
        setType('')
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
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
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Event Type</label>
                <select onChange={(e) => setType(e.target.value)} defaultValue="">
                    <option hidden value="">Select Event Type</option>
                    <option value="holiday">Holiday</option>
                    <option value="meeting">Meeting</option>
                    <option value="task">Task</option>
                </select>
            </div>
            <input className='btn btn-block' type='submit' value='Add Event' />
        </form>
    )
}

export default AddEvent
