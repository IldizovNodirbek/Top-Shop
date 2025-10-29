import { createSlice, createSelector } from '@reduxjs/toolkit';

const ORANGE = '#ff7a18';

const initialItems = [
  { id: 'p1', title: "Women's Classic Trench Coat", description: 'Elegant and water-resistant. Perfect for autumn and spring.', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop', price: 180, discountPrice: 129, rating: 4.5, category: 'clothing', liked: false },
  { id: 'p2', title: 'New-Season Sneakers', description: 'Breathable mesh upper, cushioned sole, everyday comfort.', image: 'https://images.unsplash.com/photo-1520256862855-398228c41684?q=80&w=1200&auto=format&fit=crop', price: 120, rating: 4.2, category: 'shoes', liked: false },
  { id: 'p3', title: 'Smartphone X12', description: 'Stunning OLED, pro camera system, all-day battery.', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35b5?q=80&w=1200&auto=format&fit=crop', price: 899, discountPrice: 799, rating: 4.7, category: 'electronics', liked: false },
  { id: 'p4', title: 'Noise-canceling Headphones', description: 'Immersive sound with ANC and low-latency mode.', image: 'https://images.unsplash.com/photo-1518442652658-7ca0c0f9808b?q=80&w=1200&auto=format&fit=crop', price: 249, rating: 4.6, category: 'electronics', liked: false },
  { id: 'p5', title: 'Minimalist Backpack', description: 'Water-resistant, 15" laptop pocket, travel-ready.', image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop', price: 89, rating: 4.1, category: 'accessories', liked: false },
  { id: 'p6', title: 'Cotton Tee Pack', description: 'Classic fit with durable stitching for daily wear.', image: 'https://images.unsplash.com/photo-1556909114-89f1e3554207?q=80&w=1200&auto=format&fit=crop', price: 99, rating: 4.3, category: 'clothing', liked: false },
];

export const categoryNames = [
  'electronics','home-appliances','clothing','shoes','accessories','beauty-and-care','health','household-goods','automotive-products','childrens-goods','hobbies-and-creativity','sports-and-leisure','food-products','household-chemicals','books','pet-products'
];

const productsSlice = createSlice({
  name: 'products',
  initialState: { items: initialItems, theme: { orange: ORANGE } },
  reducers: {
    toggleLike: (state, { payload: id }) => {
      const p = state.items.find((x) => x.id === id);
      if (p) p.liked = !p.liked;
    },
  },
});

export const { toggleLike } = productsSlice.actions;

export const selectAllProducts = (state) => state.products.items;
export const selectTheme = (state) => state.products.theme;

export const makeSelectByCategory = () => createSelector([
  selectAllProducts,
  (_, slug) => slug,
], (items, slug) => items.filter(p => p.category === slug));

export const makeSelectByQuery = () => createSelector([
  selectAllProducts,
  (state) => state.search.query,
], (items, q) => {
  if (!q) return items;
  const s = q.toLowerCase();
  return items.filter(p => p.title.toLowerCase().includes(s) || p.description.toLowerCase().includes(s));
});

export default productsSlice.reducer;
