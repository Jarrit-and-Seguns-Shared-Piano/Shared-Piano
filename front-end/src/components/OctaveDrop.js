import { OverlayTrigger,Tooltip,FloatingLabel,Form} from 'react-bootstrap';
import  { useContext,useEffect } from "react"
import SharedPiano from '../context/SharedPianoContext'

function OctaveDrop(prop) {
    let {setLeft} = useContext(SharedPiano) 
    function changeOcta(event) {
        const value = Number(event.target.value)
        if(value === 1) {
            setLeft('43%')
        }else if(value === 2) {
            setLeft('37%')
        }else if(value === 3) {
            setLeft('30%')
        }else if(value === 4) {
            setLeft('25%')
        }else if(value === 5) {
            setLeft('15%')
        }else if(value === 6) {
            setLeft('10%')
        }else if(value === 7) {
            setLeft('1%')
        }else if(value === 8) {
            setLeft('0.5%')
        } 
        prop.change(value)
     }
     const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
           Change instrument octave 
        </Tooltip>
      );
     return (
         <>
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}>

         <FloatingLabel controlId="floatingSelect" label="change octave">
            <Form.Select  size='lg' aria-label="change octave" value={prop.value} onChange={changeOcta}>
                 <option value="1">1 Octave</option>
                 <option value="2">2 Octave</option>
                 <option value="3">3 Octave</option>
                 <option value="4">4 Octave</option>
                 <option value="5">5 Octave</option>
                 <option value="6">6 Octave</option>
                 <option value="7">7 Octave</option>
                 <option value="8">8 Octave</option>
            </Form.Select>
        </FloatingLabel>
        </OverlayTrigger>
         </>
     )
}

export default OctaveDrop
