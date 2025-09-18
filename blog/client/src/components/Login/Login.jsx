import { SignIn} from "@clerk/clerk-react";
import './Styles.css'

function Login() {
    return (
        <div className="parintLogin">
            <div className="login">

                <SignIn signUpUrl="/register"/>
            </div>
        </div>

    )
}

export default Login ;

