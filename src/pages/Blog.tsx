import React from 'react';
import { Calendar } from 'lucide-react';

const posts = [
  {
    title: '10 Best Practices for Shopify Store Optimization',
    excerpt: 'Learn the key strategies to optimize your Shopify store for maximum performance and conversion.',
    date: '2024-03-15',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Why Choose a Custom Shopify Theme?',
    excerpt: 'Discover the benefits of using a custom theme for your Shopify store and how it can impact your business.',
    date: '2024-03-10',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'The Future of E-commerce: Trends to Watch',
    excerpt: 'Explore the upcoming trends that will shape the future of online retail and e-commerce.',
    date: '2024-03-05',
    category: 'Industry',
    image: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen pt-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-mono mb-12">Blog</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article 
              key={index}
              className="group bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                  <Calendar size={16} />
                  {post.date}
                  <span className="text-yellow-500">{post.category}</span>
                </div>
                
                <h2 className="text-xl font-mono mb-3 group-hover:text-yellow-500 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                
                <button className="text-sm text-yellow-500 hover:text-yellow-400 transition-colors">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;