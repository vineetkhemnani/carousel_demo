import { useParams } from 'react-router-dom'
import { topAttractionsData } from '../Recommended-Section/TopAttractionsData'
import AttractionCard from './AttractionCard'

// component to pass dynamic data using params
const AttractionCardCompo = () => {
  const { attractionId } = useParams()
//   console.log(attractionId)

  if (
    isNaN(attractionId) ||
    attractionId < 1 ||
    attractionId > topAttractionsData.length
  ) {
    // Handle invalid 'id' or out-of-range values
    return <div>Invalid attraction ID</div>
  }

  const attractionData = topAttractionsData[attractionId - 1]

  return <AttractionCard {...attractionData} />
}

export default AttractionCardCompo
