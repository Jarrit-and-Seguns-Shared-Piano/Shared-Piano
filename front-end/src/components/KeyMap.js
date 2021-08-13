import  { useContext } from "react"
import SharedPiano from '../context/SharedPianoContext'
import { OverlayTrigger,Tooltip,FloatingLabel,Form} from 'react-bootstrap';

function KeyMap() {
   
    let {keymap,setKeyMap,octave,setkeyError} = useContext(SharedPiano) 
    function changeOcta(event) {
        if(event.target.selectedIndex < octave) {
            setkeyError(false)
            setKeyMap(event.target.value)
        }else {
            setkeyError(true)
        }
     }
     const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
           Change keyboard octave mapping
        </Tooltip>
      );
     return (
         
        < >
     
       <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}>
        <FloatingLabel controlId="floatingSelect" label="Keyboard Map">
            <Form.Select  size='lg' aria-label="keyboard map to octave" value={keymap} onChange={changeOcta}>
                 <option value="octave 0">1 Octave</option>
                 <option value="octave 1">2 Octave</option>
                 <option value="octave 2">3 Octave</option>
                 <option value="octave 3">4 Octave</option>
                 <option value="octave 4">5 Octave</option>
                 <option value="octave 5">6 Octave</option>
                 <option value="octave 6">7 Octave</option>
                 <option value="octave 7">8 Octave</option>
            </Form.Select>
        </FloatingLabel>
        </OverlayTrigger>
         </>
     )
}

export default KeyMap
