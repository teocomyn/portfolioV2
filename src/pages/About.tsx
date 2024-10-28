import React from 'react';
import { Music, Palette, ShoppingBag } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-mono mb-6">About Me</h1>
            <p className="text-gray-400 mb-6">
              With over 6 years of experience in e-commerce and digital development,
              I've helped numerous businesses establish and grow their online presence.
              My approach combines technical expertise with artistic vision to create
              unique digital experiences.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <ShoppingBag className="text-yellow-500" />
                <span>Co-founder of Phantom Theme & Nade</span>
              </div>
              <div className="flex items-center gap-3">
                <Palette className="text-yellow-500" />
                <span>Passionate about Design & Art Direction</span>
              </div>
              <div className="flex items-center gap-3">
                <Music className="text-yellow-500" />
                <span>Music Producer & Sound Designer</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Teo Comyn"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-yellow-500/10 rounded-lg" />
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-mono mb-6">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Phantom Theme', 'Nade', 'HYTRAPE'].map((project, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg bg-gray-900 hover:bg-gray-800 transition-all duration-300"
              >
                <h3 className="text-xl font-mono mb-2">{project}</h3>
                <p className="text-gray-400">Co-founder & Lead Developer</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;