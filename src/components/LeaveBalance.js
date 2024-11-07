// src/components/LeaveBalance.js
import React from 'react';

const LeaveBalance = ({ balance }) => {
  return (
    <div>
      <h2>Leave Balance</h2>
      <ul>
        <li>Casual Leave: {balance.casual}</li>
        <li>Medical Leave: {balance.medical}</li>
      </ul>
    </div>
  );
};

export default LeaveBalance;
