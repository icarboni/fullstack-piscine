const Login = () => {
    return (
      <div className="flex flex-col w-1/2">
        <input className="mb-2" type="text" placeholder="username" />
        <input className="mb-2" type="password" placeholder="password" />
        <button  className="bg-white mb-2">Login</button>
        <button className="bg-white mb-2">Register</button>
      </div>
    );
}

export default Login