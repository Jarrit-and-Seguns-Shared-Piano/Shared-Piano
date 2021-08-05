import  { useContext} from "react"
import KeyNote from '../context/KeyNoteContext'

function ShowNote() {
    let {note} = useContext(KeyNote)
    return (
        <h1 id='noteDisplay'>{note}</h1>
    )
}
// export {update}
export default ShowNote