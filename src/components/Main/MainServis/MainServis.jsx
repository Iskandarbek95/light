import Resheniy from '../MainCompany/Resheniy/Resheniy';
import PageInform from '../MainPages/PageInform/PageInform';
import PageTitle from '../MainPages/PageTitle/PageTitle';
import s from './MainServis.module.css';
import ServisInform from './ServisInform/ServisInform';

const MainServis = (props) => {
    return (
        <div className={s.main}>
            <PageInform text="Главная   -  Доставка и оплата" />
            <PageTitle text="Услуги" />
            <ServisInform />
            <Resheniy />
        </div>
    );
}

export default MainServis;