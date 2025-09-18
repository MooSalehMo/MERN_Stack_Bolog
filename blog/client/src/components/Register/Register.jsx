import {SignUp } from "@clerk/clerk-react";
import '../Login/Styles.css'

function Register() {
    return (
        <div className="parentRegister">
            <div className="register">
                <SignUp signInUrl="/login" />
            </div>
        </div>

    )
}

export default Register ;

