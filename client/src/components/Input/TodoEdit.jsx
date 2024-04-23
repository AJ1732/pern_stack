import React, { useState } from 'react'
import { createPortal } from 'react-dom';

const EditModal = ({ open, onClose, id, description, setDesc }) => {
  if (!open) return null;

  // const [ editTodo, setEditTodo ] = useState('');

  // HANDLE FORM SUBMISSION
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { description }
      const response = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      });
      window.location = '/';
    } catch (err) {
      console.error(err.message);
    }

    // console.log(id, desc);
    onClose();
  }

  return createPortal(
    <div className='fixed z-10 top-0 left-0 m-auto | size-full bg-slate-50 bg-opacity-25 py-20 flex justify-center items-start'>
      <div className='min-w-80 w-[75svw] bg-greyshade p-5 '>
        {/* CLOSE MODAL BUTTON */}
        <div onClick={onClose} className='absolute top-5 right-5 | bg-darkshade py-1 px-4 rounded'>X</div>
        
        {/* EDIT FORM */}
        <form action="" onSubmit={handleSubmit}>
          <fieldset>
             {/* FULL NAME */}
            <div className='relative'>
              {/* EDIT TODO INPUT */}
              <div className='w-full flex flex-col md:flex-row justify-center items-start gap-1.5 md:gap-10'>
                <label htmlFor="EditTodo" >Edit Todo</label>
                <input 
                  id='EditTodo'
                  type="text" 
                  value={description}
                  onChange={(e) => setDesc(e.target.value)} 
                  className='w-full py-2.5 px-4'
                />
              </div>

              {/* SUBMIT BUTTON */}
              <button className='absolute top-9 right-1.5 bg-teal'>Edit</button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>,
    document.getElementById('portal')
  )  
}

const TodoEdit = ({ id, desc }) => {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ descrip, setDescrip ] = useState(desc);

  return (
    <div>
      <div onClick={() => setIsOpen(true)}>Edit</div>
      <EditModal open={isOpen} onClose={() => setIsOpen(false)} id={id} description={descrip} setDesc={setDescrip} />
    </div>
  )
}

export default TodoEdit