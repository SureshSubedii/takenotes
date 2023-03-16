import React from 'react'
import clip from './clipB.png'
import './Notes.css'

function Notes() {
  return (
    <div className="notes" >
        {/* <img src={clip} alt="Img Loading"/> */}
        
        <form>
            <input className="notes_title" placeholder='Add title'></input>
            <textarea placeholder="Add description"></textarea>

        </form>
    </div>
  )
}

export default Notes