import SectionTitle from '../SectionTitle/SectionTitle';
import s from './Uslugi.module.css';
import uslugiImg1 from './uslugi-Img-1.svg';
import uslugiImg2 from './uslugi-Img-2.svg';
import uslugiImg3 from './uslugi-Img-3.svg';
import uslugiImg4 from './uslugi-Img-4.svg';
import uslugiImg5 from './uslugi-Img-5.svg';


const Uslugi = (props) => {
    return (
        <div className={s.uslugi}>
            <SectionTitle text='Услуги' />
            <div className={s.uslugiBody}>
                <div className={s.uslugiItemImg}>
                    <img src={uslugiImg1} alt=""/>
                </div>
                <div className={s.uslugiItemText}>
                    <h4>Изготовление счетильников для торгового и общественного освещени</h4>
                </div>
            </div>
            <div className={s.uslugiBody}>
                <div className={s.uslugiItemImg}>
                    <img src={uslugiImg2} alt="" />
                </div>
                <div className={s.uslugiItemText}>
                    <h4>Поставки дизайнерского света от ведущих европейских производителей</h4>
                </div>
            </div>
            <div className={s.uslugiBody}>
                <div className={s.uslugiItemImg}>
                    <img src={uslugiImg3} alt="" />
                </div>
                <div className={s.uslugiItemText}>
                    <h4>Проектирование, светотехнические расчеты и разработка концепции освещения</h4>
                </div>
            </div>
            <div className={s.uslugiBody}>
                <div className={s.uslugiItemImg}>
                    <img src={uslugiImg4} alt="" />
                </div>
                <div className={s.uslugiItemText}>
                    <h4>Модернизация светильников</h4>
                </div>
            </div>
            <div className={s.uslugiBody}>
                <div className={s.uslugiItemImg}>
                    <img src={uslugiImg5} alt="" />
                </div>
                <div className={s.uslugiItemText}>
                    <h4>Ремонт светодиодных светильников</h4>
                </div>
            </div>
        </div>
    );
}

export default Uslugi;