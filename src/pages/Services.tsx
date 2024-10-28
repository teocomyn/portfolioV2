import React from 'react';
import { Code, Search, Megaphone, Wrench, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Shopify Development',
    description: 'Custom theme development and store optimization for maximum performance and conversion.',
    features: ['Custom Theme Development', 'Store Optimization', 'App Integration']
  },
  {
    icon: Search,
    title: 'SEO Strategy',
    description: 'Comprehensive SEO solutions to improve visibility and drive organic traffic.',
    features: ['Technical SEO', 'Content Strategy', 'Performance Optimization']
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Strategic advertising campaigns across Meta Ads and Google Ads platforms.',
    features: ['Meta Ads', 'Google Ads', 'Analytics & Tracking']
  },
  {
    icon: Wrench,
    title: 'Technical Support',
    description: 'Ongoing maintenance and support to keep your e-commerce running smoothly.',
    features: ['24/7 Support', 'Performance Monitoring', 'Security Updates']
  }
];

const Services = () => {
  return (
    <div className="min-h-screen pt-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-mono mb-12">Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-8 rounded-lg bg-gray-900 hover:bg-gray-800 transition-all duration-300"
            >
              <service.icon className="w-12 h-12 text-yellow-500 mb-6" />
              
              <h3 className="text-2xl font-mono mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                    <ArrowRight size={16} className="text-yellow-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;