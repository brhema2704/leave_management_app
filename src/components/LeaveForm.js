import React, { useState } from 'react';

const LeaveForm = ({ onApplyLeave }) => {
  const [leaveType, setLeaveType] = useState('Casual');
  const [days, setDays] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onApplyLeave(leaveType, days);
    setDays(0); // Reset the days after application
  };

  return (
    <div>
      <h2>Apply for Leave</h2>
      <form onSubmit={handleSubmit}>
        <label>Leave Type:</label>
        <select value={leaveType} onChange={(e) => setLeaveType(e.target.value)}>
          <option value="Casual">Casual Leave</option>
          <option value="Medical">Medical Leave</option>
        </select>
        <br />
        <label>Number of Days:</label>
        <input 
          type="number" 
          value={days} 
          onChange={(e) => setDays(parseInt(e.target.value) || 0)} 
          min="0" 
        />
        <br />
        <button type="submit">Apply</button>
      </form>
    </div>
  );
};

export default LeaveForm;


