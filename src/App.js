import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { ServicesPage } from './pages/ServicesPage';
import { About } from './pages/About';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;