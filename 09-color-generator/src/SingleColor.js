import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({index, rgb, weight, hexColor}) => {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(', ')
  const hex = rgbToHex(...rgb)
  const hexValue = `#${hexColor}`

  useEffect(() => {
    const timeout = setTimeout(() => setAlert(false), 2000)
    return () => clearTimeout(timeout)
  })

  return (
    <article
      className={`color ${index > 10 && 'color-light'}`} 
      style={{backgroundColor: `rgb(${bcg})`}}
      onClick={() => {
        navigator.clipboard.writeText(hexValue)
        setAlert(true)
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
