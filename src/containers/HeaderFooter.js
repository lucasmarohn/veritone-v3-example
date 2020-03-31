import React, { useState } from "react"

import Header from "../components/header"
import ContactModal from "../components/contact-modal"
import Footer from "../components/footer"

import { withPrefix } from 'gatsby'
import { Helmet } from "react-helmet"

import favicon from "../img/icons/emergence-touch.png"

export default ({ children }) => {
  const [navOpen, handleNavOpen] = useState(false)
  const [contactOpen, handleContactOpen] = useState(false)

  const closeNav = () => {
    handleNavOpen(false)
  }

  return (
    <>
      <Helmet
        titleTemplate="%s | Emergence Design"
        bodyAttributes={{
          class: `${navOpen ? "mobile-nav-open" : ""} ${
            contactOpen ? "modal-open" : ""
          }`,
        }}
      >
        <link rel="icon" type="image/png" href={favicon} />
          <script src="https://services.cognitoforms.com/s/b5-uwuMqpUKsjg2buCjD1g" type="text/javascript" />
        <script src={withPrefix('cognito.js')} type="text/javascript" />
      </Helmet>
      <Header
        toggleNav={handleNavOpen}
        navOpen={navOpen}
        toggleContact={handleContactOpen}
      />
      <main role="main" onClick={closeNav}>
        {children}
      </main>
      <ContactModal
        toggleContact={handleContactOpen}
        contactOpen={contactOpen}
      />
        <Footer />
    </>
  )
}
