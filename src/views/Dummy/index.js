import React from 'react'
import "./Dummy.css"

const RedText = ({ children }) => <span className="red-text">{children}</span>

const Dummy = ({ what }) => {
  return(
    <div className="dummy" >
      <div>
      There will be a cool <RedText>{what}</RedText> here. Believe me.
      </div>
    </div>
  )
}

export default Dummy;