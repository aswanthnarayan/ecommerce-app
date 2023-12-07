import './App.css';
import Banner from './Components/Banner/Banner';
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
    </>
  )
}

export default App
