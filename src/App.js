import './App.css'
import { useState, useEffect } from 'react'
import useLocalStorage from './Hooks/useLocalStorage'
import { isBefore, isAfter, parseISO } from 'date-fns'
import PastEvents from './Components/PastEvents'
import Today from './Components/Today'
import UpcomingEvents from './Components/UpcomingEvents'
import AddEvent from './Components/AddEvent'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faCheckCircle, faClock, faTimes, faPlane, faUserFriends, faCalendarAlt, faGlassCheers, faBiking, faMusic, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  //set global icon library
  library.add(faPlus, faCheckCircle, faClock, faTimes, faPlane, faUserFriends, faCalendarAlt, faGlassCheers, faBiking, faMusic, faTrashAlt)

  //state for events and modal
  const [allEvents, setAllEvents] = useLocalStorage("allEvents", [])
  const [pastEvents, setPastEvents] = useState([])
  const [upcomingEvents, setUpcomingEvents] = useState([])
  const [showAddEvent, setShowAddEvent] = useState(false)

  //add event
  const addEvent = (event) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newEvent = { id, ...event }
    setAllEvents([...allEvents, newEvent])
    setShowAddEvent(!showAddEvent)
  }

  //delete task
  const deleteTask = (id) => {
    setAllEvents(allEvents.filter((event) => event.id !== id))
  }

  //toggle modal
  const toggleModal = () => {
    setShowAddEvent(!showAddEvent)
  }

  //split all events into past and upcoming based on todays date
  useEffect(() => {
    setPastEvents(allEvents.filter(event => isBefore(parseISO(event.date), new Date())));
    setUpcomingEvents(allEvents.filter(event => isAfter(parseISO(event.date), new Date())));
  }, [allEvents])

  return (
    <div className="App">
      {pastEvents.length > 0 ? <PastEvents pastEvents={pastEvents} onDelete={deleteTask} /> : ''}
      <Today />
      {allEvents.length < 1 ? <div className="no-events">You have no events. <button href="#" onClick={toggleModal} >Add an event</button></div> : ''}
      {upcomingEvents.length > 0 ? <UpcomingEvents upcomingEvents={upcomingEvents} onDelete={deleteTask} /> : ''}
      {showAddEvent && <AddEvent onAdd={addEvent} toggleModal={toggleModal} />}
      <button className='add-btn' aria-label="Add Event" onClick={toggleModal}><FontAwesomeIcon icon="plus" /></button>
    </div>
  )
}

export default App