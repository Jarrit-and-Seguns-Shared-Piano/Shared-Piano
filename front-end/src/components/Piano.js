import piano from '../samples/pianoSample'
import Button from './Button';

function Piano() {
    return (
        <div className="board">
            <Button sound={piano.C3} buttonClass="piano flat" note='C3'/>
            <Button sound={piano.Cs3} buttonClass="piano sharp" note='C#3'/>
            <Button sound={piano.D3} buttonClass="piano flat" note='D3'/>
            <Button sound={piano.Ds3} buttonClass="piano sharp" note='D#3'/>
            <Button sound={piano.E3} buttonClass="piano flat" note='E3'/>
            <Button sound={piano.F3} buttonClass="piano flat" note='F3'/>
            <Button sound={piano.Fs3} buttonClass="piano sharp" note='F#3'/>
            <Button sound={piano.G3} buttonClass="piano flat" note='G3'/>
            <Button sound={piano.Gs3} buttonClass="piano sharp" note='G#3'/>
            <Button sound={piano.A3} buttonClass="piano flat" note='A3'/>
            <Button sound={piano.As3} buttonClass="piano sharp" note='A#3'/>
            <Button sound={piano.B3} buttonClass="piano flat" note='B3'/>
            <Button sound={piano.C4} buttonClass="piano flat" note='C4'/>
            <Button sound={piano.Cs4} buttonClass="piano sharp" note='C#4'/>
            <Button sound={piano.D4} buttonClass="piano flat" note='D4'/>
            <Button sound={piano.Ds4} buttonClass="piano sharp" note='D#4'/>
            <Button sound={piano.E4} buttonClass="piano flat" note='E4'/>
            <Button sound={piano.F4} buttonClass="piano flat" note='F4'/>
            <Button sound={piano.Fs4} buttonClass="piano sharp" note='F#4'/>
            <Button sound={piano.G4} buttonClass="piano flat" note='G4'/>
            <Button sound={piano.Gs4} buttonClass="piano sharp" note='G#4'/>
            <Button sound={piano.A4} buttonClass="piano flat" note='A4'/>
            <Button sound={piano.As4} buttonClass="piano sharp" note='A#4'/>
            <Button sound={piano.B4} buttonClass="piano flat" note='B4'/>
        </div>
    )
}

export default Piano
