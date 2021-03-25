import s from './SectionTitle.module.css';

const SectionTitle = (props) => {
    return (
        <div className={s.katalog}>
            <div className={s.sectionTitle}>
                <div className={s.titleRectangel}></div>
                <div className={s.titleText}>{props.text}</div>
            </div>
        </div>
    );
}

export default SectionTitle;