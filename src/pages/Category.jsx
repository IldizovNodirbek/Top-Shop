import React from 'react';
import { useParams } from 'react-router-dom';
import ProductsGrid from '../components/Products/ProductsGrid';

const Category = () => {
  const { slug } = useParams();
  return (
    <div className="pt-4">
      <div className="max-w-[1200px] mx-auto px-5">
        <h1 className="text-white text-2xl font-black mb-4 capitalize">{slug.replace(/-/g,' ')}</h1>
      </div>
      <ProductsGrid category={slug} title={`Category: ${slug.replace(/-/g,' ')}`} />
    </div>
  );
};

export default Category;
