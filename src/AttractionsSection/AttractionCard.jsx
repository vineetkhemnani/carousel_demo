import { Carousel } from 'react-responsive-carousel'
import ReviewSection from './ReviewSection'
// import NewNav from '../../NewNav'
// import Footer from '../../Component/Footer/Footer'
// individual attractions page
const AttractionCard = ({
  suggestedDuration,
  title,
  img,
  timings,
  category,
  criteria,
  rating,
  reviews,
  locationMap,
  theArea,
}) => {
  return (
    <>
    {/* <NewNav/> */}
      <div className="lg:mx-20 md:mx-20 mt-10">
        {/* heading */}
        <h1 className="font-bold text-5xl">{title}</h1>
        {/* rating */}
        <div className="flex mt-4">
          <div
            className="mr-3 mt-1.5"
            dangerouslySetInnerHTML={{ __html: rating }}
          />
          <p className="text-base">
            | {criteria} | {category}
          </p>
        </div>
        {/* timings */}
        <p className="font-semibold mx-5 my-8 text-gray-900">{timings}</p>

        {/* flexbox for about card and carousel */}
        <div className="lg:flex h-auto center">
          {/* About Card */}
          <div className="mr-5">
            <div className="bg-gray-50 rounded-t-xl shadow-md hover:shadow-lg mb-1 p-4 h-60 w-96 md:w-full">
              <h1 className="font-semibold text-2xl">About</h1>
              <h3 className="font-medium mt-10">Suggested duration</h3>
              <h3 className="mt-1">{suggestedDuration}</h3>
            </div>
            <div className="bg-gray-50 rounded-b-xl shadow-md hover:shadow-lg p-4 h-52 w-96 md:w-full">
              <h3 className="font-semibold mt-2">Tours and Experiences</h3>
              <h4 className="mt-2">
                Explore different ways to experience this place
              </h4>
              <button className="mt-12 hover:bg-gray-900 rounded-full font-bold text-gray-200 py-4 w-full bg-black">
                See options
              </button>
            </div>
          </div>
          {/* Carousel */}
          <div className="w-auto">
            <Carousel
              showIndicators={true}
              showStatus={false}
              autoPlay={true}
              infiniteLoop={true}
              swipeable={true}
              emulateTouch={true}
              showThumbs={true} // Enable thumbnails
              thumbWidth={100} // Set the width of each thumbnail
            >
              {img?.map((ele, index) => (
                <div key={index} className="w-full h-[380px]">
                  <img
                    className="w-full h-full object-cover rounded"
                    src={ele}
                    alt="carousel-hotel-images"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>

        {/* area section */}
        <div className="lg:flex mt-32 justify-between">
          {/* left */}
          <div>
            {/* heading */}
            <h1 className="text-2xl font-semibold mb-5">The area</h1>

            {/* subheading */}
            <h2 className="text-md font-semibold">Best nearby</h2>
            {/* flex for best nearby */}
            <div className="lg:flex md:flex lg:space-x-4">
              {/* restaurants */}
              <div className="restaurants">
                <h2 className="text-md text-gray-700">Restaurants</h2>
                <h2 className="text-md text-gray-700">
                  {theArea.bestNearby.data}
                </h2>
                <ul>
                  {theArea.bestNearby.restaurants.map((restaurant) => (
                    <li>
                      <div className="flex my-5 mr-5">
                        <img
                          src={restaurant.img}
                          alt={restaurant.name}
                          className="w-[70px] h-[70px] mr-3"
                        />
                        <div>
                          <h3 className="text-black">{restaurant.name}</h3>
                          <h4 className="text-gray-900 text-sm">
                            {restaurant.distance} {restaurant.category}
                          </h4>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* attractions nearby */}
              <div className="attractions">
                <h2 className="text-md text-gray-700">Attractions</h2>
                <h2 className="text-md text-gray-700">
                  {theArea.attractionsNearby.data}
                </h2>
                <ul>
                  {theArea.attractionsNearby.attractionsNearData.map(
                    (location, index) => (
                      <li key={index}>
                        <div className="flex my-5">
                          <img
                            src={location.img}
                            alt={location.name}
                            className="w-[70px] h-[70px] mr-3"
                          />
                          <div>
                            <h3 className="text-black">{location.name}</h3>
                            <h4 className="text-gray-900 text-sm">
                              {location.distance} {location.category}
                            </h4>
                          </div>
                        </div>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="h-[600px] mx-5">
            <iframe
            title={title}
              src={locationMap}
              // frameBorder="0"
              className="w-72 sm:w-36 md:w-full md:mt-10 h-[100%] sm:h-[80%]"
            ></iframe>
          </div>
        </div>

        {/* review section */}
      </div>
      <ReviewSection reviews={reviews} />
      {/* <Footer/> */}
    </>
  )
}
export default AttractionCard
