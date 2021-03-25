import s from './PageTitle.module.css';

const PageTitle = (props) => {
    return (
        <div className={s.pageTitle}>
            <h3>{props.text}</h3>
        </div>
    );
}

export default PageTitle;