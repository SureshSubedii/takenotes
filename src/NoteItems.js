import React from 'react'
import './NoteItems.css'

function Noteitems({title,description}) {
  return (
    <div className="col mx-1">
    <div className="container">
    <div className="card" style={{width: "8rem"}}>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
  </div>
</div>
</div>
</div>
  )
}

export default Noteitems