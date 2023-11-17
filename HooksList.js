import React from 'react';
//include link router component
import { Link } from 'react-router-dom';

const HooksList = () => {
  return (
    <div className='main'>
      <h2>Dev Easy Tricks
        <Link to="/hooks"><button className='ui button blue right'>Hooks List</button>
        </Link>
      </h2>
    </div>
  );
}

export default HooksList;
