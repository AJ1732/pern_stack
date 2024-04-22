import React, { useEffect, useState } from 'react'

const TodoTable = () => {
  const [ allTodos, setAllTodos ] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const response = await fetch('http://localhost:5000/todos');
        const jsonData = await response.json();
        setAllTodos(jsonData)
      } catch (err) {
        console.error(err.message); 
      }
    };
    getTodos();
  }, [])

  return (
    <div className='py-7 px-5 overflow-x-scroll'>
      <table className="table-auto min-w-[500px] w-full">
        <thead className='h-10 bg-teal text-left '>
          <tr>
            <th className='px-2'>Description</th>
            <th className='px-2'>Edit</th>
            <th className='px-2'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {allTodos.map(({ todo_id, description }) => (
            <tr key={todo_id} className='h-10 odd:bg-greyshade'>
              <td className='px-2'>{description}</td>
              <td className='px-2'>Edit</td>
              <td className='px-2'>Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TodoTable