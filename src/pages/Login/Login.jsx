import { useState } from 'react'
import logo from '../../assets/logo.svg'
import styles from './Login.module.css'
import SignIn from './SignIn/SignIn'
import SignUp from './SignUp/SignUp'

const Login = () => {

    let [isLogin, setIsLogin] = useState(true);
    const changeLogin = () => {
        setIsLogin(!isLogin)
    }

    return(
        <div className={styles["login-main"]}>
            <div className={styles["login-left"]}>
                <div className={styles["login-logo"]}>
                    <a href="/home" onClick={changeLogin}>
                        <div className={styles["login-wrapper"]}>
                            <img src={logo} alt="" width='50px' height='50px'/>
                            <h1 className={styles["login-title"]}>food explorer</h1>
                        </div>
                    </a>
                </div>
                
            </div>
            <div className={styles["login-right"]}>
                <div className={styles["login"]}>
                    <div className={styles["login-container"]}>
                        {isLogin == true ? <SignIn isLogin={changeLogin}/> : <SignUp isLogin={changeLogin} />}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Login;