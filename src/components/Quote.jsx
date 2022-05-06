import React from 'react'

import { randomQuote } from "../helper";


const Quote = () => {
  return (
    <div className="today">{randomQuote}</div>
  )
}

export default Quote;