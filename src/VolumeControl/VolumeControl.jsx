
import  './volumeControl.sass'
import {  useEffect, useState  } from 'react';
import soundImage from '../img/sound.png'
import noSoundImage from '../img/no-sound.png'
import sound from '../sound'
import {store} from '../store/store'
import { useRef } from 'react';
// import s1 from sound



function VolumeControl(props) {
  let [swith,setSwitch] = useState(1)
  let [mus, setMuse] = useState(store.getState().fraction.value)
  let isMusik = useRef(false)
  let musik = new Audio(sound[mus])
  musik.volume = 0.0
  musik.loop = true;

  store.subscribe(() => {
    musik.pause()
    musik.volume = 0
    setSwitch(1)
    setMuse(store.getState().fraction.value)
  })
  


  useEffect(() => {
    document.addEventListener('click',()=>{
      if(isMusik.current === false){
        musik.play()
      }
    })
  });









  function stopMusik(){
    setSwitch(!swith)
    isMusik.current = !isMusik.current
    console.log(isMusik)
    
    if(isMusik.current === false){
      musik.play()
      console.log('play');
    }else{
      musik.pause()
      
      console.log('stop');
    }
  }

  return (
      <div onClick={stopMusik}  className='volumeControl'>
        <img  src={swith ? soundImage : noSoundImage} alt="" />
      </div>
  );
}

export default VolumeControl;
