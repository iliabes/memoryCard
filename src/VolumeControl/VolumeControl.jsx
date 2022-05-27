import useSound from 'use-sound';
import  './volumeControl.sass'
import {  useEffect  } from 'react';

import audSoup from '../img/audio/soup.mp3'
import audOrks from '../img/audio/orks1.mp3'


function VolumeControl(props) {
  // const [play] = useSound(audSoup);
  const  soup = new Audio(audSoup);
  const  orks = new Audio(audOrks);

  useEffect(() => {
    // document.addEventListener('mouseover',()=>{soup.play()})
  });

  // function stopMusik(){
  //   soup.stop()
  //   console.log('stop');
  // }
  return (
      <div  className='volumeControl'>Звук</div>
  );
}

export default VolumeControl;
