import { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'


import { StyledButton } from 'components/StyledComponents'
import DateTimeInput from 'components/DateTimeInput'

const intensities = [ 'Beginner', 'Intermediate', 'Advanced', 'Legendary', 'GODLIKE' ]

const initialFilter = {
  zip: '',
  type: '',
  intensity: '',
  dateFrom: '',
  dateTo: '',
  time: {},
}

export default function FilterSearch(props){
  const [results, setResults] = useState([])
  const [error, setError] = useState('')
  const [filter, setFilter] = useState(initialFilter)
  const [hidden, setHidden] = useState(true)
  const [scrollbar, setScrollbar] =useState(true) // set to true because the use effect flips it on load

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

  // animate the scrollbar right
  // will flip whatever initial state is onload
  useEffect(() => {
    setTimeout(() => {
      setScrollbar(!scrollbar)
    }, 150)
  }, [hidden])

  function search(evt){
    evt.preventDefault()
    // fetch data with filter parameters

    // mnt = minimum time
    // mxt = maximum time
    // mnd = minimum date
    // mxd = maximum date
    // mndr = min duration
    // mxdr = max duration
    // mni = min intensity
    // mxi = max intensity
    // type = type
    // name = name
    // loc = location
    console.log('params:', filter)

    axios.get('http://xnor.space/api/courses/search', {headers: {Authorization: 'Bearer'}})
      .then( res => {
        console.log(res)
      })
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
    <StyledMain
      showDate={!hidden}
      showScroll={scrollbar}
      onMouseEnter={() => !hidden && setScrollbar(true)}
      onMouseLeave={() => !hidden && setScrollbar(false)}
    >
      <form onSubmit={search}>
        Filter By:
        <div>
          <DivZip>
            <label htmlFor='zip'>Zip Code<span>*</span></label>
            <button type='button' onClick={clear}>Clear Filter</button>
          </DivZip>
          <input 
            type='text'
            id='zip'
            maxLength='5'
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
            <option value=''>Any</option>
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
            <option value=''> Any </option>
            {intensities.map(intensity => (
              <option value={intensity} key={intensity}>{intensity}</option>
            ))}
          </select>
        </div>

        <label htmlFor='showDate'>Date <span onClick={() => {console.log('hi');setHidden(!hidden)}} id='V'>V</span></label>
        <DivDate expanded={!hidden}>
          <p style={{margin: '0.5em'}}>From<span>*</span></p>
          <div>
            <label htmlFor='dateFrom'></label>
            <DateTimeInput
              id='dateFrom'
              placeholder='Any'
              value={filter.dateFrom}
              onChange={onChange}
            />
          </div>
          
          <p style={{margin: '0.5em'}}>To<span>*</span></p>

          <div>
            <label htmlFor='dateTo'></label>
            <DateTimeInput
              id='dateTo'
              placeholder='Any'
              value={filter.dateTo}
              onChange={onChange}
            />
          </div>
        </DivDate>

        <div id='submitButton'>
          <StyledButton type='submit'>Search</StyledButton>
        </div>
      </form>
    </StyledMain>
  )
}

const StyledMain = styled.div`
  box-sizing: border-box;
  direction: rtl;
  height: 80vh;
  max-width: 300px;
  overflow-y: scroll;
  padding: 0 4px;

  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #888;
    visibility: ${props => props.showScroll ? 'visible' : 'hidden'};
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #555;
    visibility: ${props => props.showScroll ? 'visible' : 'hidden'};  }
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #2B2D2F;
  }

  form {
    direction: ltr;
  }

  .field {
    padding-top: 1.5em;
  }

  label {
    display: block;
    font-size: 0.8em;
    font-weight: 600;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    margin: 1em 0;
  }

  p span, label span {
    color: red;
  }

  input, select, option {
    box-sizing: border-box;
    width: 100%;
    font-weight: 300;
  }

  input {
    text-align: center;
  }

  select {
    text-align-last: center;
  }

  .submitButton {
    padding-top: 3em;
  }

  table {
    margin: 0 auto;
  }

  #submitButton {
    display: table;
    margin: 1em auto 0;
  }

  #V {
    color: inherit;
    cursor: pointer;
    display: inline-block;
    transform: rotate(${ props => props.showDate ? '0deg' : '180deg'});
    transition: transform 0.3s;
  }
`

const DivZip = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    height: 2em;
    margin: auto 0;
  }
`

const DivDate = styled.div`
  height: auto;
   max-height: ${(props) => {
      return props.expanded ? "1000px" : 0;
   }};
   overflow: hidden;
   transition: max-height 0.5s;
`