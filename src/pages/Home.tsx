import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div 
        className="h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-mono mb-6 animate-fade-in">
            T4C2
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            E-commerce Expert & Digital Craftsman
          </p>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 bg-yellow-500 text-black px-6 py-3 rounded-lg font-mono hover:bg-yellow-400 transition-colors"
          >
            View Portfolio <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;