import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth/useAuth";
import { toast } from "sonner";
import Swal from "sweetalert2";


const Login = () => {
    const { loginUser, googleLogin, resetUserPassword } = useAuth()
    const {
        register,
        handleSubmit,
        reset
    } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        const email = data?.email
        const password = data?.password
        loginUser(email, password)
            .then(res => {
                console.log(res)
                toast(`Logged in as ${res?.user?.displayName ? res.user.displayName : res.user.email}`)
            })
            .catch(err => {
                toast(`${err.message}`)
            })

        reset()
    }

    const handleGoogleSignIn = () => {
        googleLogin()
            .then(res => {
                const name = res?.user?.displayName
                const email = res?.user?.email
                toast(`Logged in as ${name ? name : email}`)
            })
            .catch(err => {
                toast(`${err.message}`)
            })
    }

    const handleForgetPassword = async () => {

        const { value: email } = await Swal.fire({
            input: "email",
            inputLabel: "Your email address",
            inputPlaceholder: "Enter your email address"
        });
        if (email) {
            resetUserPassword(email)
                .then(toast(`Please check your email, a mail has been sent to ${email}`))
                .catch(err => {
                    console.log(err)
                })
            // Swal.fire(`Entered email: ${email}`);
        }
    }

    return (
        <div className=" flex flex-col items-center justify-center w-full min-h-[80vh]">
            <div className="hero bg-white min-h-[40vh] w-[70%] mx-auto  ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Login</h1>
                        <p className="py-6">
                            Log in to view your orders, track shipments, and explore new products.
                        </p>
                    </div>
                    <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body bg-white shadow-transparent shadow-2xl">
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
                                <label className="label">
                                    <Link onClick={handleForgetPassword} className="label-text-alt link link-hover text-gray-700">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-orange-600 text-white rounded-none border-none hover:text-orange-600 hover:bg-gray-200">Login</button>
                            </div>
                        </form>
                        <div>
                            <div className=" divider">OR</div>
                            <Link onClick={handleGoogleSignIn} className=" text-center">
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
                            <p>Don&apos;t have an account? <Link className=" text-orange-600" to={'/register'}>Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

