
import SectionTitle from '../SectionTitle/SectionTitle';
import s from './Novinki.module.css';
import NovinkiBody from './NovinkiBody/NovinkiBody';

const Novinki = (props) => {
    return (
        <div className={s.novinki}>
            <SectionTitle text='Новинки' />
            <NovinkiBody />
            <div className={s.button}>
                <button>Перейти а каталог</button>
            </div>
            
        </div>
    );
}

export default Novinki;