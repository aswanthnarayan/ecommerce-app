import './App.css';
import Banner from './Components/Banner/Banner';
import Community from './Components/Community/Community';
import OurServices from './Components/OurServices/OurServices';
import ProductReview from './Components/ProductReview/ProductReview';
import RecentProducts from './Components/RecentProducts/RecentProducts';


function App() {
  return (
    <>
      <Banner />
      <RecentProducts/>
      <ProductReview/>
      <OurServices/>
      <Community/>
    </>
  )
}

export default App
