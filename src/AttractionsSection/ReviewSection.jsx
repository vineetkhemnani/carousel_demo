import ReviewCard from './ReviewCard'

// review section containing review cards
const ReviewSection = ({ reviews }) => {
  return (
    <div className="bg-gray-100 w-full">
      <div className="flex items-center justify-center mt-20">
        <div className="w-[80%]">
          <div className="container px-4">
            <h1 className="text-2xl font-semibold text-center mt-4 mb-6">
              See what other travelers are saying
            </h1>
            <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-10">
              {reviews.map((review, index) => (
                <div key={index}>
                  <ReviewCard {...review} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewSection
