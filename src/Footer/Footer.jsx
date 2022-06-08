import './Footer.sass'
import Btn from '../Btn/Btn';
import telegram from '../img/icon/telegram.png'
import githab from '../img/icon/githab.png'
import envelope from '../img/icon/envelope.png'

function Footer() {
  return (
    <>
    <footer>
      <Btn link={'https://t.me/warpBe'} s val={telegram}/>
      <Btn link={'https://github.com/iliabes'} val={githab}/>
      <Btn link={'mailto:oksana14888@gmail.com'} val ={envelope}/>
    </footer>

    </>
  );
}

export default Footer;
