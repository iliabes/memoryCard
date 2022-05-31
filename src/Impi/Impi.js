import './Impi.sass'
import { useState } from 'react';
import { storeImpi } from '../store/store';
import { useEffect } from 'react';
import { toastyPers } from '../arrImage';
import {voice} from '../sound.js'
import { store } from '../store/store';

export default function Impi(props) { 

    let  [voiceEffect,setVoiceEffect]=useState(voice[store.getState().fraction.value])
    let  [pers,setPers] = useState(toastyPers[store.getState().fraction.value])
    const  toasty = new Audio(voiceEffect);
    store.subscribe(() => {
        setVoiceEffect(voice[store.getState().fraction.value])
        setPers(toastyPers[store.getState().fraction.value])
    })

    let [show, setShow] = useState(storeImpi.getState().value)

    storeImpi.subscribe(() => setShow(storeImpi.getState().value ))
    

    useEffect(() => {
        if(show){
            toasty.play()
        }
    },[show]);

    return (
        <div  className={show ? "impi impi-animate" : "impi" }>
            <img alt='toasty pers'src={require(`../img/impi/${pers}`)}/>
        </div>
    );
}