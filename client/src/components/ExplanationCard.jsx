import React from 'react';

const ExplanationCard = ({ explanation }) => (
  <div className="card card-explanation">
    <div className="card-header">
      <div className="card-icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="16" x2="12" y2="12"/>
          <line x1="12" y1="8" x2="12.01" y2="8"/>
        </svg>
      </div>
      <h3>Deep Explanation</h3>
    </div>
    <p>{explanation}</p>
  </div>
);

export default ExplanationCard;