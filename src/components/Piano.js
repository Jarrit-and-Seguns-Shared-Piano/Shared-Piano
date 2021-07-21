import piano from '../samples/pianoSample'
import Buttons from './Buttons';

function Piano() {
    return (
        <div className="board">
            <Buttons piano={piano.C3} buttonClass="flat" note='C3'/>
            <Buttons piano={piano.Cs3} buttonClass="sharp" note='C#3'/>
            <Buttons piano={piano.D3} buttonClass="flat" note='D3'/>
            <Buttons piano={piano.Ds3} buttonClass="sharp" note='D#3'/>
            <Buttons piano={piano.E3} buttonClass="flat" note='E3'/>
            <Buttons piano={piano.F3} buttonClass="flat" note='F3'/>
            <Buttons piano={piano.Fs3} buttonClass="sharp" note='F#3'/>
            <Buttons piano={piano.G3} buttonClass="flat" note='G3'/>
            <Buttons piano={piano.Gs3} buttonClass="sharp" note='G#3'/>
            <Buttons piano={piano.A3} buttonClass="flat" note='A3'/>
            <Buttons piano={piano.As3} buttonClass="sharp" note='A#3'/>
            <Buttons piano={piano.B3} buttonClass="flat" note='B3'/>
            <Buttons piano={piano.C4} buttonClass="flat" note='C4'/>
            <Buttons piano={piano.Cs4} buttonClass="sharp" note='C#4'/>
            <Buttons piano={piano.D4} buttonClass="flat" note='D4'/>
            <Buttons piano={piano.Ds4} buttonClass="sharp" note='D#4'/>
            <Buttons piano={piano.E4} buttonClass="flat" note='E4'/>
            <Buttons piano={piano.F4} buttonClass="flat" note='F4'/>
            <Buttons piano={piano.Fs4} buttonClass="sharp" note='F#4'/>
            <Buttons piano={piano.G4} buttonClass="flat" note='G4'/>
            <Buttons piano={piano.Gs4} buttonClass="sharp" note='G#4'/>
            <Buttons piano={piano.A4} buttonClass="flat" note='A4'/>
            <Buttons piano={piano.As4} buttonClass="sharp" note='A#4'/>
            <Buttons piano={piano.B4} buttonClass="flat" note='B4'/>
        </div>
    )
}

export default Piano
