import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../components/Shared/SocialLogin/SocialLogin";
import useAuth from "../../hooks/useAuth";


const SignUp = () => {
    const {createUser, updateUserProfile} = useAuth();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        watch, // Add watch to get the value of confirm password field
    } = useForm();

    const password = watch("password"); // Get the value of the password field

    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
        .then(result => {
            console.log(result);
            updateUserProfile(data.name, data.photoURL , data.phoneNumber, data.gender, data.address)
            .then(() => {
                const saveUser= {name:data.name ,email:data.email,
                    photoURL:data.photoURL, number:data.phoneNumber,gender:data.gender,address:data.address }
                    fetch(`${import.meta.env.VITE_BASE_URL}/users`,{
                        method:'POST',
                        headers:{'content-type':'application/json'},
                        body:JSON.stringify(saveUser)
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if(data.insertedId){
                            console.log('user created successfully')
                            reset();
                            Swal.fire({
                                title: 'User Created Successfully.',
                                showClass: {
                                    popup: 'animate__animated animate__fadeInDown'
                                },
                                hideClass: {
                                    popup: 'animate__animated animate__fadeOutUp'
                                }
                            });
                            navigate("/");
                        }
                    })
                
                
            })
            .catch(error => console.log(error))
        })
    };

    return (
        <div className="flex items-center justify-center  bg-base-300 ">
            <Helmet>
                <title> Sign Up</title>
            </Helmet>
            <div className="w-full max-w-4xl mx-auto shadow-2xl bg-base-100 p-6 dark:bg-slate-400 my-20">
                <h1 className="text-5xl font-bold text-center mb-6">Sign up now!</h1>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-2 gap-6 ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                {...register("name", { required: true })}
                                name="name"
                                placeholder="Name"
                                className="input input-bordered"
                            />
                            {errors.name && (
                                <span className="text-red-600">Name is required</span>
                            )}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input
                                type="text"
                                {...register("photoURL", { required: true })}
                                placeholder="Photo URL"
                                className="input input-bordered"
                            />
                            {errors.photoURL && (
                                <span className="text-red-600">Photo URL is required</span>
                            )}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                {...register("email", { required: true })}
                                name="email"
                                placeholder="Email"
                                className="input input-bordered"
                            />
                            {errors.email && (
                                <span className="text-red-600">Email is required</span>
                            )}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input
                                type="tel"
                                {...register("phoneNumber", { required: true })}
                                placeholder="Phone Number"
                                className="input input-bordered"
                            />
                            {errors.phoneNumber && (
                                <span className="text-red-600">Phone Number is required</span>
                            )}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                                })}
                                placeholder="Password"
                                className="input input-bordered"
                            />
                            {errors.password?.type === "required" && (
                                <p className="text-red-600">Password is required</p>
                            )}
                            {errors.password?.type === "minLength" && (
                                <p className="text-red-600">Password must be 6 characters</p>
                            )}
                            {errors.password?.type === "maxLength" && (
                                <p className="text-red-600">
                                    Password must be less than 20 characters
                                </p>
                            )}
                            {errors.password?.type === "pattern" && (
                                <p className="text-red-600">
                                    Password must have one uppercase letter, one lowercase letter,
                                    one number, and one special character.
                                </p>
                            )}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input
                                type="password"
                                {...register("confirmPassword", {
                                    required: true,
                                    validate: (value) => value === password,
                                })}
                                placeholder="Confirm Password"
                                className="input input-bordered"
                            />
                            {errors.confirmPassword?.type === "required" && (
                                <p className="text-red-600">Confirm Password is required</p>
                            )}
                            {errors.confirmPassword?.type === "validate" && (
                                <p className="text-red-600">Passwords do not match</p>
                            )}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Gender</span>
                            </label>
                            <select
                                {...register("gender", { required: true })}
                                className="input input-bordered"
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="others">Others</option>
                            </select>
                            {errors.gender && (
                                <span className="text-red-600">Gender is required</span>
                            )}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <textarea
                                {...register("address", { required: true })}
                                placeholder="Address"
                                className="textarea textarea-bordered resize-none"
                            />
                            {errors.address && (
                                <span className="text-red-600">Address is required</span>
                            )}
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input
                            className="btn btn-secondary"
                            type="submit"
                            value="Sign Up"
                            disabled= {!!errors.confirmPassword}
                        />
                    </div>
                    
                </form>
                <div className="flex justify-center">
                <SocialLogin />
                </div>
                <p className="text-center mt-4">
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
