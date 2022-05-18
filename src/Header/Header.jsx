import HeadBtn from "../HeadBtn/HeadBtn";
import Logo from "../Logo/Logo";
import './Header.sass'

function Header() {


  return (
  
    <>
    <header>
        <Logo/>
        <div className="header-contBtn-left">
            <HeadBtn val={'val1'}/>
            <HeadBtn val={'val2'}/>
            <HeadBtn val={'val3'}/>
        </div>
    </header>

    </>
  );
}

export default Header;
