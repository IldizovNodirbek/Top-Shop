import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCategories } from '../../store/slices/uiSlice';
import { setQuery } from '../../store/slices/searchSlice';
import { selectCartCount } from '../../store/slices/cartSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const query = useSelector((s) => s.search.query);
  const navigate = useNavigate();
  const ORANGE = '#ff7a18';

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0b1220e6] backdrop-blur border-b border-white/5">
      <div className="max-w-[1200px] mx-auto px-5 py-3.5 flex items-center justify-between gap-4">
        <Link to="/" className="inline-flex items-baseline gap-1.5 font-black tracking-[1px] -skew-x-12 select-none" aria-label="TOP SHOP">
          <span className="text-white text-[26px] drop-shadow-[0_2px_12px_rgba(255,122,24,0.35)]">TOP</span>
          <span className="text-[26px] bg-gradient-to-r from-[#ff7a18] to-[#ff6a00] bg-clip-text text-transparent drop-shadow-[0_2px_6px_rgba(255,122,24,0.35)]">SHOP</span>
        </Link>
        <div className="flex items-center gap-3 w-full max-w-[680px]">
          <button onClick={() => dispatch(toggleCategories())} className="px-3 py-2 rounded-xl font-bold border border-white/15 bg-white/5 text-white hover:border-[#ff7a18]/60 hover:bg-[#ff7a18]/10 transition">
            Categories
          </button>
          <form onSubmit={handleSearchSubmit} className="flex-1 relative">
            <input
              value={query}
              onChange={(e)=>dispatch(setQuery(e.target.value))}
              className="w-full bg-white/5 border border-white/10 text-white px-3 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff7a18]/60"
              placeholder="Search for products..."
            />
            <button type="submit" className="absolute right-1 top-1 bottom-1 px-3 rounded-lg font-semibold text-white" style={{background: ORANGE}}>Search</button>
          </form>
        </div>
        <nav className="flex items-center gap-2" aria-label="Primary">
          <NavLink to="/" className={({isActive})=>`text-zinc-200 font-semibold px-3 py-2 rounded-xl hover:bg-white/10 transition text-sm ${isActive? 'ring-2 ring-[#ff7a18]/60':''}`}>Home</NavLink>
          <NavLink to="/faq" className={({isActive})=>`text-zinc-200 font-semibold px-3 py-2 rounded-xl hover:bg-white/10 transition text-sm ${isActive? 'ring-2 ring-[#ff7a18]/60':''}`}>FAQ</NavLink>
          <button className="px-3 py-2 rounded-xl font-bold text-white border border-white/10 bg-white/5">Sign Up</button>
          <button className="relative px-3 py-2 rounded-xl font-bold text-white border border-white/10 bg-white/5">
            Cart
            {cartCount>0 && (<span className="absolute -top-2 -right-2 bg-[#ff7a18] text-white text-xs px-2 py-0.5 rounded-full">{cartCount}</span>)}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
