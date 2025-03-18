
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="text-navy-800 font-display text-xl md:text-2xl font-bold">
            Dr. Jonathan Blake
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <a href="#about" className="nav-link">About</a>
              <a href="#research" className="nav-link">Research</a>
              <a href="#teaching" className="nav-link">Teaching</a>
              <a href="#speaking" className="nav-link">Speaking</a>
              <a href="#contact" className="nav-link">Contact</a>
            </nav>
            <Button className="bg-navy-700 hover:bg-navy-800 text-white">
              Schedule a Meeting
            </Button>
          </div>
          
          <button className="md:hidden" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform ${
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } pt-20`}>
        <nav className="flex flex-col items-center space-y-6 pt-8">
          <a href="#about" className="nav-link text-xl" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#research" className="nav-link text-xl" onClick={() => setMobileMenuOpen(false)}>Research</a>
          <a href="#teaching" className="nav-link text-xl" onClick={() => setMobileMenuOpen(false)}>Teaching</a>
          <a href="#speaking" className="nav-link text-xl" onClick={() => setMobileMenuOpen(false)}>Speaking</a>
          <a href="#contact" className="nav-link text-xl" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          <Button className="bg-navy-700 hover:bg-navy-800 text-white mt-6">
            Schedule a Meeting
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
