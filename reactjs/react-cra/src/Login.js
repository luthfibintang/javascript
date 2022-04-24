import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    function loginHandler(event) {
        event.preventDefault();

        const checkLogin = true;
        if(checkLogin) {
            navigate('/dashboard');

        }
    }

    return (
        <form onSubmit={loginHandler}>
            <input type="text" name="username" placeholder="Username"/>
            <input type="password" name="password" placeholder="Password"/>
            <button type="submit">Login</button>
        </form>
    )
}