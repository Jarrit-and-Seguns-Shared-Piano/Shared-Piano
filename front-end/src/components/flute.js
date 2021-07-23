import Button from './Button';
import flute from '../samples/fluteSample'

function flutes() {
    return (
        <div className="board">
        <Button sound={flute.C3} buttonClass="flute flat" note='C3'/>
        <Button sound={flute.A3} buttonClass="flute sharp" note='A3'/>
        <Button sound={flute.E3} buttonClass="flute sharp" note='E3'/>
        <Button sound={flute.C4} buttonClass="flute flat" note='C4'/>
        <Button sound={flute.A4} buttonClass="flute flat" note='A4'/>
        <Button sound={flute.E4} buttonClass="flute sharp" note='E4'/>
        <Button sound={flute.C5} buttonClass="flute flat" note='C5'/>
        <Button sound={flute.A5} buttonClass="flute sharp" note='A5'/>
        <Button sound={flute.E5} buttonClass="flute flat" note='E5'/>   
        <Button sound={flute.C6} buttonClass="flute flat" note='C6'/>        
        </div>
    )
}

export default flutes
