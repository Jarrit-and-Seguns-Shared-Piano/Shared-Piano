import drum from '../samples/drumMachine'
import Buttons from './Buttons';

function drumMachine() {
    return (
        <div className="board">
        <Buttons sound={drum.bassDrum1} buttonClass="drum flat" note='bassDrum1'/>
        <Buttons sound={drum.agogo} buttonClass="drum sharp" note='agogo'/>
        <Buttons sound={drum.bassDrum2} buttonClass="drum flat" note='bassDrum2'/>
        <Buttons sound={drum.hatOpen} buttonClass="drum sharp" note='hatOpen'/>
        <Buttons sound={drum.bassDrum3} buttonClass="drum flat" note='bassDrum3'/>
        <Buttons sound={drum.bongo} buttonClass="drum flat" note='bongo'/>
        <Buttons sound={drum.bassDrum4} buttonClass="drum sharp" note='bassDrum4'/>
        <Buttons sound={drum.tomL} buttonClass="drum flat" note='tomL'/>
        <Buttons sound={drum.bassDrum5} buttonClass="drum sharp" note='bassDrum5'/>
        <Buttons sound={drum.hatClosed} buttonClass="drum flat" note='hatClosed'/>
        <Buttons sound={drum.bassDrum6} buttonClass="drum sharp" note='bassDrum6'/>
        <Buttons sound={drum.cabasa} buttonClass="drum flat" note='cabasa'/>
        <Buttons sound={drum.whistle} buttonClass="drum flat" note='whistle'/>
        <Buttons sound={drum.tomM} buttonClass="drum sharp" note='tomM'/>
        <Buttons sound={drum.snareDrum} buttonClass="drum flat" note='snareDrum'/>
        <Buttons sound={drum.rimshot} buttonClass="drum sharp" note='rimshot'/>
        <Buttons sound={drum.starChimes} buttonClass="drum flat" note='starChimes'/>
        <Buttons sound={drum.clap} buttonClass="drum flat" note='clap'/>
        <Buttons sound={drum.cowbell} buttonClass="drum sharp" note='cowbell'/>
        <Buttons sound={drum.crash1} buttonClass="drum flat" note='crash1'/>
        <Buttons sound={drum.maraca} buttonClass="drum sharp" note='maraca'/>
        <Buttons sound={drum.timbaleH} buttonClass="drum flat" note='timbaleH'/>
        <Buttons sound={drum.timbaleL} buttonClass="drum sharp" note='timbaleL'/>
        <Buttons sound={drum.loop} buttonClass="drum flat" note='loop'/>
        </div>
    )
}

export default drumMachine
