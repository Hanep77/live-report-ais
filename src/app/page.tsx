'use client'
import { useState } from 'react'
import LiveReportForm from './components/live-report-form';
import StoryPreview from './components/story-preview';
import { downloadStoryImage } from '@/utlis/html-to-image';

export default function Home() {
  const [data, setData] = useState({});

  return (
    <main className="p-4 md:p-0 min-h-screen max-w-screen-md m-auto flex flex-col md:flex-row gap-6 items-center">
      <div className="flex-1">
        <LiveReportForm onChange={setData} />
        <button onClick={downloadStoryImage} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded w-80">Download Image</button>
      </div>
      <div className="flex-1 flex justify-center">
        <StoryPreview data={data} />
      </div>
    </main>
  );
}
