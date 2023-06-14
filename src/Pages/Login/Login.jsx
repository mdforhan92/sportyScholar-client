import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {  useState } from "react";
import { ImEyeBlocked } from 'react-icons/im';
import { AiOutlineEye } from "react-icons/ai";

import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import SocialLogin from "../../components/Shared/SocialLogin/SocialLogin";
import { Helmet } from "react-helmet-async";

const Login = () => {
    const { signIn } = useAuth();
    const Navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from || "/";
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                Navigate(from, { replace: true });
            })
    };


    return (
        <div className="hero min-h-screen bg-base-300  ">
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className=" mt-12">
                
                <div className=" w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                {...register("email", { required: true })}
                                placeholder="Email"
                                className="input input-bordered"
                            />
                            {errors.email && (
                                <span className="text-red-600">Email is required</span>
                            )}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    {...register("password", { required: true })}
                                    placeholder="Password"
                                    className="input input-bordered w-full"
                                />

                                <div
                                    className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <AiOutlineEye></AiOutlineEye>
                                    ) : (
                                        <ImEyeBlocked></ImEyeBlocked>
                                    )}
                                </div>
                            </div>
                        </div>
                        {errors.password && (
                            <span className="text-red-600">Password is required</span>
                        )}
                        <div className="form-control">
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                        <SocialLogin></SocialLogin>
                    </form>
                            
                    
                    <p className="text-center pb-4">
                        <small>
                            Dont have an account? <Link to="/signup">Create an new one</Link>
                        </small>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Login;
