///jokhon single ekta product e click korbe tokhon eta ashbe
const SingleProductDetails = () => {
    return (
        <div className="lg:pb-[1000px] lg:pt-[100px]" >
            <div className="card lg:card-side bg-base-100 shadow-xl ">
  <figure><img src="/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">Product Name</h2>
    <p>Description</p>
    <p>Brand Name</p>
    <p>Price</p>
    <p>Type</p>
    <p><div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div></p>

    <div className="card-actions justify-end">
      <button className="btn bg-orange-500 text-white">Add To Cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleProductDetails;