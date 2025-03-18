import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import SectionObserver from '@/components/SectionObserver';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import {
  Calendar,
  BookOpen,
  FileText,
  Award,
  ExternalLink,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Youtube,
  Download,
  MapPin,
  User,
  BookMarked,
} from 'lucide-react';

const Index = () => {
  useEffect(() => {
    document.title = "Dr. Jonathan Blake | Professor of Quantum Computing";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-navy-900/5"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/50 to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6 md:pr-12 animate-fade-in">
            <div className="inline-block bg-gold-500/20 backdrop-blur-sm border border-gold-500/30 px-3 py-1 rounded-full">
              <p className="text-navy-950 font-medium text-sm">Professor of Quantum Computing</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight">
              Dr. Jonathan <span className="text-navy-700">Blake</span>
            </h1>
            
            <p className="text-lg md:text-xl text-navy-700 max-w-xl font-serif">
              Pioneering the future of quantum computing research and education at Stanford University, with a focus on quantum algorithms and their applications in artificial intelligence.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-navy-700 hover:bg-navy-800 text-white">View Publications</Button>
              <Button variant="outline" className="border-navy-700 text-navy-700 hover:bg-navy-50">Contact Me</Button>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gold-500/20 rounded-lg blur"></div>
              <div className="relative overflow-hidden rounded-lg border border-navy-200 aspect-[4/5] bg-white shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                  alt="Dr. Jonathan Blake"
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-navy-100">
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-gold-500" />
                  <span className="text-navy-900 text-sm font-medium">20+ Years in Academia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
      </section>
      
      {/* Stats Banner */}
      <section className="py-8 bg-navy-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-navy-900">150+</p>
              <p className="text-navy-600 font-medium">Publications</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-navy-900">20</p>
              <p className="text-navy-600 font-medium">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-navy-900">4,000+</p>
              <p className="text-navy-600 font-medium">Citations</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-navy-900">25</p>
              <p className="text-navy-600 font-medium">PhD Students</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionObserver className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <h2 className="section-heading">About Me</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-navy-700">
                  I am a Professor of Quantum Computing at Stanford University, where I lead the Quantum Algorithms Research Group. My research focuses on developing novel quantum algorithms and investigating their applications in artificial intelligence, machine learning, and cryptography.
                </p>
                
                <p className="text-navy-700">
                  With over two decades of experience in quantum computing research, I have published more than 150 papers in leading journals and conferences. My work has been recognized with several awards, including the Quantum Computing Innovation Award and the NSF CAREER Award.
                </p>
                
                <p className="text-navy-700">
                  I received my Ph.D. in Computer Science from MIT, where I worked on quantum complexity theory. Before joining Stanford, I held positions at UC Berkeley and was a visiting researcher at IBM's Quantum Computing Research Lab.
                </p>
                
                <div className="pt-4 flex flex-wrap gap-4">
                  <Button variant="outline" className="border-navy-700 text-navy-700 hover:bg-navy-50 flex items-center gap-2" onClick={() => window.location.href = '/biography'}>
                    <User size={16} />
                    Full Biography
                  </Button>
                  <Button variant="outline" className="border-navy-700 text-navy-700 hover:bg-navy-50 flex items-center gap-2">
                    <Download size={16} />
                    Download CV
                  </Button>
                </div>
              </div>
            </div>
            
            <div>
              <div className="relative">
                <div className="absolute -left-3 top-10 w-20 h-20 bg-gold-500/20 rounded-full blur-xl"></div>
                <div className="absolute -right-6 bottom-10 w-32 h-32 bg-navy-500/10 rounded-full blur-xl"></div>
                
                <Card className="bg-white overflow-hidden">
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-navy-800">Areas of Expertise</h3>
                    
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 rounded-full bg-navy-100 flex items-center justify-center mr-3 mt-0.5">
                          <span className="h-2 w-2 rounded-full bg-navy-700"></span>
                        </span>
                        <span className="text-navy-700">Quantum Algorithms & Complexity Theory</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 rounded-full bg-navy-100 flex items-center justify-center mr-3 mt-0.5">
                          <span className="h-2 w-2 rounded-full bg-navy-700"></span>
                        </span>
                        <span className="text-navy-700">Quantum Machine Learning</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 rounded-full bg-navy-100 flex items-center justify-center mr-3 mt-0.5">
                          <span className="h-2 w-2 rounded-full bg-navy-700"></span>
                        </span>
                        <span className="text-navy-700">Post-Quantum Cryptography</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 rounded-full bg-navy-100 flex items-center justify-center mr-3 mt-0.5">
                          <span className="h-2 w-2 rounded-full bg-navy-700"></span>
                        </span>
                        <span className="text-navy-700">Quantum Computing Education</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 rounded-full bg-navy-100 flex items-center justify-center mr-3 mt-0.5">
                          <span className="h-2 w-2 rounded-full bg-navy-700"></span>
                        </span>
                        <span className="text-navy-700">Quantum Error Correction</span>
                      </li>
                    </ul>
                    
                    <Separator className="my-4" />
                    
                    <h3 className="text-xl font-bold text-navy-800">Education</h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 rounded-full bg-navy-100 flex items-center justify-center mr-3 mt-0.5">
                          <BookMarked size={12} className="text-navy-700" />
                        </span>
                        <div>
                          <p className="font-medium text-navy-800">Ph.D. Computer Science</p>
                          <p className="text-navy-600 text-sm">Massachusetts Institute of Technology</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 rounded-full bg-navy-100 flex items-center justify-center mr-3 mt-0.5">
                          <BookMarked size={12} className="text-navy-700" />
                        </span>
                        <div>
                          <p className="font-medium text-navy-800">M.S. Computer Science</p>
                          <p className="text-navy-600 text-sm">Stanford University</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 rounded-full bg-navy-100 flex items-center justify-center mr-3 mt-0.5">
                          <BookMarked size={12} className="text-navy-700" />
                        </span>
                        <div>
                          <p className="font-medium text-navy-800">B.S. Physics & Mathematics</p>
                          <p className="text-navy-600 text-sm">California Institute of Technology</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </SectionObserver>
        </div>
      </section>
      
      {/* Research & Publications Section */}
      <section id="research" className="py-20 md:py-24 bg-navy-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionObserver>
            <div className="text-center mb-12">
              <h2 className="section-heading">Research & Publications</h2>
              <p className="text-navy-700 max-w-2xl mx-auto mt-4">
                Exploring the frontiers of quantum computing through innovative research and collaboration.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="publication-card">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-navy-100 p-2 rounded-md">
                    <FileText className="h-5 w-5 text-navy-700" />
                  </div>
                  <span className="text-sm text-navy-500">2023</span>
                </div>
                
                <h3 className="text-lg font-bold text-navy-800 mb-2">Quantum Advantage in Machine Learning: A Comprehensive Survey</h3>
                <p className="text-navy-600 text-sm mb-4">Journal of Quantum Information Processing</p>
                
                <p className="text-navy-700 text-sm mb-4">
                  This survey explores quantum algorithms that provide provable advantages for machine learning tasks, with a focus on practical implementations.
                </p>
                
                <a href="#" className="inline-flex items-center text-navy-700 hover:text-navy-500 text-sm font-medium">
                  Read Paper <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </div>
              
              <div className="publication-card">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-navy-100 p-2 rounded-md">
                    <FileText className="h-5 w-5 text-navy-700" />
                  </div>
                  <span className="text-sm text-navy-500">2022</span>
                </div>
                
                <h3 className="text-lg font-bold text-navy-800 mb-2">Error Mitigation Techniques for NISQ-Era Quantum Computers</h3>
                <p className="text-navy-600 text-sm mb-4">Nature Quantum Information</p>
                
                <p className="text-navy-700 text-sm mb-4">
                  We present new techniques for mitigating errors in noisy intermediate-scale quantum computers, improving computational accuracy by up to 35%.
                </p>
                
                <a href="#" className="inline-flex items-center text-navy-700 hover:text-navy-500 text-sm font-medium">
                  Read Paper <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </div>
              
              <div className="publication-card">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-navy-100 p-2 rounded-md">
                    <FileText className="h-5 w-5 text-navy-700" />
                  </div>
                  <span className="text-sm text-navy-500">2021</span>
                </div>
                
                <h3 className="text-lg font-bold text-navy-800 mb-2">Quantum Algorithms for Optimization Problems in Finance</h3>
                <p className="text-navy-600 text-sm mb-4">Journal of Computational Finance</p>
                
                <p className="text-navy-700 text-sm mb-4">
                  This paper demonstrates quantum algorithms that provide quadratic speedups for portfolio optimization and risk analysis in financial markets.
                </p>
                
                <a href="#" className="inline-flex items-center text-navy-700 hover:text-navy-500 text-sm font-medium">
                  Read Paper <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Button className="inline-flex items-center space-x-2 bg-navy-700 hover:bg-navy-800 text-white transition-all duration-300">
                <span>View All Publications</span>
                <ExternalLink className="h-4 w-4" />
              </Button>
              
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a href="#" className="flex items-center gap-2 bg-white py-2 px-4 rounded-md shadow-sm hover:shadow-md transition-all duration-300">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_Scholar_logo.svg/1200px-Google_Scholar_logo.svg.png" alt="Google Scholar" className="h-5 w-5" />
                  <span className="text-navy-700 font-medium">Google Scholar</span>
                </a>
                
                <a href="#" className="flex items-center gap-2 bg-white py-2 px-4 rounded-md shadow-sm hover:shadow-md transition-all duration-300">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/ResearchGate_icon.svg/1200px-ResearchGate_icon.svg.png" alt="ResearchGate" className="h-5 w-5" />
                  <span className="text-navy-700 font-medium">ResearchGate</span>
                </a>
                
                <a href="#" className="flex items-center gap-2 bg-white py-2 px-4 rounded-md shadow-sm hover:shadow-md transition-all duration-300">
                  <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/orcid.svg" alt="ORCID" className="h-5 w-5" />
                  <span className="text-navy-700 font-medium">ORCID</span>
                </a>
              </div>
            </div>
          </SectionObserver>
        </div>
      </section>
      
      {/* Teaching & Courses Section */}
      <section id="teaching" className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionObserver>
            <div className="text-center mb-12">
              <h2 className="section-heading">Teaching & Courses</h2>
              <p className="text-navy-700 max-w-2xl mx-auto mt-4">
                Current and upcoming courses at Stanford University.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="course-card bg-white overflow-hidden">
                <div className="h-40 bg-navy-800 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="h-16 w-16 text-white/20" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="bg-gold-500/90 text-navy-900 text-xs font-medium px-2.5 py-1 rounded">Fall 2023</span>
                    <h3 className="text-white text-xl font-bold mt-2">CS 369Q: Quantum Computing</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-navy-700 mb-4">
                    An introduction to quantum computing algorithms, implementation, and potential applications. Covers quantum bits, gates, circuits, and complexity theory.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-navy-100 text-navy-700 text-xs px-2.5 py-1 rounded">Undergraduate</span>
                    <span className="bg-navy-100 text-navy-700 text-xs px-2.5 py-1 rounded">Graduate</span>
                    <span className="bg-navy-100 text-navy-700 text-xs px-2.5 py-1 rounded">3 Credits</span>
                  </div>
                  
                  <Button variant="outline" className="border-navy-700 text-navy-700 hover:bg-navy-50 w-full">
                    Course Details
                  </Button>
                </div>
              </div>
              
              <div className="course-card bg-white overflow-hidden">
                <div className="h-40 bg-navy-800 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="h-16 w-16 text-white/20" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="bg-gold-500/90 text-navy-900 text-xs font-medium px-2.5 py-1 rounded">Winter 2024</span>
                    <h3 className="text-white text-xl font-bold mt-2">CS 468Q: Quantum ML</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-navy-700 mb-4">
                    Advanced course exploring the intersection of quantum computing and machine learning, focusing on quantum neural networks and quantum data analysis.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-navy-100 text-navy-700 text-xs px-2.5 py-1 rounded">Graduate</span>
                    <span className="bg-navy-100 text-navy-700 text-xs px-2.5 py-1 rounded">4 Credits</span>
                  </div>
                  
                  <Button variant="outline" className="border-navy-700 text-navy-700 hover:bg-navy-50 w-full">
                    Course Details
                  </Button>
                </div>
              </div>
              
              <div className="course-card bg-white overflow-hidden">
                <div className="h-40 bg-navy-800 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="h-16 w-16 text-white/20" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="bg-gold-500/90 text-navy-900 text-xs font-medium px-2.5 py-1 rounded">Spring 2024</span>
                    <h3 className="text-white text-xl font-bold mt-2">CS 259Q: Quantum Computing Seminar</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-navy-700 mb-4">
                    Research seminar covering recent developments in quantum computing with guest speakers from academia and industry. Students present research papers.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-navy-100 text-navy-700 text-xs px-2.5 py-1 rounded">Graduate</span>
                    <span className="bg-navy-100 text-navy-700 text-xs px-2.5 py-1 rounded">2 Credits</span>
                  </div>
                  
                  <Button variant="outline" className="border-navy-700 text-navy-700 hover:bg-navy-50 w-full">
                    Course Details
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <Card className="bg-white p-6">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-bold text-navy-800 mb-2">Student Resources</h3>
                    <p className="text-navy-700 mb-4">
                      Access course materials, lecture notes, and research opportunities for students interested in quantum computing.
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                      <Button variant="outline" className="border-navy-700 text-navy-700 hover:bg-navy-50 flex items-center gap-2">
                        <Download size={16} />
                        Course Materials
                      </Button>
                      <Button variant="outline" className="border-navy-700 text-navy-700 hover:bg-navy-50 flex items-center gap-2">
                        <User size={16} />
                        Office Hours
                      </Button>
                    </div>
                  </div>
                  
                  <div className="md:w-1/3 bg-navy-50 p-4 rounded-lg">
                    <h4 className="font-bold text-navy-800 mb-2">Research Opportunities</h4>
                    <p className="text-navy-700 text-sm mb-3">
                      Looking for talented students to join our Quantum Algorithms Research Group.
                    </p>
                    <Button className="w-full bg-navy-700 hover:bg-navy-800 text-white">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </SectionObserver>
        </div>
      </section>
      
      {/* Speaking & Conferences Section */}
      <section id="speaking" className="py-20 md:py-24 bg-navy-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionObserver>
            <div className="text-center mb-12">
              <h2 className="section-heading">Speaking & Conferences</h2>
              <p className="text-navy-700 max-w-2xl mx-auto mt-4">
                Upcoming and recent speaking engagements and conferences.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h3 className="text-xl font-bold text-navy-800 mb-6">Upcoming Events</h3>
                
                <div className="space-y-6">
                  <div className="event-card">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="md:w-32 flex-shrink-0">
                        <div className="bg-navy-100 text-navy-700 rounded-md p-3 text-center">
                          <span className="block text-sm font-medium">OCT</span>
                          <span className="block text-2xl font-bold">15</span>
                          <span className="block text-sm">2023</span>
                        </div>
                      </div>
                      
                      <div className="flex-grow">
                        <h4 className="text-lg font-bold text-navy-800">International Quantum Computing Conference</h4>
                        <p className="text-navy-600 mb-2">Keynote Speaker</p>
                        <div className="flex items-center text-navy-500 text-sm mb-3">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>Zurich, Switzerland</span>
                        </div>
                        <p className="text-navy-700 text-sm">
                          "The Future of Quantum Algorithms: Beyond Quadratic Speedups"
                        </p>
                      </div>
                      
                      <div className="md:w-24 flex-shrink-0">
                        <Button variant="outline" className="border-navy-700 text-navy-700 hover:bg-navy-50 w-full">
                          Details
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="event-card">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="md:w-32 flex-shrink-0">
                        <div className="bg-navy-100 text-navy-700 rounded-md p-3 text-center">
                          <span className="block text-sm font-medium">NOV</span>
                          <span className="block text-2xl font-bold">8</span>
                          <span className="block text-sm">2023</span>
                        </div>
                      </div>
                      
                      <div className="flex-grow">
                        <h4 className="text-lg font-bold text-navy-800">Stanford Quantum Symposium</h4>
                        <p className="text-navy-600 mb-2">Panel Moderator</p>
                        <div className="flex items-center text-navy-500 text-sm mb-3">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>Stanford, CA</span>
                        </div>
                        <p className="text-navy-700 text-sm">
                          "Quantum Computing in Industry: Challenges and Opportunities"
                        </p>
                      </div>
                      
                      <div className="md:w-24 flex-shrink-0">
                        <Button variant="outline" className="border-navy-700 text-navy-700 hover:bg-navy-50 w-full">
                          Details
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="event-card">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="md:w-32 flex-shrink-0">
                        <div className="bg-navy-100 text-navy-700 rounded-md p-3 text-center">
                          <span className="block text-sm font-medium">JAN</span>
                          <span className="block text-2xl font-bold">22</span>
                          <span className="block text-sm">2024</span>
                        </div>
                      </div>
                      
                      <div className="flex-grow">
                        <h4 className="text-lg font-bold text-navy-800">Quantum Computing for Business Summit</h4>
                        <p className="text-navy-600 mb-2">Featured Speaker</p>
                        <div className="flex items-center text-navy-500 text-sm mb-3">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>New York, NY</span>
                        </div>
                        <p className="text-navy-700 text-sm">
                          "Quantum Machine Learning: From Theory to Practice"
                        </p>
                      </div>
                      
                      <div className="md:w-24 flex-shrink-0">
                        <Button variant="outline" className="border-navy-700 text-navy-700 hover:bg-navy-50 w-full">
                          Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-navy-800 mb-6">Featured Talks</h3>
                
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <ScrollArea className="h-[400px] p-4">
                    <div className="space-y-6">
                      <div className="group">
                        <div className="aspect-video rounded-md overflow-hidden bg-navy-200 mb-3 relative">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="h-12 w-12 rounded-full bg-navy-500/90 flex items-center justify-center text-white">
                              <YouTube className="h-6 w-6" />
                            </div>
                          </div>
                          <img
                            src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                            alt="Talk at TEDx"
                            className="object-cover h-full w-full opacity-50"
                          />
                        </div>
                        <h4 className="font-bold text-navy-800 group-hover:text-navy-600 transition-colors">
                          TEDx: The Quantum Revolution in Computing
                        </h4>
                        <p className="text-navy-600 text-sm">2.4M views • Mar 2023</p>
                      </div>
                      
                      <div className="group">
                        <div className="aspect-video rounded-md overflow-hidden bg-navy-200 mb-3 relative">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="h-12 w-12 rounded-full bg-navy-500/90 flex items-center justify-center text-white">
                              <YouTube className="h-6 w-6" />
                            </div>
                          </div>
                          <img
                            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                            alt="Conference talk"
                            className="object-cover h-full w-full opacity-50"
                          />
                        </div>
                        <h4 className="font-bold text-navy-800 group-hover:text-navy-600 transition-colors">
                          IBM Quantum Summit: Error Correction in NISQ Devices
                        </h4>
                        <p className="text-navy-600 text-sm">845K views • Nov 2022</p>
                      </div>
                      
                      <div className="group">
                        <div className="aspect-video rounded-md overflow-hidden bg-navy-200 mb-3 relative">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="h-12 w-12 rounded-full bg-navy-500/90 flex items-center justify-center text-white">
                              <YouTube className="h-6 w-6" />
                            </div>
                          </div>
                          <img
                            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                            alt="University lecture"
                            className="object-cover h-full w-full opacity-50"
                          />
                        </div>
                        <h4 className="font-bold text-navy-800 group-hover:text-navy-600 transition-colors">
                          Stanford CS Distinguished Lecture: Quantum Supremacy
                        </h4>
                        <p className="text-navy-600 text-sm">1.2M views • Apr 2022</p>
                      </div>
                    </div>
                  </ScrollArea>
                  
                  <div className="p-4 border-t border-navy-100">
                    <Button className="w-full bg-navy-700 hover:bg-navy-800 text-white">
                      View All Videos
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </SectionObserver>
        </div>
      </section>
      
      {/* Contact & Connect Section */}
      <section id="contact" className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionObserver>
            <div className="text-center mb-12">
              <h2 className="section-heading">Contact & Connect</h2>
              <p className="text-navy-700 max-w-2xl mx-auto mt-4">
                Get in touch for research collaborations, speaking engagements, or student inquiries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <Card className="bg-white p-6 mb-8">
                  <h3 className="text-xl font-bold text-navy-800 mb-4">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-navy-100 flex items-center justify-center mr-4">
                        <Mail className="h-5 w-5 text-navy-700" />
                      </div>
                      <div>
                        <p className="font-medium text-navy-800">Email</p>
                        <a href="mailto:jonathan.blake@stanford.edu" className="text-navy-600 hover:text-navy-500">
                          jonathan.blake@stanford.edu
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-navy-100 flex items-center justify-center mr-4">
                        <Phone className="h-5 w-5 text-navy-700" />
                      </div>
                      <div>
                        <p className="font-medium text-navy-800">Phone</p>
                        <a href="tel:+16505551234" className="text-navy-600 hover:text-navy-500">
                          (650) 555-1234
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-navy-100 flex items-center justify-center mr-4">
                        <MapPin className="h-5 w-5 text-navy-700" />
                      </div>
                      <div>
                        <p className="font-medium text-navy-800">Office</p>
                        <p className="text-navy-600">
                          Gates Computer Science Building<br />
                          Room 452<br />
                          Stanford University<br />
                          Stanford, CA 94305
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
                
                <Card className="bg-white p-6">
                  <h3 className="text-xl font-bold text-navy-800 mb-4">Connect Online</h3>
                  
                  <div className="flex flex-wrap gap-3">
                    <a href="#" className="flex items-center gap-2 bg-[#0077b5] text-white py-2 px-4 rounded-md hover:bg-[#0077b5]/90 transition-all duration-300">
                      <Linkedin className="h-5 w-5" />
                      <span>LinkedIn</span>
                    </a>
                    
                    <a href="#" className="flex items-center gap-2 bg-[#1DA1F2] text-white py-2 px-4 rounded-md hover:bg-[#1DA1F2]/90 transition-all duration-300">
                      <Twitter className="h-5 w-5" />
                      <span>Twitter</span>
                    </a>
                    
                    <a href="#" className="flex items-center gap-2 bg-navy-800 text-white py-2 px-4 rounded-md hover:bg-navy-700 transition-all duration-300">
                      <BookOpen className="h-5 w-5" />
                      <span>Google Scholar</span>
                    </a>
                  </div>
                </Card>
              </div>
              
              <div>
                <Card className="bg-white p-6">
                  <h3 className="text-xl font-bold text-navy-800 mb-6">Send a Message</h3>
                  
                  <ContactForm />
                </Card>
              </div>
            </div>
          </SectionObserver>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-navy-900 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Dr. Jonathan Blake</h3>
              <p className="text-navy-200 mb-4">
                Professor of Quantum Computing<br />
                Stanford University
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-gold-500 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-white hover:text-gold-500 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-white hover:text-gold-500 transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-navy-200 hover:text-white transition-colors">About</a></li>
                <li><a href="#research" className="text-navy-200 hover:text-white transition-colors">Research</a></li>
                <li><a href="#teaching" className="text-navy-200 hover:text-white transition-colors">Teaching</a></li>
                <li><a href="#speaking" className="text-navy-200 hover:text-white transition-colors">Speaking</a></li>
                <li><a href="#contact" className="text-navy-200 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-navy-200 hover:text-white transition-colors">Publications</a></li>
                <li><a href="#" className="text-navy-200 hover:text-white transition-colors">Courses</a></li>
                <li><a href="#" className="text-navy-200 hover:text-white transition-colors">Research Group</a></li>
                <li><a href="#" className="text-navy-200 hover:text-white transition-colors">Media Kit</a></li>
                <li><a href="#" className="text-navy-200 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Subscribe</h3>
              <p className="text-navy-200 mb-4">
                Stay updated with my latest research and upcoming events.
              </p>
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="rounded-r-none focus:ring-1 focus:ring-gold-500"
                />
                <Button className="rounded-l-none bg-gold-500 hover:bg-gold-600 text-navy-900">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-navy-700 mt-12 pt-6 text-center text-navy-300 text-sm">
            <p>© {new Date().getFullYear()} Dr. Jonathan Blake. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const YouTube = (props: any) => {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 18C11.4 18 10.8 18 10.2 17.9C8.80819 17.8893 7.39158 17.7858 6 17.6C4.6 17.4 3.8 16.5 3.7 15C3.5 13.6 3.4 12.3 3.4 11C3.4 9.7 3.5 8.4 3.7 7C3.9 5.6 4.6 4.6 6 4.4C7.39158 4.21419 8.80819 4.11067 10.2 4.1C11.5 4.1 12.8 4.1 14.1 4.3C15.5 4.5 16.2 5.4 16.4 6.9C16.6 8.3 16.7 9.6 16.7 10.9C16.7 12.2 16.6 13.5 16.4 14.9C16.2 16.4 15.5 17.2 14.1 17.4C13.4 17.8 12.7 17.9 12 18ZM10 8.5V13.5L14 11L10 8.5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Index;



