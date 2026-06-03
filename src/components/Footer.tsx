import React from 'react';
import { Link } from 'react-router-dom';

type FooterProps = {
  className?: string;
};

export function Footer({ className = 'max-w-5xl' }: FooterProps) {
  return (
    <footer className={`mt-auto border-t border-border-subtle pt-4 flex flex-col md:flex-row justify-between items-center text-mono-xs text-text-secondary w-full ${className} mx-auto gap-4`}>
      <Link to="/" className="text-emerald-500 hover:text-emerald-500/80 transition-colors cursor-pointer">SHUTDOWN / EXIT NODE</Link>
      <div>SYSTEMS OVER ASSETS. DURABILITY OVER DECORATION.</div>
      <div className="flex gap-4">
        <Link to="/contact" className="hover:text-text-primary transition-colors">[ CONTACT ]</Link>
        <a href="#" className="hover:text-text-primary transition-colors">[ LINKEDIN ]</a>
        <a href="#" className="hover:text-text-primary transition-colors">[ X ]</a>
      </div>
    </footer>
  );
}
