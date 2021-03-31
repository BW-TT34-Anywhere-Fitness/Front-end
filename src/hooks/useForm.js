
import { useState } from 'react';

const useForm = ( initialValues ) => {

  const [ form, setForm ] = useState(initialValues || {});

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  }

  const clearForm = e => {
    e.preventDefault();
    setForm(initialValues);
  }

  return [ form, handleChange, clearForm ];
}

export default useForm;
