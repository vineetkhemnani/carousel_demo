// individual review cards
const ReviewCard = ({
  avatar,
  author,
  rating,
  heading,
  description,
  dateVisited,
  reviewDate,
  authorOrigin,
  contributions,
}) => {
  return (
    <div className="bg-white lg:w-[340px] sm:w-[300px] h-[370px] rounded-lg shadow-lg p-4">
      <div className="flex items-center">
        <img
          src={avatar}
          alt={author}
          className="rounded-full w-12 h-12 mr-4"
        />
        <div>
          <h1 className="font-semibold">{author}</h1>
          <p className="text-xs">
            {authorOrigin}
          </p>
        </div>
      </div>
      <p className="text-sm mt-2">{rating}</p>
      <h3 className="text-md font-semibold mt-2">{heading}</h3>
      <p className="text-gray-700 mt-1">{description.slice(0, 267) + '...'}</p>
      {/* <p className="text-gray-500 text-sm mt-3">
        Visited{' '}
        <span className="font-semibold text-gray-700">{dateVisited}</span>
      </p>
      <p className="text-gray-500 text-xs mt-3">
        Written{' '}
        <span className="font-semibold text-gray-700">{reviewDate}</span>
      </p> */}
    </div>
  )
}

export default ReviewCard
