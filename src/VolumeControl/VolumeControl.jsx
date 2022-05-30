import useSound from 'use-sound';
import  './volumeControl.sass'
import {  useEffect, useState  } from 'react';
import soundImage from '../img/sound.png'
import sound from '../sound'
import {store} from '../store/store'




function VolumeControl(props) {
  let isMusik = false
  let [mus, setMuse] = useState(store.getState().fraction.value)
  store.subscribe(() => {

    setMuse(store.getState().fraction.value)
  })
  console.log('number mus ',mus);

  let musik = new Audio(sound[mus])


  useEffect(() => {
    document.addEventListener('click',()=>{
      if(isMusik === false){
        isMusik = true
        console.log('musik')
        musik.play()
      }
      
    })
  });

  function stopMusik(){
    musik.pause()
    console.log('stop');
  }
  return (
      <div onClick={stopMusik}  className='volumeControl'>
        <img src={soundImage} alt="" />
      </div>
  );
}

export default VolumeControl;
