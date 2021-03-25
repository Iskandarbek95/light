import s from './../CenterLink.module.css';
import { Link } from '@reach/router';

const Projects = (props) => {
    return (
        <li className={s.li}>
            <Link to='projectspage'>Проекты</Link>
        </li>
    );
}

export default Projects;