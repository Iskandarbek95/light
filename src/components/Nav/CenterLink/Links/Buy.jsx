import { Link } from '@reach/router';
import s from './../CenterLink.module.css';

const Buy = (props) => {
    return (
        <li className={s.li}>
            <Link to='buypage'>Доставка и оплата</Link>
        </li>
    );
}

export default Buy;