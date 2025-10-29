import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-10 border-t border-white/10 bg-[#0b1220]">
      <div className="max-w-[1200px] mx-auto px-5 py-8 grid gap-6 md:grid-cols-3">
        <div>
          <div className="inline-flex items-baseline gap-1.5 font-black -skew-x-12 select-none" aria-label="TOP SHOP">
            <span className="text-white text-[22px]">TOP</span>
            <span className="text-[22px] bg-gradient-to-r from-[#ff7a18] to-[#ff6a00] bg-clip-text text-transparent">SHOP</span>
          </div>
          <p className="text-zinc-400 mt-2">Your trusted marketplace with the hottest picks.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-2">Pages</h4>
          <nav className="flex flex-col gap-1 text-zinc-300">
            <Link to="/">Home</Link>
            <Link to="/faq">FAQ</Link>
          </nav>
        </div>
        <div>
          <h4 className="text-white font-bold mb-2">Support</h4>
          <p className="text-zinc-300">support@topshop.example</p>
        </div>
      </div>
      <div className="text-center text-zinc-500 text-sm py-4 border-t border-white/10">© {new Date().getFullYear()} TOP SHOP</div>
    </footer>
  );
};

export default Footer;
