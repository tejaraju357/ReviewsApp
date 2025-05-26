import React, {useState} from 'react'
import './index.css'

const ReviewsCarousel = props => {
  const {reviewsList} = props
  const [currentIndex, setCurrentIndex] = useState(0)

  const leftArrow = () => {
    setCurrentIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : prevIndex))
  }

  const rightArrow = () => {
    setCurrentIndex(prevIndex =>
      prevIndex < reviewsList.length - 1 ? prevIndex + 1 : prevIndex,
    )
  }

  const {imgUrl, username, companyName, description} = reviewsList[currentIndex]

  return (
    <div className="reviewsCarousel">
      <div className="arrow-container">
        <button
          type="button"
          className="arrow-button"
          onClick={leftArrow}
          disabled={currentIndex === 0} // Disable button if at the first review
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
            className="arrow"
          />
        </button>
      </div>
      <div className="review-card">
        <h1 className="mainHeading">Reviews</h1>
        <img src={imgUrl} alt={username} className="reviewer-image" />
        <h1 className="reviewer-name">{username}</h1>
        <p className="company-name">{companyName}</p>
        <p className="review-description">{description}</p>
      </div>
      <div className="arrow-container">
        <button
          type="button"
          className="arrow-button"
          onClick={rightArrow}
          disabled={currentIndex === reviewsList.length - 1} // Disable button if at the last review
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
            className="arrow"
          />
        </button>
      </div>
    </div>
  )
}
export default ReviewsCarousel
