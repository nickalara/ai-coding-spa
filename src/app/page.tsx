import Header from '../components/Header';
import BlueCircle from '../components/BlueCircle';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-green-100 flex flex-col items-center justify-center gap-8">
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
          className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-400 hover:scale-105 transition-all duration-200"
        >
          View Work Experience →
        </Link>
      </div>
    </div>
  );
}
