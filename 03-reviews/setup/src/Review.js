import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } =people[index]

  const handlePrevClick = () => {
    if (index === 0) {
      setIndex(people.length - 1)
    } else {
      setIndex(index - 1)
    }
  }

  const handleNextClick = () => {
    if (index === people.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  const handleRandomBtn = () => {
    const newIndex = Math.floor(Math.random() * people.length)
    console.log(newIndex)
    if (index === newIndex) {
      handleRandomBtn()
    } else {
      setIndex(newIndex)
    }
  }

  return <article className='review'>
    <div className="img-container">
      <img src={image} alt={name} className='person-img' />
      <span className="quote-icon">
        <FaQuoteRight />
      </span>
    </div>
    <h4 className="author">{name}</h4>
    <p className="job">{job}</p>
    <p className='info'>{text}</p>
    <div className="button-container">
      <button className="prev-btn" onClick={handlePrevClick}>
        <FaChevronLeft />
      </button>
      <button className="next-btn" onClick={handleNextClick}>
        <FaChevronRight />
      </button>
    </div>
    <button className="random-btn" onClick={handleRandomBtn}>Surprise me</button>
  </article>
};

export default Review;
