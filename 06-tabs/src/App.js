import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight, FaChevronRight } from 'react-icons/fa'
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  const fetchJobs = async () => {
    const response = await fetch(url)
    const newJobs = await response.json()
    setJobs(newJobs)
    setLoading(false)
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  if (loading) {
    return (
      <section className="section loading">
        <h1>loading...</h1>
      </section>
    )
  }

  const { company, dates, duties, title } = jobs[value]

  return (
    <section className='section'>
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {
            jobs.map((item, index) => {
              const { company, id } = item
              console.log(item)
              return (
                <button key={id} className={`job-btn ${index === value && 'active-btn'}`} onClick={() => setValue(index)}>{company}</button>
              )
            })
          }
        </div>

        <div className="btn-container">
          <article className='job-info'>
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">{dates}</p>
            {duties.map((duty, index) => {
              return <div className="job-desc" key={index}>
                <FaAngleDoubleRight className='job-icon' />
                <p>{duty}</p>
              </div>
            })}
          </article>
        </div>
      </div>
    </section>
  )
}

export default App
