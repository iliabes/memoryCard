import './Impi.sass'
import { useState } from 'react';
import { store } from '../store/reduser';

export default function Impi(props) { 
    let [show, setShow] = useState(store.getState().impi.value)
    store.subscribe(() => setShow(store.getState().impi.value ))

    return (
        <div  className={show ? "impi impi-animate" : "impi" }></div>
    );
}