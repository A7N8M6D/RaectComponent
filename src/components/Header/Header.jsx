import React from 'react';
import Card from '../Card/Card';

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

      <Card/>
      
    </div>
  );
}

export default Header;
