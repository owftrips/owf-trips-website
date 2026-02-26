"use client";

import { useEffect, useRef, useState } from "react";
import HeroVideo from "./components/HeroVideo";

const upcomingTrips = [
  {
    name: "Meghalaya Road Trip",
    url: "https://www.owftrips.in/magical-meghalaya-trip",
    image: "https://owf-website-content.s3.ap-south-1.amazonaws.com/IMG_3775.JPG",
    price: "₹22,499/- Onwards",
    duration: "6N/7D",
    pickup: "Guwahati",
    batches: "22 Feb, 1 Mar",
    alt: "Meghalaya road trip waterfall view",
  },
  {
    name: "Winter Spiti Backpacking Trip",
    url: "https://www.owftrips.in/winter-spiti-backpacking",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f5/Kee_monastery_Spiti_Valley_%28edited%29.jpg",
    price: "₹22,500/- Onwards",
    duration: "6N/7D",
    pickup: "Delhi",
    batches: "1 Mar, 7 Mar +3 batches",
    alt: "Winter Spiti Backpacking Trip",
  },
];

const leaders = [
  {
    id: "leader-popup-1",
    name: "Kush Kumar",
    title: "Captain Kush",
    image: "https://owf-website-content.s3.ap-south-1.amazonaws.com/IMG_1598.webp",
    alt: "Captain Kush",
    bio: "Captain Kush, the ultimate trip leader, embodies the perfect blend of leadership, wisdom, and passion for exploration. With an encyclopedic understanding of diverse destinations from hidden gems to iconic landmarks, Kush ensures that every journey is rich with discovery and insight. Spanning continents, cultures, and climates, Kush's extensive experience makes navigating any scenario a breeze. Their profound knowledge encompasses not just the geography and history of each location, but also the intricate details that make every place unique: local traditions, culinary delights, and secret spots known only to the most seasoned travelers. With an innate ability to inspire and motivate, Kush fosters a sense of camaraderie and adventure among the group. Their exceptional organizational skills guarantee seamless travel experiences, while their keen problem-solving abilities ensure that any challenges are swiftly and skillfully managed. Whether scaling mountain peaks, delving into ancient ruins, or wandering through vibrant city streets, Kush transforms each trip into a captivating journey. Their passion for travel is contagious, their stories are enthralling, and their leadership is unwavering, making every adventure not just a trip, but a transformative experience.",
  },
  {
    id: "leader-popup-2",
    name: "Shivam Gupta",
    title: "Captain Chill",
    image: "https://owf-website-content.s3.ap-south-1.amazonaws.com/IMG_1618.webp",
    alt: "Captain Chill",
    bio: "Captain Chill is the ultimate trip leader, effortlessly blending expertise and charisma. Known for his relaxed and approachable demeanor, Captain Chill makes every journey feel like a breeze. With years of experience navigating diverse terrains and leading groups, he exudes confidence and calm, ensuring that everyone in his charge feels secure and at ease. Captain Chill's coolness is not just about his laid-back attitude; it is also reflected in his impeccable organizational skills and his knack for turning potential hiccups into memorable adventures. Whether you're exploring rugged mountains, serene beaches, or bustling cityscapes, Captain Chill's insightful guidance and infectious positivity elevate every experience. His knack for storytelling and deep knowledge of local cultures and environments keep everyone engaged and entertained throughout the trip. With Captain Chill at the helm, you're guaranteed not just a trip, but an unforgettable journey filled with laughter, learning, and unparalleled cool vibes.",
  },
  {
    id: "leader-popup-3",
    name: "Shailesh Jaiswal",
    title: "Captain SMJ",
    image:
      "https://owf-website-content.s3.ap-south-1.amazonaws.com/IMG_20210403_083014_Bokeh.webp",
    alt: "Captain SMJ",
    bio: "Meet Captain SMJ, the trip leader with whom every journey becomes a delightful adventure. Renowned for his easy-going nature and open-mindedness, Shailesh is someone you can talk to about anything, making every conversation feel natural and engaging. Whether it is discussing travel tales, sharing personal stories, or exploring new ideas, his company is always enjoyable and enriching. What sets Shailesh apart is his knack for coming up with the most unique and exciting ideas. From off-the-beaten-path excursions to innovative ways to experience well-known destinations, his creativity ensures that every trip is a fresh and memorable experience. His infectious enthusiasm and genuine interest in people foster a welcoming atmosphere where everyone feels included and valued. With Shailesh as your trip leader, expect not just expertly planned itineraries, but also spontaneous adventures that add a special touch to your journey. His ability to connect with people from all walks of life, coupled with his deep knowledge of diverse cultures and locales, makes him an exceptional guide and companion. Whether you're exploring a bustling city, trekking through remote wilderness, or soaking up the sun on a secluded beach, Captain SMJ will make your trip an unforgettable experience filled with laughter, discovery, and joy.",
  },
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePopupId, setActivePopupId] = useState("");
  const tripsRef = useRef(null);

  useEffect(() => {
    const revealEls = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 }
    );

    revealEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onEsc = (event) => {
      if (event.key === "Escape") setActivePopupId("");
    };
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = activePopupId ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activePopupId]);

  const scrollTrips = (distance) => {
    if (!tripsRef.current) return;
    tripsRef.current.scrollBy({ left: distance, behavior: "smooth" });
  };

  const year = new Date().getFullYear();

  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#home">
            OWF Trips
          </a>
          <button
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            Menu
          </button>
          <nav id="site-nav" className={`nav-links ${menuOpen ? "open" : ""}`} aria-label="Main navigation">
            <a href="#group-trips" onClick={() => setMenuOpen(false)}>Group Trips</a>
            <a href="#destinations" onClick={() => setMenuOpen(false)}>Destinations</a>
            <a href="#trip-leaders" onClick={() => setMenuOpen(false)}>Trip Leaders</a>
            <a href="#reviews" onClick={() => setMenuOpen(false)}>Reviews</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>Plan My Trip</a>
          </nav>
        </div>
      </header>

      <main id="home">
        <HeroVideo />

        <section id="group-trips" className="section">
          <div className="container">
            <div className="section-head reveal">
              <p className="eyebrow">Our Group Trips</p>
              <h2>Join like-minded travelers on fixed departures.</h2>
            </div>
            <div className="trip-scroll-wrap reveal">
              <button className="scroll-arrow left-arrow" aria-label="Scroll trips left" onClick={() => scrollTrips(-320)}>
                <i className="fas fa-chevron-left" aria-hidden="true"></i>
              </button>
              <div className="trip-scroll-container" ref={tripsRef} aria-label="Upcoming group trips">
                {upcomingTrips.map((trip) => (
                  <a key={trip.name} className="upcoming-trip-card" href={trip.url} target="_blank" rel="noopener noreferrer">
                    <img src={trip.image} alt={trip.alt} loading="lazy" />
                    <span className="trip-price">{trip.price}</span>
                    <div className="trip-overlay">
                      <h3>{trip.name}</h3>
                      <p className="trip-meta">
                        <span><i className="fas fa-clock" aria-hidden="true"></i> {trip.duration}</span>
                        <span><i className="fas fa-map-marker-alt" aria-hidden="true"></i> {trip.pickup}</span>
                      </p>
                      <p className="trip-batch"><i className="fas fa-calendar-alt" aria-hidden="true"></i> {trip.batches}</p>
                    </div>
                  </a>
                ))}
              </div>
              <button className="scroll-arrow right-arrow" aria-label="Scroll trips right" onClick={() => scrollTrips(320)}>
                <i className="fas fa-chevron-right" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </section>

        <section id="destinations" className="section section-alt">
          <div className="container">
            <div className="section-head reveal">
              <p className="eyebrow">Top Destinations</p>
              <h2>Popular routes travelers keep coming back to.</h2>
            </div>
            <div className="destination-grid">
              <article className="destination reveal">
                <h3>Himachal Pradesh</h3>
                <p>Spiti, Kasol, and mountain circuit journeys across changing seasons.</p>
              </article>
              <article className="destination reveal">
                <h3>Meghalaya</h3>
                <p>Green valleys, cave systems, and immersive northeast travel experiences.</p>
              </article>
              <article className="destination reveal">
                <h3>Kashmir</h3>
                <p>Lake stays, local culture, and scenic alpine drives through the valley.</p>
              </article>
              <article className="destination reveal">
                <h3>Custom India Trips</h3>
                <p>Tell us your dates and budget, and we design a personalized route for you.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="why-us" className="section">
          <div className="container why-grid">
            <div className="reveal">
              <p className="eyebrow">Why Choose Us</p>
              <h2>Travel planning that is simple, clear, and dependable.</h2>
            </div>
            <ul className="feature-list reveal">
              <li>Carefully curated itineraries with balanced travel days.</li>
              <li>Transparent inclusions and clear pricing structure.</li>
              <li>On-trip support with a fast response team.</li>
              <li>Experienced local partners and verified stays.</li>
            </ul>
          </div>
        </section>

        <section id="trip-leaders" className="section section-alt">
          <div className="container">
            <div className="section-head reveal">
              <p className="eyebrow">OWF Trip Leaders</p>
              <h2>Get To Know India's Coolest Trip Leaders!</h2>
            </div>
            <div className="leaders-scroll reveal" aria-label="OWF Trip leaders">
              {leaders.map((leader) => (
                <article
                  key={leader.id}
                  className="leader-card"
                  tabIndex={0}
                  role="button"
                  aria-label={`Read about ${leader.name}`}
                  onClick={() => setActivePopupId(leader.id)}
                  onKeyDown={(event) => {
                    if (event.key !== "Enter" && event.key !== " ") return;
                    event.preventDefault();
                    setActivePopupId(leader.id);
                  }}
                >
                  <img src={leader.image} alt={leader.alt} className="leader-img" loading="lazy" />
                  <div className="leader-info">
                    <h3>{leader.name}</h3>
                    <p>{leader.title}</p>
                    <span className="leader-btn">SEE INFO &rarr;</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="section section-alt">
          <div className="container">
            <div className="section-head reveal">
              <p className="eyebrow">Customer Reviews</p>
              <h2>Real feedback from previous travelers.</h2>
            </div>
            <div className="review-grid">
              <blockquote className="review reveal">
                "Itinerary was smooth and the team support was prompt before and during the trip."
                <cite>- Group Traveler, Spiti</cite>
              </blockquote>
              <blockquote className="review reveal">
                "Great coordination and transparent communication throughout the booking process."
                <cite>- Couple Traveler, Kashmir</cite>
              </blockquote>
              <blockquote className="review reveal">
                "Loved the Meghalaya route and local experiences we usually miss in regular plans."
                <cite>- Solo Traveler, Meghalaya</cite>
              </blockquote>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container about-box reveal">
            <div>
              <p className="eyebrow">About OWF Trips</p>
              <h2>Built by travelers, designed for travelers.</h2>
              <p>
                OWF Trips started to make Indian travel simpler and better organized.
                We combine on-ground knowledge with practical planning so you spend more time exploring and less time figuring things out.
              </p>
            </div>
            <a className="btn btn-secondary" href="#contact">Know More</a>
          </div>
        </section>

        <section id="contact" className="section section-contact">
          <div className="container contact-box reveal">
            <h2>Let's plan your next trip.</h2>
            <p>Share your destination, dates, and group size. We will suggest the best itinerary options for you.</p>
            <div className="contact-actions">
              <a className="btn btn-primary" href="mailto:hello@owftrips.com">Email Us</a>
              <a className="btn btn-secondary" href="tel:+919999999999">Call Us</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-wrap">
          <p>&copy; {year} OWF Trips. All rights reserved.</p>
          <p>One Way Fly | India</p>
        </div>
      </footer>

      <div
        className="popup-overlay"
        hidden={!activePopupId}
        onClick={() => setActivePopupId("")}
      ></div>

      {leaders.map((leader) => (
        <section
          key={`${leader.id}-popup`}
          className="leader-popup"
          hidden={activePopupId !== leader.id}
          aria-modal="true"
          role="dialog"
          aria-label={leader.name}
        >
          <button className="popup-close" type="button" aria-label="Close popup" onClick={() => setActivePopupId("")}>
            &times;
          </button>
          <h3>{leader.name}</h3>
          <p>{leader.bio}</p>
        </section>
      ))}
    </>
  );
}
