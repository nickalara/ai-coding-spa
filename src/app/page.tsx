import Header from '../components/Header';
import BlueTriangle from '../components/BlueTriangle';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-emerald-200 flex flex-col items-center justify-center gap-8">
      <Header 
        title="Nick's Vibe-Coded Site" 
        subtitle="Built entirely with ai prompts in Cursor!"
      />
      <div className="flex gap-8 items-end">
        <BlueTriangle size="small" />
        <BlueTriangle size="medium" />
        <BlueTriangle size="large" />
      </div>
      
             <div className="mt-8 flex gap-4 items-center justify-center">
               <Link 
                 href="/work-experience"
                 className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-400 hover:to-blue-500 hover:scale-105 transition-all duration-200 shadow-lg"
               >
                 View Work Experience →
               </Link>
               {/* <Link 
                 href="/demos"
                 className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-400 hover:to-blue-500 hover:scale-105 transition-all duration-200 shadow-lg"
               >
                 View Demos →
               </Link> */}
             </div>
    </div>
  );
}
