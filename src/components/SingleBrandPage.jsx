import { useLoaderData } from "react-router-dom";
import Product from "./Product";



const SingleBrandPage = () => {
    const products = useLoaderData()
    console.log(products)
    console.log(products.length)
    return (
        <div>
            <div className="w-10/12 mx-auto md:py-20 py-8">
                <h1 className="text-3xl text-orange-500 font-semibold text-center md:text-6xl mb-8">Some Devices in our brands</h1>
                <div className="carousel h-[300px] md:h-[600px]">
                    <div id="slide1" className="carousel-item relative w-full ">
                        <img src="https://i.ibb.co/n0xTkXK/modern-stationary-collection-arrangement.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/wzhNPxh/search-engine-marketing-concept.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/Gsvv5yq/2123177.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="/src/images/Home4.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-10/12 mx-auto mt-14" >
                <h1 className="text-3xl text-orange-500 font-semibold text-center pb-8 md:text-6xl">Products for this Brands</h1>
                <div className=" grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-2">

                    {products.length?
                       products?.map(product => <Product key={products._id} product={product} ></Product>) : 
                      <div className="">
                         <h2 className="text-4xl pb-8">Sorry!! no product available for this brand</h2>
                      </div>
                    
                    }
                   
        
                </div>
            </div>
        </div>
    );
};

export default SingleBrandPage;