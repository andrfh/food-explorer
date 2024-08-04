import styles from '../Footer/Footer.module.css'
import logo from '../../assets/logo_footer.svg'

const Footer = () => {
    return(
        <footer className={styles["footer"]}>
            <div className={'container'}>
                <div className={styles["footer-items"]}>
                    <a href="#">
                        <div className={styles["footer-logo"]}>
                            <img src={logo} alt="" />
                            <h1 className={styles["footer-title"]}>food explorer</h1>
                        </div>
                    </a>
                    <p className={styles["footer-subtitle"]}>© 2023 - Todos os direitos reservados.</p>                                                                                                                     
                </div>
            </div>
        </footer>
    )
}

export default Footer;
