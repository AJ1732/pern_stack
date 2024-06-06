import React, { useState } from 'react'

const TodoInput = () => {
  const [ description, setDescription ] = useState('')
  const [ error, setError ] = useState('')
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (description.length > 0) {
      try {
        const todoBody = { description }
        const response = await fetch("http://localhost:5000/todos", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(todoBody)
        });
        setDescription('');
        setError('') 
        window.location = '/'
        // console.log(response);
      } catch (err) {
        setError(err.message) 
        console.error(err.message);
      }
      // console.log('Todo Submitted');
    } else {
      setError('Enter a todo') 
    }
  }

  return (
    <form action='' onSubmit={handleSubmit} className='overflow-hidden | bg-shade py-7 px-5 drop-shadow-md'>
      <fieldset className='relative space-y-6'>
        {/* TITLE INPUT */}
        <div className='grid gap-1'>
          <label htmlFor="title">Post Input</label>
          <input 
            id="title"
            type="text" 
            name="title" 
            value={description}
            placeholder='Enter Todo'
            onChange={(e) => setDescription(e.target.value)}
            className={`px-4 py-2 rounded`}
           />
        </div>

        {/* SUBMIT BUTTON */}
        <button className='absolute top-2 right-1 bg-teal'>Submit</button>
      </fieldset>

      {error && <div className='bg-red-50 text-red-500 text-sm mt-2 py-1.5 px-4 | rounded border border-red-500'>{error}</div>}
    </form>
  )
}

export default TodoInput