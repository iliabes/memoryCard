
import  './volumeControl.sass'
import {  useEffect, useState  } from 'react';
import soundImage from '../img/sound.png'
import noSoundImage from '../img/no-sound.png'
import sound from '../sound'
import {store} from '../store/store'




function VolumeControl(props) {
  let [swith,setSwitch] = useState(1)
  let isMusik = false
  let [mus, setMuse] = useState(store.getState().fraction.value)
  store.subscribe(() => {
    musik.pause()
    setMuse(store.getState().fraction.value)
  })
  

  let musik = new Audio(sound[mus])
  musik.volume = 0.2

  useEffect(() => {
    document.addEventListener('click',()=>{
    
      if(isMusik === false){
        isMusik = true
        console.log('musik')
        musik.play()
      }
      
    })
  },[mus]);

  useEffect(()=>{
    setSwitch(1)
  },[mus])  

  useEffect(()=>{
    isMusik = false
  },[swith])  

  function stopMusik(){
    setSwitch(0)
    musik.pause()
  }
  return (
      <div onClick={stopMusik}  className='volumeControl'>
        <img src={swith ? soundImage : noSoundImage} alt="" />
      </div>
  );
}

export default VolumeControl;
