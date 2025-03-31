import React from 'react';

const LottoHistory = ({ history }) => {
  if (!history || history.length === 0) {
    return (
      <div className="card shadow-sm">
        <div className="card-body text-center py-5">
          <h3 className="h4 mb-3">Recent Lottery Results</h3>
          <p className="text-muted">No lottery numbers have been generated yet.</p>
          <p>Click the Generate button to create your first set!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h3 className="h4 mb-3 text-center">Recent Lottery Results</h3>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Numbers</th>
                <th>Date & Time</th>
              </tr>
            </thead>
            <tbody>
              {history.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="d-flex flex-wrap">
                      {item.numbers.map((number, idx) => (
                        <span 
                          key={idx} 
                          className="history-ball d-inline-flex justify-content-center align-items-center me-1"
                        >
                          {number}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td>{item.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LottoHistory;