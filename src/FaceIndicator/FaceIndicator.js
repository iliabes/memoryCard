import './FaceIndicator.sass'
import { faceImg } from '../arrImage'
import { useState } from 'react'
import { store } from '../store/store'


export default function FaceIndicator(props) { 

    let [face, setFace] = useState(store.getState().fraction.value)
    store.subscribe(() => setFace(store.getState().fraction.value))

    return (
        <div  className='faceIndicar'>
            <img src={require( `../img/faceIndicator/${faceImg[face]}.jpeg`)}/>
        </div>
    )
}

// 