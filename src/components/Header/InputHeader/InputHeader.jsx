import styles from '../InputHeader/InputHeader.module.css'
import search from '../../../assets/search.svg'

const InputHeader = () => {
    return(
        <div className={styles["input-header"]}>
            <input id='header-input' className={styles["input"]} type="text" placeholder=" " />
            <button className={styles["input-btn"]}> <img src={search} alt="" className={styles["search"]} /> </button>
            <div class={styles["cut"]}></div>
            <label for='header-input' className={styles["placeholder"]} >Ищите блюда или ингредиенты</label>
        </div>
    )
}

export default InputHeader;