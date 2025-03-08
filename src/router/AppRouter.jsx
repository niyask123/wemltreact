import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserLayout from '../layout/UserLayout'
import Home from '../pages/home/Home'
import PackageDetails from '../pages/packages/PackageDetails'
import AddToCard from '../components/Payments/AddToCard'

function AppRouter() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path="package/:packageName" element={<PackageDetails />} /> {/* Dynamic route */}
        <Route path="/cart" element={<AddToCard />} /> {/* New Cart Page Route */}
      </Route>

    </Routes>
  </BrowserRouter>
  )
}

export default AppRouter
