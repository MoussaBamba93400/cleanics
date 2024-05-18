"use client"

import { useEffect } from "react"


export default function AuthError({error, reset} : {error: any, reset: () => void}){

    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
      }, [error])

  return (
    <div>
        <h1>Autvedh Error</h1>
    </div>
  )
}