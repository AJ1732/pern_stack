import React from 'react'
import TodoInput from '../../../components/Input/TodoInput'
import PostTable from '../../../components/Table/PostTable'

const Main = () => {
 
  return (
    <main className='min-h-[calc(100dvh-140px)] font-poppins py-5 |'>
      <h2 className='text-xl'>PERN Post</h2>
      <section>
        <h3>Add Post</h3>
        <TodoInput /> 
      </section>
      <section>
        <h3>All Posts</h3>
        <PostTable />
      </section>
    </main>
  )
}

export default Main