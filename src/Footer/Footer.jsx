import './Footer.sass'
import HeadBtn from '../HeadBtn/HeadBtn';
import telegram from '../img/icon/telegram.png'
import githab from '../img/icon/githab.png'
import envelope from '../img/icon/envelope.png'

function Footer() {

  



  

  return (
    <>
    <footer>
      <HeadBtn val={telegram}/>
      <HeadBtn val={githab}/>
      <HeadBtn val ={envelope}/>
    </footer>

    </>
  );
}

export default Footer;
