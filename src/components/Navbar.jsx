import React from 'react'
import logo from './navimages/logo.svg'
import set from './navimages/seting.svg'
function Navbar() {
  return (
    <div className='container-xl'>
      <div className="d-flex justify-content-between m-3">
        <div className=''><img src={logo} className='logo' style={{width:"150px"}} alt="" /></div>
        <div className=' home d-flex  align-items-center'>
          <h5 className='mx-3'>About</h5>
          <h5 className='mx-3'>Facilities</h5>
          <h5 className='mx-3'>AskDoctors</h5>
          <h5 className='mx-3'>Clinics</h5>
          <h5 className='mx-3'>contactUs</h5>
          <img src={set} style={{width:"25px"}} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
