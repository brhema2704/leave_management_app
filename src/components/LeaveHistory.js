import React from 'react';

const LeaveHistory = ({ history }) => {
  return (
    <div>
      <h2>Leave History</h2>
      <ul>
        {history.map((leave, index) => (
          <li key={index} className="leave-history-item">
            <span>{leave.type} Leave</span>
            <span>{leave.days} days</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeaveHistory;

