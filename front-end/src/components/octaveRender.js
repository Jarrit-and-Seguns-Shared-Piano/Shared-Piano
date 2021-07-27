

function octaveRender(prop) {
    return (
        <div className={`octave${prop.octave}`}>
            
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
            </div>
    )
}

export default octaveRender