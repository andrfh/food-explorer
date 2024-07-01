import styles from '../Header/Header.module.css'
import search from '../../assets/search.svg'
import logo from '../../assets/logo.svg'
import exit from '../../assets/SignOut.svg'

const Header = () => {
    return(
        <header className={styles["header"]}>
            <div className={styles["nav"]}>
                <div className={styles["header-logo"]}>
                    <img src={logo} alt="" />
                    <h1 className={styles["header-title"]}>food explorer</h1>
                </div>
                
                <div className={styles["header-input"]}>
                    <input type="text" className={styles["input"]} />
                    <button className={styles["input-search"]}><img src={search} /></button>
                </div>

                <button className={styles["header-check"]}>Корзина</button>

                <a className={styles["header-profile"]}>
                    <img src={exit} alt="" />
                </a>
            </div>
        </header>
    )
}

export default Header;