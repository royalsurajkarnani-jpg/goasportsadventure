



"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const ACCESS_KEY = "d350d79e-c6b0-4be6-88eb-33aede4e8576";
const WHATSAPP_NUMBER = "+917678464517"; // 👈 apna number daalo, country code ke saath, bina + ke

export default function GrandIslandBookingForm() {
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
      subject: "New Grand Island Trip Booking Enquiry",
      from_name: "Grand Island Page",
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
          `*New Grand Island Trip Enquiry*\n\n` +
          `*Name:* ${payload.name}\n` +
          `*WhatsApp:* ${payload.whatsapp}\n` +
          `*Travel Date:* ${payload.travel_date}\n` +
          `*People:* ${payload.people}`;
        const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

        if (waWindow) waWindow.location.href = waUrl;
        else sessionStorage.setItem("waUrl", waUrl); // fallback: thank-you page par button dikhega

        router.push("/thanks-grand-island");
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

  // ... return (...) bilkul same rahega, koi change nahi





  return (
    <>
      <div className="gi-card" style={{marginBottom:"40px"}}>
        {/* <p className="gi-eyebrow">Grand Island page</p> */}
        <h2 className="gi-title">Book Grand Island Trip</h2>
        <p className="gi-sub">
          ₹2700 per person. Scuba, water sports and lunch included.
        </p>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="gi-field">
            <label htmlFor="gi-name" className="gi-label">
              Your name
            </label>
            <input
              type="text"
              id="gi-name"
              name="name"
              className="gi-input"
              placeholder="Enter Your Name"
              required
            />
          </div>

          {/* WhatsApp */}
          <div className="gi-field">
            <label htmlFor="gi-phone" className="gi-label">
              WhatsApp number
            </label>
            <div className="gi-phone-row">
              <input
                type="text"
                className="gi-input gi-code"
                value="+91"
                readOnly
                aria-label="Country code"
              />
              <input
                type="tel"
                id="gi-phone"
                name="phone"
                className="gi-input"
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
          <div className="gi-two-col">
            <div className="gi-field">
              <label htmlFor="gi-date" className="gi-label">
                Travel date
              </label>
              <input
                type="date"
                id="gi-date"
                name="date"
                className="gi-input"
                min={today}
                required
              />
            </div>

            <div className="gi-field">
              <label htmlFor="gi-people" className="gi-label">
                People
              </label>
              <select
                id="gi-people"
                name="people"
                className="gi-input gi-select"
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

          {error && <div className="gi-error">{error}</div>}

          <button type="submit" className="gi-btn" disabled={loading}>
            {loading ? "Sending..." : "Get price on WhatsApp"}
          </button>

          <p className="gi-note">
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
            No payment now. No hidden charges.
          </p>
          <p className="gi-note-light">Same-day booking: be ready by 6-7 AM.</p>
        </form>
      </div>

      <style>{`
        .gi-card {
          max-width: 520px;
          margin: 0 auto;
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 18px;
          padding: 26px;
          box-shadow: 0 6px 24px rgba(0, 0, 0, 0.05);
          box-sizing: border-box;
        }
        .gi-card *,
        .gi-card *::before,
        .gi-card *::after {
          box-sizing: border-box;
        }
        .gi-eyebrow {
          margin: 0 0 4px;
          font-size: 14px;
          color: #6b7280;
        }
        .gi-title {
          margin: 0 0 6px;
          font-size: 26px;
          font-weight: 700;
          color: #111827;
        }
        .gi-sub {
          margin: 0 0 22px;
          font-size: 16px;
          line-height: 1.5;
          color: #4b5563;
        }

        .gi-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 16px;
          min-width: 0;
        }
        .gi-label {
          margin: 0;
          font-size: 15px;
          font-weight: 500;
          color: #374151;
          white-space: nowrap;
        }

        .gi-input {
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
        .gi-input::placeholder {
          color: #9ca3af;
        }
        .gi-input:focus {
          border-color: #007aff;
          box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.15);
        }

        .gi-phone-row {
          display: flex;
          gap: 10px;
        }
        .gi-code {
          width: 80px;
          flex: 0 0 80px;
          text-align: center;
          background-color: #f9fafb;
        }

        .gi-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-bottom: 6px;
        }

        .gi-select {
          appearance: none;
          -webkit-appearance: none;
          padding-right: 36px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
        }

        .gi-error {
          margin-top: 6px;
          padding: 10px 12px;
          font-size: 14px;
          color: #b91c1c;
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: 8px;
        }

        .gi-btn {
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
        .gi-btn:hover {
          opacity: 0.92;
        }
        .gi-btn:active {
          transform: scale(0.99);
        }
        .gi-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .gi-note {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          margin: 16px 0 2px;
          font-size: 14px;
          color: #4b5563;
        }
        .gi-note-light {
          margin: 0;
          text-align: center;
          font-size: 14px;
          color: #9ca3af;
        }

        @media (max-width: 400px) {
          .gi-card {
            padding: 20px;
          }
          .gi-two-col {
            gap: 10px;
          }
        }
      `}</style>
    </>
  );
}