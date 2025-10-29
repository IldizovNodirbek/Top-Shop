import React from 'react';

const faqs = [
  { q: 'How do I track my order?', a: 'You can track your order from your account dashboard once shipped.' },
  { q: 'What is the return policy?', a: 'Returns accepted within 30 days in original condition.' },
  { q: 'Do you offer international shipping?', a: 'Yes, shipping rates calculated at checkout.' },
];

const FAQ = () => {
  return (
    <section className="py-10">
      <div className="max-w-[900px] mx-auto px-5">
        <h2 className="text-white text-3xl font-black mb-6">Frequently Asked Questions</h2>
        <ul className="space-y-4">
          {faqs.map((f, i) => (
            <li key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <h3 className="text-white font-bold mb-1">{f.q}</h3>
              <p className="text-zinc-300">{f.a}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
