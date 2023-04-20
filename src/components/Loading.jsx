import React from 'react'
import "../assets/styles/loading.css"

function Loading() {
  return (
    <>
        <div className="loading">
        <div className="lds-facebook"><div></div><div></div><div></div></div>
        </div>
    </>
  )
}

export default Loading