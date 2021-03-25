import s from './Nav.module.css';
import logoImg from './2 1.svg';
import CenterLink from './CenterLink/CenterLink';
import { Link } from '@reach/router';

const Nav = (props) => {
    return (
        <div className={s.container}>
            <nav className={s.nav}>
                <div className={s.logo}>
                    <Link to='/'>
                        <img src={logoImg} />
                    </Link>
                </div>
                <CenterLink />
                <div className={s.navRight}>
                    <div className={s.navEmail}>info@i-lights.ru</div>
                    <div className={s.navNumber}>+7 (495)  233 55 57</div>
                </div>
            </nav >
        </div>
    );
}

export default Nav;