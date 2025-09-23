import Header from '../components/Header';
import BlueCircle from '../components/BlueCircle';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-emerald-200 flex flex-col items-center justify-center gap-8">
      <Header 
        title="Nick's Home Page" 
        subtitle="Built entirely with ai prompts!"
      />
      <div className="flex gap-4 items-center">
        <BlueCircle size="small" />
        <BlueCircle size="medium" />
        <BlueCircle size="large" />
      </div>
      
      <div className="mt-8">
        <Link 
          href="/work-experience"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-400 hover:to-blue-500 hover:scale-105 transition-all duration-200 shadow-lg"
        >
          View Work Experience →
        </Link>
      </div>
    </div>
  );
}
