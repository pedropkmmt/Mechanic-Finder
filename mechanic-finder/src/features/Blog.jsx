import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      category: "Engine",
      image: "https://plus.unsplash.com/premium_photo-1682141708282-3a4f7023e1bb?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyJTIwZW5naW5lfGVufDB8fDB8fHww",
      title: "2024 Engine Diagnostics with advanced scanning tools, professional approach",
      author: "Mike",
      date: "November 22, 2023",
      categoryColor: "bg-blue-100 text-blue-800"
    },
    {
      id: 2,
      category: "Transmission",
      image: "https://cdn.britannica.com/54/97154-050-28A49CB6/elements-transmission-power-train-engine-front-wheel-drive-automobile.jpg",
      title: "Automatic Transmission Service: designed to extend your vehicle's life",
      author: "Sarah",
      date: "November 22, 2023",
      categoryColor: "bg-green-100 text-green-800"
    },
    {
      id: 3,
      category: "Brakes",
      image: "https://www.familyhandyman.com/wp-content/uploads/2023/09/Car-braking-system-GettyImages-1633787668_KSedit.jpg",
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
              
              <img src={` ${post.image}`}/>
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