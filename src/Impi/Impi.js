import './Impi.sass'
import { useState } from 'react';
import { store } from '../store/reduser';
import { useEffect } from 'react';
import audToasty from '../img/audio/TOASTY.mp3'

export default function Impi(props) { 
    let [show, setShow] = useState(store.getState().impi.value)
    store.subscribe(() => setShow(store.getState().impi.value ))
    const  toasty = new Audio(audToasty);

    useEffect(() => {
        if(show){
            toasty.play()

        }
    },[show]);

    return (
        <div  className={show ? "impi impi-animate" : "impi" }>
            <img src={require('../img/impi.png')}/>
        </div>
    );
}