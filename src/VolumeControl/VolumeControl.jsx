
import  './volumeControl.sass'
import {  useEffect, useState  } from 'react';
import {sound} from '../sound'
import {store} from '../store/store'
import { useRef } from 'react';
import soundImage from '../img/icon/sound.png'
import noSoundImage from '../img/icon/no-sound.png'





function VolumeControl(props) {
  
  let [swith,setSwitch] = useState(1)
  let [mus, setMuse] = useState(store.getState().fraction.value)
  let isMusik = useRef(false)
  

  let musik = new Audio(sound[mus])
  musik.volume = 0.2
  musik.loop = true;
  if(isMusik.current === true){
    musik = null
  }

  store.subscribe(() => {
    if(musik){
      musik.pause()
      musik = null
    }
    setSwitch(1)
    setMuse(store.getState().fraction.value)
  })
  
  useEffect(() => {
    document.addEventListener('click',()=>{
      if(isMusik.current === false){
        if(musik){
          musik.play()
        }
      }
    })
  });

  function switchMusik(){
    isMusik.current = !isMusik.current
    if(isMusik.current && musik) {
      musik.pause()
      musik = null
    }
    setSwitch(!swith)
  }

  
  return (
      <div onClick={switchMusik}  className='volumeControl'>
        <img  src={swith ? soundImage : noSoundImage} alt="icon switch" />
      </div>
  );
}

export default VolumeControl;
