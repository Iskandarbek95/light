import s from './NovinkiCards.module.css';
import novinkiImg from './novinki-img-1.svg';

const NovinkiCards = (props) => {
    return (
        <div className={s.novinkiCards}>
            <div className={s.titleBox}>Вт</div>
            <div className={s.bodyImg}>
                <img src={novinkiImg} alt="" />
            </div>
            <div className={s.bodyTexts}>
                <h5>Дизайнерский светильник изготавливаемый по проекту</h5>
                <div className={s.texts}>
                    <div className={s.radius}></div>
                    <div className={s.textsValue}>Длинна до 3 метров.</div>
                </div>
                <div className={s.texts}>
                    <div className={s.radius}></div>
                    <div className={s.textsValue}>Углы поворота между секторами по проекту.</div>
                </div>
                <div className={s.texts}>
                    <div className={s.radius}></div>
                    <div className={s.textsValue}>Мощность рассчитывается индивидуально.</div>
                </div>
                <h4 className={s.value}>{props.value}</h4>
            </div>
            <div className={s.buttons}>
                <button>Подробнее</button>
                <div className={s.plus}>+</div>
            </div>
        </div>
    );
}

export default NovinkiCards;