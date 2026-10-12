'use client';
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    destination: '',
    message: '',
    agreed: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <section className="py-6 px-6 bg-[#f8faff]">
      <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Get in Touch!
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto">
            We're excited to hear from you! Whether you have a question about our services or want to discuss a new project.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Full Name */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-slate-800 ml-1">Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Wasington Mongla"
                className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all"
                onChange={handleChange}
              />
            </div>

            {/* Email Address */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-slate-800 ml-1">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="info@example.com"
                className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all"
                onChange={handleChange}
              />
            </div>

            {/* Phone Number */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-slate-800 ml-1">Phone Number</label>
              <input
                type="text"
                name="phone"
                placeholder="+92 567 *** ***"
                className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all"
                onChange={handleChange}
              />
            </div>

            {/* Destination Dropdown */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-slate-800 ml-1">Where are you going?</label>
              <select
                name="destination"
                className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all appearance-none cursor-pointer"
                onChange={handleChange}
              >
                <option value="">Grand Island</option>
                <option value="goa">Dudhsagar Falls</option>
                <option value="andaman">Dinner Cruise Party</option>
                <option value="bali">Adventure Water Sports</option>
                <option value="bali">Andaman and Nicobar Islands</option>
                <option value="bali">Rock Island</option>
              </select>
            </div>
          </div>

            <div className="space-y-2">
          <label className="text-gray-800 font-medium">Tour Package Type</label>
          <div className="flex flex-wrap gap-4">
            {[
              "Couple Goa",
              "Solo Goa",
              "Weekend Gateway",
              "Family Tour",
              "Customised Tour",
            ].map((label) => (
              <label key={label} className="flex items-center gap-2 text-gray-700">
                <input
                  type="checkbox"
                  name="packageType"
                  value={label}
                  className="accent-cyan-600"
                />
                {label}
              </label>
            ))}
          </div>
        </div>

          <div className="space-y-2">
          <label className="text-gray-800 font-medium">Activities Want To Do?</label>
          <div className="flex flex-wrap gap-4">
            {[
              "Scuba Diving",
              "Water Sports Goa",
              "Dudhsagar Waterfall",
              "Dinner Party on Cruise",
              "Bungy Jumping",
              "Flyboarding",
            ].map((activity) => (
              <label key={activity} className="flex items-center gap-2 text-gray-700">
                <input
                  type="checkbox"
                  name="activities"
                  value={activity}
                  className="accent-cyan-600"
                />
                {activity}
              </label>
            ))}
          </div>
        </div>

          {/* Message */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-slate-800 ml-1">Brief/Message</label>
            <textarea
              name="message"
              rows="6"
              placeholder="Write somethings about inquiry"
              className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all resize-none"
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Checkbox & Button */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <input 
                  type="checkbox" 
                  name="agreed"
                  className="peer hidden" 
                  onChange={handleChange}
                />
                <div className="w-5 h-5 border-2 border-slate-200 rounded-md peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-all"></div>
                <svg className="absolute top-1 left-1 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-slate-500 text-sm">
                I will agree with yours <span className="text-slate-900 font-medium underline underline-offset-4">privacy policy</span> & <span className="text-slate-900 font-medium underline underline-offset-4">terms & conditions</span>.
              </span>
            </label>

            <button
              type="submit"
              className="bg-[#2085b5] hover:bg-slate-900 text-white px-10 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-xl shadow-blue-100"
            >
              Send Inquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;