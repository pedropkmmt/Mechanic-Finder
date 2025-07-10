import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      category: "Engine",
      image: "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2Nhci1lbmdpbmUtbmV3MS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH0sInRvRm9ybWF0IjoiYXZpZiJ9fQ==",
      title: "How Car Engines Work",
      author: "Marshall Brain & Kristen Hall-Geisler",
      link: "https://auto.howstuffworks.com/engine.htm",
      categoryColor: "bg-blue-100 text-blue-800"
      
    },
    {
      id: 2,
      category: "Transmission",
      image: "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3RyYW5zbWlzc2lvbi1waWN0dXJlLTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTB9LCJ0b0Zvcm1hdCI6ImF2aWYifX0=",
      title: "Automatic Transmission Service: designed to extend your vehicle's life",
      author: " Karim Nice",
      link:"https://auto.howstuffworks.com/automatic-transmission.htm",
      categoryColor: "bg-green-100 text-green-800"
    },
    {
      id: 3,
      category: "Brakes",
      image: "https://www.familyhandyman.com/wp-content/uploads/2023/09/Car-braking-system-GettyImages-1633787668_KSedit.jpg",
      title: "Brake Pads vs. Discs -- What's the Difference and When Should You Replace Them?",
      author: "Brakes-Safety-Tips/Guides",
      date: "1 Apr 2025",
      link: "https://www.supaquick.com/blog/brake-pads-vs-brake-discs-whats-the-difference-and-when-to-replace",
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
            <a href={`${post.link}`}>
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
            </a>
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