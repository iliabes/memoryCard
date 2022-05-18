import './Card.sass'
import backFace from '../img/akv.jpg'


export default function Card(props) { 
    console.log('card');
    return (
      <div data-pers={props.link} className="content-card">
      <div className="back">
        <img  alt={props.link} src={require('../img/'+props.link+'.jpeg')} />
      </div>
      <div className="front">
        <img onClick={props.funcAddClass} alt={'back face card'} src={backFace}/>
      </div>
      </div>
    );
}