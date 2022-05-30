import './Impi.sass'
import { useState } from 'react';
import { storeImpi } from '../store/store';
import { useEffect } from 'react';
import audToasty from '../img/audio/TOASTY.mp3'

export default function Impi(props) { 

    let [show, setShow] = useState(storeImpi.getState().value)
    storeImpi.subscribe(() => setShow(storeImpi.getState().value ))
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