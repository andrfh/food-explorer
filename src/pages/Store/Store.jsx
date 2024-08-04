import ItemSet from "../../components/ItemSet/ItemSet";
import styles from './Store.module.css'

const Store = () => {
    return(
        <main className={styles["main"]}>
            <ItemSet title='food'/>
            <ItemSet title='drink'/>
        </main>
    )
}

export default Store;