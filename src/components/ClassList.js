
import { useEffect, useState } from 'react';

import { getClasses } from 'functions/api';



const ClassList = (props) => {

  const [ classes, setClasses ] = useState([]);

  useEffect(() => {
    getClasses()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      })
  });

  return (
    <div>
      {classes?.map(efClass => (
        <h4>{efClass.id}</h4>
      ))}
    </div>
  )
}

export default ClassList;
