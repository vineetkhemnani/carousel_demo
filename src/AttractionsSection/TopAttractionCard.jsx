import ImageCarousel from './ImageCarousel'
import {Link} from 'react-router-dom'
// attractions card design for the carousel

const TopAttractionCard = ({ attractionId,img, title, noOfReviews, category }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg">
      <ImageCarousel img={img} alt={title} />
      <Link
        to={'/attraction/' + attractionId}
        key={attractionId}
      >
        <div>
          <div className="p-4">
            <h3 className="text-lg font-semibold">
              {attractionId}. {title}
            </h3>
            <h5 className="text-sm text-gray-500">{category}</h5>
            <h6 className="text-sm text-gray-500">{noOfReviews} Reviews</h6>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default TopAttractionCard
