import s from './PageInform.module.css';

const PageInform = (props) => {
    return (
        <div className={s.pageInform} >
            <p>{props.text}</p>
        </div>
    );
}

export default PageInform;