import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setLoginError('');

    signInUser(email, password)
      .then(result => {
        console.log(result.user);
        Swal.fire("You logged in successfully!");
        e.target.reset();
        navigate('/');
      })
      .catch(error => {
        console.error(error);
        setLoginError(error.message);
      });
  }

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {
        console.log(result.user);
        Swal.fire("You logged in successfully!");
        navigate('/');
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-orange-500 mb-6 text-center">Login Now!</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
              required
            />
          </div>
          <div className="mb-6">
            <button
              className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>
        </form>
        <p className="text-center text-red-500 mb-4">
          {loginError && <span>{loginError}</span>}
        </p>
        <div className="flex items-center justify-between">
          <p>
            New here?{" "}
            <Link to="/register" className="text-orange-500 hover:underline">
              Register
            </Link>
          </p>
          <p>
            <button
              className="btn btn-ghost"
              onClick={handleGoogleSignIn}
            >
              Login with Google
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
