import PageTitle from '../../MainPages/PageTitle/PageTitle';
import resheniyImg from './company-body-img.svg';
import s from './Resheniy.module.css';

const Resheniy = (props) => {
    return (
        <div className={s.resheniy}>
            <div className={s.resheniyItems}>
                <PageTitle text="Наши решения" />
                <a href="">Для магазинов</a>
                <a href="">Для общественных мест</a>
                <a href="">Для фасадов и ландшафтов</a>
                <a href="">Для кафе и ресторанов</a>
                <a href="">Для офисов</a>
                <a href="">Для жилых интерьеров</a>
            </div>
            <div>
                <img src={resheniyImg} alt="" />
            </div>
        </div>
    );
}

export default Resheniy;