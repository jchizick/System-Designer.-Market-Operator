import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border-subtle pt-4 flex flex-col md:flex-row justify-between items-center text-mono-xs text-text-secondary w-full max-w-5xl mx-auto gap-4">
      <Link to="/" className="text-emerald-500 hover:text-emerald-500/80 transition-colors cursor-pointer">SHUTDOWN / EXIT NODE</Link>
      <div>BUILT FOR SIGNAL. NOT FOR NOISE.</div>
      <div className="flex gap-4">
        <a href="#" className="hover:text-text-primary transition-colors">[ CONTACT ]</a>
        <a href="#" className="hover:text-text-primary transition-colors">[ LINKEDIN ]</a>
        <a href="#" className="hover:text-text-primary transition-colors">[ X ]</a>
      </div>
    </footer>
  );
}
