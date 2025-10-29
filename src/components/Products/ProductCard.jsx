import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice';
import { toggleLike, selectTheme } from '../../store/slices/productsSlice';

const Star = ({ filled }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? '#fbbf24' : 'none'} stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="12 2 15 8.5 22 9.3 17 14 18.3 21 12 17.8 5.7 21 7 14 2 9.3 9 8.5 12 2"></polygon>
  </svg>
);

const Heart = ({ active }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill={active ? '#ff7a18' : 'none'} stroke={active ? '#ff7a18' : 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

const formatCurrency = (n) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { orange } = useSelector(selectTheme);
  const [rating, setRating] = useState(product.rating || 4);
  const [comments, setComments] = useState(product.comments || []);
  const [commentText, setCommentText] = useState('');

  const monthly = useMemo(() => {
    if (!product.installments) return null;
    const { months, rate } = product.installments; // rate optional
    const base = product.discountPrice ?? product.price;
    const perMonth = Math.ceil((base * (1 + (rate || 0))) / months);
    return { months, perMonth };
  }, [product.installments, product.discountPrice, product.price]);

  const addComment = (e) => {
    e.preventDefault();
    const text = commentText.trim();
    if (!text) return;
    setComments((prev) => [...prev, { id: Date.now(), text }]);
    setCommentText('');
  };

  const filledStars = Math.round(rating);

  return (
    <article className="bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden shadow-xl flex flex-col" aria-label={product.title}>
      <div className="relative">
        <img className="w-full h-[220px] object-cover block" src={product.image} alt={product.title} loading="lazy" />
        {product.discountPrice && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-[#ff4d4d] to-[#ff7a18] text-white font-extrabold text-xs px-2.5 py-1 rounded-full shadow-[0_6px_16px_rgba(255,90,106,0.4)]">
            -{Math.round(((product.price - product.discountPrice) / product.price) * 100)}%
          </div>
        )}
        <button
          className={`absolute top-3 right-3 w-9 h-9 grid place-items-center rounded-full border ${product.liked ? 'bg-[#ff7a18]/20 border-[#ff7a18]/40' : 'bg-black/35 border-white/10'} text-white`}
          aria-pressed={product.liked}
          onClick={() => dispatch(toggleLike(product.id))}
        >
          <Heart active={product.liked} />
        </button>
      </div>

      <div className="p-3.5 text-zinc-100 flex flex-col gap-2.5">
        <h3 className="m-0 text-base font-extrabold">{product.title}</h3>
        <p className="m-0 text-sm text-zinc-400">{product.description}</p>

        <div className="flex items-center gap-2">
          {product.discountPrice ? (
            <>
              <span className="text-white font-black text-[1.05rem]">{formatCurrency(product.discountPrice)}</span>
              <span className="text-zinc-400 line-through">{formatCurrency(product.price)}</span>
            </>
          ) : (
            <span className="text-white font-extrabold">{formatCurrency(product.price)}</span>
          )}
        </div>
        {monthly && (
          <div className="text-sm text-slate-300">{monthly.months} x {formatCurrency(monthly.perMonth)} / month</div>
        )}

        <div className="flex items-center gap-1.5" role="radiogroup" aria-label="Rating">
          {[1,2,3,4,5].map((i) => (
            <button key={i} className="grid place-items-center p-0 bg-transparent border-0 cursor-pointer" onClick={() => setRating(i)} aria-checked={rating === i} role="radio">
              <Star filled={i <= filledStars} />
            </button>
          ))}
          <span className="text-xs text-zinc-400 ml-1">{rating.toFixed(1)}</span>
        </div>

        <div className="flex gap-2">
          <button className="px-3 py-2 rounded-xl font-extrabold text-white" style={{background: orange}} onClick={() => dispatch(addToCart(product.id))}>Add to Cart</button>
          <button className="px-3 py-2 rounded-xl font-bold border border-white/10 bg-white/5 text-white">Details</button>
        </div>

        <div className="mt-1.5">
          <form onSubmit={addComment} className="flex gap-2">
            <input
              type="text"
              placeholder="Leave a comment..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              aria-label="Comment"
              className="flex-1 bg-white/5 border border-white/10 text-white px-3 py-2 rounded-xl"
            />
            <button type="submit" className="px-3 py-2 rounded-xl border border-white/10 bg-[#1f2937] text-white">Post</button>
          </form>
          {comments.length > 0 && (
            <ul className="list-none mt-2 p-0 flex flex-col gap-1.5">
              {comments.map((c) => (
                <li key={c.id} className="bg-white/5 border border-white/10 px-2.5 py-2 rounded-xl">{c.text}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
