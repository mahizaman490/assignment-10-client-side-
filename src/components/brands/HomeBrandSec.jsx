/* eslint-disable react/prop-types */

import SingleCardH from "../SingleCardH";

const HomeBrandSec = ({brands}) => {
    console.log(brands)
    return (
       <>
       
       <h1 className="text-4xl font-bold mb-8 text-orange-600 text-center mt-32">OUR Brands</h1>
        <div  className="w-10/12 mx-auto mt-14 " >
     
           <div className="grid  gap-5 py-10 md:grid-cols-2 lg:grid-cols-3">
            {
               brands?.map(brandN => <SingleCardH key={brandN.id} brandN={brandN}></SingleCardH>)
            }
           </div>
        </div>
       
       
       </>
    );
};

export default HomeBrandSec;