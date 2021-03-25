import SectionTitle from '../SectionTitle/SectionTitle';
import s from './Katalog.module.css';
import katalogImg from './katalog-img.svg';

const Katalog = (props) => {
    return (
        <div className={s.katalog}>
            <SectionTitle text='Каталог' />
            <div className={s.katalogBody}>
                <div className={s.katalogInform}>
                    <div className={s.katalogInform__title}>
                        <h4>Трековые светильники</h4>
                        <p>Органично вписываются в интерьеры в стиле хай-тек, лофт </p>
                    </div>
                    <button>Перейти в каталог</button>
                    <div className={s.katalogInform__items}>
                        <h4>Встраиваемые светильники</h4>
                        <h4>Фигурные светильники</h4>
                        <h4>Светильники Армстронг</h4>
                        <h4>Светильники Армстронг<br/>
с равномерной засветкой</h4>
                    </div>

                </div>
                <div className={s.katalogImg}>
                    <img src={katalogImg} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Katalog;