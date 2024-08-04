import styles from './SignIn.module.css'
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';

const SignIn = ({ isLogin }) => {
    return(
        <>
            <h1 className={styles["login-title"]}>Авторизация</h1>
            <Input label='email' width='320' placeholder='email'  widthCut='36'/>
            <Input label='password' width='320' placeholder='password'  widthCut='58'/>
            <Button text='Войти' color='var(--tomato)' width='348' padding='12px 0' radius='5'/>
            <p className={styles["login-change"]} onClick={isLogin}>Зарегестрироваться</p>
        </>
    )
}

export default SignIn;