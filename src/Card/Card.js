import './Card.sass'
import backFace from '../img/img/1111.jpg'





export default function Card(props) { 


    return (
      <div data-pers={props.link} className="content-card">
      <div className="back">
        <img  onLoad={props.fnc}  alt={props.link} src={require('../img/'+props.link+'.jpg')} />
      </div>
      <div className="front">
        <img onClick={props.funcAddClass}  alt={'back face card'} src={backFace}/>
      </div>
      </div>
    );
}

// require('../img/'+props.link+'.jpg')