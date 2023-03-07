import React from 'react'

import { Link } from 'react-router-dom'


const HomePage = () => {
  return (
    <div>
      <h1>Homepage</h1>

      <Link to={"http://localhost:8080/formulas/640206f6dbe9431d517a9ff7"}>To Formula</Link>
    </div>
  )
}

export default HomePage