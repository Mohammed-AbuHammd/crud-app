import React from 'react';

const Container = ({ children }) => {
  const containerStyle = {
    width: '80%',
    margin: '0 auto',
    border: '1px solid #ccc',
    padding: '10px',
  };

  return <div style={containerStyle}>{children}</div>;
};

export default Container;
