import React from 'react'
import { Helmet } from 'react-helmet'

export default ({ contactOpen, toggleContact }) => {
  const openModal = () => {
    toggleContact(true)
  }
  const closeModal = () => {
    toggleContact(false)
  }

  return (
    <>
    <Helmet script={[{src: "https://services.cognitoforms.com/s/b5-uwuMqpUKsjg2buCjD1g"}]}></Helmet>
    <div className={`contact-modal ${contactOpen ? 'visible' : ''}`} id="contact-modal">
        <button className="close-contact-modal"><div className="button" onClick={closeModal}>x</div></button>
        <div className="cognito"></div>
        
    </div>
    <div className="call-to-action">
        <span className="text">Ready to get started?</span>
        <a className="button js-open-contact-modal" onClick={openModal}>Email Us</a>
    </div>
    </>
  )
}
