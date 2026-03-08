"use client";

import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const S3 = "https://owf-website-content.s3.ap-south-1.amazonaws.com";

/* ─── DATA ────────────────────────────────────────────── */

const ITINERARY = [
  {
    day: "Day 0",
    title: "Departure from Delhi",
    meta: null,
    bullets: [
      "Board the overnight Volvo from Delhi in the late evening.",
      "Relax and enjoy the night journey towards the mountains.",
    ],
  },
  {
    day: "Day 1",
    title: "Arrive Shimla → Drive to Chitkul / Sangla",
    meta: "Distance: ~220 km | Drive: 9–10 hrs",
    bullets: [
      "Arrive Shimla in the morning, freshen up and grab breakfast.",
      "Drive through Kufri and Narkanda along the scenic Indo-Tibetan highway.",
      "Cross the famous Kinnaur Gate — a rock tunnel known as the 'Gateway to Kinnaur'.",
      "Reach Chitkul — the last Indian village before the China border — a stunning white wonderland.",
      "Dinner and overnight stay at hotel in Chitkul / Sangla.",
    ],
  },
  {
    day: "Day 2",
    title: "Chitkul / Sangla → Kalpa",
    meta: "Distance: ~70 km | Drive: 3–4 hrs",
    bullets: [
      "Early morning village walk in Chitkul (weather permitting).",
      "Visit the dramatic Cliff Point at Roghi village overlooking the Kinnaur Kailash range.",
      "Explore Peo Market — the largest market in Kinnaur district.",
      "Reach Kalpa by evening. Dinner and overnight stay.",
    ],
  },
  {
    day: "Day 3",
    title: "Kalpa → Nako → Tabo",
    meta: "Distance: ~168 km | Drive: 7–8 hrs",
    bullets: [
      "After breakfast begin the dramatic drive into Spiti Valley.",
      "Climb the Ka loops — a series of stunning hairpin bends — with views of the Kinnaur Kailash.",
      "Halt for lunch at the picturesque Nako lake village.",
      "Enter Spiti Valley through the Sumdo border checkpoint.",
      "Visit Tabo Monastery — founded in 996 AD, the oldest monastery in the Himalayas.",
      "Dinner and overnight stay in Tabo.",
    ],
  },
  {
    day: "Day 4",
    title: "Tabo → Dhankar → Key Monastery → Kaza",
    meta: "Distance: ~125 km | Drive: 6–7 hrs",
    bullets: [
      "After breakfast head to Dhankar — the ancient cliff-hanging monastery with a breathtaking view of the Spiti–Pin river confluence.",
      "Drive to Key Monastery — the largest and most iconic monastery in Spiti, perched at 4,166 m.",
      "Visit the Chicham Bridge — the highest suspension bridge in Asia (2019).",
      "Return to Kaza for dinner and overnight stay.",
    ],
  },
  {
    day: "Day 5",
    title: "Hikkim · Komic · Langza Village Day",
    meta: "Distance: ~80 km | Drive: 6–7 hrs",
    bullets: [
      "Drive to Langza — the 'fossil village' — and see the towering Buddha statue overlooking the valley.",
      "Visit Hikkim, site of the World's Highest Post Office (14,567 ft). Send a postcard home!",
      "Explore Komic — one of Asia's highest motorable villages (14,931 ft).",
      "Return to Kaza. Dinner and overnight stay.",
    ],
  },
  {
    day: "Day 6",
    title: "Kaza → Kalpa",
    meta: "Distance: ~215 km | Drive: 7–8 hrs",
    bullets: [
      "Check-out after breakfast and begin the long drive back through the Spiti valley.",
      "One last look at the majestic cold-desert landscape as you head towards Kinnaur.",
      "Reach Kalpa by night. Dinner and overnight stay.",
    ],
  },
  {
    day: "Day 7",
    title: "Kalpa → Shimla → Overnight Bus to Delhi",
    meta: "Distance: ~210 km | Drive: 8–9 hrs",
    bullets: [
      "After breakfast depart for Shimla.",
      "Arrive Shimla by evening, enjoy some last-minute shopping on the Mall Road.",
      "Board the overnight Volvo back to Delhi.",
    ],
  },
  {
    day: "Day 8",
    title: "Arrive Delhi — Trip Ends",
    meta: null,
    bullets: [
      "Arrive Delhi by approximately 9:00 AM.",
      "Trip ends with memories to last a lifetime.",
    ],
  },
];

const INCLUSIONS = [
  "Volvo AC sleeper from Delhi → Shimla and Shimla → Delhi",
  "Tempo traveller for all sightseeing & transfers within the trip",
  "6 nights accommodation (guesthouses / homestays / hotels)",
  "1N Chitkul/Sangla · 2N Kalpa · 1N Tabo · 2N Kaza",
  "12 meals — Dinner Day 1 through Breakfast Day 7",
  "All restricted-area inner line permits",
  "Driver charges, toll & parking fees",
  "Dedicated OWF Trip Captain throughout",
  "Oxygen cylinder 24×7 in the vehicle",
  "1 complimentary blanket per traveller per night",
];

const EXCLUSIONS = [
  "GST 5% on the package cost",
  "Flights / trains to & from Delhi",
  "Meals outside the package (mineral water, snacks, alcohol)",
  "4×4 vehicle surcharge if required due to snow conditions",
  "Personal expenses — monument entry, camera fees, tips",
  "Travel insurance (strongly recommended)",
  "Costs due to natural calamities or itinerary disruptions",
];

const HIGHLIGHTS = [
  { icon: "🏔️", text: "Frozen rivers and snow-blanketed moonscapes of Spiti in peak winter" },
  { icon: "🕌", text: "Key & Dhankar monasteries perched dramatically on clifftops" },
  { icon: "📮", text: "World's Highest Post Office at Hikkim — send a postcard at 14,567 ft" },
  { icon: "🦕", text: "Langza fossil village with its iconic mountaintop Buddha statue" },
  { icon: "🌉", text: "Chicham Bridge — the highest suspension bridge in Asia" },
  { icon: "🛻", text: "Dedicated Trip Captain & oxygen cylinder for a safe high-altitude journey" },
];

const REVIEWS = [
  {
    name: "Suman Saurabh",
    location: "Delhi",
    rating: 5,
    date: "Jan 2025",
    text: "My experiences with OWF Trips have been nothing short of exceptional. Having done multiple trips with them, I can confidently say they excel in every aspect — planning, execution, safety, and creating a wonderful community. The Trip Captain was brilliant and the winter Spiti experience was surreal.",
  },
  {
    name: "Karishma",
    location: "Pune",
    rating: 5,
    date: "Feb 2025",
    text: "This Winter Spiti trip with OWF was beyond magical. Frozen rivers, snow-covered monasteries, and a sky full of stars every night. Everything from the logistics to the food was seamlessly handled. Couldn't have asked for a better group or a better team.",
  },
  {
    name: "Nitin Gupta",
    location: "Bangalore",
    rating: 5,
    date: "Jan 2025",
    text: "Joined solo and was a bit nervous, but by Day 2 I felt like I'd known everyone for years. The OWF team doesn't just manage the trip — they become a part of your experience. Spiti in winter is another world, and OWF helps you see it safely and beautifully.",
  },
  {
    name: "Priya Mehta",
    location: "Mumbai",
    rating: 5,
    date: "Dec 2024",
    text: "The Key Monastery at dawn with fresh snow all around — that image will stay with me forever. OWF handled every detail and the group dynamic was absolutely fantastic. Highly recommend this trip to anyone who wants to see India's most breathtaking landscapes.",
  },
];

const FAQS = [
  {
    q: "What is the best time for this winter Spiti trip?",
    a: "December to February is the ideal window. Roads remain open but snow-covered, the rivers freeze, and you get Spiti almost entirely to yourself. This is when the landscape is at its most dramatic and pristine.",
  },
  {
    q: "Do I need prior trekking or adventure experience?",
    a: "No prior experience needed. This is a road trip with short walks at high-altitude villages. A reasonable fitness level and enthusiasm for adventure is all you need. We handle all logistics.",
  },
  {
    q: "How cold does it get? What should I pack?",
    a: "Temperatures drop to -15°C to -25°C at night. Pack heavy thermal layers, a quality down jacket, windproof gloves, a woollen cap, and above-ankle waterproof boots. We share a detailed packing list post-booking.",
  },
  {
    q: "How is altitude sickness managed?",
    a: "We acclimatise gradually through the itinerary. Our Trip Captain carries an oxygen cylinder 24×7 and a basic first-aid kit. We advise consulting your doctor before travel and carrying personal altitude medications.",
  },
  {
    q: "Is this suitable for solo travellers?",
    a: "Absolutely — many of our travellers join solo. Our groups are warm, welcoming communities. By Day 2 you'll have made friends for life. Many solo travellers return to book another trip with the same group.",
  },
  {
    q: "What is the cancellation & refund policy?",
    a: "30+ days before departure: full refund minus processing fees. 15–29 days: 50% refund. Under 15 days: no refund. We recommend travel insurance that covers trip cancellations for added peace of mind.",
  },
];

const GALLERY = [
  `${S3}/Spiti+Pictures/IMG_2402+2.jpg`,
  `${S3}/Spiti+Pictures/IMG_1446+2.jpg`,
  `${S3}/Spiti+Pictures/IMG_1118+2.JPG`,
  `${S3}/Spiti+Pictures/IMG_1563.jpeg`,
  `${S3}/Spiti+Pictures/IMG_1437.jpg`,
  `${S3}/people-holding-hands-as-sign-peace-with-mountains-background-winter.jpg`,
];

const BATCHES = [
  {
    month: "Mar '26",
    dates: [
      { range: "01 Mar – 09 Mar 2026", status: "Open",         price: "₹19,900" },
      { range: "07 Mar – 15 Mar 2026", status: "Open",         price: "₹19,900" },
      { range: "14 Mar – 22 Mar 2026", status: "Open",         price: "₹19,900" },
      { range: "21 Mar – 29 Mar 2026", status: "Open",         price: "₹19,900" },
      { range: "28 Mar – 05 Apr 2026", status: "Open",         price: "₹19,900" },
    ],
  },
  {
    month: "Apr '26",
    dates: [
      { range: "04 Apr – 12 Apr 2026", status: "Open",         price: "₹19,900" },
      { range: "11 Apr – 19 Apr 2026", status: "Open",         price: "₹19,900" },
    ],
  },
];

const NAV = [
  { id: "overview",  label: "Overview & Highlights" },
  { id: "itinerary", label: "Itinerary" },
  { id: "inclusions",label: "Inclusions" },
  { id: "dates",     label: "Dates" },
  { id: "reviews",   label: "Reviews" },
  { id: "gallery",   label: "Gallery" },
];

/* ─── COMPONENT ───────────────────────────────────────── */

export default function WinterSpitiPage() {
  const [activeNav, setActiveNav] = useState("overview");
  const [openDay, setOpenDay] = useState(null);
  const [openMonth, setOpenMonth] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [showHighlights, setShowHighlights] = useState(false);
  const [showMustCarry, setShowMustCarry] = useState(false);
  const [showTravelEssentials, setShowTravelEssentials] = useState(false);
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  /* Highlight active nav on scroll */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActiveNav(e.target.id)),
      { rootMargin: "-25% 0px -65% 0px" }
    );
    NAV.forEach(({ id }) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  /* Auto-expand Day 0 when itinerary section enters view */
  useEffect(() => {
    const el = document.getElementById("itinerary");
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setOpenDay(0); obs.disconnect(); } },
      { rootMargin: "0px 0px -30% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 118, behavior: "smooth" });
  }

  async function submitEnquiry(e) {
    e.preventDefault();
    setSubmitting(true);
    const fd = new FormData(e.target);
    try {
      await fetch("https://lejhkb7ei3.execute-api.ap-south-1.amazonaws.com/prod/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"), phone: fd.get("phone"), email: fd.get("email"),
          trip: "Winter Spiti Backpacking", sourcePage: window.location.href,
        }),
      });
    } catch (_) {}
    setSubmitting(false);
    setSubmitted(true);
  }

  return (
    <>
      <Header />

      <style>{`
        @font-face {
          font-family: "Griggs";
          src: local("Griggs");
          font-style: normal;
          font-weight: 700;
          font-display: swap;
        }
        *, *::before, *::after { box-sizing: border-box; }

        /* ── tokens ── */
        :root {
          --teal:   #1f6feb;
          --teal-d: #134ea8;
          --teal-l: #eaf3ff;
          --ink:    #10233d;
          --sub:    #4b607f;
          --muted:  #6b7a90;
          --border: #d6e4f5;
          --bg:     #f4f8ff;
        }

        /* ── hero ── */
        .hero {
          position: relative;
          height: clamp(260px, 46vw, 540px);
          overflow: hidden;
          background: #0d1f2d;
        }
        .hero-img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          transform: scale(1.04);
        }
        .hero-gradient {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,.12) 0%, rgba(0,0,0,.62) 100%);
        }
        .hero-content {
          position: absolute; bottom: 0; left: 0; right: 0;
          padding: clamp(18px,3vw,36px) clamp(16px,4vw,48px);
          display: flex; justify-content: center;
        }
        .hero-download {
          display: inline-flex; align-items: center; gap: 6px;
          background: #fee60e; color: rgb(20, 20, 20);
          padding: 9px 20px; border-radius: 50px;
          font-size: 13px; font-weight: 500;
          font-family: 'Roboto', sans-serif;
          letter-spacing: 0.5px; line-height: 20px;
          text-align: center; text-decoration: none;
          margin: 0;
          box-shadow: 0 4px 16px rgba(0,0,0,.25);
          transition: background .15s, transform .15s;
        }
        .hero-download:hover { background: #ffd900; transform: translateY(-1px); }
        .hero-download img { width: 16px; height: 16px; flex-shrink: 0; }

        /* ── section nav ── */
        .trip-nav {
          position: sticky; top: 60px; z-index: 90;
          background: #fff;
          border-bottom: 1.5px solid var(--border);
          overflow-x: auto; scrollbar-width: none;
        }
        .trip-nav::-webkit-scrollbar { display: none; }
        .trip-nav-inner {
          display: flex;
          max-width: 980px; margin: 0 auto; padding: 0 16px;
        }
        .trip-nav-btn {
          flex-shrink: 0; padding: 0 18px;
          height: 52px;
          display: flex; align-items: center;
          font-size: 14px; font-weight: 700;
          letter-spacing: 0.5px; line-height: 14px;
          text-align: center;
          color: rgb(61, 61, 61); background: none; border: none;
          border-bottom: 2.5px solid transparent;
          cursor: pointer; white-space: nowrap;
          margin: 0; transition: color .15s, border-color .15s;
        }
        .trip-nav-btn.on { color: var(--teal); border-bottom-color: var(--teal); }
        .trip-nav-btn:hover { color: var(--teal); }

        /* ── page layout ── */
        .trip-page { background: var(--bg); overflow-x: hidden; }
        .trip-wrap {
          max-width: 980px; margin: 0 auto;
          width: 100%; box-sizing: border-box;
          padding: 32px 0 0;
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
        }
        .trip-main { min-width: 0; width: 100%; }

        /* ── section spacing ── */
        .section {
          background: rgb(255, 255, 255);
          border: none;
          border-radius: 0;
          box-shadow: none;
          padding: 24px 16px;
          margin-bottom: 8px;
          scroll-margin-top: 118px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          column-gap: 16px;
          width: 100%;
          box-sizing: border-box;
        }
        .section-inclusions {
          background-color: rgb(245, 255, 246);
          padding: 16px 20px;
          margin-top: 16px;
          row-gap: 10px;
          column-gap: 10px;
          font-family: 'Roboto', sans-serif;
        }
        .section-exclusions {
          background-color: rgb(255, 244, 244);
          padding: 16px 20px;
          margin-top: 16px;
          row-gap: 10px;
          column-gap: 10px;
          font-family: 'Roboto', sans-serif;
        }
        .section-title {
          display: flex; align-items: center; gap: 10px;
          font-family: 'Roboto', sans-serif;
          font-size: 16px; font-weight: 600;
          color: rgb(45, 45, 45); line-height: normal;
          margin: 0 0 20px;
        }
        .section-bar {
          width: 4px; height: 22px; border-radius: 2px;
          background: var(--teal); flex-shrink: 0;
        }
        .section-inclusions .section-bar { background: #22a55b; }
        .section-exclusions .section-bar { background: #e03131; }

        /* ── quick facts ── */
        .qfacts {
          display: grid; grid-template-columns: repeat(2,1fr);
          gap: 10px; margin-bottom: 24px;
        }
        @media(min-width:520px){ .qfacts { grid-template-columns: repeat(4,1fr); } }
        .qfact {
          background: var(--teal-l); border-radius: 12px;
          padding: 14px; display: flex; flex-direction: column; gap: 4px;
        }
        .qfact-label {
          font-size: 10px; font-weight: 700; color: var(--teal);
          text-transform: uppercase; letter-spacing: 1px;
        }
        .qfact-value {
          font-size: 14px; font-weight: 700; color: var(--ink); line-height: 1.3;
        }

        /* ── route pill ── */
        .route-pill {
          background: var(--teal-l); border-left: 3px solid var(--teal);
          border-radius: 0 10px 10px 0;
          padding: 10px 14px; margin-bottom: 18px;
          font-size: 14px; font-weight: 500; color: rgb(61, 61, 61);
          letter-spacing: 0.5px; line-height: 1.6;
          width: 100%; box-sizing: border-box;
          word-break: break-word; overflow-wrap: break-word;
        }

        /* ── overview text ── */
        .overview-text {
          font-family: 'Roboto', sans-serif;
          font-size: 14px; font-weight: 400;
          line-height: 19.6px; color: rgb(61, 61, 61);
          letter-spacing: 0.08px;
          text-align: justify; text-justify: inter-word;
          margin: 0 0 20px;
        }

        /* ── highlights ── */
        .highlights-grid {
          display: grid; grid-template-columns: 1fr;
          gap: 10px;
        }
        @media(min-width:520px){ .highlights-grid { grid-template-columns: repeat(2,1fr); } }
        .highlight-card {
          display: flex; align-items: flex-start; gap: 12px;
          background: #fff; border: 1px solid var(--border);
          border-radius: 12px; padding: 14px;
        }
        .hl-icon {
          font-size: 22px; flex-shrink: 0; margin-top: 1px;
        }
        .hl-text {
          font-size: 13px; color: rgb(61, 61, 61); line-height: 1.5; font-weight: 500;
        }

        /* ── itinerary ── */
        .itin-card {
          background: #eef2f8;
          border: none;
          border-radius: 0;
          width: calc(100% + 32px);
          margin-left: -16px;
          margin-right: -16px;
          margin-bottom: 6px;
          overflow: hidden;
          box-shadow: none;
          box-sizing: border-box;
        }
        .itin-trigger {
          display: flex; align-items: center; gap: 12px;
          width: 100%; padding: 14px 16px; background: none; border: none;
          cursor: pointer; text-align: left;
          transition: background .12s;
        }
        .itin-trigger:hover { background: var(--teal-l); }
        .day-badge {
          flex-shrink: 0; padding: 5px 10px;
          border-radius: 6px;
          background: var(--teal); color: #fff;
          font-size: 11px; font-weight: 700;
          text-align: center; line-height: 1.3; white-space: nowrap;
        }
        .itin-head-title {
          flex: 1; min-width: 0;
          font-family: 'Roboto', sans-serif;
          font-size: 14px;
          font-weight: 500;
          font-style: normal;
          color: rgb(61, 61, 61);
          line-height: 15.6px;
          letter-spacing: 0.5px;
          margin: 0;
          padding: 0;
          display: block;
          overflow: hidden;
        }
        .itin-toggle-btn {
          flex-shrink: 0; width: 22px; height: 22px;
          border: 1.5px solid var(--teal); border-radius: 4px;
          background: var(--teal-l); color: var(--teal);
          display: flex; align-items: center; justify-content: center;
          font-size: 16px; font-weight: 500; line-height: 1;
        }
        .itin-body {
          display: none; padding: 4px 16px 16px 16px;
          flex-direction: column; gap: 0;
          border-top: 1px solid var(--border);
        }
        .itin-body.open { display: flex; }
        .itin-meta {
          font-size: 12px; font-weight: 600; color: var(--teal);
          margin-bottom: 10px; margin-top: 12px;
          display: flex; align-items: center; gap: 6px;
        }
        .itin-meta::before {
          content: ""; display: block;
          width: 18px; height: 1.5px; background: var(--teal);
        }
        .itin-bullets { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px; }
        .itin-bullets li {
          font-family: 'Roboto', sans-serif;
          font-size: 14px;
          font-weight: 400;
          font-style: normal;
          color: rgb(61, 61, 61);
          line-height: 19.6px;
          letter-spacing: 0.08px;
          margin: 0;
          padding: 0;
          display: flex; align-items: flex-start; gap: 9px;
        }
        .itin-dot {
          flex-shrink: 0; width: 7px; height: 7px;
          border-radius: 50%; background: var(--teal);
          margin-top: 5px;
        }

        /* ── checklist ── */
        .checklist { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px; }
        .checklist li {
          display: flex; align-items: flex-start; gap: 10px;
          font-family: 'Roboto', sans-serif;
          font-size: 14px;
          font-weight: 400;
          font-style: normal;
          color: rgb(61, 61, 61);
          line-height: 19.6px;
          letter-spacing: 0.08px;
          margin: 0;
          padding: 0;
        }
        .ci {
          flex-shrink: 0; width: 22px; height: 22px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          margin-top: 1px;
        }
        .ci.yes { background: #d1fae5; }
        .ci.yes svg { color: #059669; }
        .ci.no  { background: #fee2e2; }
        .ci.no  svg { color: #dc2626; }
        .ci svg { width: 12px; height: 12px; }

        /* ── reviews ── */
        .reviews-grid {
          display: flex; flex-direction: row;
          gap: 14px; overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          padding-bottom: 8px;
          width: 100%;
        }
        .reviews-grid::-webkit-scrollbar { height: 4px; }
        .reviews-grid::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }
        .review-card {
          flex: 0 0 80vw; max-width: 320px;
          scroll-snap-align: start;
          border: 1px solid var(--border); border-radius: 14px;
          padding: 18px; display: flex; flex-direction: column; gap: 10px;
          background: #fff;
        }
        .review-header {
          display: flex; align-items: center; justify-content: space-between;
          gap: 8px;
        }
        .reviewer-info { display: flex; flex-direction: column; gap: 2px; }
        .reviewer-name { font-size: 14px; font-weight: 700; color: var(--ink); }
        .reviewer-meta { font-size: 11px; color: var(--muted); }
        .stars { color: #f59e0b; font-size: 13px; letter-spacing: 1px; }
        .review-text {
          font-size: 13px; color: rgba(12, 12, 12, 0.65); line-height: 1.65;
          font-style: italic;
        }

        /* ── gallery ── */
        .gallery-intro {
          text-align: center; margin-bottom: 18px;
        }
        .gallery-intro p { font-size: 13px; color: var(--muted); margin-top: 4px; }
        .gallery-track {
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: 80vw;
          gap: 8px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          width: calc(100% + 32px);
          margin-left: -16px;
          padding: 0 16px;
          box-sizing: border-box;
        }
        .gallery-track::-webkit-scrollbar { display: none; }
        .gallery-track img {
          width: 100%; height: 100%;
          aspect-ratio: 4 / 5;
          object-fit: cover; border-radius: 10px;
          display: block; scroll-snap-align: start;
        }
        @media(min-width: 820px) {
          .gallery-track {
            grid-auto-columns: 260px;
            width: 100%;
            margin-left: 0;
            padding: 0;
          }
        }

        /* ── Available Dates ── */
        .dates-month {
          margin-bottom: 8px; width: 100%;
          border: 1px solid rgb(229,229,229);
          border-radius: 12px;
          background: rgb(255,255,255);
        }
        .dates-month-header {
          display: flex; align-items: center; justify-content: space-between;
          width: 100%; box-sizing: border-box;
          background: rgb(255,255,255);
          padding: 12px 20px 10px; cursor: pointer;
          border: none; border-radius: 12px;
          column-gap: 10px; row-gap: 10px;
          position: sticky; top: 0; z-index: 1;
          transition: background .15s;
        }
        .dates-month-header.open {
          border-radius: 12px 12px 0 0;
          border-bottom: 1px solid rgb(229,229,229);
        }
        .dates-month-header:hover { background: rgb(249,250,251); }
        .dates-month-name {
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          background-color: rgb(224,250,255);
          border: 0.5px solid rgb(1,95,116);
          border-radius: 34px;
          color: rgb(1,95,116);
          font-size: 14px; font-weight: 500; font-style: normal;
          line-height: 19.6px; text-align: center; text-transform: uppercase;
          padding: 6px 12px;
          height: 30px; box-sizing: border-box;
          margin-right: 16px;
          column-gap: 6px; row-gap: 6px;
        }
        .dates-month-toggle {
          width: 22px; height: 22px; border-radius: 50%;
          background: var(--teal); color: #fff;
          display: flex; align-items: center; justify-content: center;
          font-size: 16px; font-weight: 400; line-height: 1; flex-shrink: 0;
        }
        .dates-month-body {
          background: rgb(255,255,255); padding: 12px;
          border-radius: 0 0 12px 12px;
          display: flex; flex-wrap: wrap; gap: 8px;
        }
        .date-batch {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          box-sizing: border-box; cursor: pointer;
          background-color: rgb(224,250,255);
          border-top: 1px solid rgb(229,229,229);
          border-left: 1px solid rgb(229,229,229);
          border-right: 1px solid rgb(229,229,229);
          border-bottom: 2px solid rgb(1,95,116);
          border-radius: 6px;
          padding: 8px 0;
          column-gap: 10px; row-gap: 10px;
          text-align: center; font-style: normal;
          flex: 1 1 200px;
          transition: opacity .15s;
        }
        .date-batch:hover { opacity: 0.85; }
        .date-range {
          display: block; box-sizing: border-box; cursor: pointer;
          color: rgb(1,95,116);
          font-size: 9.375px; font-weight: 400; font-style: normal;
          line-height: 20px; letter-spacing: 0.25px;
          text-align: center;
          padding: 0; margin: 0;
        }
        .date-status {
          display: block; box-sizing: border-box; cursor: pointer;
          font-size: 10px; font-weight: 400; font-style: normal;
          line-height: 13px; text-align: center; text-transform: capitalize;
          padding: 4px 8px; border-radius: 12px;
          margin: 0;
        }
        .date-status.open    { background: rgb(211,248,211); color: rgb(0,83,0); }
        .date-status.filling { background: #fef3c7; color: #d97706; }
        .date-status.full    { background: #fee2e2; color: #dc2626; }
        .date-price {
          display: block; box-sizing: border-box; cursor: pointer;
          color: rgb(1,95,116);
          font-size: 10px; font-weight: 700; font-style: normal;
          line-height: normal; text-align: center; text-transform: capitalize;
          padding: 0; margin: 0;
        }

        /* ── spiti tagline ── */
        .spiti-tagline {
          background: #fff;
          padding: 24px 16px 20px;
          width: 100%;
          box-sizing: border-box;
          margin-top: -8px;
        }
        .spiti-tagline-title {
          margin: 0; padding: 0;
          color: rgb(169, 203, 212);
          font-family: "Griggs", Georgia, serif;
          font-style: italic; font-weight: 700;
          font-size: 30px; line-height: 28.5px;
          letter-spacing: 0.2px;
          display: block; box-sizing: border-box;
        }
        .spiti-tagline-sub {
          margin: 8px 0 0;
          color: #a4c3cd;
          font-family: 'Roboto', sans-serif;
          font-size: 16px; font-weight: 400;
          line-height: 1.16; letter-spacing: 0.2px;
        }

        /* ── notes ── */
        .notes-list { display: flex; flex-direction: column; gap: 12px; }
        .note-item {
          display: flex; align-items: flex-start; gap: 12px;
          padding: 14px; background: #fffbeb;
          border: 1px solid #fde68a; border-radius: 10px;
        }
        .note-icon { font-size: 18px; flex-shrink: 0; margin-top: 1px; }
        .note-body { display: flex; flex-direction: column; gap: 3px; }
        .note-title { font-size: 13px; font-weight: 700; color: #78350f; }
        .note-text  { font-size: 13px; color: #713f12; line-height: 1.55; }

        /* ── other info ── */
        .section-other-info > .section-title {
          font-family: 'Roboto', sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: rgb(45, 45, 45);
          line-height: normal;
          margin: 0;
          padding: 0;
        }
        .other-info-sub { width: 100%; margin-bottom: 8px; display: flex; flex-direction: column; }
        .other-info-sub-header {
          display: flex; justify-content: space-between; align-items: center;
          margin-bottom: 8px;
        }
        .other-info-sub-title {
          font-family: 'Roboto', sans-serif;
          font-size: 16px;
          font-weight: 700;
          font-style: normal;
          color: rgb(1, 95, 116);
          line-height: 24px;
          letter-spacing: 0.08px;
          text-align: justify;
          text-justify: inter-word;
          text-transform: capitalize;
          margin: 0;
          padding: 0;
          display: inline;
        }
        .other-info-toggle {
          background: none;
          border: none;
          outline: none;
          cursor: pointer;
          color: var(--teal);
          display: flex;
          align-self: flex-end;
          padding: 0;
          margin: 0;
          font-family: 'Roboto', sans-serif;
          font-size: 14px;
          font-weight: 500;
          font-style: normal;
          letter-spacing: 0.5px;
          line-height: 19.6px;
          text-align: right;
          box-sizing: border-box;
          transition: all 0.3s ease-in-out;
        }
        .other-info-category {
          margin-bottom: 10px;
        }
        .other-info-category-title {
          font-family: 'Roboto', sans-serif;
          font-size: 14px; font-weight: 700; font-style: normal;
          color: rgb(1, 95, 116); text-transform: capitalize;
          letter-spacing: 0.035px; line-height: 20px;
          display: block; box-sizing: border-box;
          margin: 8px 0 0 0; padding: 0;
          text-align: justify; text-justify: inter-word;
        }
        .other-info-list {
          list-style: disc; padding: 0 0 0 18px; margin: 0;
          display: flex; flex-direction: column; gap: 2px;
        }
        .other-info-list li {
          font-family: 'Roboto', sans-serif;
          font-size: 14px; font-weight: 400; font-style: normal;
          color: rgb(61, 61, 61); line-height: 19.6px;
          letter-spacing: 0.08px;
          display: list-item; box-sizing: border-box;
          text-align: justify; text-justify: inter-word;
          margin: 0; padding: 0;
        }

        /* ── FAQs ── */
        .faq-item { border-bottom: 1px solid var(--border); }
        .faq-trigger {
          display: flex; align-items: flex-start;
          justify-content: space-between; gap: 12px;
          width: 100%; padding: 16px 0;
          background: none; border: none; text-align: left;
          cursor: pointer; font-size: 14px; font-weight: 600;
          color: var(--ink); line-height: 1.45;
        }
        .faq-chev {
          flex-shrink: 0; width: 18px; height: 18px;
          color: var(--teal); margin-top: 2px;
          transition: transform .2s;
        }
        .faq-chev.open { transform: rotate(180deg); }
        .faq-ans {
          display: none; font-size: 13px; color: var(--sub);
          line-height: 1.7; padding-bottom: 14px;
        }
        .faq-ans.open { display: block; }

        /* ── sidebar ── */
        .sidebar-card {
          background: #fff; border: 1px solid var(--border);
          border-radius: 16px; padding: 22px;
          position: sticky; top: 118px;
          display: flex; flex-direction: column; gap: 16px;
        }
        .sidebar-price-block { display: flex; flex-direction: column; gap: 4px; }
        .sidebar-from { font-size: 11px; font-weight: 600; color: var(--muted); text-transform: uppercase; letter-spacing: 1px; }
        .sidebar-amount-row { display: flex; align-items: baseline; gap: 8px; }
        .sidebar-price { font-size: 28px; font-weight: 800; color: var(--ink); }
        .sidebar-orig  { font-size: 14px; color: var(--muted); text-decoration: line-through; }
        .sidebar-per   { font-size: 12px; color: var(--muted); }
        .sidebar-saving {
          display: inline-block; background: #d1fae5;
          color: #065f46; font-size: 12px; font-weight: 700;
          border-radius: 6px; padding: 4px 10px;
        }
        .sidebar-divider { height: 1px; background: var(--border); }
        .sidebar-facts { display: flex; flex-direction: column; gap: 10px; }
        .sidebar-fact {
          display: flex; justify-content: space-between; align-items: center;
          font-size: 13px;
        }
        .sf-label { color: var(--muted); }
        .sf-value { font-weight: 600; color: var(--ink); }
        .btn-enquire {
          display: flex; align-items: center; justify-content: center;
          width: 100%; padding: 14px;
          background: var(--teal); color: #fff;
          font-size: 15px; font-weight: 700;
          border: none; border-radius: 10px;
          cursor: pointer; text-decoration: none;
          transition: background .15s;
        }
        .btn-enquire:hover { background: var(--teal-d); }
        .btn-call {
          display: flex; align-items: center; justify-content: center; gap: 7px;
          width: 100%; padding: 12px;
          background: #fff; color: var(--ink);
          font-size: 14px; font-weight: 600;
          border: 1.5px solid var(--border); border-radius: 10px;
          text-decoration: none;
          transition: border-color .15s;
        }
        .btn-call:hover { border-color: var(--teal); color: var(--teal); }
        .btn-call svg { width: 16px; height: 16px; }
        .sidebar-note { font-size: 11px; color: var(--muted); text-align: center; line-height: 1.5; }

        /* ── sticky mobile CTA ── */
        .mobile-cta {
          position: fixed; bottom: 0; left: 0; right: 0; z-index: 200;
          background: #fff; border-top: 1px solid var(--border);
          padding: 10px 16px;
          display: flex; align-items: center; justify-content: space-between;
        }
        @media(min-width:820px){ .mobile-cta { display: none; } }
        .mcta-price { display: flex; flex-direction: column; gap: 1px; }
        .mcta-from  { font-size: 10px; color: var(--muted); font-weight: 600; text-transform: uppercase; letter-spacing: .5px; }
        .mcta-amount { display: flex; align-items: baseline; gap: 5px; }
        .mcta-num   { font-size: 20px; font-weight: 800; color: var(--ink); }
        .mcta-orig  { font-size: 12px; color: var(--muted); text-decoration: line-through; }
        .mcta-per   { font-size: 10px; color: var(--muted); }
        .mcta-btns  { display: flex; gap: 8px; }
        .mcta-call  {
          padding: 10px 14px;
          background: #10233d; color: #fff;
          font-size: 13px; font-weight: 600;
          border: none; border-radius: 9px;
          text-decoration: none;
          display: flex; align-items: center; gap: 5px;
        }
        .mcta-call svg { width: 13px; height: 13px; }
        .mcta-enquire {
          padding: 10px 18px;
          background: var(--teal); color: #fff;
          font-size: 13px; font-weight: 700;
          border: none; border-radius: 9px; cursor: pointer;
        }

        /* ── enquiry sheet ── */
        .enq-backdrop {
          position: fixed; inset: 0; z-index: 9999;
          background: rgba(0,0,0,.5);
          display: flex; align-items: flex-end; justify-content: center;
          opacity: 0; pointer-events: none;
          transition: opacity .2s;
        }
        .enq-backdrop.open { opacity: 1; pointer-events: all; }
        .enq-sheet {
          background: #fff;
          width: 100%; max-width: 520px;
          border-radius: 22px 22px 0 0;
          padding: 28px 22px 36px;
          transform: translateY(100%);
          transition: transform .25s ease;
          position: relative;
        }
        .enq-backdrop.open .enq-sheet { transform: translateY(0); }
        .enq-close {
          position: absolute; top: 14px; right: 18px;
          background: none; border: none;
          font-size: 26px; color: var(--muted); cursor: pointer;
        }
        .enq-title { font-size: 18px; font-weight: 700; color: var(--ink); margin: 0 0 4px; }
        .enq-sub   { font-size: 13px; color: var(--muted); margin: 0 0 18px; }
        .enq-input {
          width: 100%; padding: 13px 14px;
          border: 1.5px solid var(--border); border-radius: 10px;
          font-size: 14px; margin-bottom: 10px;
          outline: none;
        }
        .enq-input:focus { border-color: var(--teal); }
        .enq-btn {
          width: 100%; padding: 14px;
          background: var(--teal); color: #fff;
          font-size: 15px; font-weight: 700;
          border: none; border-radius: 10px; cursor: pointer;
          margin-top: 4px;
        }
        .enq-btn:hover { background: var(--teal-d); }
        .enq-success {
          text-align: center; padding: 28px 0;
        }
        .enq-success-icon { font-size: 40px; display: block; margin-bottom: 10px; }
        .enq-success h4 { font-size: 18px; font-weight: 700; color: var(--ink); margin: 0 0 6px; }
        .enq-success p  { font-size: 13px; color: var(--muted); }
      `}</style>

      <main id="main-content" className="trip-page">

        {/* ── Hero ── */}
        <div className="hero">
          <img
            className="hero-img"
            src={`${S3}/people-holding-hands-as-sign-peace-with-mountains-background-winter.jpg`}
            alt="Winter Spiti Valley"
          />
          <div className="hero-gradient" />
          <div className="hero-content">
            <a
              className="hero-download"
              href="https://trip-itineraries.s3.ap-south-1.amazonaws.com/owf-winter-spiti.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://owf-website-content.s3.ap-south-1.amazonaws.com/download-button-svgrepo-com.svg"
                alt=""
                width="16"
                height="16"
              />
              Download Itinerary PDF
            </a>
          </div>
        </div>

        {/* ── Trip title block (above nav) ── */}
        <div style={{ background: "var(--teal-l)", borderBottom: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 980, margin: "0 auto", padding: "20px 20px 16px" }}>
            <h1 style={{ fontSize: "18px", fontWeight: 700, color: "rgb(32, 32, 32)", margin: 0, lineHeight: "23.4px", padding: 0 }}>
              7 Days Winter Spiti Backpacking Trip
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: 24, marginTop: 12 }}>
              {/* Location */}
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "rgba(36, 36, 36, 0.9)", fontSize: "14px", fontWeight: 500, lineHeight: "20px", letterSpacing: "0.014px", margin: 0, padding: 0 }}>
                <i className="fas fa-map-marker-alt" style={{ fontSize: 14, color: "var(--teal)" }} />
                Delhi - Delhi
              </span>
              {/* Duration */}
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "rgba(36, 36, 36, 0.9)", fontSize: "14px", fontWeight: 500, lineHeight: "20px", letterSpacing: "0.014px", margin: 0, padding: 0 }}>
                <i className="fas fa-clock" style={{ fontSize: 14, color: "var(--teal)" }} />
                6N - 7D
              </span>
            </div>
          </div>
        </div>

        {/* ── Section nav ── */}
        <nav className="trip-nav" aria-label="Trip sections">
          <div className="trip-nav-inner">
            {NAV.map(({ id, label }) => (
              <button
                key={id}
                className={`trip-nav-btn${activeNav === id ? " on" : ""}`}
                onClick={() => scrollToSection(id)}
              >
                {label}
              </button>
            ))}
          </div>
        </nav>

        <div className="trip-wrap">
          <div className="trip-main">

            {/* ── Overview ── */}
            <section id="overview" className="section">
              <h2 className="section-title"><span className="section-bar" />Overview &amp; Highlights</h2>

              <div className="route-pill">
                Delhi → Shimla → Chitkul → Kalpa → Nako → Tabo → Kaza → Dhankar → Key Monastery → Hikkim → Komic → Langza → Delhi
              </div>

              <div className="overview-text" style={showFullDesc ? { marginBottom: 8 } : { overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 5, WebkitBoxOrient: "vertical", marginBottom: 8 }}>
                Spiti Valley — literally meaning the land between magnificent India and majestic Tibet — is one of the most remote and spectacular places on earth. In winter, the transformation is extraordinary: rivers freeze solid, the mud-brick monasteries are draped in snow, and the sky turns an impossibly deep blue against the white peaks. With barely any tourists, you experience a Spiti that most people never get to see — raw, silent, and profoundly beautiful.
                {" "}This 7-day group backpacking trip takes you from Delhi through the Kinnaur valley into the heart of the Spiti cold desert, visiting ancient monasteries, record-breaking landmarks, and high-altitude villages that feel untouched by time. Our experienced Trip Captain and support team handle every logistical detail so you can focus entirely on the experience.
              </div>
              <button
                onClick={() => setShowFullDesc(v => !v)}
                style={{ background: "none", border: "none", padding: "4px 0 16px", cursor: "pointer", color: "var(--teal)", fontSize: 14, fontWeight: 600 }}
              >
                {showFullDesc ? "Read Less ▲" : "Read More ▼"}
              </button>

              <div style={{ marginTop: 8 }}>
                <button
                  onClick={() => setShowHighlights(v => !v)}
                  style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", background: "none", border: "none", padding: "10px 0", cursor: "pointer" }}
                >
                  <h3 style={{ fontFamily: "'Roboto', sans-serif", fontSize: 16, fontWeight: 600, color: "rgb(45, 45, 45)", lineHeight: "normal", margin: 0 }}>Trip Highlights</h3>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    style={{ transition: "transform .2s", transform: showHighlights ? "rotate(180deg)" : "rotate(0deg)", flexShrink: 0 }}>
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </button>
                {showHighlights && (
                  <div className="highlights-grid" style={{ marginTop: 10 }}>
                    {HIGHLIGHTS.map((h, i) => (
                      <div className="highlight-card" key={i}>
                        <span className="hl-icon">{h.icon}</span>
                        <span className="hl-text">{h.text}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>

            {/* ── Itinerary ── */}
            <section id="itinerary" className="section">
              <h2 className="section-title"><span className="section-bar" />Itinerary</h2>
              {ITINERARY.map((day, i) => (
                <div className="itin-card" key={i}>
                  <button
                    className="itin-trigger"
                    onClick={() => setOpenDay(openDay === i ? null : i)}
                    aria-expanded={openDay === i}
                  >
                    <span className="day-badge">{day.day}</span>
                    <span className="itin-head-title">{day.title}</span>
                    <span className="itin-toggle-btn">{openDay === i ? "−" : "+"}</span>
                  </button>
                  <div className={`itin-body${openDay === i ? " open" : ""}`}>
                    {day.meta && <p className="itin-meta">{day.meta}</p>}
                    <ul className="itin-bullets">
                      {day.bullets.map((b, j) => (
                        <li key={j}><span className="itin-dot" />{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
              <a
                className="hero-download"
                href="https://trip-itineraries.s3.ap-south-1.amazonaws.com/owf-winter-spiti.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ alignSelf: "center", marginTop: 16 }}
              >
                <img src="https://owf-website-content.s3.ap-south-1.amazonaws.com/download-button-svgrepo-com.svg" alt="" width="14" height="14" />
                Download Itinerary PDF
              </a>
            </section>

            {/* ── Important Notes ── */}
            <section className="section">
              <h2 className="section-title"><span className="section-bar" />Important Notes</h2>
              <div className="notes-list">
                {[
                  { icon: "✈️", title: "Getting to Delhi", text: "Book trains/flights reaching Delhi by 4 PM on Day 0. On return, plan departures from Delhi after 12 PM on Day 8." },
                  { icon: "🔄", title: "Itinerary Flexibility", text: "Weather, road conditions or participant health may require schedule adjustments. Safety always comes first and we reserve the right to alter plans accordingly." },
                  { icon: "🎂", title: "Age Requirement", text: "Group departures are for travellers aged 16–42 years given the demanding high-altitude nature of the itinerary. Custom private trips can be arranged for other age groups." },
                  { icon: "🏥", title: "Medical Advisory", text: "Consult your physician before travelling to high altitude. Carry personal medications for common altitude issues. Very limited medical facilities exist in the valley." },
                  { icon: "❄️", title: "Snow & Road Conditions", text: "Heavy snowfall may restrict access to certain locations. 4×4 vehicles may be required at extra cost. This is part of the genuine winter Spiti experience." },
                  { icon: "🛏️", title: "Winter Comfort", text: "One complimentary blanket per traveller is included at each property. Properties in Spiti are basic but comfortable — this is a backpacking trip, not a luxury resort stay." },
                ].map((n, i) => (
                  <div className="note-item" key={i}>
                    <span className="note-icon">{n.icon}</span>
                    <div className="note-body">
                      <span className="note-title">{n.title}</span>
                      <span className="note-text">{n.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Inclusions ── */}
            <section id="inclusions" className="section section-inclusions">
              <h2 className="section-title"><span className="section-bar" />Inclusions</h2>
              <ul className="checklist">
                {INCLUSIONS.map((item, i) => (
                  <li key={i}>
                    <span className="ci yes">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* ── Exclusions ── */}
            <section className="section section-exclusions">
              <h2 className="section-title"><span className="section-bar" />Exclusions</h2>
              <ul className="checklist">
                {EXCLUSIONS.map((item, i) => (
                  <li key={i}>
                    <span className="ci no">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                        <path d="M18 6L6 18M6 6l12 12"/>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* ── Other Info ── */}
            <section className="section section-other-info">
              <h2 className="section-title"><span className="section-bar" />Other Info</h2>

              {/* Must Carry */}
              <div className="other-info-sub" style={{ marginTop: 14 }}>
                <div className="other-info-sub-header">
                  <h3 className="other-info-sub-title">Must Carry</h3>
                </div>
                <ul className="other-info-list">
                  <li>Authentic Government ID Card</li>
                  <li>Comfortable warm clothing like woolen socks, cap, fleece jackets or warmers, down jacket, toiletries.</li>
                  {showMustCarry && <>
                    <li>Sunscreen &amp; lip balm, Good U/V protection sunglasses</li>
                    <li>Personal Medicines (if any) &amp; few medicines for altitude sickness (a must)</li>
                  </>}
                </ul>
                <button className="other-info-toggle" onClick={() => setShowMustCarry(v => !v)}>
                  {showMustCarry ? "Read Less" : "Read More"}
                </button>
              </div>

              {/* Travel Essentials */}
              <div className="other-info-sub" style={{ marginTop: 14 }}>
                <div className="other-info-sub-header">
                  <h3 className="other-info-sub-title">Travel Essentials</h3>
                </div>
                <div className="other-info-category">
                  <p className="other-info-category-title">Gears</p>
                  <ul className="other-info-list">
                    <li>A rucksack bag and a day pack</li>
                    <li>3-litre water bladder or water bottle</li>
                  </ul>
                </div>
                {showTravelEssentials && <>
                  <div className="other-info-category">
                    <p className="other-info-category-title">Clothes</p>
                    <ul className="other-info-list">
                      <li>A sun cap and a woolen cap</li>
                      <li>UV protected sunglasses</li>
                      <li>One cotton long sleeves and 2 short sleeve t-shirt</li>
                      <li>1 fleece jacket</li>
                      <li>1 heavy thick jacket / down jacket</li>
                      <li>1 pair of gloves</li>
                      <li>At least 2 long pants (trek pants and cargo pants are favourable)</li>
                      <li>4 sets of undergarments</li>
                      <li>2 pair of socks</li>
                      <li>A small towel</li>
                      <li>A rain jacket or a poncho</li>
                    </ul>
                  </div>
                  <div className="other-info-category">
                    <p className="other-info-category-title">Footwear</p>
                    <ul className="other-info-list">
                      <li>Above-the-ankle waterproof and breathable hiking boots with good grip</li>
                      <li>Flip flops / sandals</li>
                    </ul>
                  </div>
                  <div className="other-info-category">
                    <p className="other-info-category-title">Medication</p>
                    <ul className="other-info-list">
                      <li>One strip of Diamox</li>
                      <li>Glucose powder</li>
                      <li>Medicines for headaches, diarrhoea, motion and altitude sickness</li>
                      <li>Dettol</li>
                      <li>Bandages</li>
                      <li>Cotton</li>
                    </ul>
                  </div>
                  <div className="other-info-category">
                    <p className="other-info-category-title">Personal Accessories</p>
                    <ul className="other-info-list">
                      <li>Toothpaste, toothbrush</li>
                      <li>Paper soap or sanitizer</li>
                      <li>Sunscreen minimum SPF 40, lip balm, cold creams</li>
                      <li>Body spray</li>
                      <li>LED torch light</li>
                    </ul>
                  </div>
                </>}
                <button className="other-info-toggle" onClick={() => setShowTravelEssentials(v => !v)}>
                  {showTravelEssentials ? "Read Less" : "Read More"}
                </button>
              </div>
            </section>

            {/* ── Available Dates ── */}
            <section id="dates" className="section">
              <h2 className="section-title"><span className="section-bar" />Available Dates</h2>
              <p style={{ fontSize: 13, color: "var(--muted)", margin: "-12px 0 16px" }}>Pick your batch for Winter Spiti 2026</p>
              {BATCHES.map((m, idx) => {
                const isOpen = openMonth === idx;
                return (
                  <div className="dates-month" key={idx}>
                    <div
                      className={`dates-month-header${isOpen ? " open" : ""}`}
                      onClick={() => setOpenMonth(isOpen ? null : idx)}
                    >
                      <span className="dates-month-name">{m.month}</span>
                      <span className="dates-month-toggle">{isOpen ? "−" : "+"}</span>
                    </div>
                    {isOpen && (
                      <div className="dates-month-body">
                        {m.dates.map((d, j) => {
                          const sc = d.status === "Open" ? "open" : d.status === "Full" ? "full" : "filling";
                          return (
                            <div className="date-batch" key={j}>
                              <span className="date-range">{d.range}</span>
                              <span className={`date-status ${sc}`}>{d.status}</span>
                              <span className="date-price">From {d.price}</span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </section>

            {/* ── Reviews ── */}
            <section id="reviews" className="section">
              <h2 className="section-title"><span className="section-bar" />Reviews</h2>
              <div className="reviews-grid">
                {REVIEWS.map((r, i) => (
                  <div className="review-card" key={i}>
                    <div className="review-header">
                      <div className="reviewer-info">
                        <span className="reviewer-name">{r.name}</span>
                        <span className="reviewer-meta">{r.location} · {r.date}</span>
                      </div>
                      <span className="stars">{"★".repeat(r.rating)}</span>
                    </div>
                    <p className="review-text">&ldquo;{r.text}&rdquo;</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Gallery ── */}
            <section id="gallery" className="section">
              <h2 className="section-title"><span className="section-bar" />Journey in Frames</h2>
              <p style={{ fontSize: 13, color: "var(--muted)", margin: "-12px 0 12px" }}>Real moments from real travellers in Spiti</p>
              <div className="gallery-track">
                {GALLERY.map((src, i) => (
                  <img key={i} src={src} alt={`Spiti trip photo ${i + 1}`} loading={i > 1 ? "lazy" : "eager"} />
                ))}
              </div>
            </section>

            {/* ── Spiti tagline ── */}
            <div className="spiti-tagline">
              <p className="spiti-tagline-title">Spiti</p>
              <p className="spiti-tagline-sub">India&apos;s High-Altitude Land of Adventure</p>
            </div>

          </div>{/* trip-main */}

        </div>{/* trip-wrap */}

        {/* ── Enquiry bottom-sheet ── */}
        <div
          className={`enq-backdrop${showEnquiry ? " open" : ""}`}
          role="dialog" aria-modal="true" aria-label="Enquiry form"
          onClick={(e) => { if (e.target === e.currentTarget) { setShowEnquiry(false); setSubmitted(false); } }}
        >
          <div className="enq-sheet">
            <button className="enq-close" aria-label="Close" onClick={() => { setShowEnquiry(false); setSubmitted(false); }}>×</button>
            {submitted ? (
              <div className="enq-success">
                <span className="enq-success-icon">✅</span>
                <h4>Enquiry Received!</h4>
                <p>Our trip expert will call you within 24 hours.<br />Get ready for Spiti! 🏔️</p>
              </div>
            ) : (
              <>
                <h3 className="enq-title">Plan Your Winter Spiti Trip</h3>
                <p className="enq-sub">Fill in your details — our expert will get back to you shortly.</p>
                <form onSubmit={submitEnquiry}>
                  <input className="enq-input" name="name"  type="text" placeholder="Your full name"  required />
                  <input className="enq-input" name="phone" type="tel"  placeholder="Phone number"     required />
                  <input className="enq-input" name="email" type="email" placeholder="Email address (optional)" />
                  <button className="enq-btn" type="submit" disabled={submitting}>
                    {submitting ? "Submitting…" : "Submit Enquiry"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
