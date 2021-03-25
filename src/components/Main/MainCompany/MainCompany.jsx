import PageInform from '../MainPages/PageInform/PageInform';
import PageTitle from '../MainPages/PageTitle/PageTitle';
import CompanyInforms from './CompanyInforms/CompanyInforms';
import s from './MainCompany.module.css';
import Resheniy from './Resheniy/Resheniy';

const MainCompany = (props) => {
    return (
        <div className={s.main}>
            <PageInform text="Главная   -   О компании" />
            <PageTitle text="О компании" />
            <CompanyInforms />
            <Resheniy />
        </div>
    );
}

export default MainCompany;