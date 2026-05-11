import React from 'react';

const StepsCard = ({ steps }) => (
  <div className="card card-steps">
    <div className="card-header">
      <div className="card-icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 11 12 14 22 4"/>
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
        </svg>
      </div>
      <h3>Actionable Steps</h3>
    </div>
    <ul className="steps-list">
      {steps.map((step, idx) => (
        <li key={idx} className="step-item">
          <span className="step-number">{idx + 1}</span>
          <span>{step}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default StepsCard;