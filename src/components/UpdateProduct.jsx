

const UpdateProduct = () => {
    return (
        <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl font-bold">Update Product</h2>
        <form>
            
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="name" placeholder="Product Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Brand Name</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="quantity" placeholder="Brand Name" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
          
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Type</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="supplier" placeholder="Type" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
          
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <label className="input-group">
                            
                        <input type="text" name="description" placeholder="description" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Ratings</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="ratings" placeholder="Ratings" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
         
            <div className="">
                <div className="form-control md:w-full">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="photo" placeholder="photo" className="input input-bordered w-full" />
                    </label>
                </div>

            </div>
           
            <input type="submit" value="Update" className="btn text-white btn-block bg-orange-400"/>
        </form>
    </div>
    );
};

export default UpdateProduct;