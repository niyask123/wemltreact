import React from 'react'
import SmHeader from './screenHeaders/SmHeader'
import MainHeader from './screenHeaders/MainHeader'
// import PackagesMenu from '../../../pages/home/elements/PackagesMenu'

const Header = () => {
  return (
    <div>

      <SmHeader />
      <div className="md:h-[15rem] h-[8rem]">
        <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
          <MainHeader />
        </div>
      </div>
    </div>
  )
}

export default Header
