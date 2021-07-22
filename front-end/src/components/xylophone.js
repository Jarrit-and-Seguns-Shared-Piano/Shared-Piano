import xylophone from "../samples/xylophoneSample"
import Buttons from './Buttons';

function Xylophone() {
    return (
        <div className="board">
            <Buttons sound={xylophone.A3} buttonClass="xylophone flat" note='A3'/>
            <Buttons sound={xylophone.A4} buttonClass="xylophone sharp" note='A4'/>
            <Buttons sound={xylophone.B3} buttonClass="xylophone flat" note='B3'/>
            <Buttons sound={xylophone.Bs3} buttonClass="xylophone sharp" note='B#3'/>
            <Buttons sound={xylophone.C3} buttonClass="xylophone flat" note='C3'/>
            <Buttons sound={xylophone.C4} buttonClass="xylophone flat" note='C4'/>
            <Buttons sound={xylophone.C5} buttonClass="xylophone sharp" note='C5'/>
            <Buttons sound={xylophone.C6} buttonClass="xylophone flat" note='C6'/>
            <Buttons sound={xylophone.C7} buttonClass="xylophone sharp" note='C7'/>
            <Buttons sound={xylophone.Cs3} buttonClass="xylophone flat" note='C#3'/>
            <Buttons sound={xylophone.Cs4} buttonClass="xylophone sharp" note='C#4'/>
            <Buttons sound={xylophone.D3} buttonClass="xylophone flat" note='D3'/>
            <Buttons sound={xylophone.D4} buttonClass="xylophone flat" note='D4'/>
            <Buttons sound={xylophone.Ds3} buttonClass="xylophone sharp" note='D#3'/>
            <Buttons sound={xylophone.E3} buttonClass="xylophone flat" note='E3'/>
            <Buttons sound={xylophone.E4} buttonClass="xylophone sharp" note='E4'/>
            <Buttons sound={xylophone.Es3} buttonClass="xylophone flat" note='Es3'/>
            <Buttons sound={xylophone.F3} buttonClass="xylophone flat" note='F3'/>
            <Buttons sound={xylophone.F4} buttonClass="xylophone sharp" note='F4'/>
            <Buttons sound={xylophone.G4} buttonClass="xylophone flat" note='G4'/>
            <Buttons sound={xylophone.Gs4} buttonClass="xylophone sharp" note='G#4'/>
            <Buttons sound={xylophone.G3} buttonClass="xylophone flat" note='G3'/>
            <Buttons sound={xylophone.G5} buttonClass="xylophone sharp" note='G5'/>
            <Buttons sound={xylophone.G6} buttonClass="xylophone flat" note='G6'/>
        </div>
    )
}

export default Xylophone
