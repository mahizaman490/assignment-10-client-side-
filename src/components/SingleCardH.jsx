
const SingleCardH = () => {
  return (
    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-2">
      <div className="card bg-base-100 shadow-xl image-full">
        <figure><img src="/src/images/apple.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title md:text-5xl">Apple</h2>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl image-full">
        <figure><img src="/src/images/sony.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title md:text-5xl">Sony</h2>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl image-full">
        <figure><img src="/src/images/intel.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title md:text-5xl">Intel</h2>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl image-full">
        <figure><img src="/src/images/google.png" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title md:text-5xl">Google</h2>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl image-full">
        <figure><img src="/src/images/sam.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title md:text-5xl">Samsung</h2>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl image-full">
        <figure><img src="/src/images/realme.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title md:text-5xl">Realme</h2>
        </div>
      </div>
    </div>
  );
};

export default SingleCardH;