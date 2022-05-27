import HeadBtn from "../HeadBtn/HeadBtn";
import Logo from "../Logo/Logo";
import './Header.sass'
import Select from "../Select/Select";
import VolumeControl from "../VolumeControl/VolumeControl";

function Header() {


  return (
  
    <>
    <header>
        <Logo/>
        
        <div className="header-contBtn-left">
            <Select/>
            <HeadBtn val={'val1'}/>
            <HeadBtn val={'val2'}/>
            <VolumeControl/>
        </div>
    </header>

    </>
  );
}

export default Header;
