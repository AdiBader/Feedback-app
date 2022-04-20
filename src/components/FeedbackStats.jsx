import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
    const {feedbacks} = useContext(FeedbackContext);

    let avgRating = feedbacks.reduce((a,b) => {
        return a + b.rating
    }, 0) / feedbacks.length;
    avgRating = avgRating.toFixed(1)
    
    // removing decimal zero
    avgRating = avgRating / Math.trunc(avgRating) === 1 ? Math.trunc(avgRating) : avgRating;

  return (
    <div className='feedback-stats'>
    <h4>{feedbacks.length} Reviews</h4>
    <h4>Average Rating: {isNaN(avgRating) ? 0 : avgRating}</h4>
    </div>
  )
}

export default FeedbackStats