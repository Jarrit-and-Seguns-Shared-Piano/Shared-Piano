import { OverlayTrigger,Tooltip,FloatingLabel,Form} from 'react-bootstrap';

function dropDown(prop) {
    function changeInst(event) {
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

export default dropDown
