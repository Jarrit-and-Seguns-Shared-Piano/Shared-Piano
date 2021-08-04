import socket from '../socket'
import * as Tone from 'tone'
import  { useContext} from "react"
import KeyNote from '../context/KeyNoteContext'

function Keyboard(e,sampler,keyNote,sound,activeOcta) {
    // let {setNote} = useContext(KeyNote)
    const key = e.key.toLowerCase()
    const now = Tone.now()
    const keyboardKeys = document.getElementsByClassName('board')
    const octaveActive = keyboardKeys[0].children[activeOcta[activeOcta.length - 1]].children
  if(e.type === 'keydown') {
    switch (key) {
       case 'a':
        if(octaveActive[0]) {
                octaveActive[0].style.backgroundColor = 'green'
                socket.emit('play sound', sound[0])
                // setNote(keyNote[0])
                sampler.triggerAttack(keyNote[0],now)
           } break;
        case 'w':
        if(octaveActive[1]) {
                octaveActive[1].style.backgroundColor = 'green'
                socket.emit('play sound', sound[1])
                sampler.triggerAttack(keyNote[1],now)
           } break;
        case 's':
            if(octaveActive[2]) {
                octaveActive[2].style.backgroundColor = 'green'
                socket.emit('play sound', sound[2])
                sampler.triggerAttack(keyNote[2],now)
           } break;
        case 'e':
            if(octaveActive[3]) {
                octaveActive[3].style.backgroundColor = 'green'
                socket.emit('play sound', sound[3])
                sampler.triggerAttack(keyNote[3],now)
           } break;
        case 'd':
            if(octaveActive[4]) {
                octaveActive[4].style.backgroundColor = 'green'
                socket.emit('play sound', sound[4])
                sampler.triggerAttack(keyNote[4],now)
           } break;
        case 'f':
            if(octaveActive[5]) {
                octaveActive[5].style.backgroundColor = 'green'
                socket.emit('play sound', sound[5])
                sampler.triggerAttack(keyNote[5],now)
           } break;
        case 't':
            if(octaveActive[6]) {
                octaveActive[6].style.backgroundColor = 'green'
                socket.emit('play sound', sound[6])
                sampler.triggerAttack(keyNote[6],now)
           } break;
        case 'g':
            if(octaveActive[7]) {
                octaveActive[7].style.backgroundColor = 'green'
                socket.emit('play sound', sound[7])
                sampler.triggerAttack(keyNote[7],now)
           } break;
        case 'y':
            if(octaveActive[8]) {
                octaveActive[8].style.backgroundColor = 'green'
                socket.emit('play sound', sound[8])
                sampler.triggerAttack(keyNote[8],now)
           } break;
        case 'h':
            if(octaveActive[9]) {
                octaveActive[9].style.backgroundColor = 'green'
                socket.emit('play sound', sound[9])
                sampler.triggerAttack(keyNote[9],now)
           } break;
        case 'u':
            if(octaveActive[10]) {
                octaveActive[10].style.backgroundColor = 'green'
                socket.emit('play sound', sound[10])
                sampler.triggerAttack(keyNote[10],now)
           } break;
        case 'j':
            if(octaveActive[11]) {
                octaveActive[11].style.backgroundColor = 'green'
                socket.emit('play sound', sound[11])
                sampler.triggerAttack(keyNote[11],now)
           } break;
        default:
      }
  }else {
    let octaval
    switch (key) {
        case 'a':
                octaval = octaveActive[0]
            if(octaval) {
                octaval.classList[1] === 'sharp' ? 
                octaval.style.backgroundColor = 'black' : 
                octaval.style.backgroundColor = 'white'
                sampler.triggerRelease(keyNote[0],now + 0.3)
           } break;
        case 'w':
                octaval = octaveActive[1]
            if(octaval) {
                octaval.classList[1] === 'sharp' ? 
                octaval.style.backgroundColor = 'black' : 
                octaval.style.backgroundColor = 'white'
                sampler.triggerRelease(keyNote[1],now + 0.3)
           } break;
        case 's':
             octaval = octaveActive[2]
        if(octaval) {
            octaval.classList[1] === 'sharp' ? 
            octaval.style.backgroundColor = 'black' : 
            octaval.style.backgroundColor = 'white'
            sampler.triggerRelease(keyNote[2],now + 0.3)
           } break;
        case 'e':
             octaval = octaveActive[3]
            if(octaval) {
            octaval.classList[1] === 'sharp' ? 
            octaval.style.backgroundColor = 'black' : 
            octaval.style.backgroundColor = 'white'
            sampler.triggerRelease(keyNote[3],now + 0.3)
           } break;
        case 'd':
                octaval = octaveActive[4]
            if(octaval) {
                octaval.classList[1] === 'sharp' ? 
                octaval.style.backgroundColor = 'black' : 
                octaval.style.backgroundColor = 'white'
                sampler.triggerRelease(keyNote[4],now + 0.3)
           } break;
        case 'f':
             octaval = octaveActive[5]
         if(octaval) {
            octaval.classList[1] === 'sharp' ? 
            octaval.style.backgroundColor = 'black' : 
            octaval.style.backgroundColor = 'white'
            sampler.triggerRelease(keyNote[5],now + 0.3)
           } break;
        case 't':
             octaval = octaveActive[6]
        if(octaval) {
            octaval.classList[1] === 'sharp' ? 
            octaval.style.backgroundColor = 'black' : 
            octaval.style.backgroundColor = 'white'
            sampler.triggerRelease(keyNote[6],now + 0.3)
           } break;
        case 'g':
             octaval = octaveActive[7]
             if(octaval) {
            octaval.classList[1] === 'sharp' ? 
            octaval.style.backgroundColor = 'black' : 
            octaval.style.backgroundColor = 'white'
            sampler.triggerRelease(keyNote[7],now + 0.3)
           } break;
        case 'y':
             octaval = octaveActive[8]
             if(octaval) {
            octaval.classList[1] === 'sharp' ? 
            octaval.style.backgroundColor = 'black' : 
            octaval.style.backgroundColor = 'white'
            sampler.triggerRelease(keyNote[8],now + 0.3)
           } break;
        case 'h':
             octaval = octaveActive[9]
             if(octaval) {
            octaval.classList[1] === 'sharp' ? 
            octaval.style.backgroundColor = 'black' : 
            octaval.style.backgroundColor = 'white'
            sampler.triggerRelease(keyNote[9],now + 0.3)
           } break;
        case 'u':
             octaval = octaveActive[10]
             if(octaval) {
            octaval.classList[1] === 'sharp' ? 
            octaval.style.backgroundColor = 'black' : 
            octaval.style.backgroundColor = 'white'
            sampler.triggerRelease(keyNote[10],now + 0.3)
           } break;
        case 'j':
             octaval = octaveActive[11]
             if(octaval) {
            octaval.classList[1] === 'sharp' ? 
            octaval.style.backgroundColor = 'black' : 
            octaval.style.backgroundColor = 'white'
            sampler.triggerRelease(keyNote[11],now + 0.3)
           } break;
        default:
      }
  } 
}

export default Keyboard
