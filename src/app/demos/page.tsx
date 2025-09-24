'use client';

import Header from '../../components/Header';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Demos() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Header 
          title="Demos" 
          subtitle="Interactive demonstrations and examples"
        />
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="bg-white rounded-lg shadow-md p-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Coming Soon</h3>
            <p className="text-gray-600 mb-8">
              Interactive demos and examples will be added here in the future.
            </p>
            
                 <div className="flex justify-center">
                   <Link 
                     href="/"
                     className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-400 hover:to-blue-500 hover:scale-105 transition-all duration-200 shadow-lg"
                   >
                     ← Back to Home
                   </Link>
                 </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
