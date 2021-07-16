import React, { useState } from "react"
import "../assets/block.scss"

const Block = ({ value, x, y }) => {
  let getPosition = () => ({
    top: 121 * x,
    left: 121 * y,
  })
  return (
    <div className={`block 
                     block-color-${Math.log2(value) === Number.NEGATIVE_INFINITY ? "default" : Math.log2(value)}`}
         style={getPosition()}
    >
      {value !== 0 ? value : ""}
    </div>
  )
}

export default Block
