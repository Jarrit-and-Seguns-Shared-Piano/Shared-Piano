import sound from '../samples/pianoSample'
import Buttons from './Buttons';

function Piano() {
    return (
        <div>
            <Buttons sound={sound.C3} note='C3'/>
            <Buttons sound={sound.Cs3} note='C#3'/>
            <Buttons sound={sound.D3} note='D3'/>
            <Buttons sound={sound.Ds3} note='D#3'/>
            <Buttons sound={sound.E3} note='E3'/>
            <Buttons sound={sound.F3} note='F3'/>
            <Buttons sound={sound.Fs3} note='F#3'/>
            <Buttons sound={sound.G3} note='G3'/>
            <Buttons sound={sound.Gs3} note='G#3'/>
            <Buttons sound={sound.A3} note='A3'/>
            <Buttons sound={sound.As3} note='A#3'/>
            <Buttons sound={sound.B3} note='B3'/>
            <Buttons sound={sound.C4} note='C4'/>
            <Buttons sound={sound.Cs4} note='C#4'/>
            <Buttons sound={sound.D4} note='D4'/>
            <Buttons sound={sound.Ds4} note='D#4'/>
            <Buttons sound={sound.E4} note='E4'/>
            <Buttons sound={sound.F4} note='F4'/>
            <Buttons sound={sound.Fs4} note='F#4'/>
            <Buttons sound={sound.G4} note='G4'/>
            <Buttons sound={sound.Gs4} note='G#4'/>
            <Buttons sound={sound.A4} note='A4'/>
            <Buttons sound={sound.As4} note='A#4'/>
            <Buttons sound={sound.B4} note='B4'/>
        </div>
    )
}

export default Piano
