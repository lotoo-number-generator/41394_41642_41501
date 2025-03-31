import React from 'react';

const LottoNumberDisplay = ({ numbers, timestamp }) => {
  return (
    <div className="mt-3 animated fadeIn">
      <h3 className="h4">Your Lucky Numbers:</h3>
      <div className="d-flex justify-content-center flex-wrap my-3">
        {numbers.map((number, index) => (
          <div 
            key={index} 
            className="lotto-ball d-flex justify-content-center align-items-center m-2"
          >
            {number}
          </div>
        ))}
      </div>
      <p className="text-muted">Generated at: {timestamp}</p>
    </div>
  );
};

export default LottoNumberDisplay;