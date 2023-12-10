
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

const UpdateProduct = () => {
  const update = useLoaderData();
  console.log(update);

  const { _id, name, brand, description, product_img, price, type, rating } = update;
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const description = form.description.value;
    const price = form.price.value;
    const type = form.type.value;
    const rating = form.rating.value;
    const product_img = form.product_img.value;

    const updateProduct = { name, brand, description, product_img, price, type, rating };
    console.log(updateProduct);

    fetch(`https://technology-and-electronics-server-gamma.vercel.app/product/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire("Product has been updated!");
        }
      });
  };

  return (
    <div className="bg-gradient-to-r from-red-500 to-red-600 p-8 md:p-16 max-w-3xl mx-auto rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold mb-8 text-white">Update Product</h2>
      <form onSubmit={handleUpdate} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label htmlFor="name" className="label text-white">
              Product Name
            </label>
            <input type="text" name="name" id="name" placeholder="Product Name" className="input input-bordered w-full" defaultValue={name} />
          </div>
          <div className="form-control">
            <label htmlFor="brand" className="label text-white">
              Brand Name
            </label>
            <input type="text" name="brand" id="brand" placeholder="Brand Name" className="input input-bordered w-full" defaultValue={brand} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label htmlFor="type" className="label text-white">
              Type
            </label>
            <input type="text" name="type" id="type" placeholder="Type" className="input input-bordered w-full" defaultValue={type} />
          </div>
          <div className="form-control">
            <label htmlFor="price" className="label text-white">
              Price
            </label>
            <input type="text" name="price" id="price" placeholder="Price" className="input input-bordered w-full" defaultValue={price} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label htmlFor="description" className="label text-white">
              Description
            </label>
            <input type="text" name="description" id="description" placeholder="Description" className="input input-bordered w-full" defaultValue={description} />
          </div>
          <div className="form-control">
            <label htmlFor="rating" className="label text-white">
              Rating
            </label>
            <input type="text" name="rating" id="rating" placeholder="Rating" className="input input-bordered w-full" defaultValue={rating} />
          </div>
        </div>

        <div className="form-control">
          <label htmlFor="product_img" className="label text-white">
            Product Image
          </label>
          <input type="text" name="product_img" id="product_img" placeholder="Product Image URL" className="input input-bordered w-full" defaultValue={product_img} />
        </div>

        <button
          type="submit"
          className="btn text-white btn-block bg-red-600 hover:bg-red-700"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
