import styles from './SignUp.module.css'
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';

const SignUp = ({isLogin}) => {
    return(
        <>
            <h1 className={styles["login-title"]}>Регистрация</h1>
            <Input label='name' width='320' placeholder='name' widthCut='36'/>
            <Input label='email' width='320' placeholder='email' widthCut='36'/>
            <Input label='password' width='320' placeholder='password' widthCut='58'/>
            <Button text='Зарегестрироваться' color='var(--tomato)' width='348' padding='12px 0' radius='5'/>
            <p className={styles["login-change"]} onClick={isLogin}>Войти в аккаунт</p>
        </>
    )
}

export default SignUp;