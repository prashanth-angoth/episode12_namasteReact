import React from 'react'
import { useRouteError } from 'react-router' // useRoutError hook is help full to provide a proper error message on the screen
const Error = () => {
    const err = useRouteError()
    console.log({err})
  return (
    
    <div>
      <h1>
        Oops
      </h1>
      <p>Error Occured...!</p>
      <h3>{err.status}:{err.statusText}</h3>
    </div>
  )
}

export default Error
