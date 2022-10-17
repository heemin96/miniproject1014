import React from 'react'
import { forwardRef } from 'react'

const Verticalpage3 = forwardRef((props, ref) => {

  return (
  <div ref={ref}>
    {props.childeren}
      Verticalpage3
  </div>
  )
})

export default Verticalpage3
 