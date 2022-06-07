
import './Content.sass'
import Card from '../Card/Card'
import { store } from '../store/store'
import { storeImpi } from '../store/store'
import aqua from '../img/img/aqua.png'
import bolter from '../img/bolter.png'
import { useState,useRef,useEffect} from 'react'
import fraction1 from '../arrImage'
import Preloader from '../Preloader/Preloader';





function Content(props) {
  let [win,setWin] = useState(0)
  let countRes = 0
  const loadedImg = useRef(0);
 


  useEffect(()=>{


  })

let numberCard = 12


let count = 0
let selectedCard = 0 
let selectedCard2 = 0 
let isAnimate = false


const audioTerst = () =>{
    if(count === numberCard/4){
      storeImpi.dispatch({ type: 'show' })
      
    }
    if(count === numberCard/2){
      setTimeout(()=>{
        removeAllClass()
        setWin(1)
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

function test(){
  // cont.current
  console.log(countRes);
}

function test2(){
  loadedImg.current++
  console.log('cont curent',loadedImg.current)
}

  let imageCards = getImgForContext(fraction1[props.fraction],numberCard).map((item,index)=>{
    return <Card  fnc={test2} functionRevers={removeAllClass} funcAddClass={reduserCard}   pers={item} key={index}  link={item}/>
  })

  return (
    <>
    <Preloader/>
      <div  style={{backgroundImage: `url(${aqua})`}}   className="content">
        <div className={win ? ' win-show win' :'win'}>
          <h1>You win</h1>
          <img  alt='bolter' src={bolter}/>
          <p>Убей мутанта, Сожги Еретика, Уничтожь Ксеноса!⁠⁠</p>
          <button onClick={()=>{setWin(0)}}>x</button>
         
        </div>

        {imageCards}

      </div>
    </>
  );
}

export default Content;
