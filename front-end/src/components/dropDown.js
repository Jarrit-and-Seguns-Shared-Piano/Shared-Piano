import { OverlayTrigger,Tooltip,FloatingLabel,Form} from 'react-bootstrap';
import  { useContext } from "react"
import SharedPiano from '../context/SharedPianoContext'

function DropDown(prop) {
  let {checkOctave,octave,setLeft} = useContext(SharedPiano) 
  const chkObj = checkOctave()
    function changeInst(event) {
      const min = Math.min(chkObj[event.target.value],octave)
          if(min === 1) {
            setLeft('43%')
        }else if(min === 2 ) {
            setLeft('37%')
        }else if(min === 3 ) {
            setLeft('30%')
        }else if(min === 4) {
            setLeft('25%')
        }else if(min === 5 ) {
            setLeft('15%')
        }else if(min === 6 ) {
            setLeft('10%')
        }else if(min === 7 ) {
            setLeft('1%')
        }else if(min === 8 ) {
            setLeft('0.5%')
        } 
       prop.change(event.target.value)
    }
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Change instrument type 
        </Tooltip>
      );
    return (
        <>
          <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
        <FloatingLabel controlId="floatingSelect" label="Instrument">
        <Form.Select aria-label="instrument drppdown"  value={prop.instrument} onChange={changeInst}>
                <option  value="piano">Piano</option>
                <option value="guitarAcoustic">Guitar Acoustic</option>
                <option value="drumMachine">DrumMachine</option>
                <option value="flute">Flute</option>
                <option value="xylophone">Xylophone</option>
                <option value="violin">Violin</option>
                <option value="organ">Organ</option>
        </Form.Select>
       </FloatingLabel>
       </OverlayTrigger>
        </>
    )
}

export default DropDown
