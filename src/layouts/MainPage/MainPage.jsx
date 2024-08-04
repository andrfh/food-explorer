import styles from '../MainPage/MainPage.module.css'
import Header from '../../components/Header/Header'
import Store from '../../pages/Store/Store'
import Footer from '../../components/Footer/Footer'

const MainPage = () => {
    return(
        <div className={styles['main-wrapper']}>
            <Header/>
            <Store />
            <Footer />  
        </div>      
    )
}

export default MainPage;