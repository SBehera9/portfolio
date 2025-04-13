import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
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
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto rounded-full" />
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-700 mb-8 text-lg">
              I'm currently available for freelance work and full-time positions. If you have a project that you want to get started,
              think you need my help with something, or just want to say hi, feel free to contact me.
            </p>
            
            <div className="space-y-6">
              <motion.div 
                className="flex items-start bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 bg-blue-100 rounded-lg mr-4">
                  <Mail size={20} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Email</h3>
                  <a href="mailto:sudarshanbehera808080@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                    sudarshanbehera808080@gmail.com
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 bg-teal-100 rounded-lg mr-4">
                  <Phone size={20} className="text-teal-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Phone</h3>
                  <a href="tel:+918328873021" className="text-gray-600 hover:text-teal-600 transition-colors">
                    +91 8328873021
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 bg-purple-100 rounded-lg mr-4">
                  <MapPin size={20} className="text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Location</h3>
                  <p className="text-gray-600">
                    Berhampur, Odisha, India
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-8"
                >
                  <CheckCircle size={48} className="text-green-500 mb-4" />
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 text-center">
                    Thank you for your message. I'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        Send Message <Send size={18} className="ml-2" />
                      </>
                    )}
                  </motion.button>
                </>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;