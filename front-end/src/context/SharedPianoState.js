import { useState } from 'react'
import SharedPianoContext from './SharedPianoContext'


function SharedPiano(props) {
    const [volume,setVolume] = useState(-12)
     const value = {
         volume,
         setVolume
     }

    return (
        <SharedPianoContext.Provider value={value}>
        {props.children}
      </SharedPianoContext.Provider>
    )
}
export default SharedPiano