import React from 'react'

export const FunctionalCompProps = (props) => {
  return (
    <div> 
    <h1>{props.name} works in {props.company}
    {props.children}
    </h1>
  </div>
  )
}
