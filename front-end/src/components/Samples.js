import * as Tone from 'tone'


function Sampler (notes,volume) {
    const sampler = new Tone.Sampler({
        urls: notes,
        onload: () => {
            sampler.volume.value = volume
            //  keypress(sampler,note)
            console.log('loaded')
        }
    }).toDestination();
    return sampler
}
export default Sampler