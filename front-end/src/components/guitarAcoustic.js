import guitar from "../samples/guitarAcoustic"
import Button from './Button';

function guitarAcoustic() {
    return (
        <div className="board">
             <div className="octave1">
                <Button sound={guitar.C2} buttonClass="guitar flat" note='C2'/>
                <Button sound={guitar.Cs2} buttonClass="guitar sharp" note='C#2'/>
                <Button sound={guitar.D2} buttonClass="guitar flat" note='D2'/>
                <Button sound={guitar.Ds2} buttonClass="guitar sharp" note='D#2'/>
                <Button sound={guitar.E2} buttonClass="guitar flat" note='E2'/>
                <Button sound={guitar.F2} buttonClass="guitar flat" note='F2'/>
                <Button sound={guitar.Fs2} buttonClass="guitar sharp" note='F#2'/>
                <Button sound={guitar.G2} buttonClass="guitar flat" note='G2'/>
                <Button sound={guitar.Gs2} buttonClass="guitar sharp" note='G#2'/>
                <Button sound={guitar.A2} buttonClass="guitar flat" note='A2'/>
                <Button sound={guitar.As2} buttonClass="guitar sharp" note='A#2'/>
                <Button sound={guitar.B2} buttonClass="guitar flat" note='B2'/>
            </div>
            <div className="octave2">
                <Button sound={guitar.C3} buttonClass="guitar flat" note='C3'/>
                <Button sound={guitar.Cs3} buttonClass="guitar sharp" note='C#3'/>
                <Button sound={guitar.D3} buttonClass="guitar flat" note='D3'/>
                <Button sound={guitar.Ds3} buttonClass="guitar sharp" note='D#3'/>
                <Button sound={guitar.E3} buttonClass="guitar flat" note='E3'/>
                <Button sound={guitar.F3} buttonClass="guitar flat" note='F3'/>
                <Button sound={guitar.Fs3} buttonClass="guitar sharp" note='F#3'/>
                <Button sound={guitar.G3} buttonClass="guitar flat" note='G3'/>
                <Button sound={guitar.Gs3} buttonClass="guitar sharp" note='G#3'/>
                <Button sound={guitar.A3} buttonClass="guitar flat" note='A3'/>
                <Button sound={guitar.As3} buttonClass="guitar sharp" note='A#3'/>
                <Button sound={guitar.B3} buttonClass="guitar flat" note='B3'/>
            </div>
    </div>
    )
}

export default guitarAcoustic
