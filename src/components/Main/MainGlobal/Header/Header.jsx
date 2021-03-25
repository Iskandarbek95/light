import s from './Header.module.css';
import headerImg from './header-img.png';

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.headerTitle}>
                <h1><span>I-LIGHTS</span> - Эффективные решения</h1>
                <p>Компания I-lights это современная производственно-проектная<br />организация с многолентим опытом работы в сфере разработки </p>
                <button>Подробнее</button>
            </div>
            <div className={s.headerImg}>
                <img src={headerImg} alt="" />
            </div>
        </header>
    );
}

export default Header;