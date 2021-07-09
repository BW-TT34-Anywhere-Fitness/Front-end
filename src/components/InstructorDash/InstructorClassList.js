
import InstructorClassListItem from './instructorClassListItem';



const InstructorClassList = (props) => {

  const { classes, setClassToEdit, setClassToDelete } = props;

  if (!classes) {
    return <></>
  }

  return (
    <>
      <h2>Your Classes</h2>
      {classes.length > 0
        ?
          classes.map(afClass => (
            <InstructorClassListItem
              afClass={afClass}
              onEditClick={() => setClassToEdit(afClass)}
              onDeleteClick={() => setClassToDelete(afClass)}
              key={afClass.id}
            />
          ))
        :
          <p>No classes found.</p>
      }
    </>
  )
}

export default InstructorClassList;
