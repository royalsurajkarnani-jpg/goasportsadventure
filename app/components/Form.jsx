'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
const WHATSAPP_NUMBER = '917678464517'; // 👉 client ka number (country code ke saath, bina + ke)
const ACCESS_KEY = 'd350d79e-c6b0-4be6-88eb-33aede4e8576'; // 👉 baad mein yahan form access key lagana
const PACKAGES = ['Couple Goa', 'Solo Goa', 'Weekend Gateway', 'Family Tour', 'Customised Tour'];
const ACTIVITIES = [
  'Scuba Diving',
  'Water Sports Goa',
  'Dudhsagar Waterfall',
  'Dinner Party on Cruise',
  'Bungy Jumping',
  'Flyboarding',
];
const DESTINATIONS = [
  'Grand Island',
  'Dudhsagar Falls',
  'Dinner Cruise Party',
  'Adventure Water Sports',
  'Andaman and Nicobar Islands',
  'Rock Island',
];
const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  destination: DESTINATIONS[0],
  packageType: [],
  activities: [],
  message: '',
  agreed: false,
};
const inputCls =
  'w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all';
const ContactForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState(initialForm);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };
  const toggleItem = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((v) => v !== value)
        : [...prev[field], value],
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!formData.agreed) {
      setError('Please accept the privacy policy & terms to continue.');
      return;
    }
    setLoading(true);
    // WhatsApp tab pehle hi khol do (click ke turant baad) taaki popup-blocker na roke
    const waWindow = window.open('', '_blank');
    const packages = formData.packageType.join(', ') || '-';
    const acts = formData.activities.join(', ') || '-';
    try {
      // 1) Client ko email
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: 'New Inquiry - Goa Sports Adventure',
          from_name: 'Goa Sports Adventure Website',
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          destination: formData.destination,
          tour_package_type: packages,
          activities: acts,
          message: formData.message,
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || 'Failed');
      // 2) WhatsApp message with details
      const text =
        `*New Inquiry - Goa Sports Adventure*\n\n` +
        `*Name:* ${formData.fullName}\n` +
        `*Email:* ${formData.email}\n` +
        `*Phone:* ${formData.phone}\n` +
        `*Destination:* ${formData.destination}\n` +
        `*Package:* ${packages}\n` +
        `*Activities:* ${acts}\n` +
        `*Message:* ${formData.message || '-'}`;
      const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
      if (waWindow) waWindow.location.href = waUrl;
      else sessionStorage.setItem('waUrl', waUrl); // fallback: thank-you page par button dikhega
      // 3) Thank you page
      setFormData(initialForm);
        router.push('/thank-you');
    } catch (err) {
      if (waWindow) waWindow.close();
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <section id="contact-form" className="px-4 py-8 md:px-6 md:py-12 bg-[#f8faff]">
      <div className="w-full max-w-4xl mx-auto bg-white rounded-[2.5rem] p-6 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100">
      {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Get in Touch!</h2>
          <p className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto">
            We're excited to hear from you! Whether you have a question about our services or want
            to discuss a new project.
          </p>
        </div>
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-sm font-bold text-slate-800 ml-1">Full Name</label>
              <input
                type="text"
                name="fullName"
                required
                placeholder="Wasington Mongla"
                className={inputCls}
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-3">
              <label className="text-sm font-bold text-slate-800 ml-1">Email Address</label>
              <input
                type="email"
                name="email"
                required
                placeholder="info@example.com"
                className={inputCls}
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-3">
              <label className="text-sm font-bold text-slate-800 ml-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="+91 98765 *****"
                className={inputCls}
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-3">
              <label className="text-sm font-bold text-slate-800 ml-1">Where are you going?</label>
              <select
                name="destination"
                className={`${inputCls} appearance-none cursor-pointer`}
                value={formData.destination}
                onChange={handleChange}
              >
                {DESTINATIONS.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-gray-800 font-medium">Tour Package Type</label>
            <div className="flex flex-wrap gap-4">
              {PACKAGES.map((label) => (
                <label key={label} className="flex items-center gap-2 text-gray-700">
                  <input
                    type="checkbox"
                    className="accent-cyan-600"
                    checked={formData.packageType.includes(label)}
                    onChange={() => toggleItem('packageType', label)}
                  />
                  {label}
                </label>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-gray-800 font-medium">Activities Want To Do?</label>
            <div className="flex flex-wrap gap-4">
              {ACTIVITIES.map((activity) => (
                <label key={activity} className="flex items-center gap-2 text-gray-700">
                  <input
                    type="checkbox"
                    className="accent-cyan-600"
                    checked={formData.activities.includes(activity)}
                    onChange={() => toggleItem('activities', activity)}
                  />
                  {activity}
                </label>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <label className="text-sm font-bold text-slate-800 ml-1">Brief/Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Write somethings about inquiry"
              className={`${inputCls} rounded-3xl resize-none`}
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="agreed"
                className="w-5 h-5 accent-blue-600"
                checked={formData.agreed}
                onChange={handleChange}
              />
              <span className="text-slate-500 text-sm">
                I will agree with yours{' '}
                <a href="/privacy-policy" className="text-slate-900 font-medium underline underline-offset-4">
                  privacy policy
                </a>{' '}
                &{' '}
                <a href="/terms-and-conditions" className="text-slate-900 font-medium underline underline-offset-4">
                  terms & conditions
                </a>
                .
              </span>
            </label>
            <button
              type="submit"
              disabled={loading}
              className="bg-[#2085b5] hover:bg-slate-900 disabled:opacity-60 text-white px-10 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-xl shadow-blue-100"
            >
              {loading ? 'Sending...' : 'Send Inquiry'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default ContactForm;





// 'use client';
// import React, { useState } from 'react';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     destination: '',
//     message: '',
//     agreed: false
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   return (
//     <section className="py-6 px-6 bg-[#f8faff]">
//       <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100">
        
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
//             Get in Touch!
//           </h2>
//           <p className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto">
//             We're excited to hear from you! Whether you have a question about our services or want to discuss a new project.
//           </p>
//         </div>

//         {/* Form */}
//         <form className="space-y-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
//             {/* Full Name */}
//             <div className="space-y-3">
//               <label className="text-sm font-bold text-slate-800 ml-1">Full Name</label>
//               <input
//                 type="text"
//                 name="fullName"
//                 placeholder="Wasington Mongla"
//                 className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all"
//                 onChange={handleChange}
//               />
//             </div>

//             {/* Email Address */}
//             <div className="space-y-3">
//               <label className="text-sm font-bold text-slate-800 ml-1">Email Address</label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="info@example.com"
//                 className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all"
//                 onChange={handleChange}
//               />
//             </div>

//             {/* Phone Number */}
//             <div className="space-y-3">
//               <label className="text-sm font-bold text-slate-800 ml-1">Phone Number</label>
//               <input
//                 type="text"
//                 name="phone"
//                 placeholder="+92 567 *** ***"
//                 className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all"
//                 onChange={handleChange}
//               />
//             </div>

//             {/* Destination Dropdown */}
//             <div className="space-y-3">
//               <label className="text-sm font-bold text-slate-800 ml-1">Where are you going?</label>
//               <select
//                 name="destination"
//                 className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all appearance-none cursor-pointer"
//                 onChange={handleChange}
//               >
//                 <option value="">Grand Island</option>
//                 <option value="goa">Dudhsagar Falls</option>
//                 <option value="andaman">Dinner Cruise Party</option>
//                 <option value="bali">Adventure Water Sports</option>
//                 <option value="bali">Andaman and Nicobar Islands</option>
//                 <option value="bali">Rock Island</option>
//               </select>
//             </div>
//           </div>

//             <div className="space-y-2">
//           <label className="text-gray-800 font-medium">Tour Package Type</label>
//           <div className="flex flex-wrap gap-4">
//             {[
//               "Couple Goa",
//               "Solo Goa",
//               "Weekend Gateway",
//               "Family Tour",
//               "Customised Tour",
//             ].map((label) => (
//               <label key={label} className="flex items-center gap-2 text-gray-700">
//                 <input
//                   type="checkbox"
//                   name="packageType"
//                   value={label}
//                   className="accent-cyan-600"
//                 />
//                 {label}
//               </label>
//             ))}
//           </div>
//         </div>

//           <div className="space-y-2">
//           <label className="text-gray-800 font-medium">Activities Want To Do?</label>
//           <div className="flex flex-wrap gap-4">
//             {[
//               "Scuba Diving",
//               "Water Sports Goa",
//               "Dudhsagar Waterfall",
//               "Dinner Party on Cruise",
//               "Bungy Jumping",
//               "Flyboarding",
//             ].map((activity) => (
//               <label key={activity} className="flex items-center gap-2 text-gray-700">
//                 <input
//                   type="checkbox"
//                   name="activities"
//                   value={activity}
//                   className="accent-cyan-600"
//                 />
//                 {activity}
//               </label>
//             ))}
//           </div>
//         </div>

//           {/* Message */}
//           <div className="space-y-3">
//             <label className="text-sm font-bold text-slate-800 ml-1">Brief/Message</label>
//             <textarea
//               name="message"
//               rows="6"
//               placeholder="Write somethings about inquiry"
//               className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all resize-none"
//               onChange={handleChange}
//             ></textarea>
//           </div>

//           {/* Checkbox & Button */}
//           <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
//             <label className="flex items-center gap-3 cursor-pointer group">
//               <div className="relative">
//                 <input 
//                   type="checkbox" 
//                   name="agreed"
//                   className="peer hidden" 
//                   onChange={handleChange}
//                 />
//                 <div className="w-5 h-5 border-2 border-slate-200 rounded-md peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-all"></div>
//                 <svg className="absolute top-1 left-1 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
//                 </svg>
//               </div>
//               <span className="text-slate-500 text-sm">
//                 I will agree with yours <span className="text-slate-900 font-medium underline underline-offset-4">privacy policy</span> & <span className="text-slate-900 font-medium underline underline-offset-4">terms & conditions</span>.
//               </span>
//             </label>

//             <button
//               type="submit"
//               className="bg-[#2085b5] hover:bg-slate-900 text-white px-10 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-xl shadow-blue-100"
//             >
//               Send Inquiry
//             </button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default ContactForm;