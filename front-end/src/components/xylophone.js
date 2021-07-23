import xylophone from "../samples/xylophoneSample"
import Button from './Button';

function Xylophone() {
    return (
        <div className="board">
             <div className="octave1">
                <Button sound={xylophone.A3} buttonClass="xylophone flat" note='A3'/>
                <Button sound={xylophone.A4} buttonClass="xylophone sharp" note='A4'/>
                <Button sound={xylophone.B3} buttonClass="xylophone flat" note='B3'/>
                <Button sound={xylophone.Bs3} buttonClass="xylophone sharp" note='B#3'/>
                <Button sound={xylophone.C3} buttonClass="xylophone flat" note='C3'/>
                <Button sound={xylophone.C4} buttonClass="xylophone flat" note='C4'/>
                <Button sound={xylophone.C5} buttonClass="xylophone sharp" note='C5'/>
                <Button sound={xylophone.C6} buttonClass="xylophone flat" note='C6'/>
                <Button sound={xylophone.C7} buttonClass="xylophone sharp" note='C7'/>
                <Button sound={xylophone.Cs3} buttonClass="xylophone flat" note='C#3'/>
                <Button sound={xylophone.Cs4} buttonClass="xylophone sharp" note='C#4'/>
                <Button sound={xylophone.D3} buttonClass="xylophone flat" note='D3'/>
            </div>
            <div className="octave2">
                <Button sound={xylophone.D4} buttonClass="xylophone flat" note='D4'/>
                <Button sound={xylophone.Ds3} buttonClass="xylophone sharp" note='D#3'/>
                <Button sound={xylophone.E3} buttonClass="xylophone flat" note='E3'/>
                <Button sound={xylophone.E4} buttonClass="xylophone sharp" note='E4'/>
                <Button sound={xylophone.Es3} buttonClass="xylophone flat" note='Es3'/>
                <Button sound={xylophone.F3} buttonClass="xylophone flat" note='F3'/>
                <Button sound={xylophone.F4} buttonClass="xylophone sharp" note='F4'/>
                <Button sound={xylophone.G4} buttonClass="xylophone flat" note='G4'/>
                <Button sound={xylophone.Gs4} buttonClass="xylophone sharp" note='G#4'/>
                <Button sound={xylophone.G3} buttonClass="xylophone flat" note='G3'/>
                <Button sound={xylophone.G5} buttonClass="xylophone sharp" note='G5'/>
                <Button sound={xylophone.G6} buttonClass="xylophone flat" note='G6'/>
            </div>
        </div>
    )
}

export default Xylophone
