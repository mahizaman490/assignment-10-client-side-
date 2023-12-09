import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState('');
  const [registerSuccess, setRegisterSuccess] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    setRegisterError('');
    setRegisterSuccess('');

    try {
      if (password.length < 6) {
        throw new Error('Password should be at least 6 characters or longer');
      } else if (!/[A-Z]/.test(password)) {
        throw new Error('Your password should have at least one uppercase character');
      } else if (!/[!@#$%^&*()_+{}\\[\]:;<>,.?~\\]/.test(password)) {
        throw new Error('Your password should have a special character');
      }

      const result = await createUser(email, password);

      console.log(result.user);
      setRegisterSuccess('Registration successful! Please log in.');
      e.target.reset();
      navigate('/login');
    } catch (error) {
      console.error(error);
      setRegisterError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-orange-500 mb-6 text-center">Register Now!</h1>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
              required
            />
          </div>
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
              Register
            </button>
          </div>
        </form>
        <p className="text-center text-red-500 mb-4">{registerError}</p>
        <div className="flex items-center justify-center">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-orange-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
