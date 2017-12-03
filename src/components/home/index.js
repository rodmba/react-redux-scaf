import React from 'react'
import Hello from './hello'

export default props => {
  return (
    <div className="container">
      <Hello {...props} />
    </div>
  )
}
