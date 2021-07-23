import drum from '../samples/drumMachine'
import Button from './Button';

function drumMachine() {
    return (
        <div className="board">
           <div className="octave1">
                <Button sound={drum.bassDrum1} buttonClass="drum flat" note='bassDrum1'/>
                <Button sound={drum.agogo} buttonClass="drum sharp" note='agogo'/>
                <Button sound={drum.bassDrum2} buttonClass="drum flat" note='bassDrum2'/>
                <Button sound={drum.hatOpen} buttonClass="drum sharp" note='hatOpen'/>
                <Button sound={drum.bassDrum3} buttonClass="drum flat" note='bassDrum3'/>
                <Button sound={drum.bongo} buttonClass="drum flat" note='bongo'/>
                <Button sound={drum.bassDrum4} buttonClass="drum sharp" note='bassDrum4'/>
                <Button sound={drum.tomL} buttonClass="drum flat" note='tomL'/>
                <Button sound={drum.bassDrum5} buttonClass="drum sharp" note='bassDrum5'/>
                <Button sound={drum.hatClosed} buttonClass="drum flat" note='hatClosed'/>
                <Button sound={drum.bassDrum6} buttonClass="drum sharp" note='bassDrum6'/>
                <Button sound={drum.cabasa} buttonClass="drum flat" note='cabasa'/>
            </div>
            <div className="octave2">
                <Button sound={drum.whistle} buttonClass="drum flat" note='whistle'/>
                <Button sound={drum.tomM} buttonClass="drum sharp" note='tomM'/>
                <Button sound={drum.snareDrum} buttonClass="drum flat" note='snareDrum'/>
                <Button sound={drum.rimshot} buttonClass="drum sharp" note='rimshot'/>
                <Button sound={drum.starChimes} buttonClass="drum flat" note='starChimes'/>
                <Button sound={drum.clap} buttonClass="drum flat" note='clap'/>
                <Button sound={drum.cowbell} buttonClass="drum sharp" note='cowbell'/>
                <Button sound={drum.crash1} buttonClass="drum flat" note='crash1'/>
                <Button sound={drum.maraca} buttonClass="drum sharp" note='maraca'/>
                <Button sound={drum.timbaleH} buttonClass="drum flat" note='timbaleH'/>
                <Button sound={drum.timbaleL} buttonClass="drum sharp" note='timbaleL'/>
                <Button sound={drum.loop} buttonClass="drum flat" note='loop'/>
            </div>
        </div>
    )
}

export default drumMachine
