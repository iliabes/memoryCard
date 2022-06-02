import './win.sass'
import bolter from '../img/bolter.png'




export default function WIN(props) { 
    console.log('bolter');
    let  [win,setWin]=useState(true)




    





    return (
        <div  className={show ? "impi impi-animate" : "impi" }>
            <img alt='bolter' src={bolter}/>
        </div>
    );
}