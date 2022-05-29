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

            <VolumeControl/>
        </div>
    </header>

    </>
  );
}

export default Header;
