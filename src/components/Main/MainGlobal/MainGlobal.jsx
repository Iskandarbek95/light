import s from './MainGlobal.module.css';
import Header from './Header/Header';
import Katalog from './Katalog/Katalog';
import Uslugi from './Uslugi/Uslugi';
import Novinki from './Novinki/Novinki';

const MainGlobal = (props) => {
    return (
        <div className={s.main}>
            <Header />
            <Katalog />
            <Uslugi />
            <Novinki />
        </div>
    );
}

export default MainGlobal;