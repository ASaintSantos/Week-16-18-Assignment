import React from 'react'
import AlertContact from './AlertContact'
import ListContact from './ListContact'

function ContactPage() {
  return (
    <div style={{width:"1000px", padding:"50px"}}>
        <AlertContact />
        <ListContact />
    </div>
  )
}

export default ContactPage