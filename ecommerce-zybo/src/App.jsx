import './App.css';
import Banner from './Components/Banner/Banner';
import Categories from './Components/Categories/Categories';
import Community from './Components/Community/Community';
import Enquire from './Components/Enquire/Enquire';
import Footer from './Components/Footer/Footer';

import OurServices from './Components/OurServices/OurServices';
import ProductReview from './Components/ProductReview/ProductReview';
import RecentProducts from './Components/RecentProducts/RecentProducts';
import SubCategories from './Components/SubCategories/SubCategories';
import Testimonials from './Components/Testimonials/Testimonials';


function App() {
  return (
    <>
      <Banner />
      <RecentProducts/>
      <ProductReview/>
      <OurServices/>
      <Community/>
      <Testimonials/>
      <Enquire/>
      <Categories/>
      <SubCategories/>
      <Footer/>
    </>
  )
}

export default App
