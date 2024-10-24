import React from 'react'

const Card = () => {
  return (
    <div className='row position-absolute top-50 start-50 translate-middle' style={{ zIndex: 1, color: 'white',  padding: '20px', borderRadius: '8px' }}>
        <div className='col-12 text-center'>
          <h5 className=" fs-1 ">Card title</h5>
          <p >
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <a href="#" className="btn-lg btn-primary mt-4" style={{textDecoration:"none"}}>Go somewhere</a>
          

        </div>
      </div>
  )
}

export default Card