import React, { useEffect, useState } from 'react'
import TodoEdit from '../Input/TodoEdit';

const TodoTable = () => {
  const [ allTodos, setAllTodos ] = useState([]);

  // GET ALL TODOS FROM DATABASE
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

  // DELETE TODO FROM DATABASE
  const handleDelete = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });
      setAllTodos(allTodos.filter(todo => todo.todo_id !== id))
    } catch (err) {
      console.error(err.message); 
    }
  }

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
          {allTodos
            .sort((a, b) => { return a.todo_id - b.todo_id }) // *To sort the array
            .map(({ todo_id, description }) => (
            <tr key={todo_id} className='h-10 odd:bg-greyshade'>
              <td className='px-2'>{description}</td>
              <td className='px-2'>
                <button className='px-4'><TodoEdit id={todo_id} desc={description} /></button>
              </td>
              <td className='px-2'>
                <button onClick={() => handleDelete(todo_id)} className='bg-red-500 px-4'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TodoTable