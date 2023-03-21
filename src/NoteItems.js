import { Create, DeleteForever } from '@mui/icons-material'
import React from 'react'
import { db } from './firebase'
import './NoteItems.css'
import 'firebase/compat/database';


function Noteitems({title,description,id}) {

  const handleDelete=()=>{
  console.log(id)

    db.collection("notes").doc(id).delete().then(()=>{
      console.log("Successful")
    }).catch(error=>{console.log(error.message)})

  }
  const handleEdit=()=>{

  }
  return (
    <div className="col" style={{padding:'0 1px'}}>
    <div className="container">
    <div className="card my-1" style={{width: "11.6rem"}}>
  <div className="card-body">
    <h5 className="card-title border-bottom   align-items-center  "  >{title} 
     
     
    
     
       </h5>
       <span>
       <DeleteForever onClick={handleDelete}/>
      <Create onClick={handleEdit}/>
       </span>
       
    <p className="card-text">{description}
    
    
    </p>
  </div>
</div>
</div>
</div>
  )
}

export default Noteitems