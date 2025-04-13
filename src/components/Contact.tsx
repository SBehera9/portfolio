
import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      // Reset success message after a delay
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div>
            <p className="text-gray-700 mb-8">
              I'm currently available for freelance work and full-time positions. If you have a project that you want to get started,
              think you need my help with something, or just want to say hi, feel free to contact me.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail size={20} className="mt-1 text-teal mr-4" />
                <div>
                  <h3 className="text-lg font-medium text-navy">Email</h3>
                  <a href="mailto:sudarshanbehera808080@gmail.com" className="text-gray-700 hover:text-teal transition-colors">
                    sudarshanbehera808080@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone size={20} className="mt-1 text-teal mr-4" />
                <div>
                  <h3 className="text-lg font-medium text-navy">Phone</h3>
                  <a href="tel:+918328873021" className="text-gray-700 hover:text-teal transition-colors">
                    +91 8328873021
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin size={20} className="mt-1 text-teal mr-4" />
                <div>
                  <h3 className="text-lg font-medium text-navy">Location</h3>
                  <p className="text-gray-700">
                    Berhampur, Odisha, India
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-8">
                  <CheckCircle size={48} className="text-green-500 mb-4" />
                  <h3 className="text-xl font-medium text-navy mb-2">Message Sent!</h3>
                  <p className="text-gray-700 text-center">
                    Thank you for your message. I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="button-primary w-full flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        Send Message <Send size={18} className="ml-2" />
                      </>
                    )}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
