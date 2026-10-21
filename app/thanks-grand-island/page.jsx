import Link from "next/link";

export const metadata = {
  title: "Thank You | Grand Island Trip Booking",
  description: "Your Grand Island trip enquiry has been received.",
  robots: { index: false, follow: false },
};

// Apna WhatsApp number yaha daalo (country code ke saath, bina + ya space ke)
const WHATSAPP_NUMBER = "+91 76784 64517";

export default function ThanksGrandIsland() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi, I have submitted an enquiry for the Grand Island Trip."
)}`;

  return (
    <>
      <main className="ty-wrap">
        <div className="ty-card">
          <div className="ty-icon">
            <svg
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path className="ty-check" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="ty-title">Thank You!</h1>
         <p className="ty-sub">
  We have received your Grand Island Trip enquiry. Our team will send you
  the price and booking details on <strong>WhatsApp</strong> shortly.
</p>

<div className="ty-steps">
  <div className="ty-step">
    <span className="ty-num">1</span>
    <p>We review your details</p>
  </div>
  <div className="ty-step">
    <span className="ty-num">2</span>
    <p>You get the price and availability on WhatsApp</p>
  </div>
  <div className="ty-step">
    <span className="ty-num">3</span>
    <p>Confirm your booking, pay before the trip</p>
  </div>
</div>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="ty-btn"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.8 14.18c-.24.68-1.42 1.3-1.96 1.35-.5.05-1.12.07-1.8-.11-.42-.13-.95-.31-1.64-.6-2.89-1.25-4.78-4.15-4.92-4.34-.14-.19-1.17-1.56-1.17-2.97s.74-2.1 1-2.39c.26-.29.57-.36.76-.36h.55c.18 0 .42-.07.65.5.24.58.82 2 .89 2.15.07.14.12.31.02.5-.1.19-.14.31-.29.48-.14.17-.3.38-.43.51-.14.14-.29.3-.12.58.17.29.74 1.22 1.59 1.97 1.09.97 2.01 1.27 2.3 1.41.29.14.46.12.63-.07.17-.19.72-.84.91-1.13.19-.29.38-.24.65-.14.26.1 1.67.79 1.96.93.29.14.48.22.55.34.07.12.07.7-.17 1.38z" />
            </svg>
            Chat on WhatsApp
          </a>

          <Link href="/grand-island" className="ty-link">
            ← Back to Grand Island page
          </Link>

          <p className="ty-note">
            Same-day booking: please be ready by 6-7 AM.
          </p>
        </div>
      </main>

      <style>{`
        .ty-wrap {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px 16px;
          background: linear-gradient(180deg, #eef6ff 0%, #ffffff 60%);
        }
        .ty-wrap *,
        .ty-wrap *::before,
        .ty-wrap *::after {
          box-sizing: border-box;
        }
        .ty-card {
          width: 100%;
          max-width: 520px;
          padding: 36px 28px;
          text-align: center;
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0, 122, 255, 0.08);
        }

        .ty-icon {
          width: 84px;
          height: 84px;
          margin: 0 auto 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #007aff;
          border-radius: 50%;
          box-shadow: 0 0 0 10px rgba(0, 122, 255, 0.12);
          animation: ty-pop 0.5s ease-out both;
        }
        .ty-check {
          stroke-dasharray: 30;
          stroke-dashoffset: 30;
          animation: ty-draw 0.5s 0.35s ease-out forwards;
        }
        @keyframes ty-pop {
          0% { transform: scale(0.4); opacity: 0; }
          70% { transform: scale(1.08); opacity: 1; }
          100% { transform: scale(1); }
        }
        @keyframes ty-draw {
          to { stroke-dashoffset: 0; }
        }

        .ty-title {
          margin: 0 0 10px;
          font-size: 30px;
          font-weight: 700;
          color: #111827;
        }
        .ty-sub {
          margin: 0 0 24px;
          font-size: 16px;
          line-height: 1.6;
          color: #4b5563;
        }

        .ty-steps {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 26px;
          text-align: left;
        }
        .ty-step {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 14px;
          background: #f9fafb;
          border: 1px solid #eef0f3;
          border-radius: 12px;
        }
        .ty-step p {
          margin: 0;
          font-size: 15px;
          color: #374151;
        }
        .ty-num {
          flex: 0 0 28px;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 600;
          color: #007aff;
          background: rgba(0, 122, 255, 0.12);
          border-radius: 50%;
        }

        .ty-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          height: 52px;
          font-size: 17px;
          font-weight: 600;
          color: #fff;
          text-decoration: none;
          background: #007aff;
          border-radius: 10px;
          transition: opacity 0.2s, transform 0.1s;
        }
        .ty-btn:hover {
          opacity: 0.92;
          color: #fff;
        }
        .ty-btn:active {
          transform: scale(0.99);
        }

        .ty-link {
          display: inline-block;
          margin-top: 16px;
          font-size: 15px;
          font-weight: 500;
          color: #007aff;
          text-decoration: none;
        }
        .ty-link:hover {
          text-decoration: underline;
        }

        .ty-note {
          margin: 18px 0 0;
          font-size: 14px;
          color: #9ca3af;
        }

        @media (max-width: 400px) {
          .ty-card { padding: 28px 18px; }
          .ty-title { font-size: 26px; }
        }
      `}</style>
    </>
  );
}