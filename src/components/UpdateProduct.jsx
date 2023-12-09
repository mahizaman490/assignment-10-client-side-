
import { useLoaderData } from "react-router-dom";

import Swal from "sweetalert2";

const UpdateProduct = () => {
   const update = useLoaderData()
   console.log(update)

    const {_id, name, brand, description, product_img, price, type, rating } = update 
    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const description = form.description.value;
        const price = form.price.value;
        const type = form.type.value;
        const rating = form.rating.value;
        const product_img = form.product_img.value;

        const updateProduct = {name,brand,description,product_img,price,type,rating} 
        console.log(updateProduct)
 
        fetch(`https://technology-and-electronics-server-gamma.vercel.app/product/${_id}`,{
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire('Product has been updated!')
                }
            })

    }
   
    return (
        <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl font-bold">Update Product</h2>
        <form onSubmit={handleUpdate}>
         
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="name" placeholder="Product Name" className="input input-bordered w-full" defaultValue={ name} />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Brand Name</span>
                    </label>
                    <label className="input-group">

                        <input type="text"  name="brand" placeholder="Brand Name" className="input input-bordered w-full"  defaultValue={brand}/>
                    </label>
                </div>
            </div>
          
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Type</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="type" placeholder="Type" className="input input-bordered w-full" defaultValue={type}/>
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" defaultValue={price} />
                    </label>
                </div>
            </div>
          
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <label className="input-group">
                            
                        <input type="text" name="description" placeholder="description" className="input input-bordered w-full" defaultValue={description}/>
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">rating</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="rating" placeholder="rating" className="input input-bordered w-full" defaultValue={ rating}/>
                    </label>
                </div>
            </div>
         
            <div className="">
                <div className="form-control md:w-full">
                    <label className="label">
                        <span className="label-text">product_img</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="product_img" placeholder="product_img" className="input input-bordered w-full" defaultValue={ product_img}/>
                    </label>
                </div>

            </div>
           
            <input type="submit" value="Update Product" className="btn text-white btn-block bg-red-600"/>
        </form>
    </div>
    );
};


export default UpdateProduct;