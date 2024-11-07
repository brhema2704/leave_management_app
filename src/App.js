import React, { useState, useEffect } from 'react';
import LeaveForm from './components/LeaveForm';
import LeaveBalance from './components/LeaveBalance';
import LeaveHistory from './components/LeaveHistory';
import './App.css';

function App() {
  // Retrieve saved leave data from local storage
  const initialLeaveBalance = JSON.parse(localStorage.getItem('leaveBalance')) || {
    casual: 10,
    medical: 5,
  };

  const initialLeaveHistory = JSON.parse(localStorage.getItem('leaveHistory')) || [];

  // State to manage leave balance and leave history
  const [leaveBalance, setLeaveBalance] = useState(initialLeaveBalance);
  const [leaveHistory, setLeaveHistory] = useState(initialLeaveHistory);

  // Update local storage whenever leaveBalance or leaveHistory changes
  useEffect(() => {
    localStorage.setItem('leaveBalance', JSON.stringify(leaveBalance));
    localStorage.setItem('leaveHistory', JSON.stringify(leaveHistory));
  }, [leaveBalance, leaveHistory]);

  const applyLeave = (leaveType, days) => {
    if (days <= 0) {
      alert('Please enter a valid number of days.');
      return;
    }

    const updatedBalance = { ...leaveBalance };

    if (leaveType === 'Casual' && updatedBalance.casual >= days) {
      updatedBalance.casual -= days;
    } else if (leaveType === 'Medical' && updatedBalance.medical >= days) {
      updatedBalance.medical -= days;
    } else {
      alert('Insufficient leave balance!');
      return;
    }

    setLeaveBalance(updatedBalance);

    // Update leave history
    setLeaveHistory([...leaveHistory, { type: leaveType, days }]);
  };

  return (
    <div className="container">
      <h1>Leave Management System</h1>
      <LeaveForm onApplyLeave={applyLeave} />
      <LeaveBalance balance={leaveBalance} />
      <LeaveHistory history={leaveHistory} />
    </div>
  );
}

export default App;
