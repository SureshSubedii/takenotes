import { Create, DeleteForever } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { db } from './firebase'
import './NoteItems.css'
import 'firebase/compat/database';
import Edit from './Edit'

function NoteItems({title,description,id,time}) {
  let Time = time?.toDate();
  const [showModal, setShowModal] = useState(false);
  const [titles,setTitle]=useState(title)
  const [desc,setdesc]=useState(description)



  const handleDelete = () => {
    db.collection("notes").doc(id).delete().then(() => {
    }).catch(error => {
      console.log(error.message)
    })
  }

  const handleEdit = () => {
    setShowModal(true);
  

    
  }
  const saveChanges=()=>{
    db.collection("notes").doc(id).update({
      title:titles,
      description:desc

    }).then(() => {
    }).catch(error => {
      console.log(error.message)
    })
    setShowModal(false);



  }

  const closeModal = () => {
    setShowModal(false);
  }
  
  

  return (
    <div  className="col mx-1">
    <div>
        <div className="card my-1" style={{width: "11.6rem"}}>
          <div className="card-body">
            <h5 className="card-title border align-items-center">{title}</h5>
            <span className='border'>
              <DeleteForever onClick={handleDelete}/>
              <p style={{fontSize:'10px',fontWeight:"bold"}}>{Time?.toLocaleString({ dateStyle: 'short', timeStyle: 'short' })}</p>
              <Create onClick={handleEdit}/>
            </span>
            <p className="card-text border my-1">{description}</p>
          </div>
        </div>
      </div>
      {showModal &&
     
     <div class="modal d-block" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div class="modal-dialog">
         <div class="modal-content">
           <div class="modal-header">
             <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
             <button type="button" class="btn-close" data-bs-dismiss="modal" onClick={closeModal} aria-label="Close"></button>
           </div>
           <div class="modal-body ">
            <textarea style={{width:'max-width'}}  value={titles} onChange={e=>setTitle(e.target.value)} placeholder="title"></textarea> <br/>
            <textarea style={{width:'max-width'}}  value={desc} onChange={e=>setdesc(e.target.value)}></textarea>

           </div>
           <div class="modal-footer">
             <button type="button" class="btn btn-secondary"  onClick={closeModal}data-bs-dismiss="modal">Close</button>
             <button type="button" class="btn btn-primary" onClick={saveChanges}>Save changes</button>
           </div>
         </div>
       </div>
     </div>
          }
     </div> 

          )
        }

export default NoteItems


          
