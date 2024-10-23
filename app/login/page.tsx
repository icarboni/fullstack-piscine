import { FormEvent } from "react";
import { callCreateUserAPI } from "./hooks";

const Login = () => {

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    if (!email || !password) return
    await callCreateUserAPI({ email, password });
    
  }
    return (
    <>
      <form className="flex flex-col w-1/2" onSubmit={handleSubmit}>
        <input className="mb-2" type="text" placeholder="username" />
        <input className="mb-2" type="password" placeholder="password" />
        <button className="bg-white mb-2">Login</button>
      </form>
      <button className="bg-white mb-2">Register</button>
    </>
    );
}

export default Login