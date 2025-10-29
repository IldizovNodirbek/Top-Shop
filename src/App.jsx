import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import CategoriesModal from './components/Categories/CategoriesModal'
import Home from './pages/Home'
import Category from './pages/Category'
import FAQ from './pages/FAQ'

function App() {
  return (
    <div className="min-h-screen bg-[#0b1220]">
      <Navbar />
      <CategoriesModal />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:slug" element={<Category />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App