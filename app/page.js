"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import HeroVideo from "./components/HeroVideo";

const upcomingTrips = [
  {
    name: "Meghalaya Road Trip",
    url: "https://www.owftrips.in/magical-meghalaya-trip",
    image: "https://owf-website-content.s3.ap-south-1.amazonaws.com/IMG_3775.JPG",
    price: "₹22,499/-",
    priceSuffix: "Onwards",
    duration: "6N/7D",
    pickup: "Guwahati - Guwahati",
    batches: "22 Feb, 1 Mar",
    alt: "Meghalaya road trip waterfall view",
  },
  {
    name: "Winter Spiti Backpacking Trip",
    url: "https://www.owftrips.in/winter-spiti-backpacking",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f5/Kee_monastery_Spiti_Valley_%28edited%29.jpg",
    price: "₹22,500/-",
    priceSuffix: "Onwards",
    duration: "6N/7D",
    pickup: "Delhi - Delhi",
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

const galleryFrames = [
  {
    place: "Frame 1",
    image: "https://owf-website-content.s3.ap-south-1.amazonaws.com/HomePage/WANDERLUST+IN+FRAME/39376+2.jpg",
  },
  {
    place: "Frame 2",
    image: "https://owf-website-content.s3.ap-south-1.amazonaws.com/HomePage/WANDERLUST+IN+FRAME/4D0D6292-B81F-46A2-991B-3E8881C5C4D0.JPG",
  },
  {
    place: "Frame 3",
    image: "https://owf-website-content.s3.ap-south-1.amazonaws.com/HomePage/WANDERLUST+IN+FRAME/6ABA0C34-12BA-4EE6-A932-9D36A120D3D0.JPG",
  },
  {
    place: "Frame 4",
    image: "https://owf-website-content.s3.ap-south-1.amazonaws.com/HomePage/WANDERLUST+IN+FRAME/IMG_1290_HEIC+2.jpg",
  },
  {
    place: "Frame 5",
    image: "https://owf-website-content.s3.ap-south-1.amazonaws.com/HomePage/WANDERLUST+IN+FRAME/IMG_1361.jpg",
  },
  {
    place: "Frame 6",
    image: "https://owf-website-content.s3.ap-south-1.amazonaws.com/HomePage/WANDERLUST+IN+FRAME/IMG_20191101_174143.jpg",
  },
  {
    place: "Frame 7",
    image: "https://owf-website-content.s3.ap-south-1.amazonaws.com/HomePage/WANDERLUST+IN+FRAME/IMG_2402+3.jpg",
  },
  {
    place: "Frame 8",
    image: "https://owf-website-content.s3.ap-south-1.amazonaws.com/HomePage/WANDERLUST+IN+FRAME/IMG_2464+2.jpg",
  },
  {
    place: "Frame 9",
    image: "https://owf-website-content.s3.ap-south-1.amazonaws.com/HomePage/WANDERLUST+IN+FRAME/IMG_2894_HEIC.jpg",
  },
  {
    place: "Frame 10",
    image: "https://owf-website-content.s3.ap-south-1.amazonaws.com/HomePage/WANDERLUST+IN+FRAME/IMG_3470.JPG",
  },
  {
    place: "Frame 11",
    image: "https://owf-website-content.s3.ap-south-1.amazonaws.com/HomePage/WANDERLUST+IN+FRAME/IMG_3618.JPG",
  },
  {
    place: "Frame 12",
    image: "https://owf-website-content.s3.ap-south-1.amazonaws.com/HomePage/WANDERLUST+IN+FRAME/IMG_3739.jpg",
  },
  {
    place: "Frame 13",
    image: "https://owf-website-content.s3.ap-south-1.amazonaws.com/HomePage/WANDERLUST+IN+FRAME/IMG_3775.JPG",
  },
  {
    place: "Frame 14",
    image: "https://owf-website-content.s3.ap-south-1.amazonaws.com/HomePage/WANDERLUST+IN+FRAME/IMG_3884+2.JPG",
  },
  {
    place: "Frame 15",
    image: "https://owf-website-content.s3.ap-south-1.amazonaws.com/HomePage/WANDERLUST+IN+FRAME/IMG_6121.jpg",
  },
  {
    place: "Frame 16",
    image: "https://owf-website-content.s3.ap-south-1.amazonaws.com/HomePage/WANDERLUST+IN+FRAME/IMG_6654_HEIC+3.jpg",
  },
  {
    place: "Frame 17",
    image: "https://owf-website-content.s3.ap-south-1.amazonaws.com/HomePage/WANDERLUST+IN+FRAME/IMG_7239+2.jpg",
  },
  {
    place: "Frame 18",
    image: "https://owf-website-content.s3.ap-south-1.amazonaws.com/HomePage/WANDERLUST+IN+FRAME/IMG_8531+2.jpg",
  },
  {
    place: "Frame 19",
    image: "https://owf-website-content.s3.ap-south-1.amazonaws.com/HomePage/WANDERLUST+IN+FRAME/IMG_9987+2.jpg",
  },
  {
    place: "Frame 20",
    image: "https://owf-website-content.s3.ap-south-1.amazonaws.com/HomePage/WANDERLUST+IN+FRAME/PHOTO-2025-06-28-09-15-52.jpg",
  },
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePopupId, setActivePopupId] = useState("");
  const tripsRef = useRef(null);
  const galleryRef = useRef(null);

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

  const scrollGallery = (distance) => {
    if (!galleryRef.current) return;
    galleryRef.current.scrollBy({ left: distance, behavior: "smooth" });
  };

  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#home">
            <img
              className="brand-logo"
              src="https://owf-website-content.s3.ap-south-1.amazonaws.com/HomePage/logo.png"
              alt="OWF Trips"
            />
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
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#group-trips" onClick={() => setMenuOpen(false)}>Group Trips</a>
            <a href="#customized-trips" onClick={() => setMenuOpen(false)}>Customized Trips</a>
            <a href="#payments" onClick={() => setMenuOpen(false)}>Payments</a>
            <a href="#about-us" onClick={() => setMenuOpen(false)}>About Us</a>
          </nav>
        </div>
      </header>

      <main id="home">
        <HeroVideo />

        <section id="group-trips" className="section">
          <div className="container">
            <div className="section-head reveal">
              <h2 className="group-trips-heading">Upcoming Group Trips</h2>
              <p className="group-trips-subheading">Join like-minded travelers on fixed departures.</p>
            </div>
            <div className="trip-scroll-wrap reveal">
              <button className="scroll-arrow left-arrow" aria-label="Scroll trips left" onClick={() => scrollTrips(-320)}>
                <i className="fas fa-chevron-left" aria-hidden="true"></i>
              </button>
              <div className="trip-scroll-container" ref={tripsRef} aria-label="Upcoming group trips">
                {upcomingTrips.map((trip) => (
                  <a key={trip.name} className="upcoming-trip-card" href={trip.url} target="_blank" rel="noopener noreferrer">
                    <img src={trip.image} alt={trip.alt} loading="lazy" />
                    <span className="trip-price">
                      <span className="trip-price-value">{trip.price}</span>{" "}
                      <span className="trip-price-suffix">{trip.priceSuffix}</span>
                    </span>
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

        <div className="container section-divider-wrap">
          <hr className="section-divider" aria-hidden="true" />
        </div>

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
              <h2 className="trip-leaders-heading">OWF Trip Leaders</h2>
              <p className="trip-leaders-subheading">Get To Know India's Coolest Trip Leaders!</p>
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
              <h2 className="reviews-heading">Reviews</h2>
              <p className="reviews-subheading">from our Trippers to Us ❤️</p>
            </div>
            <div className="review-widget reveal">
              <Script
                src="https://static.elfsight.com/platform/platform.js"
                data-use-service-core
                strategy="lazyOnload"
              />
              <div
                className="elfsight-app-b26481d2-715b-46ab-b5a9-d7549301d918"
                data-elfsight-app-lazy
              ></div>
            </div>
          </div>
        </section>

        <section className="section connect-experts-section">
          <div className="container">
            <div className="connect-experts-card reveal">
              <div className="connect-experts-overlay"></div>
              <div className="connect-experts-content">
                <h2>Didn&apos;t find what you were looking for?</h2>
                <p>Connect with our experts! Get the best itineraries and offers!</p>
                <a
                  className="connect-experts-btn"
                  href="https://wa.me/message/ZLIG4WNMOLF2P1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect now
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section frames-section">
          <div className="container">
            <div className="section-head reveal frames-head">
              <h2 className="frames-heading">WANDERLUST IN FRAME</h2>
              <p className="frames-subheading">Picture-Perfect Journeys</p>
            </div>
            <div className="frames-carousel reveal">
              <button
                className="frames-arrow frames-arrow-left"
                type="button"
                aria-label="Scroll gallery left"
                onClick={() => scrollGallery(-360)}
              >
                <i className="fas fa-chevron-left" aria-hidden="true"></i>
              </button>

              <div className="frames-track" ref={galleryRef} aria-label="Trip photo gallery">
                {galleryFrames.map((frame, index) => {
                  const mod = index % galleryFrames.length;
                  const cardClass =
                    mod === 0
                      ? "frame-card frame-card-left"
                      : mod === galleryFrames.length - 1
                        ? "frame-card frame-card-right"
                        : "frame-card";

                  return (
                    <article key={`${frame.place}-${index}`} className={cardClass}>
                      <img src={frame.image} alt={`${frame.place} trip photo`} loading="lazy" />
                    </article>
                  );
                })}
              </div>

              <button
                className="frames-arrow frames-arrow-right"
                type="button"
                aria-label="Scroll gallery right"
                onClick={() => scrollGallery(360)}
              >
                <i className="fas fa-chevron-right" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </section>

      </main>

      <footer className="site-footer" aria-label="Company footer">
        <div className="footer-inner">
          <h3 className="footer-company">OWF TRIPS LLP</h3>
          <p className="footer-address">LLPIN: ACP-8848</p>
          <p className="footer-address">
            Varthur Main Rd, opp. Dmart, Brookefield, Bengaluru, Karnataka 560066
          </p>

          <div className="footer-contact-row">
            <a className="footer-contact-link" href="mailto:bookings@owftrips.in">
              bookings@owftrips.in
            </a>
            <a className="footer-contact-link" href="tel:+918296966873">
              +91-8296966873
            </a>
            <a
              className="footer-contact-link"
              href="https://www.owftrips.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.owftrips.in
            </a>
          </div>

          <div className="footer-quick-links" aria-label="Quick links">
            <p className="footer-quick-title">Quick Links</p>
            <div className="footer-quick-grid">
              <a className="footer-quick-link" href="#about">About Us</a>
              <a className="footer-quick-link" href="#">Privacy Policy</a>
              <a className="footer-quick-link" href="#">Cancellation Policy</a>
              <a className="footer-quick-link" href="#">Terms &amp; Condition</a>
              <a className="footer-quick-link" href="#">Disclaimer</a>
              <a className="footer-quick-link" href="#">Payments</a>
            </div>
          </div>

          <div className="footer-social" aria-label="Social links">
            <a
              className="footer-social-link"
              href="https://www.facebook.com/owftrips"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <img
                className="footer-social-icon"
                src="https://owf-website-content.s3.ap-south-1.amazonaws.com/HomePage/facebook-round-color-icon.svg"
                alt=""
                loading="lazy"
              />
            </a>
            <a
              className="footer-social-link"
              href="https://www.instagram.com/owftrips"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img
                className="footer-social-icon"
                src="https://owf-website-content.s3.ap-south-1.amazonaws.com/HomePage/ig-instagram-icon.svg"
                alt=""
                loading="lazy"
              />
            </a>
            <a
              className="footer-social-link"
              href="https://www.youtube.com/@owftrips"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <img
                className="footer-social-icon"
                src="https://owf-website-content.s3.ap-south-1.amazonaws.com/HomePage/youtube-color-icon.svg"
                alt=""
                loading="lazy"
              />
            </a>
          </div>

          <div className="footer-skyline" aria-hidden="true"></div>
          <p className="footer-copy">&copy; OWF TRIPS LLP, All rights reserved.</p>
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
