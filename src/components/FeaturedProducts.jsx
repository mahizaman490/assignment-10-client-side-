import GetOffer from "./GetOffer";


const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Smartphone XYZ",
      description: "The latest smartphone with advanced features.",
    },
    {
      id: 2,
      name: "Smart Home Hub",
      description: "Control your home with this smart home automation hub.",
    },
    {
      id: 3,
      name: "Wireless Earbuds",
      description: "High-quality wireless earbuds for an immersive audio experience.",
    },
  ];

  return (
  <>
  <h2 className="text-4xl text-center font-bold mb-8 text-orange-600 mt-32">
          Featured Products
        </h2>
  
  <div className="py-16 bg-gray-200 my-20">
      <div className="container mx-auto text-center">
      <h2 className="text-2xl text-center font-bold mb-8 text-orange-600 ">
          Get offer
        </h2>
        <GetOffer></GetOffer>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg focus:shadow-lg transition duration-300 ease-in-out" data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <button className="btn bg-orange-500 text-white hover:bg-orange-600">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  
  
  </>
  );
};

export default FeaturedProducts;
