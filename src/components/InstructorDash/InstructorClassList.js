
import { useEffect, useState } from 'react';
import { getMyClasses } from 'functions/api';

const InstructorClassList = (props) => {

  const [ myClasses, setMyClasses ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);

  useEffect(() => {
    getMyClasses()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  if (!myClasses) {
    return <></>
  }

  return (
    <>
      <h2>Your Classes</h2>
      {myClasses.length > 0
        ?
          myClasses.map(myClass => (
            <div>class</div>
          ))
        :
          <p>No classes found.</p>
      }
    </>
  )
}

export default InstructorClassList;
