import  './Logo.sass'
import logo from '../img/logo-white.png'


function Logo(props) {
  return (
      <div className="header-logo-black">
        <img src={logo} alt="" />
      </div>
  );
}

export default Logo;
