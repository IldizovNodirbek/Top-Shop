import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeCategories } from '../../store/slices/uiSlice';
import { Link } from 'react-router-dom';

const categories = [
  { slug: 'electronics', name: 'Electronics', icon: '💡' },
  { slug: 'home-appliances', name: 'Home appliances', icon: '🏠' },
  { slug: 'clothing', name: 'Clothing', icon: '👗' },
  { slug: 'shoes', name: 'Shoes', icon: '👟' },
  { slug: 'accessories', name: 'accessories', icon: '👜' },
  { slug: 'beauty-and-care', name: 'Beauty and care', icon: '💄' },
  { slug: 'health', name: 'Health', icon: '🩺' },
  { slug: 'household-goods', name: 'Household goods', icon: '🧽' },
  { slug: 'automotive-products', name: 'Automotive products', icon: '🚗' },
  { slug: 'childrens-goods', name: "children's goods", icon: '🧸' },
  { slug: 'hobbies-and-creativity', name: 'hobbies and creativity', icon: '🎨' },
  { slug: 'sports-and-leisure', name: 'sports and leisure', icon: '🏀' },
  { slug: 'food-products', name: 'food products', icon: '🍔' },
  { slug: 'household-chemicals', name: 'household chemicals', icon: '🧴' },
  { slug: 'books', name: 'books', icon: '📚' },
  { slug: 'pet-products', name: 'pet products', icon: '🐾' },
];

const CategoriesModal = () => {
  const show = useSelector((s) => s.ui.showCategories);
  const dispatch = useDispatch();
  if (!show) return null;
  return (
    <div className="sticky top-[56px] z-40">
      <div className="bg-[#0b1220] border-b border-white/10 shadow-2xl">
        <div className="max-w-[1200px] mx-auto px-5 py-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {categories.map((c) => (
            <Link key={c.slug} to={`/category/${c.slug}`} onClick={() => dispatch(closeCategories())} className="group">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 h-full flex items-center gap-3 hover:border-[#ff7a18]/60 hover:bg-[#ff7a18]/10 transition">
                <span className="text-xl">{c.icon}</span>
                <span className="text-zinc-200 font-semibold capitalize group-hover:text-white">{c.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesModal;
