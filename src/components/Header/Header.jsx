import styles from '../Header/Header.module.css'
import logo from '../../assets/logo.svg'
import exit from '../../assets/SignOut.svg'
import InputHeader from './InputHeader/InputHeader'
import check from '../../assets/check.svg'

const Header = () => {
    return(
        <header className={styles["header"]}>
            <div className={'container'}>
                <div className={styles["nav"]}>
                    <a href="#">
                        <div className={styles["header-logo"]}>
                            <img src={logo} alt="" />
                            <h1 className={styles["header-title"]}>food explorer</h1>
                        </div>
                    </a>
                    
                    <InputHeader />

                    <button className={styles["header-check"]}> <img src={check} alt="" /> Корзина (0)</button>

                    <a href='/' className={styles["header-profile"]}>
                        <img src={exit} alt="" />
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header;