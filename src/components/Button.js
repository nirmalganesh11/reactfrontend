import React from 'react';
import './css/Button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to='login'>
      <button className='btn'>Sign Up</button>
    </Link>
  );  
}
