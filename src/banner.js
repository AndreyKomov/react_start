import React from 'react';
import './Banner.css';

function Banner() {
  const buttonclick=(event)=> {
    console.log (event);
  }
  return (
    <div className="button">
      <button onClick={buttonclick}>Ok</button>
      <p>Test page</p>
    </div>
  );
}

export default Banner;

