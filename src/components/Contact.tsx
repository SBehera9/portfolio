import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, CheckCircle, Loader2, MessageSquareQuote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const useToast = () => {
  const toast = ({ title, description, variant }: { title: string; description: string; variant?: 'default' | 'destructive' }) => {
    console.log(`Toast (${variant || 'default'}): ${title} - ${description}`);
    alert(`${title}\n${description}`); 
  };
  return { toast };
};

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const formItemVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: {
      opacity: 1,
      x: 0,
      transition: {
          duration: 0.4,
          ease: "easeOut"
      }
  }
};

const colorClasses = {
  indigo: {
    bg: 'bg-indigo-100 dark:bg-indigo-900/30',
    text: 'text-indigo-600 dark:text-indigo-400',
    hoverText: 'hover:text-indigo-700 dark:hover:text-indigo-300'
  },
  teal: {
    bg: 'bg-teal-100 dark:bg-teal-900/30',
    text: 'text-teal-600 dark:text-teal-400',
    hoverText: 'hover:text-teal-700 dark:hover:text-teal-300'
  },
  purple: {
    bg: 'bg-purple-100 dark:bg-purple-900/30',
    text: 'text-purple-600 dark:text-purple-400',
    hoverText: 'hover:text-purple-700 dark:hover:text-purple-300'
  }
};

const contactDetails = [
  { icon: Mail, color: 'indigo', title: 'Email', value: 'sudarshanbehera808080@gmail.com', href: 'mailto:sudarshanbehera808080@gmail.com' },
  { icon: Phone, color: 'teal', title: 'Phone', value: '+91 83288 73021', href: 'tel:+918328873021' },
  { icon: MapPin, color: 'purple', title: 'Location', value: 'Berhampur, Odisha, India', href: null }
];


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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Simulated submission successful:", formState);

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: '', email: '', subject: '', message: '' }); 
    toast({ 
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll be in touch soon.",
    });

    setTimeout(() => {
        setIsSubmitted(false);
    }, 6000);
  };

  return (
    <section
        id="contact"
        className="py-24 md:py-32 bg-slate-50 dark:bg-gray-900 overflow-hidden relative" 
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-slate-100 mb-4 flex items-center justify-center gap-3">
             <MessageSquareQuote size={40} className="text-indigo-600 dark:text-indigo-400" /> 
             Get In Touch
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400 mx-auto rounded-full" /> {/* Dark mode gradient */}
        </motion.div>

        <motion.div
            className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className="lg:col-span-5 space-y-8" variants={itemVariants}>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed"> {/* Dark mode text */}
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out using the form or contact details below.
            </p>

            <div className="space-y-6">
              {contactDetails.map((item) => {
                const colors = colorClasses[item.color as keyof typeof colorClasses] || colorClasses.indigo; 
                return (
                  <motion.div
                    key={item.title}
                    className={cn(
                        "flex items-start p-5 rounded-xl shadow-md border transition-shadow hover:shadow-lg",
                        "bg-white dark:bg-slate-800/50 border-slate-100 dark:border-slate-700/50" 
                    )}
                    whileHover={{ y: -4 }}
                  >
                    <div className={cn(
                        "flex-shrink-0 w-12 h-12 rounded-lg mr-4 flex items-center justify-center",
                        colors.bg 
                    )}>
                      <item.icon size={22} className={colors.text} /> 
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-0.5">{item.title}</h3>
                      {item.href ? (
                         <a href={item.href} className={cn(
                             "text-slate-600 dark:text-slate-300 transition-colors duration-200 break-words",
                             colors.hoverText 
                         )}>
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-slate-600 dark:text-slate-300 break-words">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div className="lg:col-span-7" variants={itemVariants}>
            <div className={cn(
                "p-8 md:p-10 rounded-2xl shadow-xl border",
                "bg-white dark:bg-slate-800/50 border-slate-100 dark:border-slate-700/50" 
             )}>
               <AnimatePresence mode="wait"> 
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center justify-center text-center py-10"
                    aria-live="polite" 
                  >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                    >
                        <CheckCircle size={60} className="text-green-500 dark:text-green-400 mb-5" /> 
                    </motion.div>
                    <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-3">Message Sent Successfully!</h3>
                    <p className="text-slate-600 dark:text-slate-300 max-w-sm"> 
                      Thank you for getting in touch. I appreciate your message and will respond as soon as possible.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-6"
                      variants={{ visible: { transition: { staggerChildren: 0.08 } } }} 
                      initial="hidden"
                      animate="visible"
                      exit={{ opacity: 0 }} 
                  >
                    <motion.div variants={formItemVariants}>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"> 
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                        placeholder="e.g., John Doe"
                        className={cn(
                            "w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 dark:focus:ring-offset-slate-800 transition duration-200 ease-in-out",
                            "border-slate-300 dark:border-slate-600 focus:ring-indigo-500/50 focus:border-indigo-500 dark:focus:border-indigo-400", // Dark mode border/focus
                            "bg-slate-50/50 dark:bg-slate-700/30 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500" // Dark mode bg/text/placeholder
                         )}
                      />
                    </motion.div>

                    <motion.div variants={formItemVariants}>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                        placeholder="e.g., john.doe@example.com"
                        className={cn(
                            "w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 dark:focus:ring-offset-slate-800 transition duration-200 ease-in-out",
                            "border-slate-300 dark:border-slate-600 focus:ring-indigo-500/50 focus:border-indigo-500 dark:focus:border-indigo-400",
                            "bg-slate-50/50 dark:bg-slate-700/30 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500"
                         )}
                      />
                    </motion.div>

                    <motion.div variants={formItemVariants}>
                      <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        placeholder="e.g., Project Inquiry"
                        className={cn(
                            "w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 dark:focus:ring-offset-slate-800 transition duration-200 ease-in-out",
                            "border-slate-300 dark:border-slate-600 focus:ring-indigo-500/50 focus:border-indigo-500 dark:focus:border-indigo-400",
                            "bg-slate-50/50 dark:bg-slate-700/30 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500"
                         )}
                      />
                    </motion.div>

                    <motion.div variants={formItemVariants}>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formState.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell me about your project or inquiry..."
                         className={cn(
                            "w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 dark:focus:ring-offset-slate-800 transition duration-200 ease-in-out resize-y min-h-[120px]",
                            "border-slate-300 dark:border-slate-600 focus:ring-indigo-500/50 focus:border-indigo-500 dark:focus:border-indigo-400",
                            "bg-slate-50/50 dark:bg-slate-700/30 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500"
                         )}
                      />
                    </motion.div>

                    <motion.div variants={formItemVariants}>
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className={cn(
                          "w-full px-7 py-3 text-base font-semibold rounded-lg shadow-md transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-800 focus:ring-indigo-500 dark:focus:ring-indigo-400",
                          isSubmitting
                            ? "bg-slate-400 dark:bg-slate-600 text-slate-600 dark:text-slate-400 cursor-not-allowed" // Dark mode submitting state
                            : "bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-700 dark:to-purple-700 text-white transform hover:-translate-y-1 hover:shadow-lg" // Dark mode default state
                        )}
                        whileHover={!isSubmitting ? { scale: 1.03 } : {}}
                        whileTap={!isSubmitting ? { scale: 0.97 } : {}}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 size={20} className="animate-spin mr-2" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message <Send size={18} className="ml-1" />
                          </>
                        )}
                      </motion.button>
                    </motion.div>
                  </motion.form>
                )}
               </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;