import './Footer.sass'
import HeadBtn from '../HeadBtn/HeadBtn';
import telegram from '../img/telegram.png'
import githab from '../img/githab.png'
import envelope from '../img/envelope.png'

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
