import React from 'react'
import TodoInput from '../../../components/Input/TodoInput'
import TodoCard from '../../../components/Card/TodoCard'
import TodoTable from '../../../components/Table/TodoTable'

const Main = () => {
 
  return (
    <main className='min-h-[calc(100dvh-140px)] font-poppins py-5 |'>
      <h2 className='text-xl'>PERN Todos</h2>
      <section>
        <h3>Add Todo</h3>
        <TodoInput /> 
      </section>
      <section>
        <h3>All Todos</h3>
        <TodoTable />
        <TodoCard /> 
      </section>
    </main>
  )
}

export default Main