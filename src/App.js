
import './App.css';
import Banner from './components/banner/Banner';
import Navigation from './components/navigation/Navigation';
import ProductsPage from './pages/products/ProductsPage';

import Slider from './components/slider/Slider';


function App() {
  return (
    <div className="App">
    <Navigation/>
    <Banner/>
    <Slider/>
    <ProductsPage/>
    
    
    </div>
  );
}

export default App;
