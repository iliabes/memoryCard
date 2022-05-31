
import Logo from "../Logo/Logo";
import './Header.sass'
import Select from "../Select/Select";
import VolumeControl from "../VolumeControl/VolumeControl";
import FaceIndicator from '../FaceIndicator/FaceIndicator'

function Header() {
  return (
    <>
    <header>
        <Logo/>
        <div className="header-contBtn-left">
            <FaceIndicator/>
            <Select/>
            <VolumeControl/>
        </div>
    </header>
    </>
  );
}

export default Header;
