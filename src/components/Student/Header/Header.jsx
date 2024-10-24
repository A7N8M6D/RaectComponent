import React from 'react';

const Header = () => {
  return (
    <div className='position-relative'>
      <div className='row'>
        <div className='col-12'>
          <img 
            src="https://th.bing.com/th/id/R.db915e3ba35484d11168889cfbd7d343?rik=bXtLagOTr%2fUxVQ&riu=http%3a%2f%2fsnagfilms-a.akamaihd.net%2fb9%2fad%2f8a137933473a868f4bdbc6e5f074%2f635884719959909555-mar-boot-camp-news-3jpg&ehk=ufdXAD6l1xUThY8ajwnUhdJHsx8HwPN9ddxhxhi0hEw%3d&risl=&pid=ImgRaw&r=0" 
            className="img-fluid" 
            alt="..."
          />
        </div>
      </div>

      
      <div className='row position-absolute top-50 start-50 translate-middle' style={{ zIndex: 1, color: 'white',  padding: '20px', borderRadius: '8px' }}>
        <div className='col-12 text-center'>
          <h5 className=" fs-1 ">Card title</h5>
          <p >
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <a href="#" className="btn-lg btn-primary mt-4" style={{textDecoration:"none"}}>Go somewhere</a>
          

        </div>
      </div>
    </div>
  );
}

export default Header;
