
import { FaSearch } from 'react-icons/fa';

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen relative" style={{ backgroundImage: 'url(./images/banner.jpg)' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white relative z-10">
          <div className="max-w-md mx-auto">
            <h1 className="mb-5 text-5xl text-orange-400 font-bold">Welcome !!</h1>
            <p className="mb-5 text-orange-400 font-semibold">
              Electronic technology refers to the branch of science and technology that deals with the manipulation of electrons and their behavior in various devices and systems.
            </p>
            <div className="flex items-center justify-center mb-5">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:border-orange-300 text-black"
              />
              <button className="btn bg-orange-300 text-slate-600 rounded-r-md">
                <FaSearch />
              </button>
            </div>
            <button className="btn bg-orange-300 text-slate-600">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
