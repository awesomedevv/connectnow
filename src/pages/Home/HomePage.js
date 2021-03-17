import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { push } from 'connected-react-router'



export default function HomePage() {
  const dispatch = useDispatch()
  


  return (
    <div className="home-page page">
      Home Page
    </div>
  )
}
