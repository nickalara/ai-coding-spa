'use client';

import Header from '../../components/Header';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function WorkExperience() {
  const experiences = [
    {
      company: "Tech Startup Inc.",
      position: "Senior Software Engineer",
      duration: "2022 - Present",
      description: "Leading development of scalable web applications using React and Node.js"
    },
    {
      company: "Digital Agency Co.",
      position: "Full Stack Developer",
      duration: "2020 - 2022",
      description: "Built responsive websites and web applications for various clients"
    },
    {
      company: "Software Solutions Ltd.",
      position: "Junior Developer",
      duration: "2018 - 2020",
      description: "Developed and maintained web applications using modern JavaScript frameworks"
    }
  ];

  return (
    <div className="min-h-screen bg-blue-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Header 
          title="Work Experience" 
          subtitle="My professional journey in software development"
        />
        
        <motion.div 
          className="space-y-8 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                delay: 0.3 + (index * 0.2), 
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 className="text-2xl font-bold text-gray-800">{exp.position}</h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {exp.duration}
                </span>
              </div>
              <h4 className="text-xl font-semibold text-blue-600 mb-2">{exp.company}</h4>
              <p className="text-gray-700 leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
        >
          <div className="flex gap-4 justify-center">
            <Link 
              href="/"
              className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-400 hover:scale-105 transition-all duration-200"
            >
              ← Back to Home
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-400 hover:scale-105 transition-all duration-200"
            >
              Contact Me →
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
