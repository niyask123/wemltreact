import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserLayout from '../layout/UserLayout'
import Home from '../pages/home/Home'

function AppRouter() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />
        {/* <Route path="/about-us" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/legal-consultation" element={<LegalConsultation />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} /> */}
      </Route>
      {/* Account Creation */}
      {/* <Route path="/signin" element={<Signin />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/signup-final" element={<SignupFinal />} /> */}
    </Routes>
  </BrowserRouter>
  )
}

export default AppRouter
