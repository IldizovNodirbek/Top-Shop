import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slidesData = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop',
    title: 'Mega Sale Week',
    subtitle: 'Up to 60% OFF',
    description:
      'Trending styles across Women, Men, and Kids. Limited time. Don\'t miss out!',
    badge: 'HOT',
    accent: '#ff7a18',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1520975922284-9e0ce9f1b2f4?q=80&w=1600&auto=format&fit=crop',
    title: 'New Arrivals',
    subtitle: 'Fresh & Mixed',
    description:
      'Handpicked new-season picks. Discover your next favorite outfit today.',
    badge: 'NEW',
    accent: '#ff6a00',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1600&auto=format&fit=crop',
    title: 'Back to School',
    subtitle: 'For Children',
    description:
      'Cute, comfy, and durable. Special bundles and discounts just for kids!',
    badge: 'SALE',
    accent: '#ff8a3d',
  },
];

const Carousel = ({ autoPlay = true, interval = 4500 }) => {
  const slides = useMemo(() => slidesData, []);
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const goTo = (i) => setIndex(i);

  useEffect(() => {
    if (!autoPlay) return;
    const t = setInterval(next, interval);
    return () => clearInterval(t);
  }, [autoPlay, interval, slides.length]);

  return (
    <section className="relative w-full h-[60vh] min-h-[340px] max-h-[620px] overflow-hidden bg-[#0b1220]" aria-label="Promotions">
      <AnimatePresence initial={false}>
        {slides.map((slide, i) => (
          i === index && (
            <motion.div
              key={slide.id}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${slides.length}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0" style={{
                backgroundImage:
                  'radial-gradient(1200px_500px_at_20%_50%,rgba(0,0,0,0.55),rgba(0,0,0,0.75)),linear-gradient(90deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.1)_60%)'
              }} />
              <div className="relative z-10 max-w-[1200px] mx-auto px-5 py-12 text-white">
                <div className="inline-block px-2.5 py-1 font-extrabold tracking-wider rounded-full backdrop-blur border-2" style={{ borderColor: slide.accent, color: slide.accent }}>
                  {slide.badge}
                </div>
                <h2 className="mt-3 mb-2 text-[clamp(28px,5vw,56px)] leading-tight drop-shadow">
                  <span className="font-black" style={{ color: slide.accent }}>{slide.subtitle}</span>
                  <br />
                  {slide.title}
                </h2>
                <p className="max-w-2xl text-zinc-200 mb-4">{slide.description}</p>
                <div className="flex gap-3">
                  <button className="px-4 py-2 font-extrabold rounded-xl text-white bg-gradient-to-r from-[#ff7a18] to-[#ff6a00]">Shop Now</button>
                  <button className="px-4 py-2 font-bold rounded-xl border border-white/25 bg-black/30 text-white backdrop-blur hover:bg-white/10">View Deals</button>
                </div>
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>

      <button className="absolute left-4 top-1/2 -translate-y-1/2 w-[42px] h-[42px] grid place-items-center rounded-full border border-white/25 bg-black/40 text-white text-2xl z-20" aria-label="Previous" onClick={prev}>
        ‹
      </button>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 w-[42px] h-[42px] grid place-items-center rounded-full border border-white/25 bg-black/40 text-white text-2xl z-20" aria-label="Next" onClick={next}>
        ›
      </button>

      <div className="absolute left-1/2 -translate-x-1/2 bottom-4 flex gap-2 z-20" role="tablist" aria-label="Select slide">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`w-[9px] h-[9px] rounded-full ${i === index ? 'bg-[#ff7a18]' : 'bg-white/50'}`}
            onClick={() => goTo(i)}
            role="tab"
            aria-selected={i === index}
            aria-controls={`slide-${i}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
