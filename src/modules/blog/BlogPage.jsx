import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendar, FaUser, FaComments, FaTags, FaShare, FaFacebook, FaTwitter, FaLinkedin, FaClock } from 'react-icons/fa';

// Separate components
import CommentSection from './CommentSection';
import PollComponent from './PollComponent';
import QuizComponent from './QuizComponent';
import Scrollbars from 'react-custom-scrollbars';


function BlogPage() {
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: "10 Tips for First-Time Home Buyers",
      excerpt: "Buying your first home can be exciting and overwhelming. Here are 10 essential tips to help you navigate the process.",
      author: {
        name: "Jane Doe",
        bio: "Real estate expert with 10 years of experience",
        avatar: "/path/to/jane-avatar.jpg"
      },
      date: "May 15, 2023",
      category: "Home Buying",
      tags: ["first-time buyers", "home buying tips", "real estate"],
      image: "/path/to/blog-image-1.jpg",
      readingTime: 5,
      content: "Full blog post content here...",
      
    },
    
    // Add more blog posts...
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleTagSelect = (tag) => {
    setSelectedTag(tag);
  };

  const filteredPosts = blogPosts.filter(post => 
    (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedCategory === '' || post.category === selectedCategory) &&
    (selectedTag === '' || post.tags.includes(selectedTag))
  );

  return (
    <div className="bg-[#f3f4f6] min-h-screen py-16">
      <div className="container px-4 mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-4xl font-bold text-center main-title"
        >
          Our Real Estate Blog
        </motion.h1>

        {/* Search and Filter Section */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search blog posts..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
          {/* Add category and tag filters here */}
        </div>

        <div className="grid grid-cols-1 gap-8">
          {filteredPosts.map((post) => (
            <div key={post.id} className="flex flex-col overflow-hidden bg-white shadow-lg lg:flex-row rounded-3xl">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex-grow lg:w-2/3"
              >
                <img src={post.image} alt={post.title} className="object-cover w-full h-48" />
                <div className="p-6">
                  <h2 className="mb-2 text-xl font-semibold main-title">{post.title}</h2>
                  <p className="mb-4 text-gray-600 fm-txt">{post.excerpt}</p>
                  <div className="flex flex-wrap items-center text-sm text-gray-500 fm-txt">
                    <div className="flex items-center mb-2 mr-4">
                      <FaCalendar className="mr-2" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center mb-2 mr-4">
                      <FaUser className="mr-2" />
                      <span>{post.author.name}</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <FaClock className="mr-2" />
                      <span>{post.readingTime} min read</span>
                    </div>
                  </div>
                  <div className="flex items-center mt-4 text-sm text-gray-500 fm-txt">
                    <FaTags className="mr-2" />
                    <span>{post.category}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap mt-2">
                    {post.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 mb-2 mr-2 text-xs text-gray-700 bg-gray-200 rounded-full">{tag}</span>
                    ))}
                  </div>

                  {/* Sharing buttons */}
                  <div className="flex mt-4 space-x-2">
                    <button className="p-2 text-white bg-blue-600 rounded-full"><FaFacebook /></button>
                    <button className="p-2 text-white bg-blue-400 rounded-full"><FaTwitter /></button>
                    <button className="p-2 text-white bg-blue-700 rounded-full"><FaLinkedin /></button>
                  </div>

                  <button className="px-4 py-2 mt-4 text-white transition duration-300 bg-indigo-500 rounded-lg hover:bg-indigo-600 btn-font">
                    Read More
                  </button>
                  </div>
              </motion.div>
           
              <div className="border-t border-gray-200 lg:w-1/3 lg:border-t-0 lg:border-l">
                <CommentSection postId={post.id} />
              </div>
            </div>
          ))}
        </div>



        {/* Example of including other components */}
       
        <PollComponent postId={1} />
        <QuizComponent postId={1} />

        {/* Subscription Form */}
        <SubscriptionForm />

        <div className="mt-12 text-center">
          <button className="px-6 py-3 text-white transition duration-300 bg-indigo-500 rounded-lg hover:bg-indigo-600 btn-font">
            Load More Posts
          </button>
        </div>
      </div>
    </div>
  );
}

function SubscriptionForm() {
    const [email, setEmail] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle subscription logic here
      console.log('Subscribed:', email);
      setEmail('');
    };
  
    return (
      <div className="p-8 mt-12 bg-white shadow-lg rounded-3xl">
        <h3 className="mb-4 text-2xl font-semibold main-title">Subscribe to Our Newsletter</h3>
        <form onSubmit={handleSubmit} className="relative">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 pr-24 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
          <button 
            type="submit" 
            className="absolute px-4 py-1 text-white transition duration-300 transform -translate-y-1/2 bg-indigo-500 rounded-lg right-2 top-1/2 hover:bg-indigo-600 btn-font"
          >
            Subscribe
          </button>
        </form>
      </div>
    );
  }
  

export default BlogPage;
