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
      staggerChildren: 0.1, 
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 }, 
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5, 
      ease: "easeOut",
    },
  },
};

const formItemVariants = {
  hidden: { opacity: 0, x: -10 }, 
  visible: {
      opacity: 1,
      x: 0,
      transition: {
          duration: 0.35, 
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
        className="py-16 sm:py-20 md:py-24 lg:py-32 bg-slate-50 dark:bg-gray-900 overflow-hidden relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        <motion.div
          className="text-center mb-12 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold sm:font-extrabold text-slate-900 dark:text-slate-100 mb-3 sm:mb-4 flex items-center justify-center gap-2 sm:gap-3">
             <MessageSquareQuote size={28} className="text-indigo-600 dark:text-indigo-400 sm:w-8 sm:h-8" />
             Get In Touch
          </h2>
          <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400 mx-auto rounded-full" />
        </motion.div>

        <motion.div
            className="grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className="lg:col-span-5 space-y-5 sm:space-y-6" variants={itemVariants}>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out using the form or contact details below.
            </p>

            <div className="space-y-4 sm:space-y-5">
              {contactDetails.map((item) => {
                const colors = colorClasses[item.color as keyof typeof colorClasses] || colorClasses.indigo;
                return (
                  <motion.div
                    key={item.title}
                    className={cn(
                        "flex items-start p-4 rounded-lg sm:rounded-xl shadow-sm sm:shadow-md border transition-shadow hover:shadow-lg",
                        "bg-white dark:bg-slate-800/50 border-slate-100 dark:border-slate-700/50"
                    )}
                    whileHover={{ y: -3 }} 
                  >
                    <div className={cn(
                        "flex-shrink-0 w-10 h-10 rounded-md sm:rounded-lg mr-3 flex items-center justify-center",
                        colors.bg
                    )}>
                      <item.icon size={18} className={cn(colors.text, "sm:w-5 sm:h-5")} />
                    </div>
                    <div className="flex-1 min-w-0"> 
                      <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100 mb-0.5">{item.title}</h3>
                      {item.href ? (
                         <a href={item.href} className={cn(
                             "text-sm text-slate-600 dark:text-slate-300 transition-colors duration-200 break-words", 
                             colors.hoverText
                         )}>
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-slate-600 dark:text-slate-300 break-words">{item.value}</p> 
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Form Column */}
          <motion.div className="lg:col-span-7" variants={itemVariants}>
            <div className={cn(
                "p-5 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl shadow-lg dark:shadow-xl border",
                "bg-white dark:bg-slate-800/50 border-slate-100 dark:border-slate-700/50"
             )}>
               <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center justify-center text-center py-6 sm:py-8"
                    aria-live="polite"
                  >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                    >
                        <CheckCircle size={40} className="text-green-500 dark:text-green-400 mb-3 sm:mb-4 sm:w-12 sm:h-12" />
                    </motion.div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-2">Message Sent Successfully!</h3>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xs sm:max-w-sm">
                      Thank you for getting in touch. I'll respond as soon as possible.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-4 sm:space-y-5" 
                      variants={{ visible: { transition: { staggerChildren: 0.06 } } }} 
                      initial="hidden"
                      animate="visible"
                      exit={{ opacity: 0 }}
                  >
                    <motion.div variants={formItemVariants}>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
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
                            "w-full px-3.5 py-2 sm:px-4 sm:py-2.5 text-sm border rounded-md sm:rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 dark:focus:ring-offset-slate-800 transition duration-200 ease-in-out",
                            "border-slate-300 dark:border-slate-600 focus:ring-indigo-500/50 focus:border-indigo-500 dark:focus:border-indigo-400",
                            "bg-slate-50/50 dark:bg-slate-700/30 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500"
                         )}
                      />
                    </motion.div>

                    <motion.div variants={formItemVariants}>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
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
                            "w-full px-3.5 py-2 sm:px-4 sm:py-2.5 text-sm border rounded-md sm:rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 dark:focus:ring-offset-slate-800 transition duration-200 ease-in-out",
                            "border-slate-300 dark:border-slate-600 focus:ring-indigo-500/50 focus:border-indigo-500 dark:focus:border-indigo-400",
                            "bg-slate-50/50 dark:bg-slate-700/30 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500"
                         )}
                      />
                    </motion.div>

                    <motion.div variants={formItemVariants}>
                      <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
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
                            "w-full px-3.5 py-2 sm:px-4 sm:py-2.5 text-sm border rounded-md sm:rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 dark:focus:ring-offset-slate-800 transition duration-200 ease-in-out",
                            "border-slate-300 dark:border-slate-600 focus:ring-indigo-500/50 focus:border-indigo-500 dark:focus:border-indigo-400",
                            "bg-slate-50/50 dark:bg-slate-700/30 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500"
                         )}
                      />
                    </motion.div>

                    <motion.div variants={formItemVariants}>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formState.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell me about your project or inquiry..."
                         className={cn(
                            "w-full px-3.5 py-2 sm:px-4 sm:py-2.5 text-sm border rounded-md sm:rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 dark:focus:ring-offset-slate-800 transition duration-200 ease-in-out resize-y min-h-[100px] sm:min-h-[120px]", 
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
                          "w-full px-5 py-2.5 text-sm font-semibold rounded-lg shadow-md transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-800 focus:ring-indigo-500 dark:focus:ring-indigo-400",
                          isSubmitting
                            ? "bg-slate-400 dark:bg-slate-600 text-slate-600 dark:text-slate-400 cursor-not-allowed"
                            : "bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-700 dark:to-purple-700 text-white transform hover:-translate-y-1 hover:shadow-lg"
                        )}
                        whileHover={!isSubmitting ? { scale: 1.03 } : {}}
                        whileTap={!isSubmitting ? { scale: 0.97 } : {}}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 size={16} className="animate-spin mr-1.5" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message <Send size={14} className="ml-1" />
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