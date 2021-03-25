import s from './../CenterLink.module.css';
import { Link } from '@reach/router';

const Servis = (props) => {
    return (
        <li className={s.li}>
            <Link to='servispage'>Услуги</Link>
        </li>
    );
}

export default Servis;