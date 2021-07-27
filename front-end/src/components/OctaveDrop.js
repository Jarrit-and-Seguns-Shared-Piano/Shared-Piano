
function OctaveDrop(prop) {
    function changeOcta(event) {
        prop.change(event.target.value)
     }
     return (
         <div>
             <select  value={prop.value} onChange={changeOcta}>
                 <option value="1">1 Octave</option>
                 <option value="2">2 Octave</option>
                 <option value="3">3 Octave</option>
                 <option value="4">4 Octave</option>
                 <option value="5">5 Octave</option>
                 <option value="6">6 Octave</option>
                 <option value="7">7 Octave</option>
                 <option value="8">8 Octave</option>
             </select>
         </div>
     )
}

export default OctaveDrop
