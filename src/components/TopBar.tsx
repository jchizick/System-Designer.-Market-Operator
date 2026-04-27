import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function TopBar() {
  const [time, setTime] = useState('');
  const [latency, setLatency] = useState(14);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toISOString().split('T')[1].substring(0, 8) + 'Z');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    
    const latencyInterval = setInterval(() => {
      setLatency(Math.floor(Math.random() * 5) + 12);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearInterval(latencyInterval);
    };
  }, []);

  return (
    <header className="flex justify-between items-center pb-3 border-b border-border-subtle mb-6 text-mono-xs text-text-secondary w-full max-w-5xl mx-auto">
      <div className="flex gap-6">
        <div className="flex items-center">
          <span className="text-emerald-500 mr-1">LATENCY:</span> {latency}MS
        </div>
        <div className="flex items-center">
          <span className="text-emerald-500 mr-1">STATUS:</span> ACTIVE
        </div>
        <div className="flex items-center">
          <span className="text-emerald-500 mr-1">SIGNAL:</span> 98.4%
        </div>
      </div>
      <div className="flex gap-6">
        <Link to="/about" className="hover:text-emerald-500 transition-colors cursor-pointer">ABOUT_OPERATOR</Link> // ACCESS_LEVEL_04
        <span className="hidden sm:inline-block">SYS_T: {time}</span>
      </div>
    </header>
  );
}
