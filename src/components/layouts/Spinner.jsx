import React from 'react'

function Spinner() {
  return (
    <div className="w-100 my-20 flex justify-center">
        <progress className="progress progress-accent w-56"></progress>
    </div>
  )
}

export default Spinner