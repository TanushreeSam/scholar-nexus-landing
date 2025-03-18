
import { useEffect } from 'react';
import { BookOpen, Award, BookMarked } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SectionObserver from '@/components/SectionObserver';
import Navbar from '@/components/Navbar';

const Biography = () => {
  useEffect(() => {
    document.title = "Dr. Jonathan Blake | Full Biography";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 py-8">
        <SectionObserver>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-8">Full Biography</h1>
            
            <div className="prose prose-lg max-w-none space-y-6 text-navy-700">
              <p>
                Dr. Jonathan Blake is a distinguished Professor of Quantum Computing at Stanford University, where he leads groundbreaking research in quantum algorithms and their applications in artificial intelligence. With over two decades of experience in the field, he has established himself as a leading authority in quantum computing education and research.
              </p>

              <p>
                After completing his undergraduate studies in Physics and Mathematics at the California Institute of Technology, Dr. Blake pursued his graduate studies at Stanford University, earning his M.S. in Computer Science. He later received his Ph.D. from the Massachusetts Institute of Technology, where his doctoral research focused on quantum complexity theory and its implications for modern computing paradigms.
              </p>

              <h2 className="text-2xl font-bold text-navy-800 mt-12 mb-4">Academic Career</h2>
              <p>
                Before joining Stanford's faculty, Dr. Blake held research positions at UC Berkeley and IBM's Quantum Computing Research Laboratory. His work at IBM was instrumental in developing new quantum error correction techniques that have become standard in the field. At Stanford, he has built a world-class research group focusing on quantum algorithms and their practical applications.
              </p>

              <h2 className="text-2xl font-bold text-navy-800 mt-12 mb-4">Research Impact</h2>
              <p>
                Throughout his career, Dr. Blake has published over 150 papers in leading journals and conferences, accumulating more than 4,000 citations. His research spans multiple areas of quantum computing, including quantum machine learning, error correction, and quantum cryptography. He has supervised more than 25 Ph.D. students, many of whom now hold prestigious positions in academia and industry.
              </p>

              <Card className="p-6 my-8">
                <h3 className="text-xl font-bold text-navy-800 mb-4">Key Research Areas</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <BookOpen className="h-5 w-5 text-gold-500 mt-1 mr-3" />
                    <span>Quantum Algorithms & Complexity Theory</span>
                  </li>
                  <li className="flex items-start">
                    <BookOpen className="h-5 w-5 text-gold-500 mt-1 mr-3" />
                    <span>Quantum Machine Learning Applications</span>
                  </li>
                  <li className="flex items-start">
                    <BookOpen className="h-5 w-5 text-gold-500 mt-1 mr-3" />
                    <span>Post-Quantum Cryptography</span>
                  </li>
                  <li className="flex items-start">
                    <BookOpen className="h-5 w-5 text-gold-500 mt-1 mr-3" />
                    <span>Quantum Error Correction</span>
                  </li>
                </ul>
              </Card>

              <h2 className="text-2xl font-bold text-navy-800 mt-12 mb-4">Awards and Recognition</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="flex items-start">
                  <Award className="h-5 w-5 text-gold-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-bold">Quantum Computing Innovation Award</h4>
                    <p className="text-sm text-navy-600">International Quantum Computing Society</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="h-5 w-5 text-gold-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-bold">NSF CAREER Award</h4>
                    <p className="text-sm text-navy-600">National Science Foundation</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-navy-800 mt-12 mb-4">Education</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <BookMarked className="h-5 w-5 text-navy-700 mt-1 mr-3" />
                  <div>
                    <h4 className="font-bold">Ph.D. Computer Science</h4>
                    <p className="text-sm text-navy-600">Massachusetts Institute of Technology</p>
                    <p className="text-sm text-navy-600">Thesis: "Quantum Complexity Theory and its Applications in Modern Computing"</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <BookMarked className="h-5 w-5 text-navy-700 mt-1 mr-3" />
                  <div>
                    <h4 className="font-bold">M.S. Computer Science</h4>
                    <p className="text-sm text-navy-600">Stanford University</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <BookMarked className="h-5 w-5 text-navy-700 mt-1 mr-3" />
                  <div>
                    <h4 className="font-bold">B.S. Physics & Mathematics</h4>
                    <p className="text-sm text-navy-600">California Institute of Technology</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <Button 
                onClick={() => window.history.back()} 
                variant="outline" 
                className="border-navy-700 text-navy-700 hover:bg-navy-50"
              >
                Back to Home
              </Button>
            </div>
          </div>
        </SectionObserver>
      </div>
    </div>
  );
};

export default Biography;
