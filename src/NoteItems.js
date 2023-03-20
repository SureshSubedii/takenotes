import { Create, DeleteForever } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { Button } from 'bootstrap'
import React from 'react'
import './NoteItems.css'

function Noteitems({title,description}) {
  return (
    <div className="col mx-1">
    <div className="container">
    <div className="card" style={{width: "9.6rem"}}>
  <div className="card-body">
    <h5 className="card-title border-bottom d-flex  align-items-center  " >{title} 
     
     
    
     
       </h5>
       <span>
       <DeleteForever/>
      <Create/>
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