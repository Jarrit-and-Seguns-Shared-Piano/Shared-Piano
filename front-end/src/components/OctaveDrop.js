import { OverlayTrigger,Tooltip,FloatingLabel,Form} from 'react-bootstrap';

function OctaveDrop(prop) {
    function changeOcta(event) {
        prop.change(event.target.value)
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
