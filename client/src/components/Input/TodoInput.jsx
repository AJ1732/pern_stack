import React, { useState } from 'react'

const TodoInput = () => {
  const [ description, setDescription ] = useState('')
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const todoBody = { description }
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(todoBody)
      });
      setDescription('');
      window.location = '/'
      // console.log(response);
    } catch (err) {
      console.error(err.message);
    }
    // console.log('Todo Submitted');
  }

  return (
    <form action='' onSubmit={handleSubmit} className='overflow-hidden | bg-shade py-7 px-5 drop-shadow-md'>
      <fieldset className='space-y-6'>
        {/* TITLE INPUT */}
        <div className='grid gap-1'>
          <label htmlFor="title">Todo Input</label>
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
        <button className='bg-teal'>Submit</button>
      </fieldset>

      {/* {error && <div className='text-red-500 text-sm'>{error}</div>} */}
    </form>
  )
}

export default TodoInput