import s from './../CenterLink.module.css';
import { Link } from '@reach/router';

const Podbor = (props) => {
    return (
        <li className={s.li}>
            <Link to='podborpage'>Подборка</Link>
        </li>
    );
}

export default Podbor;