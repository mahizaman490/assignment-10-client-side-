/* eslint-disable react/prop-types */

import SingleCardH from "../SingleCardH";

const HomeBrandSec = ({brands}) => {
    console.log(brands)
    return (
        <div  className="w-10/12 mx-auto mt-14 " >
            <h1 className="text-3xl text-orange-500 font-semibold text-center pb-8 md:text-6xl">OUR Brands</h1> 
           <div className="grid gap-5 py-10 md:grid-cols-2 lg:grid-cols-3">
            {
               brands?.map(brand => <SingleCardH key={brand.id} brand={brand}></SingleCardH>)
            }
           </div>
        </div>
    );
};

export default HomeBrandSec;