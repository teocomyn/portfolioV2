import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen pt-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl md:text-6xl font-mono mb-6">Get in Touch</h1>
            <p className="text-gray-400 mb-8">
              Ready to take your e-commerce business to the next level? Let's discuss
              how we can work together to achieve your goals.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Mail className="text-yellow-500" />
                <span>contact@t4c2.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-yellow-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-yellow-500" />
                <span>Paris, France</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 p-8 rounded-lg">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-mono mb-2">Name</label>
                <input
                  type="text"
                  className="w-full bg-gray-800 rounded-lg border border-gray-700 p-3 focus:outline-none focus:border-yellow-500 transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-mono mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-gray-800 rounded-lg border border-gray-700 p-3 focus:outline-none focus:border-yellow-500 transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-mono mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-gray-800 rounded-lg border border-gray-700 p-3 focus:outline-none focus:border-yellow-500 transition-colors"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-yellow-500 text-black font-mono py-3 rounded-lg hover:bg-yellow-400 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;