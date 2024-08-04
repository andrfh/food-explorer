import styles from './Card.module.css'

import save from '../../../assets/save.svg'
import fillsave from '../../../assets/fill_save.svg'
import minus from '../../../assets/Minus.svg'
import plus from '../../../assets/Plus.svg'
import { useState } from 'react'

const Card = ({title, subtitle, price, image}) => {

    const [isSave, setIsSave] = useState(true);
    const changeSave = () => {
        setIsSave(!isSave)
    }
    

    let [quantity, setQuantity] = useState(0);
    const plusQuantity = () => {
        setQuantity(quantity++)
    }
    const minusQuantity = () => {
        setQuantity(quantity--)
    }

    return(
        <div className={styles["card"]}>
            <img src={image} alt="" className={styles["card-img"]} />
            <h3 className={styles["card-title"]}>{title}</h3>
            <p className={styles["card-subtitle"]}>{subtitle}</p>
            <p className={styles["card-price"]}>{price} $</p>
            <div className={styles["buttons"]}>
                <div className={styles["quantity-btns"]}>
                    <button className={["quantity-minus"]} onClick={minusQuantity}>
                        <img src={minus} alt="" />
                    </button>
                    <h2 className={styles["quantity"]}>{quantity}</h2>
                    <button className={["quantity-plus"]} onClick={plusQuantity}> 
                        <img src={plus} alt="" />
                    </button>
                </div>
                <button className={styles["inCheck"]}>Добавить</button>
            </div>
            <button className={styles["card-save"]} onClick={changeSave}>
                <img src={isSave == true ? save : fillsave} alt="" />
            </button>
        </div>    
    )
}

export default Card;