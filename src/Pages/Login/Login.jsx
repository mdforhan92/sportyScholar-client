import React, { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';



const Login = () => {
    const { signIn, signInWithGoogle, gitSignIn } = useContext(AuthContext);
    const Navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location)
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                Navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })

    }

    // Google Login 
    const handleGoogleSignIn =() =>{
        signInWithGoogle()
        .then(result =>{
            const user =result.user
            Navigate('/')
        })
        .catch(error =>{
            console.log(error.message)
        })
    }
    
    //Github login
    const handleGitHubSignIn = ()=>{
        gitSignIn()
        .then(result => {
            const user = result.user;
            Navigate('/')
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen">
                <form onSubmit={handleLogin} className="w-full max-w-sm p-6 rounded-lg shadow-lg bg-white">
                    <h1 className="text-2xl font-bold mb-4">Login</h1>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" for="email">
                            Email
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            name='email'
                            required
                            placeholder="Email"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-bold mb-2" for="password">
                            Password
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            name='password'
                            required
                            placeholder="********"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Login
                        </button>
                        <a
                            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                            href="#"
                        >
                            Forgot Password?
                        </a>

                    </div>
                    <p className='mt-2 text-sm'>Don't Have an Account? <Link className='text-red-600 underline' to="/register">Register</Link></p>

                </form>
                <div className="border-t border-gray-300 my-8">or</div>

                <div className='flex'>
                    <button onClick={handleGoogleSignIn} className="btn btn-outline btn-success"><FaGoogle className='mr-2'></FaGoogle>  Google</button>
                    <button onClick={handleGitHubSignIn} className="btn btn-outline ml-4"><FaGithub className='mr-2'></FaGithub> GitHub</button>
                </div>
            </div>


        </div>
    );
};

export default Login;