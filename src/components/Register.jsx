import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {


  const { createUser } = useContext(AuthContext)
  const [registerError, SetRegisterError] = useState('');
  const [registerSuccess, setregisterSuccess] = useState('');
  const navigate = useNavigate()
  const handleRegister = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password)
    SetRegisterError('')
    setregisterSuccess('')

    if (password.length < 6) {
      SetRegisterError('password should be at least 6 characters or longer')
      return;
    } else if (!/[A-Z]/.test(password)) {
      SetRegisterError('Your password should have at least one upper case characters');
      return;
    } else if (!/[!@#$%^&*()_+{}\\[\]:;<>,.?~\\]/.test(password)) {
      SetRegisterError('Your password should have a special characters');
      return;
    }
    createUser(email, password)
      .then(result => {
        console.log(result.user)

        e.target.reset()
        navigate('/')
        

      })
      .catch(error => {
        console.error(error);
        SetRegisterError(error.message)
      })


  }


  return (

  <>
  
  <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="">
            <h1 className="text-5xl font-bold text-orange-500">Register now!</h1>
            <p className="py-6 font-semibold">Connect with our community and our support team to get real-time assistance, tips, and advice from fellow tech enthusiasts.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" name="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-orange-400 text-red-600">Register</button>
              </div>
            </form>
            <p className="pb-3 pl-3"><span className="text-red-500 ">Alredy have account? </span> <Link to='/login ' className="text-red-500 underline">Login</Link></p>
          </div>
          {
          registerError && <p className="text-red-700">{registerError}</p>
        }
        {
          registerSuccess && <p>{registerSuccess}</p>
        }
        </div>
    
  
      </div>
        
  </>

  );
};

export default Register;