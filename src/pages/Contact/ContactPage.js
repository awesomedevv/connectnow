import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { push } from 'connected-react-router'




export default function ContactPage() {
  const dispatch = useDispatch()
  


  return (
    <div className="welcome-page page">
      Contact Page
    </div>
  )
}
