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
    <div class={`contact-modal ${contactOpen ? 'visible' : ''}`} id="contact-modal">
        <button class="close-contact-modal"><div class="button" onClick={closeModal}>x</div></button>
        <div class="cognito"></div>
        
    </div>
    <div class="call-to-action">
        <span className="text">Ready to get started?</span>
        <a className="button js-open-contact-modal" onClick={openModal}>Email Us</a>
    </div>
    </>
  )
}
