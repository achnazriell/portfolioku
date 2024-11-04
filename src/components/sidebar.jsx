import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
<motion.div
    className="fixed left-0 top-1/4 z-10 space-y-4"
    initial={{ x: -50, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <Link to="/about" className="block px-4 py-2 bg-gray-700 text-white rounded-md">About</Link>
    <Link to="/skills" className="block px-4 py-2 bg-gray-700 text-white rounded-md">Skills</Link>
    {/* Add other links as needed */}
  </motion.div>

    );
}

export default Sidebar;
