"use client";
import React, { useState } from "react";

export default function FAQSection({
  title = "General Questions",
  description = "We’re committed to offering more than just products—we provide exceptional experiences.",
  faqs = [],
}) {
  const [openId, setOpenId] = useState(faqs[0]?.id || null);

  return (
    <section className="py-6 px-4 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="font-poppins text-3xl md:text-[40px] font-bold text-[rgb(17,15,15)] mb-4">
          {title}
        </h2>

        <p className="font-roboto text-[rgb(82,82,82)] max-w-xl mx-auto text-lg leading-relaxed">
          {description}
        </p>
      </div>

      {/* Accordion */}
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;

          return (
            <div
              key={faq.id}
              className={`rounded-2xl border transition-all duration-300 ${
                isOpen
                  ? "border-blue-400 bg-white shadow-lg shadow-blue-50"
                  : "border-gray-100 bg-[rgb(248,250,252)]"
              }`}
            >
              <button
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left cursor-pointer"
              >
                <span className="font-poppins text-lg font-bold text-[rgb(17,15,15)]">
                  {faq.question}
                </span>

                <span
                  className={`transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={isOpen ? "text-blue-500" : "text-gray-400"}
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 md:p-8 pt-0 font-roboto text-[rgb(82,82,82)] leading-relaxed border-t border-gray-50/50">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}