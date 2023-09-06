import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
// image carousel for the attraction cards
const ImageCarousel = ({ img }) => {
  return (
    <div>
      <Carousel
        showIndicators={true}
        showStatus={false}
        // autoPlay={true}
        infiniteLoop={true}
        swipeable={true}
        emulateTouch={true}
        showThumbs={false} // Disable thumbnails
      >
        {img.map((ele, index) => (
          <div key={index} className="">
            <img
              className="w-[500px] h-[400px] rounded"
              src={ele}
              alt="carousel-attraction-images"
            />
          </div>
        ))}
      </Carousel>
    </div>
  )
}
export default ImageCarousel
