import { Link } from 'react-router-dom'
import { topAttractionsData } from '../Recommended-Section/TopAttractionsData'
import AttractionCard from './TopAttractionCard'
const TopAttractions = () => {
  return (
    <div className="w-[90%] mx-20 lexs:m-5 ml:m-10 ms:m-7">
      <h1 className="m-4 mb-8 text-3xl lexs:text-2xl font-bold text-left">
        Top Attractions in Andaman and Nicobar Islands
      </h1>
      {/* <div className="md:grid md:grid-cols-2 lg:grid lg:grid-cols-3  gap-8 m-4"> */}
      <div className="grid grid-cols-3 ms:grid-cols-1 ml:grid-cols-2 md:grid-cols-2 lexs:grid-cols-1 gap-8 m-4">
        {/* <AttractionCard/>
        <AttractionCard/>
        <AttractionCard/>
        <AttractionCard/>
    <AttractionCard/> */}
        {topAttractionsData.map((attraction,index) => (
          
            <AttractionCard key={index} {...attraction} />
        ))}
      </div>
    </div>
  )
}
export default TopAttractions
