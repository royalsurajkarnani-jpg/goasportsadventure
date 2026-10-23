// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// const ACCESS_KEY = "d350d79e-c6b0-4be6-88eb-33aede4e8576";

// export default function DudhsagarBookingForm() {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const today = new Date().toISOString().split("T")[0];

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     const fd = new FormData(e.currentTarget);

//     const payload = {
//       access_key: ACCESS_KEY,
//       subject: "New Dudhsagar Trip Booking Enquiry",
//       from_name: "Dudhsagar Page",
//       name: fd.get("name"),
//       whatsapp: `+91 ${fd.get("phone")}`,
//       travel_date: fd.get("date"),
//       people: fd.get("people"),
//     };

//     try {
//       const res = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: JSON.stringify(payload),
//       });
//       const data = await res.json();

//       if (data.success) {
//         router.push("/thanks-dudhsagar");
//       } else {
//         setError(data.message || "Something went wrong. Please try again.");
//         setLoading(false);
//       }
//     } catch (err) {
//       setError("Network error. Please try again.");
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <div className="ds-card" style={{marginTop:'25px',marginBottom:"40px"}}>
//         {/* <p className="ds-eyebrow">Dudhsagar page</p> */}
//         <h2 className="ds-title">Book Dudhsagar Trip</h2>
//         <p className="ds-sub">₹2700 per person. Lunch included.</p>

//         <form onSubmit={handleSubmit}>
//           {/* Name */}
//           <div className="ds-field">
//             <label htmlFor="ds-name" className="ds-label">
//               Your name
//             </label>
//             <input
//               type="text"
//               id="ds-name"
//               name="name"
//               className="ds-input"
//               placeholder="Enter Your Name"
//               required
//             />
//           </div>

//           {/* WhatsApp */}
//           <div className="ds-field">
//             <label htmlFor="ds-phone" className="ds-label">
//               WhatsApp number
//             </label>
//             <div className="ds-phone-row">
//               <input
//                 type="text"
//                 className="ds-input ds-code"
//                 value="+91"
//                 readOnly
//                 aria-label="Country code"
//               />
//               <input
//                 type="tel"
//                 id="ds-phone"
//                 name="phone"
//                 className="ds-input"
//                 placeholder="9876543210"
//                 pattern="[0-9]{10}"
//                 maxLength={10}
//                 inputMode="numeric"
//                 title="Enter 10 digit mobile number"
//                 required
//               />
//             </div>
//           </div>

//           {/* Date + People */}
//           <div className="ds-two-col">
//             <div className="ds-field">
//               <label htmlFor="ds-date" className="ds-label">
//                 Travel date
//               </label>
//               <input
//                 type="date"
//                 id="ds-date"
//                 name="date"
//                 className="ds-input"
//                 min={today}
//                 required
//               />
//             </div>

//             <div className="ds-field">
//               <label htmlFor="ds-people" className="ds-label">
//                 People
//               </label>
//               <select
//                 id="ds-people"
//                 name="people"
//                 className="ds-input ds-select"
//                 defaultValue="2"
//               >
//                 {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
//                   <option key={n} value={n}>
//                     {n}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           {error && <div className="ds-error">{error}</div>}

//           <button type="submit" className="ds-btn" disabled={loading}>
//             {loading ? "Sending..." : "Get price on WhatsApp"}
//           </button>

//           <p className="ds-note">
//             <svg
//               width="14"
//               height="14"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               aria-hidden="true"
//             >
//               <rect x="3" y="11" width="18" height="11" rx="2" />
//               <path d="M7 11V7a5 5 0 0 1 10 0v4" />
//             </svg>
//             No payment now
//           </p>
//           <p className="ds-note-light">Same-day booking: be ready by 6-7 AM.</p>
//         </form>
//       </div>

//       <style>{`
//         .ds-card {
//           max-width: 520px;
//           margin: 0 auto;
//           background: #fff;
//           border: 1px solid #e5e7eb;
//           border-radius: 18px;
//           padding: 26px;
//           box-shadow: 0 6px 24px rgba(0, 0, 0, 0.05);
//           box-sizing: border-box;
//         }
//         .ds-card *,
//         .ds-card *::before,
//         .ds-card *::after {
//           box-sizing: border-box;
//         }
//         .ds-eyebrow {
//           margin: 0 0 4px;
//           font-size: 14px;
//           color: #6b7280;
//         }
//         .ds-title {
//           margin: 0 0 6px;
//           font-size: 26px;
//           font-weight: 700;
//           color: #111827;
//         }
//         .ds-sub {
//           margin: 0 0 22px;
//           font-size: 16px;
//           line-height: 1.5;
//           color: #4b5563;
//         }

//         .ds-field {
//           display: flex;
//           flex-direction: column;
//           gap: 6px;
//           margin-bottom: 16px;
//           min-width: 0;
//         }
//         .ds-label {
//           margin: 0;
//           font-size: 15px;
//           font-weight: 500;
//           color: #374151;
//           white-space: nowrap;
//         }

//         .ds-input {
//           width: 100%;
//           height: 50px;
//           padding: 0 14px;
//           font-size: 16px;
//           color: #111827;
//           background-color: #fff;
//           border: 1px solid #e5e7eb;
//           border-radius: 10px;
//           outline: none;
//           transition: border-color 0.2s, box-shadow 0.2s;
//         }
//         .ds-input::placeholder {
//           color: #9ca3af;
//         }
//         .ds-input:focus {
//           border-color: #007aff;
//           box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.15);
//         }

//         .ds-phone-row {
//           display: flex;
//           gap: 10px;
//         }
//         .ds-code {
//           width: 80px;
//           flex: 0 0 80px;
//           text-align: center;
//           background-color: #f9fafb;
//         }

//         .ds-two-col {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 14px;
//           margin-bottom: 6px;
//         }

//         .ds-select {
//           appearance: none;
//           -webkit-appearance: none;
//           padding-right: 36px;
//           background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
//           background-repeat: no-repeat;
//           background-position: right 12px center;
//         }

//         .ds-error {
//           margin-top: 6px;
//           padding: 10px 12px;
//           font-size: 14px;
//           color: #b91c1c;
//           background: #fef2f2;
//           border: 1px solid #fecaca;
//           border-radius: 8px;
//         }

//         .ds-btn {
//           width: 100%;
//           height: 52px;
//           margin-top: 14px;
//           font-size: 17px;
//           font-weight: 600;
//           color: #fff;
//           background: #007aff;
//           border: none;
//           border-radius: 10px;
//           cursor: pointer;
//           transition: opacity 0.2s, transform 0.1s;
//         }
//         .ds-btn:hover {
//           opacity: 0.92;
//         }
//         .ds-btn:active {
//           transform: scale(0.99);
//         }
//         .ds-btn:disabled {
//           opacity: 0.7;
//           cursor: not-allowed;
//         }

//         .ds-note {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 6px;
//           margin: 16px 0 2px;
//           font-size: 14px;
//           color: #4b5563;
//         }
//         .ds-note-light {
//           margin: 0;
//           text-align: center;
//           font-size: 14px;
//           color: #9ca3af;
//         }

//         @media (max-width: 400px) {
//           .ds-card {
//             padding: 20px;
//           }
//           .ds-two-col {
//             gap: 10px;
//           }
//         }
//       `}</style>
//     </>
//   );
// }















"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const ACCESS_KEY = "d350d79e-c6b0-4be6-88eb-33aede4e8576";
const WHATSAPP_NUMBER = "+917678464517"; // 👈 Grand Island wale form jaisa hi number

export default function DudhsagarBookingForm() {                
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const fd = new FormData(e.currentTarget);

    // WhatsApp tab pehle hi khol do (click ke turant baad) taaki popup-blocker na roke
    const waWindow = window.open("", "_blank");

    const payload = {
      access_key: ACCESS_KEY,
      subject: "New Dudhsagar Trip Booking Enquiry",
      from_name: "Dudhsagar Page",
      name: fd.get("name"),
      whatsapp: `+91 ${fd.get("phone")}`,
      travel_date: fd.get("date"),
      people: fd.get("people"),
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (data.success) {
        // WhatsApp message with details
        const text =
          `*New Dudhsagar Trip Enquiry*\n\n` +
          `*Name:* ${payload.name}\n` +
          `*WhatsApp:* ${payload.whatsapp}\n` +
          `*Travel Date:* ${payload.travel_date}\n` +
          `*People:* ${payload.people}`;
        const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

        if (waWindow) waWindow.location.href = waUrl;
        else sessionStorage.setItem("waUrl", waUrl); // fallback: thank-you page par button dikhega

        router.push("/thanks-dudhsagar");
      } else {
        if (waWindow) waWindow.close();
        setError(data.message || "Something went wrong. Please try again.");
        setLoading(false);
      }
    } catch (err) {
      if (waWindow) waWindow.close();
      setError("Network error. Please try again.");
      setLoading(false);
    }
  };

    return (
    <>
      <div className="ds-card" style={{marginTop:'25px',marginBottom:"40px"}}>
        {/* <p className="ds-eyebrow">Dudhsagar page</p> */}
        <h2 className="ds-title">Book Dudhsagar Trip</h2>
        <p className="ds-sub">₹2700 per person. Lunch included.</p>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="ds-field">
            <label htmlFor="ds-name" className="ds-label">
              Your name
            </label>
            <input
              type="text"
              id="ds-name"
              name="name"
              className="ds-input"
              placeholder="Enter Your Name"
              required
            />
          </div>

          {/* WhatsApp */}
          <div className="ds-field">
            <label htmlFor="ds-phone" className="ds-label">
              WhatsApp number
            </label>
            <div className="ds-phone-row">
              <input
                type="text"
                className="ds-input ds-code"
                value="+91"
                readOnly
                aria-label="Country code"
              />
              <input
                type="tel"
                id="ds-phone"
                name="phone"
                className="ds-input"
                placeholder="9876543210"
                pattern="[0-9]{10}"
                maxLength={10}
                inputMode="numeric"
                title="Enter 10 digit mobile number"
                required
              />
            </div>
          </div>

          {/* Date + People */}
          <div className="ds-two-col">
            <div className="ds-field">
              <label htmlFor="ds-date" className="ds-label">
                Travel date
              </label>
              <input
                type="date"
                id="ds-date"
                name="date"
                className="ds-input"
                min={today}
                required
              />
            </div>

            <div className="ds-field">
              <label htmlFor="ds-people" className="ds-label">
                People
              </label>
              <select
                id="ds-people"
                name="people"
                className="ds-input ds-select"
                defaultValue="2"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {error && <div className="ds-error">{error}</div>}

          <button type="submit" className="ds-btn" disabled={loading}>
            {loading ? "Sending..." : "Get price on WhatsApp"}
          </button>

          <p className="ds-note">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            No payment now
          </p>
          <p className="ds-note-light">Same-day booking: be ready by 6-7 AM.</p>
        </form>
      </div>

      <style>{`
        .ds-card {
          max-width: 520px;
          margin: 0 auto;
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 18px;
          padding: 26px;
          box-shadow: 0 6px 24px rgba(0, 0, 0, 0.05);
          box-sizing: border-box;
        }
        .ds-card *,
        .ds-card *::before,
        .ds-card *::after {
          box-sizing: border-box;
        }
        .ds-eyebrow {
          margin: 0 0 4px;
          font-size: 14px;
          color: #6b7280;
        }
        .ds-title {
          margin: 0 0 6px;
          font-size: 26px;
          font-weight: 700;
          color: #111827;
        }
        .ds-sub {
          margin: 0 0 22px;
          font-size: 16px;
          line-height: 1.5;
          color: #4b5563;
        }

        .ds-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 16px;
          min-width: 0;
        }
        .ds-label {
          margin: 0;
          font-size: 15px;
          font-weight: 500;
          color: #374151;
          white-space: nowrap;
        }

        .ds-input {
          width: 100%;
          height: 50px;
          padding: 0 14px;
          font-size: 16px;
          color: #111827;
          background-color: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .ds-input::placeholder {
          color: #9ca3af;
        }
        .ds-input:focus {
          border-color: #007aff;
          box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.15);
        }

        .ds-phone-row {
          display: flex;
          gap: 10px;
        }
        .ds-code {
          width: 80px;
          flex: 0 0 80px;
          text-align: center;
          background-color: #f9fafb;
        }

        .ds-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-bottom: 6px;
        }

        .ds-select {
          appearance: none;
          -webkit-appearance: none;
          padding-right: 36px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
        }

        .ds-error {
          margin-top: 6px;
          padding: 10px 12px;
          font-size: 14px;
          color: #b91c1c;
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: 8px;
        }

        .ds-btn {
          width: 100%;
          height: 52px;
          margin-top: 14px;
          font-size: 17px;
          font-weight: 600;
          color: #fff;
          background: #007aff;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: opacity 0.2s, transform 0.1s;
        }
        .ds-btn:hover {
          opacity: 0.92;
        }
        .ds-btn:active {
          transform: scale(0.99);
        }
        .ds-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .ds-note {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          margin: 16px 0 2px;
          font-size: 14px;
          color: #4b5563;
        }
        .ds-note-light {
          margin: 0;
          text-align: center;
          font-size: 14px;
          color: #9ca3af;
        }

        @media (max-width: 400px) {
          .ds-card {
            padding: 20px;
          }
          .ds-two-col {
            gap: 10px;
          }
        }
      `}</style>
    </>
  );


  // ... return (...) aur <style> bilkul same, koi change nahi
}