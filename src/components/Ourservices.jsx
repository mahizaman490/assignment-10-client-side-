

const Ourservices = () => {
  return (
<>


<h2 className="text-4xl font-bold mb-24 text-orange-600 text-center">
    Our Technology and Electronics Services
  </h2>
    <div className="py-16 bg-gray-100">


        
      <div className="container mx-auto text-center">
    

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Electronic Product Design</h3>
            <p className="text-gray-600">
              We specialize in creating innovative and user-friendly electronic products from concept to production.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Technology Consulting</h3>
            <p className="text-gray-600">
              Our expert consultants provide technology guidance and solutions to help your business thrive in the digital age.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Electronics Repair Services</h3>
            <p className="text-gray-600">
              Trust our skilled technicians to handle the repair and maintenance of your electronic devices and gadgets.
            </p>
          </div>
        </div>
      </div>
    </div>
</>
  );
};

export default Ourservices;
