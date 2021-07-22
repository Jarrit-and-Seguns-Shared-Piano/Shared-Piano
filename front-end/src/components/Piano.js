import piano from '../samples/pianoSample'
import Buttons from './Buttons';

function Piano() {
    return (
        <div className="board">
            <Buttons sound={piano.C3} buttonClass="piano flat" note='C3'/>
            <Buttons sound={piano.Cs3} buttonClass="piano sharp" note='C#3'/>
            <Buttons sound={piano.D3} buttonClass="piano flat" note='D3'/>
            <Buttons sound={piano.Ds3} buttonClass="piano sharp" note='D#3'/>
            <Buttons sound={piano.E3} buttonClass="piano flat" note='E3'/>
            <Buttons sound={piano.F3} buttonClass="piano flat" note='F3'/>
            <Buttons sound={piano.Fs3} buttonClass="piano sharp" note='F#3'/>
            <Buttons sound={piano.G3} buttonClass="piano flat" note='G3'/>
            <Buttons sound={piano.Gs3} buttonClass="piano sharp" note='G#3'/>
            <Buttons sound={piano.A3} buttonClass="piano flat" note='A3'/>
            <Buttons sound={piano.As3} buttonClass="piano sharp" note='A#3'/>
            <Buttons sound={piano.B3} buttonClass="piano flat" note='B3'/>
            <Buttons sound={piano.C4} buttonClass="piano flat" note='C4'/>
            <Buttons sound={piano.Cs4} buttonClass="piano sharp" note='C#4'/>
            <Buttons sound={piano.D4} buttonClass="piano flat" note='D4'/>
            <Buttons sound={piano.Ds4} buttonClass="piano sharp" note='D#4'/>
            <Buttons sound={piano.E4} buttonClass="piano flat" note='E4'/>
            <Buttons sound={piano.F4} buttonClass="piano flat" note='F4'/>
            <Buttons sound={piano.Fs4} buttonClass="piano sharp" note='F#4'/>
            <Buttons sound={piano.G4} buttonClass="piano flat" note='G4'/>
            <Buttons sound={piano.Gs4} buttonClass="piano sharp" note='G#4'/>
            <Buttons sound={piano.A4} buttonClass="piano flat" note='A4'/>
            <Buttons sound={piano.As4} buttonClass="piano sharp" note='A#4'/>
            <Buttons sound={piano.B4} buttonClass="piano flat" note='B4'/>
        </div>
    )
}

export default Piano
