import React, { useState } from 'react';
import Loader from './Loader';

const InputBox = ({ onSubmit, isLoading }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) onSubmit(input);
  };

  return (
    <div className="input-section">
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Paste reel caption or transcript here — the messier, the better..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isLoading}
        />
        <div className="input-footer">
          <span className="input-hint">
            Supports captions, transcripts, and raw text dumps
          </span>
          <button
            type="submit"
            className="btn-submit"
            disabled={!input.trim() || isLoading}
          >
            {isLoading ? (
              <Loader />
            ) : (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                </svg>
                Extract Knowledge
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputBox;