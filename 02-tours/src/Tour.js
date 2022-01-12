import React, { useState } from 'react';

const Tour = ({ id, name, image, info, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false)

  const handleReadMore = () => {
    setReadMore(!readMore)
  }

  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>
          { readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={handleReadMore}>
            {readMore ? 'Show less' : 'Show more'}
          </button></p>
        <button className='delete-btn' onClick={() => removeTour(id)}>not interested</button>
      </footer>
    </article>
  )
};

export default Tour;
