import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import Rent from './modules/rent/Rent';
import Navbar from './modules/navbar/Navbar';
import Contact from './modules/contact/Contact';
import Selling from './modules/sell/Selling';
import About from './modules/about/About';
import BlogPage from './modules/blog/BlogPage';
import InteriorServices from './modules/interior&furniture/InteriorService';
import Furniture from './modules/furniture-app/Furniture';
import WishList from './modules/wishlist/WishList';
import SofaExpandedView from './modules/furniture-app/SofaExpandedView';
import Checkout from './modules/checkout/Checkout';


function Router() {
  return (
    <BrowserRouter>
      <div className='bg-[#f3f4f6] p-2'>
        <Navbar />
      </div>
      
      <Routes>
        {/* Redirect from root path ("/") to "/about" */}
        <Route path="/" element={<Navigate replace to="/about" />} />

        {/* Define individual routes */}
        <Route path="/property" element={<Rent />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sell" element={<Selling />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/wishlist" element={<WishList />} />
        
        <Route path="/sofa/:id" element={<SofaExpandedView/>} />
        <Route path="/checkout" element={<Checkout />} />
        
        <Route path="/interior-services" element={<InteriorServices />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
