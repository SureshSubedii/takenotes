import {createSlice } from '@reduxjs/toolkit';




export const noteSlice = createSlice({
  name: 'note',
  initialState:{
    note:null
  },
  reducers: { 
    addNote: (state,action)=>{
      state.note=action.payload

    },
   

  },
})
   
export const {addNote} = noteSlice.actions;


export const selectnote = (state) => state.note.note;

export default noteSlice.reducer;
