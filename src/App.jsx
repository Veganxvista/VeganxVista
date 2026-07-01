import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Navbar        from './components/layout/Navbar';
import Footer        from './components/layout/Footer';

import Home          from './pages/Home';
import Order         from './pages/Order';
// import ProductDetail from './pages/ProductDetail';
import About         from './pages/About';
// import Contact       from './pages/Contact';
import Blog          from './pages/Blog';
import NotFound      from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [pathname]);
  return null;
}

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/"              element={<Layout><Home /></Layout>} />
        <Route path="/about"         element={<Layout><About /></Layout>} />
        <Route path="/blog"          element={<Layout><Blog /></Layout>} />
        <Route path="/blog/:slug"    element={<Layout><Blog /></Layout>} />
        <Route path="/order"         element={<Layout><Order /></Layout>} />
        {/* <Route path="/order/:slug"   element={<Layout><ProductDetail /></Layout>} />  */}
        {/* Legacy /products redirect */}
        {/* <Route path="/products"      element={<Layout><Order /></Layout>} />
        <Route path="/products/:slug" element={<Layout><ProductDetail /></Layout>} />
        <Route path="/contact"       element={<Layout><Contact /></Layout>} /> */}
        <Route path="*"              element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
