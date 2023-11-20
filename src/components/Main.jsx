import React from 'react'

function Main() {
  return (
    <>
    <div className='main'>
    <div className='maincon container-xl d-flex justify-content-start p-5'>
      <div className='layer  p-5'>
        <h1 className='fw-bold maincon' style={{fontSize:"50px"}}>Protecting <br /> you and your <br /> family</h1>
        <p className='fw-bold lh-base'>Your health and wellbeing is <br /> important for us.</p>
        <div class="input-group mb-3 py-2">
        <button class="btn btn-primary fw-bold border border-primary" type="button">Search</button>
        <input type="text" class="form-control border border-primary" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Main
