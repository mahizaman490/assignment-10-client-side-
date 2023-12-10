

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: "Smartphone XYZ",
      description: "The latest smartphone with advanced features.",
      image: "https://i.ibb.co/bmcH8V5/new-smartphone-balancing-with-pebbles.jpg",
    },
    {
      id: 2,
      name: "Smart Watch",
      description: "Stay connected with our stylish and smart wearable.",
      image: "https://i.ibb.co/tsYBZv0/download.jpg",
    },
    // Add more products as needed
  ];

  return (
   <>
   
   
   <h2 className="text-4xl font-bold text-center text-orange-600 "> Product Showcase</h2>
    <div className="py-16 bg-gray-100 my-32">
      <div className="container mx-auto">
      
        <div className="flex flex-wrap items-center" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
          {products.map((product) => (
            <div key={product.id} className="w-full md:w-1/2 lg:w-1/2 p-4">
              <div className="flex flex-col md:flex-row items-center">
                {/* Image Column */}
                <div className="md:w-1/2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
                {/* Description Column */}
                <div className="md:w-1/2 p-4">
                  <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
   
   </>
  );
};

export default ProductShowcase;
