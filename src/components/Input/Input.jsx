import styles from './Input.module.css'

const Input = ({ placeholder, width, widthCut}) => {

    return(
        <div className={styles["input-block"]}>
            <input id={placeholder} className={styles["input"]} type="text" placeholder=" "  style={{width: width + 'px'}}/>
            <div class={styles["cut"]} style={{width: widthCut + 'px'}}></div>
            <label for={placeholder} className={styles["placeholder"]} >{placeholder}</label>
        </div>
        
    )
}

export default Input;
