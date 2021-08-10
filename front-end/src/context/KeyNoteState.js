import { useState } from 'react'
import KeyNote from './KeyNoteContext'

function SharedPiano(props) {
    const [note,setNote] = useState('...')
    const [load,setLoad] = useState(true)
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const value = {
        note,setNote,
        load,
        setLoad,
        randomColor
    }

   return (
       <KeyNote.Provider value={value}>
       {props.children}
     </KeyNote.Provider>
   )
}
export default SharedPiano