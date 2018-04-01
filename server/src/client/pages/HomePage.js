import React from 'react';

const Home = () => {
  return (
    <div className="center-align" style={{ marginTop: '200px' }}>
      <h3>Welcome</h3>
      <p>Check this awesome features</p>
      <button onClick={() => console.log('Hi there!')}>Press me!!</button>
    </div>
  );
};

export default {
  component: Home
};
