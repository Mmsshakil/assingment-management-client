
const Advertise = () => {
    return (
        <div className="carousel w-1/2 h-32">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/djxMvGC/one.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle w-3">❮</a>
                    <a href="#slide2" className="btn btn-circle w-3">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/5jfD4Dt/three.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle w-3">❮</a>
                    <a href="#slide3" className="btn btn-circle w-3">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/bsvr5bf/two.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle w-3">❮</a>
                    <a href="#slide4" className="btn btn-circle w-3">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Advertise;