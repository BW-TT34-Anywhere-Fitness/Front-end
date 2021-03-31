import FilterSearch from './FilterSearch'
import ClientClassCard from './ClientClassCard'

const old_example = [
  {
    "name": "lorem",
    "type": "Cardio",
    "starttime": "2021-04-29T14:58:46", // (default unzoned,use 2021-03-29T00:00:00-05:00 for zoned)
    "duration": "PT86400S", // (example: PT86400S for 1 day, PT1H43M20S for 1 hour 43 minutes 20 second)
    "intensity": 9001, // (integer)
    "location": "77777",
    "maxsize": 72720
  },
  {
    "name": "lorem",
    "type": "Cardio",
    "starttime": "2021-04-29T14:58:46", // (default unzoned,use 2021-03-29T00:00:00-05:00 for zoned)
    "duration": "PT86400S", // (example: PT86400S for 1 day, PT1H43M20S for 1 hour 43 minutes 20 second)
    "intensity": 9001, // (integer)
    "location": "77777",
    "maxsize": 72720
  },
  {
    "name": "lorem",
    "type": "Cardio",
    "starttime": "2021-04-29T14:58:46", // (default unzoned,use 2021-03-29T00:00:00-05:00 for zoned)
    "duration": "PT86400S", // (example: PT86400S for 1 day, PT1H43M20S for 1 hour 43 minutes 20 second)
    "intensity": 9001, // (integer)
    "location": "77777",
    "maxsize": 72720
  },
]

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

export default function ClientDash(props){
  return (
    <div style={{
      margin: '0 auto',
      maxWidth: '1100px',
      width: '90%',
    }}>
      This is ClientDash
      <div style={{display: 'flex'}} >
        <FilterSearch />
        <div style={{marginLeft: '40px', flexGrow: 1}}>
          {example.map( (lesson, i) => <ClientClassCard key={lesson.id} class={lesson} color={i%2}/>)}
        </div>
      </div>
    </div>
  )
}
