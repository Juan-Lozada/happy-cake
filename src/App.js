import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactView from './views/ContactView';
import HomeView from './views/HomeView';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/contact" element={<ContactView />} />
        </Routes>
        <FooterComponent/>
      </BrowserRouter>
    </>
  );
}

export default App;
