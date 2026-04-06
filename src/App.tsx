import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import ServiceDetail from './pages/ServiceDetail';
import { serviceData } from './data/services';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Testimonials />} />
              <Route path="/about" element={<About />} />
              <Route path="/home" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Dynamic Service Routes */}
              {Object.entries(serviceData).map(([id, data]) => (
                <React.Fragment key={id}>
                  <Route 
                    path={`/services/${id}`} 
                    element={<ServiceDetail {...data} />} 
                  />
                </React.Fragment>
              ))}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}
