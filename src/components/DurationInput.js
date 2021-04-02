
import moment from 'moment';



const DurationInput = (props) => {

  const { onChange, value, id, name } = props;

  const handleChange = (e) => {
    const duration = moment.duration(Number(e.target.value), 'minutes');
    onChange({ target: { name: name, value: duration.toISOString() } });
  }

  const stringValue = moment.duration(value).asMinutes();

  return (
    <div className='field'>
      <input id={id} name={name} type='number' onChange={handleChange} value={stringValue} />
    </div>
  );
}

export default DurationInput;