import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Servicies from './pages/Servicies';
import Layout from './pages/Layout';

function App() {
  const cars = ["벤츠", "아우디", "현대", "기아", "쉐보레", "지엠", "KG모빌리티"];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
           <Route index element={<Home />} />
           <Route path="about" element={<About cars={cars} />} />
           <Route path="contact" element={<Contact />} />
           <Route path="servicies" element={<Servicies isService={true} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
