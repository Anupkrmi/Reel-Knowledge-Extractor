import React from 'react';
import { BrainCircuit } from 'lucide-react';

const Navbar = () => (
  <nav className="navbar">
    <div className="nav-content">
      <div className="nav-brand">
        <BrainCircuit className="nav-icon" size={26} />
        <span>Reel Knowledge</span>
      </div>
      <span className="nav-badge">Beta</span>
    </div>
  </nav>
);

export default Navbar;