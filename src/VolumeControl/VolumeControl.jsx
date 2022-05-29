import useSound from 'use-sound';
import  './volumeControl.sass'
import {  useEffect  } from 'react';

import audSoup from '../img/audio/soup.mp3'
import audOrks from '../img/audio/orks1.mp3'


function VolumeControl(props) {
  console.log('musik');

  // const [play] = useSound(audSoup);
  let isMusik = false
  const  soup = new Audio(audSoup);
  const  orks = new Audio(audOrks);

  useEffect(() => {
    document.addEventListener('click',()=>{
      if(isMusik === true){
        isMusik = true
        console.log('musik')
        soup.play()
      }
      
    })
  });

  function stopMusik(){
    soup.pause()
    console.log('stop');
  }
  return (
      <div onClick={stopMusik}  className='volumeControl'>Звук</div>
  );
}

export default VolumeControl;
