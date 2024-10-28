import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Phantom Theme',
    description: 'Premium Shopify theme with advanced customization options',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    results: ['20% increase in conversion rate', '3M+ impressions'],
    link: '#'
  },
  {
    title: 'HYTRAPE Marketplace',
    description: 'Custom marketplace platform with unique features',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    results: ['50K+ active users', '100K+ monthly transactions'],
    link: '#'
  },
  {
    title: 'Le Monde Sauvage',
    description: 'E-commerce optimization and SEO strategy',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    results: ['+150% organic traffic', '+45% conversion rate'],
    link: '#'
  }
];

const Portfolio = () => {
  return (
    <div className="min-h-screen pt-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-mono mb-12">Selected Works</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg bg-gray-900 hover:bg-gray-800 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-mono mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="space-y-2">
                  {project.results.map((result, idx) => (
                    <div key={idx} className="text-yellow-500 text-sm">{result}</div>
                  ))}
                </div>
                
                <a 
                  href={project.link}
                  className="inline-flex items-center gap-2 mt-4 text-sm text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;