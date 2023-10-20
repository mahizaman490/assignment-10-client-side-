import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Section3 from "./Section3";
import Section4 from "./Section4";
import HomeBrandSec from "./brands/HomeBrandSec";


const Home = () => {
    const brands = useLoaderData()
    console.log(brands)
    return (
        <div>
           <Banner></Banner>
           <HomeBrandSec brands={brands}></HomeBrandSec>
           <Section3 ></Section3>
           <Section4></Section4>
       
        </div>
    );
};

export default Home;