import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {
const { signInUser,signInWithGoogle } = useContext(AuthContext);
const [loginError,setLoginError] = useState('')

const navigate = useNavigate()

const handleLogin = e => {
e.preventDefault();
const email = e.target.email.value;
const password = e.target.password.value;
console.log(email,password)
setLoginError('')
signInUser(email,password)
.then(result => {
  console.log(result.user)
   
Swal.fire("you logged in successfully!")

  e.target.reset()
  navigate('/')
})
.catch(error => {
console.error(error);
  setLoginError(error.message)
})

}
const handleGoogleSignIn = () =>{
 signInWithGoogle() 
 .then(result =>{
  console.log(result.user)
  Swal.fire("you logged in successfully!")
  navigate('/')
 })
 .catch(error => {
  console.error(error)
 })
}
  return (
  
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="">
            <h1 className="text-5xl font-bold text-orange-500">Login now!</h1>
            <p className="py-6 font-semibold">Connect with our community and our support team to get real-time assistance, tips, and advice from fellow tech enthusiasts.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-orange-400 text-red-600">Login</button>
              </div>
            </form>
            <p className="pb-3 pl-3"><span className="text-red-500 ">new here? </span> <Link to='/register' className="text-red-500 underline">Register</Link></p>
            <p><button className="btn btn-ghost" onClick={handleGoogleSignIn} >Google</button></p>
          </div>
          {
          loginError && <p className="text-red-700">{loginError}</p>
        }
        </div>
       
      </div>
     

  );
};

export default Login;