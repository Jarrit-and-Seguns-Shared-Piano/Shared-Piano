
import { Alert} from 'react-bootstrap';
import  { useContext } from "react"
import SharedPiano from '../context/SharedPianoContext'
function KeyError() {
    let { keyError,setkeyError} = useContext(SharedPiano)
    if (keyError) {
        return (
          <Alert variant="danger" onClose={() => setkeyError(false)} dismissible>
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>
            Keyboard mapping is not accessible because the octave rendered is below the octave you wish to map to
            </p>
          </Alert>
        );
      }
      return null
    }

export default KeyError
