import './Card.sass'
import backFace from '../img/img/backCard.webp'






export default function Card(props) { 


    return (
      <div data-pers={props.link} className="content-card">
      <div className="back">
        <img  onLoad={props.fnc}  alt={props.link} src={require('../img/'+props.link+'.webp')} />
      </div>
      <div className="front">
        <img onClick={props.funcAddClass}  alt={'back face card'} src={backFace}/>
      </div>
      </div>
    );
}

