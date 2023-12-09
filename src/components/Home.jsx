import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Section3 from "./Section3";
import Section4 from "./Section4";
import HomeBrandSec from "./brands/HomeBrandSec";
import Ourservices from "./Ourservices";
import FeaturedProducts from "./FeaturedProducts";
import Gallery from "./Gallery";
import ProductShowcase from "./ProductShowcase";


const Home = () => {
    const brands = useLoaderData()
    console.log(brands)
    return (
        <div>
           <Banner></Banner>
           <FeaturedProducts></FeaturedProducts>
         
           <HomeBrandSec brands={brands}></HomeBrandSec>
           <Gallery></Gallery>
          
           <Section3 ></Section3>
     
           <ProductShowcase></ProductShowcase>
           <Ourservices></Ourservices>
           <Section4></Section4>

       
        </div>
    );
};

export default Home;