import s from './Footer.module.css';
import logoImg from './logofooter.svg';
import locationImg from './location.svg';
import contactImg from './contact.svg';
import emailImg from './email.svg';

const Footer = (props) => {
    return (
        <footer className={s.container}>
            <div className={s.footer}>
                <div className={s.footerLogo}>
                    <img src={logoImg} alt="" />
                    <p>© Technolight 2015-2021</p>
                </div>
                <div className={s.footerKatalog}>
                    <h5>Каталог товаров</h5>
                    <a href='#'>Трековые светильники</a>
                    <a href='#'>Встраиваемые светильники</a>
                    <a href='#'>Профильные светильники</a>
                    <a href='#'> Фигурные светильники</a>
                    <a href='#'>Светильники Армстронг</a>
                    <a href='#'>Армстронг с равномерной засветкой</a>
                    <a href='#'>Произовдители</a>
                </div>
                <div className={s.footerZakaz}>
                    <a href="#">Как заказать</a>
                    <a href="#">Оплата</a>
                    <a href="#">Доставка</a>
                    <a href="#">Реквизиты компании</a>
                    <a href="#">Правовая информация</a>
                    <a href="#">FAQ</a>
                </div>
                <div className={s.footerContact}>
                    <h5>Контакты</h5>
                    <div>
                        <a href="#">
                            <img src={locationImg} alt=""/>
                            <p>место магазина</p>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <img src={contactImg} alt="" />
                            <p>+7 (495) 233 55 57</p>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <img src={emailImg} alt="" />
                            <p>info@i-lights.ru</p>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;