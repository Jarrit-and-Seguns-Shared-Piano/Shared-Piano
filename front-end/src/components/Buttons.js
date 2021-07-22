
import { socket } from '../App'

function Buttons(prop) {
    

    const trigger = () => {
        socket.emit('play sound', prop.sound)
    }
    return (
       <button onClick={trigger} className={prop.buttonClass}>{prop.note}</button>
    )
}

export default Buttons
