import Button from './Button';
const octavePos = ['flat','sharp','flat','sharp','flat','flat','sharp','flat','sharp','flat','sharp','flat']
function octaveRender({octave,sound,name}) {
    let counter = 0
        return (
            <div className={octave}>
                  { sound.map((keys,i) => {
                        if(counter <= 11) {
                            counter++
                        }else {
                            counter = 1
                        }
                        return <Button key={i} sound={keys} buttonClass={`${name} ${octavePos[counter -1]}`} note={keys.slice(14, 17).replace('.','')}/> 
                })}
                
            </div>
        )
    
}

export default octaveRender
