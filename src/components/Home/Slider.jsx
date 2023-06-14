

const MySlider = () => {



    return (
        <div className="carousel w-full h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
            <img src="https://i.ibb.co/bgzvnfD/banner1-1.jpg" className="w-full rounded-xl" />
            <div className="absolute rounded-xl flex h-full left-0 right-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className='ml-12 text-white space-y-7 w-2/5 my-auto'>
                    <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                        <button className="btn btn-primary mr-5">Discover More</button>
                        <button className="btn btn-outline text-white">Latest Project</button>
                    </div>
                </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide6" className="btn hover:bg-yellow-600 btn-circle mr-6">❮</a>
                <a href="#slide2" className="btn hover:bg-yellow-600 btn-circle">❯</a>
            </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
            <img src="https://i.ibb.co/fYCb0fQ/banner4.webp" className="w-full rounded-xl" />
            <div className="absolute rounded-xl flex h-full left-0 right-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className='ml-12 text-white space-y-7 w-2/5 my-auto'>
                    <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                        <button className="btn btn-primary mr-5">Discover More</button>
                        <button className="btn btn-outline text-white">Latest Project</button>
                    </div>
                </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide1" className="btn hover:bg-yellow-600 btn-circle mr-6">❮</a>
                <a href="#slide3" className="btn hover:bg-yellow-600 btn-circle">❯</a>
            </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
            <img src="https://i.ibb.co/F0W60B1/banner6.jpg" className="w-full rounded-xl" />
            <div className="absolute rounded-xl flex h-full left-0 right-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className='ml-12 text-white space-y-7 w-2/5 my-auto'>
                    <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                        <button className="btn btn-primary mr-5">Discover More</button>
                        <button className="btn btn-outline text-white">Latest Project</button>
                    </div>
                </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide2" className="btn hover:bg-yellow-600 btn-circle mr-6">❮</a>
                <a href="#slide4" className="btn hover:bg-yellow-600 btn-circle">❯</a>
            </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
            <img src="https://i.ibb.co/x89HW15/banner5.jpg" className="w-full rounded-xl" />
            <div className="absolute rounded-xl flex h-full left-0 right-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className='ml-12 text-white space-y-7 w-2/5 my-auto'>
                    <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                        <button className="btn btn-primary mr-5">Discover More</button>
                        <button className="btn btn-outline text-white">Latest Project</button>
                    </div>
                </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide3" className="btn hover:bg-yellow-600 btn-circle mr-6">❮</a>
                <a href="#slide5" className="btn hover:bg-yellow-600 btn-circle">❯</a>
            </div>
        </div>
    
    
    </div>
    );
};

export default MySlider;