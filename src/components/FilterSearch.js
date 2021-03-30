import { useEffect, useState } from 'react'
import styled from 'styled-components'

const initialFilter = {
  zip: '',
  type: '',
  intensity: '',
  date: '',
  time: {},
}

export default function FilterSearch(props){
  const [results, setResults] = useState([])
  const [error, setError] = useState('')
  const [filter, setFilter] = useState(initialFilter)

  // gets zipcode onload
  useEffect(() => {
    // check if browser compatible
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(() => {console.log('placeholder so I don\'t use the api each time')}, fail);
    } else {
      console.log("Geolocation is not supported by this browser.")
      fail()
    }

    // google api to get zip code from latitude and longitude
    function getPosition(position){
      const { latitude: lat, longitude: long } = position.coords
      // console.log(process.env)
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${process.env.REACT_APP_MAPS_KEY}`)
        .then( res => res.json() )
        .then( res => {
          // console.log(res, res.results[0].address_components[6].long_name)
          setFilter( prevFilter => {
            return {
              ...prevFilter,
              zip: res.results[0].address_components[6].long_name
            }
          })
        })
        .catch( err => {
          console.log(err)
          fail()
        })
    }

    function fail(){
      console.log('blocked or failed')
      setError('Please enter a zip code')
    }
  }, [])

  function search(evt){
    evt.preventDefault()
    // fetch data with filter parameters
    console.log('params:', filter)
  }

  function clear(evt){
    // clear all but zip, then search
    setFilter({...initialFilter, zip: filter.zip})
    search(evt)
  }

  function onChange(evt){
    const { id, value } = evt.target
    setFilter({...filter, [id]: value})
  }

  return (
    <div>
      <form onSubmit={search}>
        <div>
          <div>
            <label htmlFor='zip'>Zip Code</label>
            <button type='button' onClick={clear}>Clear Filter</button>
          </div>
          <input 
            type='text'
            id='zip'
            value={filter.zip}
            onChange={onChange}
          />
        </div>
        
        <div>
          <label htmlFor='type'>Workout Type</label>
          <select
            id='type'
            value={filter.type}
            onChange={onChange}
          >
            <option value=''></option>
            <option value='weightlifting'>Weightlifting</option>
            <option value='cardio'>Cardio</option>
            <option value='yoga'>Yoga</option>
            <option value='aerobic'>Aerobic</option>
          </select>
        </div>

        <div>
          <label htmlFor='intensity'>Intesity</label>
          <select
            id='intensity'
            value={filter.intensity}
            onChange={onChange}
          >
            <option value=''></option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
        </div>

        <div>
          <label htmlFor='date'>Date</label>
          <input
            id='date'
            type='date'
            value={filter.date}
            onChange={onChange}
          />
        </div>

        <button type='submit'>Search</button>
      </form>
    </div>
  )
}