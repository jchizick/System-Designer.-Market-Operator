import React from 'react';

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border-subtle pt-4 flex flex-col md:flex-row justify-between items-center font-mono text-[10px] text-text-secondary w-full max-w-5xl mx-auto gap-4">
      <div className="text-accent-green">SHUTDOWN / EXIT NODE</div>
      <div>BUILT FOR SIGNAL. NOT FOR NOISE.</div>
      <div className="flex gap-4">
        <a href="#" className="hover:text-text-primary transition-colors">[ CONTACT ]</a>
        <a href="#" className="hover:text-text-primary transition-colors">[ LINKEDIN ]</a>
        <a href="#" className="hover:text-text-primary transition-colors">[ X ]</a>
      </div>
    </footer>
  );
}
