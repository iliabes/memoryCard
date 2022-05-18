
import './Content.sass'
import Card from '../Card/Card'
import audToasty from '../img/audio/TOASTY.mp3'
import audSoup from '../img/audio/soup.mp3'
import audOrks from '../img/audio/orks1.mp3'
import Impi from '../Impi/Impi'
const arrImage = ['spaceMarine1','spaceMarine2','spaceMarine3','spaceMarine4','spaceMarine5','spaceMarine6']
const  toasty = new Audio(audToasty);
const  soup = new Audio(audSoup);
const  orks = new Audio(audOrks);
let count = 0
let selectedCard = 0 
let selectedCard2 = 0 

function Content() {

  console.log('Content');


  function audioTerst(){
    if(count === 2){
      toasty.play()
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
  console.log(e.propertyName);
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






  let imageCards = getImgForContext(arrImage).map((item,index)=>{
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
