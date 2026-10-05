import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { BackgroundBlobs } from './components/ui/BackgroundBlobs';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { BackToTop } from './components/ui/BackToTop';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="relative min-h-screen flex flex-col justify-between text-slate-800 dark:text-slate-100 overflow-x-hidden transition-colors duration-300">
          {/* Ambient Glowing Background */}
          <BackgroundBlobs />

          {/* Sticky Navigation */}
          <Navbar />

          {/* Page Routing */}
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>

          {/* Floating Back to Top Control */}
          <BackToTop />

          {/* Global Footer */}
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
