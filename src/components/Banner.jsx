
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage: 'url(./images/banner.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl text-orange-400 font-bold">Welcome</h1>
      <p className="mb-5 text-orange-400">Electronic technology refers to the branch of science and technology that deals with the manipulation of electrons and their behavior in various devices and systems.</p>
      <button className="btn bg-orange-300 text-red-600">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;