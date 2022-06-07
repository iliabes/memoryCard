import  './Logo.sass'
import logo from '../img/img/logoMarine.webp'


function Logo(props) {
  return (
      <div className="header-logo-black">
        <img src={logo} alt="" />
      </div>
  );
}

export default Logo;
