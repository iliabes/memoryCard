import './Card.sass'
import backFace from '../img/img/4.png'
import bg1 from '../img/spacemarine/spaceMarine4.jpg'



export default function Card(props) { 


    return (
      <div data-pers={props.link} className="content-card">
      <div className="back">
        <img  alt={props.link} src={require('../img/'+props.link+'.jpg')} />
      </div>
      <div className="front">
        <img onClick={props.funcAddClass} alt={'back face card'} src={backFace}/>
      </div>
      </div>
    );
}

// require('../img/'+props.link+'.jpg')