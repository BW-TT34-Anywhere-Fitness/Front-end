import { useState, useEffect } from 'react'

import ClientClassCard from './ClientClassCard'
import Withdraw from './Withdraw'

import { getMyClasses } from 'functions/api';

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

export default function FindClass(props) {
  const [results, setResults] = useState(example)
  const [errors, setErrors] = useState()

  useEffect(() => {
    // axios.get('http://xnor.space/api/account/courses', {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
    getMyClasses()

      .then(res => {
        console.log(res)
        setResults(res.data)
      })
      .catch(err => {
        console.log(err)

      })
  }, [])

  function withdraw(id) {
    // console.log('hi')
    setResults(results.filter(obj => obj.id !== id))
  }

  return (

    <div style={{ display: 'flex' }} >
      <div style={{ marginLeft: '40px', flexGrow: 1 }}>
        {results && results.length > 0 ? results.map((lesson, i) => <ClientClassCard key={lesson.id} class={lesson} color={i % 2} Component={Withdraw} update={withdraw} />)
          : <p>You don't have any classes yet.</p>}

      </div>
    </div>
  )
}
