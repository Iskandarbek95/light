import s from './../CenterLink.module.css';
import { Link } from '@reach/router';

const Contact = (props) => {
    return (
        <li className={s.li}>
            <Link to='contactpage'>Контакты</Link>
        </li>
    );
}

export default Contact;