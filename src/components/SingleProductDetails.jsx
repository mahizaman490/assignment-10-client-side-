import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

///jokhon single ekta product e click korbe tokhon eta ashbe
const SingleProductDetails = () => {

  const {user} = useContext(AuthContext)
  const email = user.email
  const details = useLoaderData()

  const { name, brand, description, product_img, price, type, rating } = details
const handleAddCart = () => {
  const cartProduct = {name, brand, description, product_img, price, type, rating , email:email }
  fetch('http://localhost:5000/cart',{

    method:"POST",
    headers:{
      'content-type': 'application/json' 
    }
    , 
    body: JSON.stringify(cartProduct)
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
     
Swal.fire('Add product successfully!')
  }) 
}

                      
    return (
        <div  >
            <div className="card lg:card-side bg-base-100 shadow-xl ">
  <figure><img src={product_img} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <p>{brand}</p>
    <p>{price}</p>
    <p>{type}</p>
    <p>{rating}</p>
    <p><div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div></p>

    <div className="card-actions justify-end">
      <button onClick={handleAddCart} className="btn bg-orange-500 text-white">Add To Cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleProductDetails;