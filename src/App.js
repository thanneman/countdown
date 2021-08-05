import './App.css'
import { useState, useEffect } from 'react'
import { isBefore, isAfter, parseISO } from 'date-fns'
import PastEvents from './Components/PastEvents'
import Today from './Components/Today'
import UpcomingEvents from './Components/UpcomingEvents'
import AddEvent from './Components/AddEvent'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faCheckCircle, faClock, faTimes, faPlane, faBriefcase, faThumbtack, faGlassCheers } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  library.add(faPlusCircle, faCheckCircle, faClock, faTimes, faPlane, faBriefcase, faThumbtack, faGlassCheers )

  const [showAddEvent, setShowAddEvent] = useState (false)

  const [allEvents, setAllEvents] = useState ([
    {
      id: 1,
      title: "July 4",
      date: "2021-07-04",
      type: "glass-cheers",
      color: "green",
    },
    {
      id: 2,
      title: "Meeting",
      date: "2021-07-27",
      type: "briefcase",
      color: "red",
    },
    {
      id: 3,
      title: "Susan's Birthday",
      date: "2021-08-10",
      type: "glass-cheers",
      color: "blue",
    },
    {
      id: 5,
      title: "Vegas",
      date: "2022-07-25",
      type: "plane",
      color: "blue",
    },
    {
      id: 4,
      title: "Food Shopping",
      date: "2021-08-29",
      type: "thumbtack",
      color: "grey",
    },
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
      {pastEvents.length > 0 ? <PastEvents pastEvents={pastEvents} /> : 'No Events To Show'}
      <Today />
      {upcomingEvents.length > 0 ? <UpcomingEvents upcomingEvents={upcomingEvents} /> : 'No Events To Show'}
      {showAddEvent && <AddEvent onAdd={addEvent} toggleModal={toggleModal} />}
      <button className='add-btn' onClick={toggleModal}><FontAwesomeIcon icon="plus-circle" /></button>
    </div>
  )
}

export default App