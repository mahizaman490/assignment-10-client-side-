const Section4 = () => {
    return (
        <div className="w-10/12 mx-auto md:py-20 py-8" data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">
            <h1 className="text-4xl font-bold mb-24 text-orange-600 text-center">About US</h1> 
            <div className="collapse collapse-arrow bg-orange-100 my-4">
  <input type="radio" name="my-accordion-2" checked="checked" /> 
  <div className="collapse-title text-xl font-medium">
  Choose Us for Your Tech Needs!
  </div>
  <div className="collapse-content"> 
    <p>we are your trusted destination for all things tech and electronics. Whether you are a gadget enthusiast, a seasoned professional, or just tech-curious</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-orange-100 ">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  Explore Our World of Brands!
  </div>
  <div className="collapse-content"> 
    <p>we are not just about tech – we are about trusted brands that define excellence in the world of electronics. Here is why you should get to know our brands:

Global Reach: We bring you the finest brands from around the world, recognized for their innovation and quality.

Diverse Portfolio: Discover a wide array of brands, each specializing in different aspects of technology, ensuring there is something for every tech enthusiast.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-orange-100 my-4">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
   Technical issue solving!
  </div>
  <div className="collapse-content"> 
    <p>we are more than just a technology and electronics website – we are your trusted partner in resolving technical issues. Here is why you should turn to us when challenges arise:

Expert Solutions: Our team of tech experts is here to tackle your most perplexing technical problems, offering clear and concise solutions.

Comprehensive Guides: Find step-by-step tutorials and troubleshooting guides to help you navigate through a wide range of technical issues.</p>
  </div>
</div>
        </div>
    );
};

export default Section4;