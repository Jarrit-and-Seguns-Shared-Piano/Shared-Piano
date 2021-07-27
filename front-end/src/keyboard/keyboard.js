
function keypress(key) {  
    var mousedown = new Event('mousedown');
    const octave = document.getElementsByClassName('octave2')
        key = key.toLowerCase()
        if(key === 'a') {
            octave[0].children[0].click()
        }else if(key === 'w') {
            octave[0].children[1].click()
        }else if(key === 's') {
            octave[0].children[2].click()
        }else if(key === 'e') {
            octave[0].children[3].click()
        }else if(key === 'd') {
            octave[0].children[4].click()
        }else if(key === 'f') {
            octave[0].children[5].click()
        }else if(key === 't') {
            octave[0].children[6].click()
        }else if(key === 'g') {
            octave[0].children[7].click()
        }else if(key === 'y') {
            octave[0].children[8].click()
        }else if(key === 'h') {
            octave[0].children[9].click()
        }else if(key === 'u') {
            octave[0].children[10].click()
        }else if(key === 'j') {
            octave[0].children[11].click()
        }
           
}

export default keypress