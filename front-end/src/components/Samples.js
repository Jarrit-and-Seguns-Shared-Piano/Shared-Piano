import * as Tone from 'tone'

function Sampler (notes,volume) {
    // const tuneKey = (sampler,sound,keymap,keyOct,volume) => {
    //     if(Number(keymap[keymap.length - 1]) + 1 > Object.keys(keyOct.octa).length) {
    //         alert('keyboard octave too high for selected instrument')
    //         keymap = 'octave 0'
    //     }
    //     // // console.log(octaveNub,Number(keymap[keymap.length - 1]) + 1)
    //     const octaveKey = keyOct.octakey[keymap]
    //     const notes = []
    //     octaveKey.forEach(keyword => {
    //         let string = keyword.replace('.','')
    //         notes.push(string.replace('s','#'))
    //     })
    //     const down = (e) => {
    //         keyboard(e,sampler,notes,sound,keymap)
    //         // document.removeEventListener('keydown');
    //         }
    //     const up = (e) => {
    //         keyboard(e,sampler,notes,sound,keymap)
    //         // document.removeEventListener('keyup');
    //         }
    //     document.addEventListener('keydown', down)
    //     document.addEventListener('keyup', up)
    //     // return () => {
    //     //     document.removeEventListener('keydown',down);
    //     //     document.removeEventListener('keyup',up);
    //     // }
    // }
  
    // let event
    const sampler = new Tone.Sampler({
        urls: notes,
        onload: () => {
            sampler.volume.value = volume
          
           
        }
    }).toDestination();
    
    return sampler
}
export default Sampler