import styles from './Button.module.css'

const Button = ({text, width, padding, radius}) => {

    return(
        <button className={styles["button"]}
        style={{
            width: width + 'px',
            padding: padding,
            borderRadius: radius + 'px'
         }}
        >{text}</button>
    )
}

export default Button;