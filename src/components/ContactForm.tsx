
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      toast({
        title: "Message Sent",
        description: "Thank you for your message. I'll get back to you shortly.",
        duration: 5000,
      });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-navy-800">
            Name
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border-navy-200 focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all duration-300"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-navy-800">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border-navy-200 focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all duration-300"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="subject" className="block text-sm font-medium text-navy-800">
          Subject
        </label>
        <Input
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full border-navy-200 focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all duration-300"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-navy-800">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full border-navy-200 focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all duration-300"
        />
      </div>
      
      <Button
        type="submit"
        disabled={isSubmitting}
        className="bg-navy-700 hover:bg-navy-800 text-white py-2 px-6 rounded-md transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1 w-full md:w-auto"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
};

export default ContactForm;
