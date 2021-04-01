import { useState } from 'react'

import FilterSearch from './FilterSearch'
import ClientClassCard from './ClientClassCard'
import Register from './Register'

const example = [
  {
    "id": 1,
    "name": "Boxing Test",
    "type": "Boxing",
    "duration": "PT20M",
    "intensity": 7,
    "location": "Mars",
    "attenndees": 0,
    "maxsize": 50,
    "starttime": "2021-03-27T16:39:48Z",
    "users": [],
    "instructor": 'Bob'
  },
  {
    "id": 2,
    "name": "Boxing Test",
    "type": "Boxing",
    "duration": "PT20M",
    "intensity": 7,
    "location": "Mars",
    "attenndees": 0,
    "maxsize": 50,
    "starttime": "2021-03-27T16:39:48Z",
    "users": [],
    "instructor": 'Bob'
  },
  {
    "id": 3,
    "name": "Boxing Test",
    "type": "Boxing",
    "duration": "PT20M",
    "intensity": 7,
    "location": "Mars",
    "attenndees": 0,
    "maxsize": 50,
    "starttime": "2021-03-27T16:39:48Z",
    "users": [],
    "instructor": 'Bob'
  },
  
]

export default function FindClass(props){
  const [results, setResults] = useState(example)
  const [errors, setErrors] = useState()

  return (
    <div style={{display: 'flex'}} >
      <FilterSearch setResults={setResults} setErrors={setErrors}/>
      <div style={{marginLeft: '40px', flexGrow: 1}}>
        {results.map( (lesson, i) => <ClientClassCard key={lesson.id} class={lesson} color={i%2} Component={Register}/>)}
      </div>
    </div>
  )
}
