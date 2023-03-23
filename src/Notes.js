import React, { useEffect,useState } from 'react'
import './Notes.css'
import {useForm} from 'react-hook-form'
import { db } from './firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import firebase from 'firebase/compat/app';
import NoteItems from './NoteItems';



function Notes() {
  const {handleSubmit,register,formState:{errors}}=useForm();
  const user=useSelector(selectUser);
  const [notes, setnotes] = useState([]);

 
  const submit=(data)=>{
    db.collection("notes").add({
      title:data.title,
      description:data.description,
      email:user.email,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()

    })

  }
  useEffect(() => {
    db.collection("notes").orderBy("timestamp","desc").onSnapshot(snapshot=>{
      setnotes(snapshot.docs.map((doc)=>(
       { id:doc.id,
        data:doc.data()}
      )))

    })
  

  }, [])
  const userNotes = notes.filter((usernote) => usernote.data.email === user.email)
  
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
       
      <h1> Your Notes :</h1> 
      <div className="row my-1" >
      {userNotes.map(({id,data:{title,description,timestamp}})=>(
        <NoteItems key={id} id={id} title={title} time={timestamp} description={description} />
        
      ))}
      </div>
        
      
    </div>
  )
}

export default Notes