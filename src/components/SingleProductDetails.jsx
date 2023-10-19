///jokhon single ekta product e click korbe tokhon eta ashbe
const SingleProductDetails = () => {
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">Product Name</h2>
    <p>Description</p>
    <p>Brand Name</p>
    <p>Price</p>
    <p>Ratings/star</p>

    <div className="card-actions justify-end">
      <button className="btn bg-orange-500 text-white">Add To Cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleProductDetails;