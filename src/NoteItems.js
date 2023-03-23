import { Create, DeleteForever } from '@mui/icons-material'
import React, { useState } from 'react'
import { db } from './firebase'
import './NoteItems.css'
import 'firebase/compat/database';
import Edit from './Edit'

function NoteItems({title,description,id,time}) {
  let Time = time?.toDate();
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    console.log(id)
    db.collection("notes").doc(id).delete().then(() => {
      console.log("Successful")
    }).catch(error => {
      console.log(error.message)
    })
  }

  const handleEdit = () => {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <div>
    <div className="col" style={{padding:'0 1px'}}>
      <div className="container">
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
      </div>
      {showModal &&
       <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div className="modal-dialog">
         <div className="modal-content">
           <div className="modal-header">
             <h1 className="modal-title fs-5" id="exampleModalLabel">New message</h1>
             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
           </div>
           <div className="modal-body">
             <form>
               <div className="mb-3">
                 <label htmlFor="recipient-name" className="col-form-label">Recipient:</label>
                 <input type="text" className="form-control" id="recipient-name"/>
               </div>
               <div className="mb-3">
                 <label htmlFor="message-text" className="col-form-label">Message:</label>
                 <textarea className="form-control" id="message-text"></textarea>
               </div>
             </form>
           </div>
           <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModal}>Close</button>

             <button type="button" className="btn btn-primary">Send message</button>
           </div>
         </div>
       </div>
     </div> 
          }
     </div> 

          )
        }

export default NoteItems


          
