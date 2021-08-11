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
  library.add(faPlus, faCheckCircle, faClock, faTimes, faPlane, faUserFriends, faCalendarAlt, faGlassCheers, faBiking, faMusic, faTrashAlt )

  const [showAddEvent, setShowAddEvent] = useState (false)

  const [allEvents, setAllEvents] = useLocalStorage("allEvents", [
    // {
    //   id: 1,
    //   title: "July 4",
    //   date: "2021-07-04",
    //   type: "glass-cheers",
    //   color: "green",
    // },
    // {
    //   id: 2,
    //   title: "Meeting",
    //   date: "2021-07-27",
    //   type: "briefcase",
    //   color: "red",
    // },
    // {
    //   id: 3,
    //   title: "Susan's Birthday",
    //   date: "2021-08-10",
    //   type: "glass-cheers",
    //   color: "blue",
    // },
    // {
    //   id: 5,
    //   title: "Vegas",
    //   date: "2022-07-25",
    //   type: "plane",
    //   color: "blue",
    // },
    // {
    //   id: 4,
    //   title: "Food Shopping",
    //   date: "2021-08-29",
    //   type: "thumbtack",
    //   color: "grey",
    // },
  ])

  const [pastEvents, setPastEvents] = useState([])
  const [upcomingEvents, setUpcomingEvents] = useState([])

  //add event
  const addEvent = (event) => {
    const id = Math.floor(Math.random() * 10000) +1
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

  useEffect(() => {
    setPastEvents(allEvents.filter(event => isBefore(parseISO(event.date), new Date())));
    setUpcomingEvents(allEvents.filter(event => isAfter(parseISO(event.date), new Date())));
  }, [allEvents])

  return (
    <div className="App">
      {pastEvents.length > 0 ? <PastEvents pastEvents={pastEvents} onDelete={deleteTask} /> : ''}
      <Today />
      {upcomingEvents.length > 0 ? <UpcomingEvents upcomingEvents={upcomingEvents} onDelete={deleteTask} /> : ''}
      {showAddEvent && <AddEvent onAdd={addEvent} toggleModal={toggleModal} />}
      <button className='add-btn' onClick={toggleModal}><FontAwesomeIcon icon="plus" /></button>
    </div>
  )
}

export default App