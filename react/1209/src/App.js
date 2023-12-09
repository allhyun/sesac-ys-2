import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import Homepage from './pages/Homepage';
import Productspage from './pages/Productspage';
import NotFoundPage from './pages/Notfound'
import ProductDetail from './pages/ProductDetail';
import PracPhotos from './pages/PracPhotos';
import PrPhoto from './pages/PrPhoto'


function App() {
  return (
 <>
   <BrowserRouter>
        {/* Routes, Route 감싸야 함. */}
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/products" element={<Productspage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/photos" element={<PracPhotos />} />
            <Route path="/photo/:id" element={<PrPhoto />} />

            <Route path="*" element={<NotFoundPage />} />

            
          </Routes>
        </main>
      </BrowserRouter>
    </>

  );
}

export default App;
