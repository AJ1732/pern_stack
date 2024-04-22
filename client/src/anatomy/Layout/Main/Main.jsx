import React from 'react'
import TodoInput from '../../../components/Input/TodoInput'

const Main = () => {
 
  return (
    <main className='min-h-[calc(100dvh-140px)] font-poppins py-5 |'>
      <section>
        <h2 className='font-lora'>PERN Todos</h2>
        <TodoInput /> 
      </section>
    </main>
  )
}

export default Main