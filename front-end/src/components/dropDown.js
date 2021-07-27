

function dropDown(prop) {
    function changeInst(event) {
       prop.change(event.target.value)
    }
    return (
        <div>
            <select  value={prop.instrument} onChange={changeInst}>
                <option  value="piano">Piano</option>
                <option value="guitarAcoustic">Guitar Acoustic</option>
                <option value="drumMachine">DrumMachine</option>
                <option value="flute">Flute</option>
                <option value="xylophone">Xylophone</option>
                <option value="violin">Violin</option>
                <option value="organ">Organ</option>
            </select>
        </div>
    )
}

export default dropDown
