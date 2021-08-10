import { useState } from 'react'
import KeyNote from './KeyNoteContext'

function SharedPiano(props) {
    const [note,setNote] = useState('')
    const [load,setLoad] = useState(true)
    const value = {
        note,setNote,
        load,
        setLoad
    }

   return (
       <KeyNote.Provider value={value}>
       {props.children}
     </KeyNote.Provider>
   )
}
export default SharedPiano