import * as Tone from 'tone'

function Sampler (notes,volume,render) {
 
    const sampler = new Tone.Sampler({
        
        urls: notes,
        onload: () => {
            sampler.volume.value = volume
        }
    }).toDestination();
    console.log(sampler)
    
    return sampler
}
export default Sampler