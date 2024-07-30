import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth/useAuth";


const Register = () => {

    const { createUser, googleLogin } = useAuth()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const email = data?.email
        const password = data?.password
        createUser(email, password)
            .then(res => console.log(res.user))

    }

    const handleGoogleRegister = () => {
       return googleLogin()
    }


    return (
        <div className=" flex flex-col items-center justify-center w-full min-h-[80vh]">
            <div className="hero bg-white min-h-[40vh] w-[70%] mx-auto  ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">
                            Create an account to enjoy exclusive offers, faster checkout, and order tracking.
                        </p>
                    </div>
                    <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body bg-white shadow-transparent shadow-2xl">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-700">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered bg-gray-200 outline-none text-gray-700 " {...register('name')} required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-700">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered bg-gray-200 outline-none text-gray-700 " {...register('email')} required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-700">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered bg-gray-200 outline-none text-gray-700" {...register('password')} required />
                                {errors.password && <span className=" text-red-600">password is required</span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-gray-700">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-orange-600 text-white rounded-none border-none hover:text-orange-600 hover:bg-gray-200">Register</button>
                            </div>
                        </form>
                        <div>
                            <div className=" divider">OR</div>
                            <Link onClick={handleGoogleRegister} className=" text-center">
                                <p className=" font-semibold">
                                    <span className="text-[#4285F4]">G</span>
                                    <span className="text-[#EA4335]">O</span>
                                    <span className="text-[#FBBC05]">O</span>
                                    <span className="text-[#4285F4]">G</span>
                                    <span className="text-[#34A853]">L</span>
                                    <span className="text-[#EA4335]">E</span>
                                </p>
                            </Link>
                        </div>
                        <div className=" text-center py-4">
                            <p>Already have an account? <Link className=" text-orange-600" to={'/login'}>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;