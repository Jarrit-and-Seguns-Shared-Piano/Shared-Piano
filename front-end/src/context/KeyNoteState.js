import { useState } from 'react'
import KeyNote from './KeyNoteContext'

function SharedPiano(props) {
    const [note,setNote] = useState('')

    const value = {
        note,setNote
    }

   return (
       <KeyNote.Provider value={value}>
       {props.children}
     </KeyNote.Provider>
   )
}
export default SharedPiano