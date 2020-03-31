import React from 'react'
import './contact-modal.sass'


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
          <div style={{ maxWidth: '100%', padding: 0 }} className="cognito">
            <form id="contact-form"  method="POST" data-netlify="true">
              <div className="description">
                <h2>Let's talk</h2>
                <p>We are all about building beautiful things and making a difference in our customers business, want in? Get in touch.</p>
              </div>
            <div class="field" style={{display: 'flex', flexDirection: 'column-reverse'}}>
                <textarea id="message" placeholder="What problem do you need solved?" />
                <label for="name">Message</label>
              </div>
              <div class="field" style={{display: 'flex', flexDirection: 'column-reverse'}}>
                <input id="email" type="email" placeholder="your@email.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
                <label for="name">Email</label>
              </div>
              <div class="field" style={{display: 'flex', flexDirection: 'column-reverse'}}>
                <input id="name" type="tel" placeholder="Phone" />
                <label for="name">Phone</label>
              </div>
              <div class="field" style={{display: 'flex', flexDirection: 'column-reverse'}}>
                <input id="name" type="text" placeholder="Name" />
                <label for="name">Name</label>
              </div>
              <div>
                <button type="submit" className="button">Get Started</button>
              </div>
            </form>

          </div>
        </div>
    </div>
    <div className="call-to-action">
        <span className="text">Ready to get started?</span>
        <a className="button js-open-contact-modal" onClick={openModal}>Email Us</a>
    </div>
    </>
  )
}
