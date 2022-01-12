import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people, setPeople] = useState(data)

  return (
    <section>
      <div className="title">
        <h2>
          <span>/</span>
          reviews
        </h2>
      </div>
      <div className="section-center">
        <article>
          {people.map( person => {
            const {id, image, name, title, quote} = person

            return (
              <article key={id}>
                <img src={image} alt={name} />
              </article>
            )
          })}
        </article>
      </div>
    </section>
  )
}

export default App;
