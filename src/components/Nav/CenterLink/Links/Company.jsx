import { Link } from '@reach/router';
import s from './../CenterLink.module.css';

const Company = (props) => {
    return (
        <div>
            <li className={s.li}>
                <Link to='/companypage'>О комппании</Link>
            </li>
        </div>
    );
}

export default Company;