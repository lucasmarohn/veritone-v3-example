import React from 'react'


export default ({ contactOpen, toggleContact }) => {
  const openModal = () => {
    toggleContact(true)
  }
  const closeModal = () => {
    toggleContact(false)
  }

  return (
    <>
      <div className={`contact-modal ${contactOpen ? 'visible' : ''}`} id="contact-modal">
        <div style={{maxWidth: 800, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
          <button className="close-contact-modal"><div className="button" onClick={closeModal}>x</div></button>
          <div style={{ maxWidth: '100%' }} className="cognito"></div>
        </div>
    </div>
    <div className="call-to-action">
        <span className="text">Ready to get started?</span>
        <a className="button js-open-contact-modal" onClick={openModal}>Email Us</a>
    </div>
    </>
  )
}
