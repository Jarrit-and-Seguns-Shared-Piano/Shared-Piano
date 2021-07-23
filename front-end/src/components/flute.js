import Buttons from './Buttons';
import flute from '../samples/fluteSample'

function flutes() {
    return (
        <div className="board">
        <Buttons sound={flute.C3} buttonClass="flute flat" note='C3'/>
        <Buttons sound={flute.A3} buttonClass="flute sharp" note='A3'/>
        <Buttons sound={flute.E3} buttonClass="flute sharp" note='E3'/>
        <Buttons sound={flute.C4} buttonClass="flute flat" note='C4'/>
        <Buttons sound={flute.A4} buttonClass="flute flat" note='A4'/>
        <Buttons sound={flute.E4} buttonClass="flute sharp" note='E4'/>
        <Buttons sound={flute.C5} buttonClass="flute flat" note='C5'/>
        <Buttons sound={flute.A5} buttonClass="flute sharp" note='A5'/>
        <Buttons sound={flute.E5} buttonClass="flute flat" note='E5'/>   
        <Buttons sound={flute.C6} buttonClass="flute flat" note='C6'/>        
        </div>
    )
}

export default flutes
