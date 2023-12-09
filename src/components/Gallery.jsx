

const Gallery = () => {
  const galleryImages = [
    "https://i.ibb.co/SVcNR0G/dualshock-4-glacier-white-01-500x500.webp",
    "https://i.ibb.co/Dp2FPTY/download.jpg",
    "https://i.ibb.co/4dMV0N0/1533-48820.jpg",
    "https://i.ibb.co/0Y1984K/2169-40093.jpg",
   
  ];

  return (
    <>
            <h2 className="text-4xl font-bold mb-24 text-orange-600 text-center mt-32 ">Gallery</h2>
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    
    
    </>
  );
};

export default Gallery;
