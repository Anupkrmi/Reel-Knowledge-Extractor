import React, { useState } from 'react';
import InputBox from '../components/InputBox';
import SummaryCard from '../components/SummaryCard';
import StepsCard from '../components/StepsCard';
import ConceptsCard from '../components/ConceptsCard';
import ExplanationCard from '../components/ExplanationCard';
import { analyzeText } from '../services/api';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [extractedData, setExtractedData] = useState(null);

  const handleExtraction = async (text) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await analyzeText(text);
      setExtractedData(data);
    } catch (err) {
      setError("Failed to extract knowledge. Ensure your backend is running.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="main-container">
      {/* ── Hero ── */}
      <div className="hero">
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-dot" />
          AI-Powered Knowledge Engine
        </div>
        <h1>
          Turn Reels Into{' '}
          <span className="grad-text">Real Knowledge</span>
        </h1>
        <p>
          Paste any educational reel caption or transcript and watch AI
          transform noise into structured, actionable insight.
        </p>
      </div>

      {/* ── Input ── */}
      <InputBox onSubmit={handleExtraction} isLoading={isLoading} />

      {/* ── Error ── */}
      {error && (
        <div className="error-message">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0,marginTop:'1px'}}>
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          {error}
        </div>
      )}

      {/* ── Results ── */}
      {extractedData && !isLoading && (
        <div>
          <div className="results-header-row">
            <h2 className="results-header">Extraction Results</h2>
            <div className="results-divider" />
          </div>
          <div className="results-grid">
            <SummaryCard summary={extractedData.summary} />
            <ConceptsCard concepts={extractedData.key_concepts} />
            <StepsCard steps={extractedData.steps} />
            <ExplanationCard explanation={extractedData.explanation} />
          </div>
        </div>
      )}
    </main>
  );
};

export default Home;