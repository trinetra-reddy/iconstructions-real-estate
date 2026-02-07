import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { PropertyDetail } from './pages/PropertyDetail';
import { Services } from './pages/Services';
import { InteriorDesign } from './pages/InteriorDesign';
import { Contact } from './pages/Contact';
import { PropertiesInAnantapur } from './pages/PropertiesInAnantapur';
import { PropertiesInHyderabad } from './pages/PropertiesInHyderabad';
import { PropertiesInKurnool } from './pages/PropertiesInKurnool';
import { PropertiesInKadapa } from './pages/PropertiesInKadapa';
import { VillasInAnantapur } from './pages/VillasInAnantapur';
import { FlatsInAnantapur } from './pages/FlatsInAnantapur';
import { CommercialPropertyAnantapur } from './pages/CommercialPropertyAnantapur';

// ScrollToTop component to handle scroll restoration on route changes
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<PropertyDetail />} />
        <Route path="/services" element={<Services />} />
        <Route path="/interior-design" element={<InteriorDesign />} />
        <Route path="/contact" element={<Contact />} />

        {/* Location-Specific Pages for SEO */}
        <Route path="/properties-in-anantapur" element={<PropertiesInAnantapur />} />
        <Route path="/properties-in-hyderabad" element={<PropertiesInHyderabad />} />
        <Route path="/properties-in-kurnool" element={<PropertiesInKurnool />} />
        <Route path="/properties-in-kadapa" element={<PropertiesInKadapa />} />

        {/* Property Type Specific Pages for SEO */}
        <Route path="/villas-in-anantapur" element={<VillasInAnantapur />} />
        <Route path="/flats-in-anantapur" element={<FlatsInAnantapur />} />
        <Route path="/commercial-property-anantapur" element={<CommercialPropertyAnantapur />} />
      </Routes>
    </Router>
  );
};

export default App;
