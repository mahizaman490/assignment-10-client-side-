
const SingleBrandPage = () => {
    return (
        <div>
            <div className="w-10/12 mx-auto md:py-20 py-8">
                <h1 className="text-3xl text-orange-500 font-semibold text-center md:text-6xl mb-8">Some Devices in our brands</h1>
                <div className="carousel h-[300px] md:h-[600px]">
                    <div id="slide1" className="carousel-item relative w-full ">
                        <img src="/src/images/Home1.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="/src/images/Home2.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="/src/images/Home3.jpg" className="w-full" />
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

            <div className="w-10/12 mx-auto mt-14 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-2" >
                <h1 className="text-3xl text-orange-500 font-semibold text-center pb-8 md:text-6xl">Products for this Brands</h1>
                <div className="card w-96 glass">
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Life hack</h2>
                        <p>How to park your car at your garage?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Learn now!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBrandPage;