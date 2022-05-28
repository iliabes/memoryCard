
import './Content.sass'
import Card from '../Card/Card'
import audToasty from '../img/audio/TOASTY.mp3'
import Impi from '../Impi/Impi'
import { store } from '../store/reduser'
import { useState } from 'react'

import { spaceMarines,chaos,imperiums } from '../arrImage'
import fraction1 from '../arrImage'






function Content() {
console.log('content');
let [numberCard, setNumberCard] = useState(6)
let [fraction,setFraction] = useState(0) 
const  toasty = new Audio(audToasty);
let count = 0
let selectedCard = 0 
let selectedCard2 = 0 
let isAnimate = false




const audioTerst = () =>{
    if(count === 2){
      toasty.play()
      store.dispatch({ type: 'show' })
      console.log(store.getState());
    }
    if(count === numberCard/2){
      setTimeout(()=>{setFraction(fraction + 1)},1000)
    }
}


function getImgForContext(array,numberCard){


  function randomSampling(numberCardInContext,array){
      let innerArray = array 
      let newMassive = []
      while(newMassive.length != numberCardInContext){
          let rand = getRandomInRange(0,innerArray.length-1)
          newMassive.push(innerArray[rand])
          innerArray.splice(rand,1)
      }
      return newMassive
  }
  
  function getRandomInRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
  let startedArr = randomSampling(numberCard/2,array)
  let dubleArr = [...startedArr,...startedArr]
  let result = randomSampling(numberCard,dubleArr)
  
  return result
}
  

function reduserCard(e){
  console.log('is anom',isAnimate);
  let elem = e.target.parentElement.parentElement
  if(selectedCard === 0 && isAnimate === false){
    console.log('1 card');
    selectedCard = elem
    
    console.log('1 card',selectedCard2,isAnimate);
    AddClass(elem)
    return
  } 
  if(selectedCard !== elem && isAnimate !== true  && selectedCard2 === 0){
    isAnimate = true
    console.log('2card',selectedCard2,isAnimate);
    selectedCard2 = elem
    AddClass(selectedCard2)
    if(selectedCard2.dataset.pers === selectedCard.dataset.pers){ 
          count += 1
          audioTerst()
          selectedCard = 0
          selectedCard2 = 0
      }else{
        removeClass(selectedCard)
        removeClass(selectedCard2)
        selectedCard = 0
        selectedCard2 = 0
      }
  }
  

 
  

  
}

function AddClass(el){
      let elem = el
      let back = elem.children[0]
      let front = elem.children[1]
      back.classList.toggle('backReverse')
      front.classList.toggle('frontReverse')
      setTimeout(()=>{
        isAnimate = false
      },1000)
    
}
  
function removeClass(el){
  let elem = el
  let back = elem.children[0]
  let front = elem.children[1]

  setTimeout(()=>{
    back.classList.toggle('backReverse')
    front.classList.toggle('frontReverse')
    // isAnimate = false
  },1000)

}






  let imageCards = getImgForContext(fraction1[fraction],numberCard).map((item,index)=>{
    return <Card funcAddClass={reduserCard}   pers={item} key={index}  link={item}/>
  })

  return (
    <>
      <div   className="content">
        {imageCards}
        <Impi/>
      </div>
    </>
  );
}

export default Content;
