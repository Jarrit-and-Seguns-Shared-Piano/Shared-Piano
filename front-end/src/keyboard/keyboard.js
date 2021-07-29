import socket from '../socket'
import * as Tone from 'tone'
  

function Keyboard(e,sampler,keyNote,sound) {
    const key = e.key.toLowerCase()
    const now = Tone.now()
  if(e.type === 'keydown') {
    switch (key) {
        case 'a':
            socket.emit('play sound', sound[0])
            sampler.triggerAttack(keyNote[0],now)
            break;
        case 'w':
            socket.emit('play sound', sound[1])
            sampler.triggerAttack(keyNote[1],now)
            break;
        case 's':
            socket.emit('play sound', sound[2])
            sampler.triggerAttack(keyNote[2],now)
            break;
        case 'e':
            socket.emit('play sound', sound[3])
            sampler.triggerAttack(keyNote[3],now)
            break;
        case 'd':
            socket.emit('play sound', sound[4])
            sampler.triggerAttack(keyNote[4],now)
            break;
        case 'f':
            socket.emit('play sound', sound[5])
            sampler.triggerAttack(keyNote[5],now)
            break;
        case 't':
            socket.emit('play sound', sound[6])
            sampler.triggerAttack(keyNote[6],now)
            break;
        case 'g':
            socket.emit('play sound', sound[7])
            sampler.triggerAttack(keyNote[7],now)
            break;
        case 'y':
            socket.emit('play sound', sound[8])
            sampler.triggerAttack(keyNote[8],now)
            break;
        case 'h':
            socket.emit('play sound', sound[9])
            sampler.triggerAttack(keyNote[9],now)
            break;
        case 'u':
            socket.emit('play sound', sound[10])
            sampler.triggerAttack(keyNote[10],now)
            break;
        case 'j':
            socket.emit('play sound', sound[11])
            sampler.triggerAttack(keyNote[11],now)
            break;
      }
  }else {
    switch (key) {
        case 'a':
            sampler.triggerRelease(keyNote[0],now + 0.3)
            break;
        case 'w':
            sampler.triggerRelease(keyNote[1],now + 0.3)
            break;
        case 's':
            sampler.triggerRelease(keyNote[2],now + 0.3)
            break;
        case 'e':
            sampler.triggerRelease(keyNote[3],now + 0.3)
            break;
        case 'd':
            sampler.triggerRelease(keyNote[4],now + 0.3)
            break;
        case 'f':
            sampler.triggerRelease(keyNote[5],now + 0.3)
            break;
        case 't':
            sampler.triggerRelease(keyNote[6],now + 0.3)
            break;
        case 'g':
            sampler.triggerRelease(keyNote[7],now + 0.3)
            break;
        case 'y':
            sampler.triggerRelease(keyNote[8],now + 0.3)
            break;
        case 'h':
            sampler.triggerRelease(keyNote[9],now + 0.3)
            break;
        case 'u':
            sampler.triggerRelease(keyNote[10],now + 0.3)
            break;
        case 'j':
            sampler.triggerRelease(keyNote[11],now + 0.3)
            break;
      }
  } 
}

export default Keyboard
