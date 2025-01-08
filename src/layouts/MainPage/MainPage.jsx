import styles from '../MainPage/MainPage.module.css'
import Header from '../../components/Header/Header'
import Store from '../../pages/Store/Store'
import Footer from '../../components/Footer/Footer'
import { useState } from 'react'

const MainPage = () => {

    const [check, setCheck] = useState(0)
    const addToCheck = () => {
        setCheck(check + 1)
    }
    return(
        <div className={styles['main-wrapper']}>
            <Header check={check}/>
            <Store setCheck={addToCheck} />
            <Footer />  
        </div>      
    )
}

export default MainPage;