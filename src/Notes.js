import React from 'react'
import clip from './clipB.png'
import './Notes.css'
import {useForm} from 'react-hook-form'

function Notes() {
  const {handleSubmit,register,formState:{errors}}=useForm();
  const submit=(data)=>{
    console.log(data)

  }
  return (
    <div className="notes" >
        
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" className="notes_title" placeholder='Add title'{...register("title", { required: "Required!" })}  >
            
            </input>
            {errors.title && <p className="p1" style={{marginLeft:'380px',marginTop:'-25px',color:'red'}}> {errors.title.message}</p> }
            <textarea  type="text" placeholder="Add description" {...register("description", { required: "Required!" })}></textarea>
            {errors.description && <p  className="p2" style={{marginLeft:'380px',marginTop:'-80px',color:'red'}}> {errors.description.message}</p>}
            <button type="submit" >Save Note</button>

        </form>
    </div>
  )
}

export default Notes