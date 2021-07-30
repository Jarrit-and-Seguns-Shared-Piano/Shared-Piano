import socket from '../socket'
import * as Tone from 'tone'
  

function Keyboard(e,sampler,keyNote,sound,activeOcta) {
    const key = e.key.toLowerCase()
    const now = Tone.now()
    const keyboardKeys = document.getElementsByClassName('board')
    const octaveActive = keyboardKeys[0].children[activeOcta[activeOcta.length - 1]].children
  if(e.type === 'keydown') {
    switch (key) {
        case 'a':
            octaveActive[0].style.backgroundColor = 'green'
            socket.emit('play sound', sound[0])
            sampler.triggerAttack(keyNote[0],now)
            break;
        case 'w':
            octaveActive[1].style.backgroundColor = 'green'
            socket.emit('play sound', sound[1])
            sampler.triggerAttack(keyNote[1],now)
            break;
        case 's':
            octaveActive[2].style.backgroundColor = 'green'
            socket.emit('play sound', sound[2])
            sampler.triggerAttack(keyNote[2],now)
            break;
        case 'e':
            octaveActive[3].style.backgroundColor = 'green'
            socket.emit('play sound', sound[3])
            sampler.triggerAttack(keyNote[3],now)
            break;
        case 'd':
            octaveActive[4].style.backgroundColor = 'green'
            socket.emit('play sound', sound[4])
            sampler.triggerAttack(keyNote[4],now)
            break;
        case 'f':
            octaveActive[5].style.backgroundColor = 'green'
            socket.emit('play sound', sound[5])
            sampler.triggerAttack(keyNote[5],now)
            break;
        case 't':
            octaveActive[6].style.backgroundColor = 'green'
            socket.emit('play sound', sound[6])
            sampler.triggerAttack(keyNote[6],now)
            break;
        case 'g':
            octaveActive[7].style.backgroundColor = 'green'
            socket.emit('play sound', sound[7])
            sampler.triggerAttack(keyNote[7],now)
            break;
        case 'y':
            octaveActive[8].style.backgroundColor = 'green'
            socket.emit('play sound', sound[8])
            sampler.triggerAttack(keyNote[8],now)
            break;
        case 'h':
            octaveActive[9].style.backgroundColor = 'green'
            socket.emit('play sound', sound[9])
            sampler.triggerAttack(keyNote[9],now)
            break;
        case 'u':
            octaveActive[10].style.backgroundColor = 'green'
            socket.emit('play sound', sound[10])
            sampler.triggerAttack(keyNote[10],now)
            break;
        case 'j':
            octaveActive[11].style.backgroundColor = 'green'
            socket.emit('play sound', sound[11])
            sampler.triggerAttack(keyNote[11],now)
            break;
      }
  }else {
    let octaval
    switch (key) {
        case 'a':
            octaval = octaveActive[0]
            octaval.classList[1] === 'sharp' ? 
            octaval.style.backgroundColor = 'black' : 
            octaval.style.backgroundColor = 'white'
            sampler.triggerRelease(keyNote[0],now + 0.3)
            break;
        case 'w':
             octaval = octaveActive[1]
            octaval.classList[1] === 'sharp' ? 
            octaval.style.backgroundColor = 'black' : 
            octaval.style.backgroundColor = 'white'
            sampler.triggerRelease(keyNote[1],now + 0.3)
            break;
        case 's':
             octaval = octaveActive[2]
            octaval.classList[1] === 'sharp' ? 
            octaval.style.backgroundColor = 'black' : 
            octaval.style.backgroundColor = 'white'
            sampler.triggerRelease(keyNote[2],now + 0.3)
            break;
        case 'e':
             octaval = octaveActive[3]
            octaval.classList[1] === 'sharp' ? 
            octaval.style.backgroundColor = 'black' : 
            octaval.style.backgroundColor = 'white'
            sampler.triggerRelease(keyNote[3],now + 0.3)
            break;
        case 'd':
             octaval = octaveActive[4]
            octaval.classList[1] === 'sharp' ? 
            octaval.style.backgroundColor = 'black' : 
            octaval.style.backgroundColor = 'white'
            sampler.triggerRelease(keyNote[4],now + 0.3)
            break;
        case 'f':
             octaval = octaveActive[5]
            octaval.classList[1] === 'sharp' ? 
            octaval.style.backgroundColor = 'black' : 
            octaval.style.backgroundColor = 'white'
            sampler.triggerRelease(keyNote[5],now + 0.3)
            break;
        case 't':
             octaval = octaveActive[6]
            octaval.classList[1] === 'sharp' ? 
            octaval.style.backgroundColor = 'black' : 
            octaval.style.backgroundColor = 'white'
            sampler.triggerRelease(keyNote[6],now + 0.3)
            break;
        case 'g':
             octaval = octaveActive[7]
            octaval.classList[1] === 'sharp' ? 
            octaval.style.backgroundColor = 'black' : 
            octaval.style.backgroundColor = 'white'
            sampler.triggerRelease(keyNote[7],now + 0.3)
            break;
        case 'y':
             octaval = octaveActive[8]
            octaval.classList[1] === 'sharp' ? 
            octaval.style.backgroundColor = 'black' : 
            octaval.style.backgroundColor = 'white'
            sampler.triggerRelease(keyNote[8],now + 0.3)
            break;
        case 'h':
             octaval = octaveActive[9]
            octaval.classList[1] === 'sharp' ? 
            octaval.style.backgroundColor = 'black' : 
            octaval.style.backgroundColor = 'white'
            sampler.triggerRelease(keyNote[9],now + 0.3)
            break;
        case 'u':
             octaval = octaveActive[10]
            octaval.classList[1] === 'sharp' ? 
            octaval.style.backgroundColor = 'black' : 
            octaval.style.backgroundColor = 'white'
            sampler.triggerRelease(keyNote[10],now + 0.3)
            break;
        case 'j':
             octaval = octaveActive[11]
            octaval.classList[1] === 'sharp' ? 
            octaval.style.backgroundColor = 'black' : 
            octaval.style.backgroundColor = 'white'
            sampler.triggerRelease(keyNote[11],now + 0.3)
            break;
      }
  } 
}

export default Keyboard
