import Header from '../components/Header';
import BlueCircle from '../components/BlueCircle';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-green-100 flex flex-col items-center justify-center gap-8">
      <Header 
        title="NICK'S NEW PAGE" 
        subtitle="Built with Next.js and custom components!"
      />
      <div className="flex gap-4 items-center">
        <BlueCircle size="small" />
        <BlueCircle size="medium" />
        <BlueCircle size="large" />
      </div>
      
      <div className="mt-8">
        <Link 
          href="/work-experience"
          className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          View Work Experience →
        </Link>
      </div>
    </div>
  );
}
