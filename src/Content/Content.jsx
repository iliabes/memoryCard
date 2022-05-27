
import './Content.sass'
import Card from '../Card/Card'
import audToasty from '../img/audio/TOASTY.mp3'
import Impi from '../Impi/Impi'
import { store } from '../store/reduser'
import { useState } from 'react'

import { spaceMarines } from '../arrImage'
import { chaos } from '../arrImage'


const  toasty = new Audio(audToasty);
let count = 0
let selectedCard = 0 
let selectedCard2 = 0 




function Content() {
let [fraction,setFraction] = useState(chaos) 




  function audioTerst(){
    if(count === 2){
      toasty.play()
      store.dispatch({ type: 'show' })
      console.log(store.getState());
    }
}


function getImgForContext(array){


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
  
  let startedArr = randomSampling(3,array)
  let dubleArr = [...startedArr,...startedArr]
  let result = randomSampling(6,dubleArr)
  
  return result
}
  

function reduserCard(e){
  let elem = e.target.parentElement.parentElement
  if(selectedCard === 0){
    selectedCard = elem
    AddClass(elem)
    return
  }
  if(selectedCard !== 0 && selectedCard !== elem){
    selectedCard2 = elem
    console.log(selectedCard2.dataset.pers);
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
}
  
function removeClass(el){
  let elem = el
  let back = elem.children[0]
  let front = elem.children[1]

  setTimeout(()=>{
    back.classList.toggle('backReverse')
    front.classList.toggle('frontReverse')
  },1000)

}






  let imageCards = getImgForContext(fraction).map((item,index)=>{
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
