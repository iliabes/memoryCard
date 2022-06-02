import './Impi.sass'
import { useState } from 'react';
import { storeImpi } from '../store/store';

import { toastyPers } from '../arrImage';
import {voice} from '../sound.js'
import { store } from '../store/store';

export default function Impi(props) { 
    console.log('impi');
    let  [voiceEffect,setVoiceEffect]=useState(voice[store.getState().fraction.value])
    let  [pers,setPers] = useState(toastyPers[store.getState().fraction.value])
    let  [show, setShow] = useState(storeImpi.getState().value)
    console.log(toastyPers);
    const  toasty = new Audio(voiceEffect);
    store.subscribe(() => {
        console.log('0000');
        toasty.volume = 0
        setVoiceEffect(voice[store.getState().fraction.value])
        setPers(toastyPers[store.getState().fraction.value])
    })

    

    storeImpi.subscribe(() => {
        
        setShow(storeImpi.getState().value )
        console.log(storeImpi.getState().value);
        if(storeImpi.getState().value === true){
            toasty.play()
        }
    })
    



    return (
        <div  className={show ? "impi impi-animate" : "impi" }>
            <img alt='toasty pers'src={require(`../img/impi/${pers}`)}/>
        </div>
    );
}