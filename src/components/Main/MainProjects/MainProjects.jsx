import NovinkiCards from '../MainGlobal/Novinki/NovinkiBody/NovinkiCards/NovinkiCards';
import PageInform from '../MainPages/PageInform/PageInform';
import PageTitle from '../MainPages/PageTitle/PageTitle';
import s from './MainProjects.module.css';

const MainProjects = (props) => {
    return (
        <div className={s.main}>
            <PageInform text="Главная   -   Каталог" />
            <PageTitle text="Каталог" />
            <div className={s.katalogLinks}>
                <a href="">Трековые светильники</a>
                <a href="">Встраиваемые светильники</a>
                <a href="">Профильные светильники</a>
                <a href="">Фигурные светильники</a>
                <a href="">Светильники Армстронг</a>
            </div>
            <div className={s.katalogItems}>
                <div className={s.katIteRegular}></div>
                <div className={s.katIteValue}>
                    <div className={s.new}>
                        <h4>Новинки</h4>
                        <div className={s.newItems}>
                            <NovinkiCards value='21 300 P' />
                            <NovinkiCards value='21 300 P' />
                            <NovinkiCards value='21 300 P' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainProjects;