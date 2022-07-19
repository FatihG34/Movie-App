import React from 'react';
import { signInWithGoogle } from '../auth/firebase'

const Login = ({ setUser }) => {
    const logIn = () => {
        // auth.signInWithPopup(provider)
        //     .catch((error) => alert(error.message))
    }
    return (
        <div>
            <div>
                <form action="">

                    <button>Login</button>
                </form>
                <button onClick={signInWithGoogle}>Enter with Google</button>
            </div>
        </div>
    )
}

export default Login