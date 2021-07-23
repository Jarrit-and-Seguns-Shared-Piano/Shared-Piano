import guitar from "../samples/guitarAcoustic"
import Buttons from './Buttons';

function guitarAcoustic() {
    return (
        <div className="board">
        <Buttons sound={guitar.C2} buttonClass="guitar flat" note='C2'/>
        <Buttons sound={guitar.Cs2} buttonClass="guitar sharp" note='C#2'/>
        <Buttons sound={guitar.D2} buttonClass="guitar flat" note='D2'/>
        <Buttons sound={guitar.Ds2} buttonClass="guitar sharp" note='D#2'/>
        <Buttons sound={guitar.E2} buttonClass="guitar flat" note='E2'/>
        <Buttons sound={guitar.F2} buttonClass="guitar flat" note='F2'/>
        <Buttons sound={guitar.Fs2} buttonClass="guitar sharp" note='F#2'/>
        <Buttons sound={guitar.G2} buttonClass="guitar flat" note='G2'/>
        <Buttons sound={guitar.Gs2} buttonClass="guitar sharp" note='G#2'/>
        <Buttons sound={guitar.A2} buttonClass="guitar flat" note='A2'/>
        <Buttons sound={guitar.As2} buttonClass="guitar sharp" note='A#2'/>
        <Buttons sound={guitar.B2} buttonClass="guitar flat" note='B2'/>
        <Buttons sound={guitar.C3} buttonClass="guitar flat" note='C3'/>
        <Buttons sound={guitar.Cs3} buttonClass="guitar sharp" note='C#3'/>
        <Buttons sound={guitar.D3} buttonClass="guitar flat" note='D3'/>
        <Buttons sound={guitar.Ds3} buttonClass="guitar sharp" note='D#3'/>
        <Buttons sound={guitar.E3} buttonClass="guitar flat" note='E3'/>
        <Buttons sound={guitar.F3} buttonClass="guitar flat" note='F3'/>
        <Buttons sound={guitar.Fs3} buttonClass="guitar sharp" note='F#3'/>
        <Buttons sound={guitar.G3} buttonClass="guitar flat" note='G3'/>
        <Buttons sound={guitar.Gs3} buttonClass="guitar sharp" note='G#3'/>
        <Buttons sound={guitar.A3} buttonClass="guitar flat" note='A3'/>
        <Buttons sound={guitar.As3} buttonClass="guitar sharp" note='A#3'/>
        <Buttons sound={guitar.B3} buttonClass="guitar flat" note='B3'/>
    </div>
    )
}

export default guitarAcoustic
