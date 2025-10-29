 import React from 'react';
 import { useSelector } from 'react-redux';
 import ProductCard from './ProductCard';
 import { makeSelectByCategory, makeSelectByQuery } from '../../store/slices/productsSlice';

 const ProductsGrid = ({ title = 'Mixed Picks For You', category }) => {
  const selectByQuery = React.useMemo(() => makeSelectByQuery(), []);
  const selectByCategory = React.useMemo(() => makeSelectByCategory(), []);
  const items = useSelector((state) => category ? selectByCategory(state, category) : selectByQuery(state));

  return (
    <section className="py-7" aria-label="Products">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-white text-xl font-black mt-2 mb-4">{title}</h2>
        <div className="grid grid-cols-12 gap-4">
          {items.map((p) => (
            <div key={p.id} className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
 };

 export default ProductsGrid;
