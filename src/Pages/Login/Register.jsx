import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';



const Register = () => {
    const { createUser,userProfileUpdate } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const handleRegister = event => {
        event.preventDefault();
        setSuccess('');
        setError('');
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)

        //validate
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please add at least one uppercase');
            return;
        }


        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                userProfileUpdate(name, photo)
                setError('');
                event.target.reset();
                setSuccess('User has created successfully')
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message)
            })
    }
    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen">
                <form onSubmit={handleRegister} className="w-full max-w-sm p-6 rounded-lg shadow-lg bg-white">
                    <h1 className="text-2xl font-bold mb-4">Register</h1>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" for="name">
                            Name
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="name"
                            name='name'
                            required
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" for="text">
                            Photo Url
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="photo"
                            type="text"
                            name='photo'
                            placeholder="Photo Url"
                        />
                    </div>
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
                            placeholder="Password"
                        />
                    </div>
                    {/* confirm password */}
                    <div className="mb-6">
                        <label className="block text-gray-700 font-bold mb-2" for="password">
                            Confirmed Password
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            name='confirmPassword'
                            required
                            placeholder="Confirm Password"
                        />
                    </div>
                    {/* accept term */}
                    <div className="flex items-center mb-4">
                        <input
                            id="checkbox"
                            type="checkbox"
                            name='accept'
                            className="form-checkbox h-5 w-5 text-blue-600"
                            required
                        />
                        <label for="accept-terms" className="ml-2 block text-gray-700">
                            I accept the <span className='text-blue-700 underline'>terms and conditions</span>
                        </label>
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Register
                        </button>


                    </div>
                    <p className='mt-2 text-sm'>Already have an Account? <Link className='text-red-600 underline' to="/login">Login</Link></p>
                    <p className='text-red-700 mt-4'>{error}</p>
                    <p className='text-green-600 mt-4'>{success}</p>
                </form>


            </div>


        </div>
    );
};

export default Register;