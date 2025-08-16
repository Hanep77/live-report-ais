'use client'
import { useState } from 'react'

export default function LiveReportForm({ onChange }: any) {
  const [data, setData] = useState({
    speaker: '',
    description: '',
    image: null as File | null
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    const updated = { ...data, [name]: value };
    setData(updated);
    onChange(updated);
  }

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] || null;
    const updated = { ...data, image: file };
    setData(updated);
    onChange(updated);
  }

  return (
    <div className="w-80">
      <input name="speaker" placeholder="pemateri" onChange={handleChange} className="border w-full rounded py-1 px-2 mb-2" />
      <textarea name="description" placeholder="Deskripsi" onChange={handleChange} className="border w-full rounded px-2 py-1" />
      <label htmlFor="image" className='bg-zinc-200 border block w-full py-1 px-2 rounded'>pilih gambar</label>
      <input type="file" id='image' accept="image/*,video/*" onChange={handleFile} hidden />
    </div>
  );
}

