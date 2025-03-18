
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white py-12 mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Contact</h3>
            <div className="space-y-3">
              <a href="mailto:jonathan.blake@stanford.edu" className="flex items-center gap-2 hover:text-gold-400">
                <Mail size={18} />
                jonathan.blake@stanford.edu
              </a>
              <p className="flex items-center gap-2">
                <Phone size={18} />
                (650) 123-4567
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={18} />
                Stanford, CA 94305
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#research" className="hover:text-gold-400">Research</a></li>
              <li><a href="#publications" className="hover:text-gold-400">Publications</a></li>
              <li><a href="#teaching" className="hover:text-gold-400">Teaching</a></li>
              <li><a href="#contact" className="hover:text-gold-400">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Follow</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gold-400"><Github size={24} /></a>
              <a href="#" className="hover:text-gold-400"><Linkedin size={24} /></a>
              <a href="#" className="hover:text-gold-400"><Twitter size={24} /></a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-navy-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Dr. Jonathan Blake. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
