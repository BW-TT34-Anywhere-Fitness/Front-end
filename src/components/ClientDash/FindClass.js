import { useEffect, useState } from 'react'

import { getMyClasses } from 'functions/api';

import FilterSearch from './FilterSearch'
import ClientClassCard from './ClientClassCard'
import Register from './Register'
import axios from 'axios';



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
  const [myClassIDS, setMyClassIDS] = useState([])
  const [errors, setErrors] = useState()

  useEffect(() => {
    // axios.delete('https://xnor.space/api/courses/1401', {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
    //   .then( res => {
    //     console.log(res)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })

    getMyClasses()
      .then( res => {
        // console.log(res)
        setMyClassIDS(res.data.map( obj => obj.id))
      })
      .catch( err => {
        // console.log(err)
      })
  },[])

  function setNewClasses(results){
    const today = new Date().toISOString().split('T')[0].split('-').join('');
    console.log(results[0].starttime.split('T')[0].split('-').join('') < today)
    setResults(results.filter( obj => !myClassIDS.includes(obj.id) && obj.starttime.split('T')[0].split('-').join('') > today))
    // setResults(results.filter( obj => {
    //   // console.log(obj.starttime.split('T')[0].split('-').join(''))
    //   console.log(obj)
    //   return true
    // }))

    
  }

  return (
    <div style={{display: 'flex'}} >
      <FilterSearch setResults={setNewClasses} setErrors={setErrors}/>
      <div style={{marginLeft: '40px', flexGrow: 1}}>
        {results.map( (lesson, i) => <ClientClassCard key={lesson.id} class={lesson} color={i%2} Component={Register}/>)}
      </div>
    </div>
  )
}
