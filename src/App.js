import './App.css'
import { useState, useEffect } from 'react'
import { isBefore, isAfter } from 'date-fns'
import PastEvents from './Components/PastEvents'
import Today from './Components/Today'
import UpcomingEvents from './Components/UpcomingEvents'
import AddEvent from './Components/AddEvent'

const App = () => {
  const [allEvents, setAllEvents] = useState ([
    {
      id: 1,
      title: "July 4",
      date: new Date("2021-07-04"),
      type: "holiday",
    },
    {
      id: 2,
      title: "Meeting",
      date: new Date("2021-07-27"),
      type: "meeting",
    },
    {
      id: 3,
      title: "Susan's Birthday",
      date: new Date("2021-08-03"),
      type: "holiday",
    },
    {
      id: 4,
      title: "Food Shopping",
      date: new Date("2021-08-29"),
      type: "task",
    },
    {
      id: 5,
      title: "Date Night",
      date: new Date("2022-07-25"),
      type: "holiday",
    },
  ])

  const [pastEvents, setPastEvents] = useState([])
  const [upcomingEvents, setUpcomingEvents] = useState([])

  //add event
  const addEvent = (event) => {
    const id = Math.floor(Math.random() * 10000) +1
    const newEvent = { id, ...event }
    setAllEvents([...allEvents, newEvent])
  }

  useEffect(() => {
    setPastEvents(allEvents.filter(event => isBefore(new Date(event.date), new Date())));
    setUpcomingEvents(allEvents.filter(event => isAfter(new Date(event.date), new Date())));
  }, [allEvents])

  return (
    <div className="App">
      {pastEvents.length > 0 ? <PastEvents pastEvents={pastEvents} /> : 'No Events To Show'}
      <Today />
      {upcomingEvents.length > 0 ? <UpcomingEvents upcomingEvents={upcomingEvents} /> : 'No Events To Show'}
      <AddEvent onAdd={addEvent} />
    </div>
  )
}

export default App