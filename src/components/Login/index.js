import './index.scss';
import { signInWithGoogle } from '../../firebase';

const Login = () => {
    return (
        <div className='login'>
            <input type='submit' onClick={signInWithGoogle} className='login-btn' value='Sign In with Google' />
        </div>
    )
}

export default Login