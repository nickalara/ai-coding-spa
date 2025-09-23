'use client';

import Header from '../../components/Header';
import BlueSquare from '../../components/BlueSquare';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function About() {
  const skills = [
    'React & Next.js',
    'TypeScript',
    'Node.js',
    'Python',
    'PostgreSQL',
    'AWS',
    'Docker',
    'Git'
  ];

  const interests = [
    'Web Development',
    'Machine Learning',
    'Open Source',
    'Photography',
    'Hiking',
    'Coffee',
    'Travel',
    'Reading'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-200 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Header 
          title="About Me" 
          subtitle="Passionate developer creating digital experiences"
        />
        
        <motion.div 
          className="grid md:grid-cols-2 gap-12 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* Personal Info */}
          <div className="space-y-8">
            <motion.div 
              className="bg-white rounded-lg shadow-md p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Who I Am</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {"Hi! I'm Nick, a passionate software developer with a love for creating "}
                {"beautiful, functional web applications. I enjoy turning complex problems "}
                {"into simple, elegant solutions."}
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                With over 5 years of experience in full-stack development, I specialize 
                in modern JavaScript frameworks, particularly React and Next.js. I believe 
                in writing clean, maintainable code and staying up-to-date with the latest 
                technologies.
              </p>
              <p className="text-gray-700 leading-relaxed">
                {"When I'm not coding, you can find me exploring new technologies, "}
                {"contributing to open source projects, or enjoying the great outdoors "}
                {"with my camera in hand."}
              </p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg shadow-md p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">What I Do</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Frontend Development</h4>
                    <p className="text-gray-600 text-sm">Creating responsive, interactive user interfaces</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Backend Development</h4>
                    <p className="text-gray-600 text-sm">Building scalable APIs and server-side logic</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">DevOps & Deployment</h4>
                    <p className="text-gray-600 text-sm">Automating deployments and managing infrastructure</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Skills & Interests */}
          <div className="space-y-8">
            <motion.div 
              className="bg-white rounded-lg shadow-md p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Technical Skills</h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-gray-50 px-4 py-2 rounded-lg text-center">
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg shadow-md p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Interests & Hobbies</h3>
              <div className="grid grid-cols-2 gap-3">
                {interests.map((interest, index) => (
                  <div key={index} className="bg-orange-50 px-4 py-2 rounded-lg text-center">
                    <span className="text-gray-700 font-medium">{interest}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Link 
            href="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-l from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-400 hover:to-blue-500 hover:scale-105 transition-all duration-200 shadow-lg"
          >
            ← Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
