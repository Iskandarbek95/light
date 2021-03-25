import s from './NovinkiBody.module.css';
import NovinkiCards from './NovinkiCards/NovinkiCards';

const NovinkiBody = (props) => {
    return (
        <div className={s.novinkiBody}>
            <NovinkiCards value='21 300 P' />
            <NovinkiCards value='41 500 P' />
            <NovinkiCards value='21 800 P' />
            <NovinkiCards value='37 900 P' />
        </div>
    );
}

export default NovinkiBody;