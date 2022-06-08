
import './Content.sass'
import Card from '../Card/Card'
import { store } from '../store/store'
import { storeImpi } from '../store/store'
import aqua from '../img/img/aqua.webp'
import Win from '../win/win'
import { useState,useEffect} from 'react'
import fraction1 from '../images'
import Preloader from '../Preloader/Preloader';





function Content(props) {
  let [win,setWin] = useState(0)
  let [fraction, setFraction] = useState(store.getState().fraction.value)

  let numberCard = 12
  let count = 0
  let selectedCard = 0 
  let selectedCard2 = 0 
  let isAnimate = false

  store.subscribe(() => {setFraction(store.getState().fraction.value)})
  useEffect(()=>{removeAllClass()})


  const reduserCount = () =>{
      if(count === numberCard/4){
        storeImpi.dispatch({ type: 'show' })
        
      }
      if(count === numberCard/2){
        setTimeout(()=>{
          setWin(true)
          removeAllClass()
        },1000)
        setTimeout(()=>{
          store.dispatch({ type: 'plus' })
          storeImpi.dispatch({ type: 'hide' })
        },2000)
        
      }
  }


  function getImgForContext(array,numberCard){
    function randomSampling(numberCardInContext,array){
        let innerArray = array.slice()
        let newMassive = []
        while(newMassive.length !== numberCardInContext){
          
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
    let elem = e.target.parentElement.parentElement
    if(selectedCard === 0 && isAnimate === false){
      selectedCard = elem
      AddClass(elem)
      return
    } 
    if(selectedCard !== elem && isAnimate !== true  && selectedCard2 === 0){
      isAnimate = true
      selectedCard2 = elem
      AddClass(selectedCard2)
      if(selectedCard2.dataset.pers === selectedCard.dataset.pers){ 
            count += 1
            reduserCount()
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
      isAnimate = false
    },1000)

  }

  function removeAllClass(){
    let elems = document.querySelectorAll('.content-card')
    elems.forEach((item)=>{
      let back = item.children[0]
      let front = item.children[1]
      back.classList.remove('backReverse')
      front.classList.remove('frontReverse')
    })
  }

  function winChange(){
    setWin(0)
  }



  let imageCards = getImgForContext(fraction1[fraction],numberCard).map((item,index)=>{
    return <Card   functionRevers={removeAllClass} funcAddClass={reduserCard}   pers={item} key={index}  link={item}/>
  })

  return (
    <>
    <Preloader/>
    <Win changeWin={winChange} win={win}/>
      <div  style={{backgroundImage: `url(${aqua})`}}   className="content">
        {imageCards}
      </div>
    </>
  );
}

export default Content;
