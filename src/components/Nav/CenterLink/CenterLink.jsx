import s from './CenterLink.module.css';
import Buy from './Links/Buy';
import Company from './Links/Company';
import Contact from './Links/Contact';
import Podbor from './Links/Podbor';
import Projects from './Links/Projects';
import Servis from './Links/Servis';

const CenterLink = (props) => {
    return (
        <div>
            <ul className={s.centerlink}>
                <Company />
                <Servis />
                <Projects />
                <Buy />
                <Contact />
                <Podbor />
            </ul>
        </div>
    );
}

export default CenterLink;