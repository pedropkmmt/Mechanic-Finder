import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      category: "Engine",
      image: "/api/placeholder/300/200",
      title: "2024 Engine Diagnostics with advanced scanning tools, professional approach",
      author: "Mike",
      date: "November 22, 2023",
      categoryColor: "bg-blue-100 text-blue-800"
    },
    {
      id: 2,
      category: "Transmission",
      image: "/api/placeholder/300/200",
      title: "Automatic Transmission Service: designed to extend your vehicle's life",
      author: "Sarah",
      date: "November 22, 2023",
      categoryColor: "bg-green-100 text-green-800"
    },
    {
      id: 3,
      category: "Brakes",
      image: "/api/placeholder/300/200",
      title: "Brake Pad Replacement 2024: Complete Review. Safety on the road",
      author: "Alex",
      date: "November 22, 2023",
      categoryColor: "bg-orange-100 text-orange-800"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-12">
        Latest Blog Posts
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative">
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-r from-gray-300 to-gray-400 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-2 bg-gray-500 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                      <p className="text-gray-600 text-sm">Car Repair Image</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${post.categoryColor}`}>
                  {post.category}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3 leading-tight">
                {post.title}
              </h3>
              
              <div className="flex items-center text-sm text-gray-500 space-x-4">
                <span className="font-medium">{post.author}</span>
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
          View All Posts
        </button>
      </div>
    </div>
  );
};

export default Blog;