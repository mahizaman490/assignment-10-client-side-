import { Link } from "react-router-dom";

const Product = () => {
    return (
        <div>
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
<div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
<img
  src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
  className="object-cover w-full h-full"
/>
</div>
<div className="p-6">
<div className="flex items-center justify-between mb-2">
  <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
 Name
  </p>
  <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
  BrandName
  </p>
  <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
Type
  </p>
  <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
    $95.00
  </p>

</div>
<div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
<p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
description
</p>
</div>
<div className="p-6 pt-0">
<Link to='/singleProductDetails'>
<button
  className="block w-full select-none rounded-lg bg-orange-300 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
  type="button"
>
  Details
</button>
</Link>
<Link to='/updateproduct'>
<button
  className="block w-full select-none rounded-lg bg-orange-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
  type="button"
>
 Update
</button>
</Link>
</div>
</div>
    </div>
    );
};

export default Product;