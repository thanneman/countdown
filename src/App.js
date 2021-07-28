import './App.css'
import { useState } from 'react'
import PastEvents from './Components/PastEvents'
import Today from './Components/Today'
import UpcomingEvents from './Components/UpcomingEvents'

const App = () => {
  const [pastEvents, setPastEvents] = useState([
    {
      id: 1,
      title: "July 4",
      date: new Date("July 4, 2021"),
    },
  ])
  const [upcomingEvents, setUpcomingEvents] = useState([
    {
      id: 1,
      title: "Brand Bills Meeting",
      date: new Date("July 27, 2021"),
    },
    {
      id: 2,
      title: "Victoria's Birthday",
      date: new Date("August 3, 2021"),
  },
    {
      id: 3,
      title: "Food Shopping",
      date: new Date("August 29, 2021"),
    },
  ])

  return (
    <div className="App">
      {pastEvents.length > 0 ? <PastEvents pastEvents={pastEvents} /> : 'No Events To Show'}
      <Today />
      <UpcomingEvents upcomingEvents={upcomingEvents} />
    </div>
  )
}

export default App