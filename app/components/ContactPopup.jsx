'use client';
import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

// 👉 In pages par popup kabhi nahi dikhega (apne actual route ke hisab se badal lena)
const HIDDEN_ON = ['/thank-you', '/privacy', '/refund', '/terms','/contact'];

const WHATSAPP_NUMBER = '+917678464517'; // 👉 client ka number (country code ke saath, bina + ke)
const ACCESS_KEY = 'd350d79e-c6b0-4be6-88eb-33aede4e8576'; // 👉 baad mein yahan form access key lagana


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
 
  activities: [],
  message: '',
  
};

const inputCls =
  'w-full px-3 py-2 md:px-6 md:py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all';

const ContactPopup = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState(initialForm);

  const hidden = HIDDEN_ON.some((p) => pathname?.startsWith(p));

  
// Har page (URL) par 2 second baad ek baar popup





useEffect(() => {
  setOpen(false); // URL badalte hi purana popup band

  if (hidden) return; // thank-you/privacy/refund/terms par nahi

  const timer = setTimeout(() => {
    setOpen(true);
  }, 2000); // 👈 2 second

  return () => clearTimeout(timer); // page badle to purana timer cancel
}, [pathname, hidden]);

// Button se kholne ke liye (optional)
useEffect(() => {
  const openHandler = () => setOpen(true);
  window.addEventListener('open-contact-popup', openHandler);
  return () => window.removeEventListener('open-contact-popup', openHandler);
}, []);

  // Body scroll lock + ESC se close
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  if (hidden || !open) return null;

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

    

    setLoading(true);

    // WhatsApp tab pehle hi khol do (click ke turant baad) taaki popup-blocker na roke
    const waWindow = window.open('', '_blank');

    
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
       
        `*Activities:* ${acts}\n` +
        `*Message:* ${formData.message || '-'}`;
      const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

      if (waWindow) waWindow.location.href = waUrl;
      else sessionStorage.setItem('waUrl', waUrl); // fallback: thank-you page par button dikhega

      // 3) Thank you page
      setFormData(initialForm);
      setOpen(false);
      router.push('/thank-you');
    } catch (err) {
      if (waWindow) waWindow.close();
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white rounded-[2.5rem] p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute top-5 right-6 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-700 text-xl transition-all"
        >
          ✕
        </button>

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-5xl font-bold text-slate-900 mb-6">Get the Best Package</h2>
          <p className="text-slate-500 text-m  md:text-lg leading-relaxed max-w-2xl mx-auto">
           Share your details and plan your adventure today!
          </p>
        </div>

        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
    </div>
  );
};

export default ContactPopup;




// 'use client';
// import React, { useState, useEffect } from 'react';
// import { usePathname, useRouter } from 'next/navigation';

// // 👉 In pages par popup kabhi nahi dikhega (apne actual route ke hisab se badal lena)
// const HIDDEN_ON = ['/thank-you', '/privacy', '/refund', '/terms','/contact'];

// const WHATSAPP_NUMBER = '+917678464517'; // 👉 client ka number (country code ke saath, bina + ke)
// const ACCESS_KEY = 'd350d79e-c6b0-4be6-88eb-33aede4e8576'; // 👉 baad mein yahan form access key lagana


// const ACTIVITIES = [
//   'Scuba Diving',
//   'Water Sports Goa',
//   'Dudhsagar Waterfall',
//   'Dinner Party on Cruise',
//   'Bungy Jumping',
//   'Flyboarding',
// ];
// const DESTINATIONS = [
//   'Grand Island',
//   'Dudhsagar Falls',
//   'Dinner Cruise Party',
//   'Adventure Water Sports',
//   'Andaman and Nicobar Islands',
//   'Rock Island',
// ];

// const initialForm = {
//   fullName: '',
//   email: '',
//   phone: '',
//   destination: DESTINATIONS[0],
 
//   activities: [],
//   message: '',
//   agreed: false,
// };

// const inputCls =
//   'w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all';

// const ContactPopup = () => {
//   const pathname = usePathname();
//   const router = useRouter();
//   const [open, setOpen] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [formData, setFormData] = useState(initialForm);

//   const hidden = HIDDEN_ON.some((p) => pathname?.startsWith(p));

  
// // Har page (URL) par 2 second baad ek baar popup





// useEffect(() => {
//   setOpen(false); // URL badalte hi purana popup band

//   if (hidden) return; // thank-you/privacy/refund/terms par nahi

//   const timer = setTimeout(() => {
//     setOpen(true);
//   }, 2000); // 👈 2 second

//   return () => clearTimeout(timer); // page badle to purana timer cancel
// }, [pathname, hidden]);

// // Button se kholne ke liye (optional)
// useEffect(() => {
//   const openHandler = () => setOpen(true);
//   window.addEventListener('open-contact-popup', openHandler);
//   return () => window.removeEventListener('open-contact-popup', openHandler);
// }, []);

//   // Body scroll lock + ESC se close
//   useEffect(() => {
//     if (!open) return;
//     document.body.style.overflow = 'hidden';
//     const onKey = (e) => e.key === 'Escape' && setOpen(false);
//     window.addEventListener('keydown', onKey);
//     return () => {
//       document.body.style.overflow = '';
//       window.removeEventListener('keydown', onKey);
//     };
//   }, [open]);

//   if (hidden || !open) return null;

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
//   };

//   const toggleItem = (field, value) => {
//     setFormData((prev) => ({
//       ...prev,
//       [field]: prev[field].includes(value)
//         ? prev[field].filter((v) => v !== value)
//         : [...prev[field], value],
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     if (!formData.agreed) {
//       setError('Please accept the privacy policy & terms to continue.');
//       return;
//     }

//     setLoading(true);

//     // WhatsApp tab pehle hi khol do (click ke turant baad) taaki popup-blocker na roke
//     const waWindow = window.open('', '_blank');

    
//     const acts = formData.activities.join(', ') || '-';

//     try {
//       // 1) Client ko email
//       const res = await fetch('https://api.web3forms.com/submit', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
//         body: JSON.stringify({
//           access_key: ACCESS_KEY,
//           subject: 'New Inquiry - Goa Sports Adventure',
//           from_name: 'Goa Sports Adventure Website',
//           name: formData.fullName,
//           email: formData.email,
//           phone: formData.phone,
//           destination: formData.destination,
          
//           activities: acts,
//           message: formData.message,
//         }),
//       });
//       const data = await res.json();
//       if (!data.success) throw new Error(data.message || 'Failed');

//       // 2) WhatsApp message with details
//       const text =
//         `*New Inquiry - Goa Sports Adventure*\n\n` +
//         `*Name:* ${formData.fullName}\n` +
//         `*Email:* ${formData.email}\n` +
//         `*Phone:* ${formData.phone}\n` +
//         `*Destination:* ${formData.destination}\n` +
       
//         `*Activities:* ${acts}\n` +
//         `*Message:* ${formData.message || '-'}`;
//       const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

//       if (waWindow) waWindow.location.href = waUrl;
//       else sessionStorage.setItem('waUrl', waUrl); // fallback: thank-you page par button dikhega

//       // 3) Thank you page
//       setFormData(initialForm);
//       setOpen(false);
//       router.push('/thank-you');
//     } catch (err) {
//       if (waWindow) waWindow.close();
//       setError('Something went wrong. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div
//       className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4"
//       onClick={() => setOpen(false)}
//     >
//       <div
//         className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white rounded-[2.5rem] p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Close */}
//         <button
//           type="button"
//           onClick={() => setOpen(false)}
//           aria-label="Close"
//           className="absolute top-5 right-6 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-700 text-xl transition-all"
//         >
//           ✕
//         </button>

//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Get the Best Package</h2>
//           <p className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto">
//            Share your details and plan your adventure today!
//           </p>
//         </div>

//         <form className="space-y-8" onSubmit={handleSubmit}>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="space-y-3">
//               <label className="text-sm font-bold text-slate-800 ml-1">Full Name</label>
//               <input
//                 type="text"
//                 name="fullName"
//                 required
//                 placeholder="Wasington Mongla"
//                 className={inputCls}
//                 value={formData.fullName}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="space-y-3">
//               <label className="text-sm font-bold text-slate-800 ml-1">Email Address</label>
//               <input
//                 type="email"
//                 name="email"
//                 required
//                 placeholder="info@example.com"
//                 className={inputCls}
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="space-y-3">
//               <label className="text-sm font-bold text-slate-800 ml-1">Phone Number</label>
//               <input
//                 type="tel"
//                 name="phone"
//                 required
//                 placeholder="+91 98765 *****"
//                 className={inputCls}
//                 value={formData.phone}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="space-y-3">
//               <label className="text-sm font-bold text-slate-800 ml-1">Where are you going?</label>
//               <select
//                 name="destination"
//                 className={`${inputCls} appearance-none cursor-pointer`}
//                 value={formData.destination}
//                 onChange={handleChange}
//               >
//                 {DESTINATIONS.map((d) => (
//                   <option key={d} value={d}>
//                     {d}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

         

//           <div className="space-y-2">
//             <label className="text-gray-800 font-medium">Activities Want To Do?</label>
//             <div className="flex flex-wrap gap-4">
//               {ACTIVITIES.map((activity) => (
//                 <label key={activity} className="flex items-center gap-2 text-gray-700">
//                   <input
//                     type="checkbox"
//                     className="accent-cyan-600"
//                     checked={formData.activities.includes(activity)}
//                     onChange={() => toggleItem('activities', activity)}
//                   />
//                   {activity}
//                 </label>
//               ))}
//             </div>
//           </div>

//           <div className="space-y-3">
//             <label className="text-sm font-bold text-slate-800 ml-1">Brief/Message</label>
//             <textarea
//               name="message"
//               rows="5"
//               placeholder="Write somethings about inquiry"
//               className={`${inputCls} rounded-3xl resize-none`}
//               value={formData.message}
//               onChange={handleChange}
//             ></textarea>
//           </div>

//           {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

//           <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            

//             <button
//               type="submit"
//               disabled={loading}
//               className="bg-[#2085b5] hover:bg-slate-900 disabled:opacity-60 text-white px-10 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-xl shadow-blue-100"
//             >
//               {loading ? 'Sending...' : 'Send Inquiry'}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactPopup;


