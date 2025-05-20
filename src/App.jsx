import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Products from './components/products/products'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import TopProducts from './components/TopProducts/TopProducts';

const App = () => {
  React.useEffect(() => {
  // Initialize AOS (Animate On Scroll) library
  AOS.init({
    offset: 100,
    duration: 800,
    easing: 'ease-in-sine',
    delay: 100,
  }); 
  AOS.refresh();
}, []);

  return (
    <div>
     <Navbar/>
      <Hero/>
      <Products/>
      <TopProducts/>
    </div>
  );
};

export default App
