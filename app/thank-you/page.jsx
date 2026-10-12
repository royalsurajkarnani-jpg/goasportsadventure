'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ThankYou() {
  const [waUrl, setWaUrl] = useState('');

  useEffect(() => {
    setWaUrl(sessionStorage.getItem('waUrl') || '');
  }, []);

  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 bg-[#f8faff]">
      <div className="max-w-xl text-center bg-white rounded-[2.5rem] p-10 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100">
        <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-4xl">✓</div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Thank You!</h1>
        <p className="text-slate-500 text-lg mb-8">
          Your inquiry has been sent successfully. Our team will contact you shortly.
        </p>
        {waUrl && (
          <a href={waUrl} target="_blank" rel="noreferrer"
             className="inline-block mb-4 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-bold">
            Continue on WhatsApp
          </a>
        )}
        <div>
          <Link href="/" className="inline-block bg-[#2085b5] hover:bg-slate-900 text-white px-8 py-3 rounded-full font-bold transition-all">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}