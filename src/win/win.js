import './win.sass'
import bolter from '../img/icon/bolter.png'




export default function Win(props) { 



    return (
        <div className={props.win ? ' win-show win' :'win'}>
          <h1>You win</h1>
          <img  alt='bolter' src={bolter}/>
          <p>Убей мутанта, Сожги Еретика, Уничтожь Ксеноса!⁠⁠</p>
          <button onClick={props.changeWin} >x</button>
        </div>
    );
}