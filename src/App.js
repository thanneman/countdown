import './App.css'
import { useState, useEffect } from 'react'
import { isBefore, isAfter } from 'date-fns'
import PastEvents from './Components/PastEvents'
import Today from './Components/Today'
import UpcomingEvents from './Components/UpcomingEvents'

const App = () => {
  const [allEvents] = useState ([
    {
      id: 1,
      title: "July 4",
      date: new Date("July 4, 2021"),
    },
    {
      id: 2,
      title: "Meeting",
      date: new Date("July 27, 2021"),
    },
    {
      id: 3,
      title: "Susan's Birthday",
      date: new Date("August 3, 2021"),
    },
    {
      id: 4,
      title: "Food Shopping",
      date: new Date("August 29, 2021"),
    },
    {
      id: 5,
      title: "Date Night",
      date: new Date("July 25, 2022"),
    },
  ])

  const [pastEvents, setPastEvents] = useState([])
  const [upcomingEvents, setUpcomingEvents] = useState([])

  useEffect(() => {
    setPastEvents(allEvents.filter(event => isBefore(new Date(event.date), new Date())));
    setUpcomingEvents(allEvents.filter(event => isAfter(new Date(event.date), new Date())));
  }, [allEvents])

  return (
    <div className="App">
      {pastEvents.length > 0 ? <PastEvents pastEvents={pastEvents} /> : 'No Events To Show'}
      <Today />
      {upcomingEvents.length > 0 ? <UpcomingEvents upcomingEvents={upcomingEvents} /> : 'No Events To Show'}
    </div>
  )
}

export default App