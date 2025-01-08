import ItemSet from "../../components/ItemSet/ItemSet";
import styles from './Store.module.css'

const Store = ({setCheck}) => {
    return(
        <main className={styles["main"]}>
            <ItemSet title='food' setCheck={setCheck}/>
            <ItemSet title='drink' setCheck={setCheck}/>
        </main>
    )
}

export default Store;