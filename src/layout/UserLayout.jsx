import React from 'react'
import Header from '../components/headerFooter/headers/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/headerFooter/headers/Footer'

export default function UserLayout() {
  return (
    <>
    <Header />
      <div className=" ">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}
