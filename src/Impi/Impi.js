import './Impi.sass'
import { useState } from 'react';
import { storeImpi } from '../store/store';

import { toastyPers } from '../images';
import {voice} from '../sound.js'
import { store } from '../store/store';

export default function Impi(props) { 
    let  [voiceEffect,setVoiceEffect]=useState(voice[store.getState().fraction.value])
    let  [pers,setPers] = useState(toastyPers[store.getState().fraction.value])
    let  [show, setShow] = useState(storeImpi.getState().value)
    let  toasty = new Audio(voiceEffect);

    store.subscribe(() => {
        if(toasty){
            toasty.volume = 0
            toasty = null
        }
      
        setVoiceEffect(voice[store.getState().fraction.value])
        setPers(toastyPers[store.getState().fraction.value])
    })

    

    storeImpi.subscribe(() => {
        setShow(storeImpi.getState().value )
        if(storeImpi.getState().value === true && toasty){
            toasty.play()
        }
    })
    



    return (
        <div  className={show ? "impi impi-animate" : "impi" }>
            <img alt='toasty pers'src={require(`../img/impi/${pers}`)}/>
        </div>
    );
}