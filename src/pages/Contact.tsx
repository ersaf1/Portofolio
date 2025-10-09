import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageSquare, Send, CheckCircle, Github, Linkedin, Twitter } from 'lucide-react'

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="mx-auto max-w-5xl space-y-12">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Get In <span className="gradient-text">Touch</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Have a design project or need a frontend developer? I'd love to hear from you!
        </p>
      </motion.section>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="glass rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="w-6 h-6 text-purple-500" />
              <h2 className="text-2xl font-bold">Let's Talk</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Whether you have a design project, need a frontend developer, or just want to connect, 
              feel free to reach out. I'll get back to you as soon as possible!
            </p>

            <div className="space-y-4">
              <a
                href="mailto:ersafrexx@gmail.com"
                className="flex items-center gap-3 p-4 glass rounded-xl hover:shadow-lg transition-all group"
              >
                <Mail className="w-5 h-5 text-purple-500 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Email</div>
                  <div className="font-medium">ersafrexx@gmail.com</div>
                </div>
              </a>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">
                Find me on
              </h3>
              <div className="flex gap-3">
                {[
                  { icon: <Github className="w-5 h-5" />, href: 'https://github.com', label: 'GitHub' },
                  { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com', label: 'LinkedIn' },
                  { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com', label: 'Twitter' }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-3 glass rounded-xl hover:scale-110 hover:shadow-lg transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center"
            >
              <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Message Sent! 🎉</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Thanks for reaching out! I'll get back to you at ersafrexx@gmail.com as soon as possible.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2 glass rounded-xl hover:shadow-lg transition-all"
              >
                Send Another
              </button>
            </motion.div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
              className="glass rounded-2xl p-8 space-y-6"
            >
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  name="name"
                  required
                  className="w-full px-4 py-3 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Send Message
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
