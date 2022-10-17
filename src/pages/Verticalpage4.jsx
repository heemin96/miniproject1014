import React from 'react'
import { forwardRef } from 'react'

const Verticalpage4 = forwardRef((props, ref) => {

  return (
  <div ref={ref}>
    {props.childeren}
      Verticalpage4
  </div>
  )
})

export default Verticalpage4
