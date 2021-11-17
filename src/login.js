const Login = () => {

    const handleLogin = () => {
        console.log("Function for running login function")
    }
    return (
        <div className = "Login">
        <h1>Login</h1>
        <input type="text" placeholder="Username..." />
        <input type="password" placeholder="Username..." />
        <button onClick={handleLogin}> Login </button>
        </div>
     );
}
 
export default Login;