import InnerPageLayout from "../components/InnerPageLayout";

export const metadata = {
  title: "About Us",
  description:
    "OWF Trips — founded by travel enthusiasts to create extraordinary adventures. Learn our story, values, and what makes us different.",
};

const differentiators = [
  {
    icon: "fa-map-marked-alt",
    title: "Personalized Itineraries",
    desc: "We recognize that every traveler is unique. Our team crafts journeys aligned with your specific interests — whether adventure-focused, culturally-oriented, or wellness-centered.",
  },
  {
    icon: "fa-users",
    title: "Local Expertise",
    desc: "Our specialists work hand-in-hand with regional guides and local communities to deliver genuine, enriching experiences that benefit both visitors and host destinations.",
  },
  {
    icon: "fa-check-circle",
    title: "Seamless Planning",
    desc: "From the first inquiry to the final day of your trip, we handle every detail — flights, stays, transfers, experiences — so you can focus entirely on the journey.",
  },
  {
    icon: "fa-star",
    title: "Unique Experiences",
    desc: "We go far beyond standard tourist trails — think culinary workshops, guided temple hikes, exclusive wildlife safaris, and encounters you won't find in any brochure.",
  },
];

const values = [
  {
    icon: "fa-mountain",
    label: "Adventure",
    color: "about-value-green",
    desc: "Encouraging you to push your boundaries and discover the world beyond the familiar.",
  },
  {
    icon: "fa-heart",
    label: "Authenticity",
    color: "about-value-orange",
    desc: "Genuine cultural and environmental engagement — not curated performances.",
  },
  {
    icon: "fa-leaf",
    label: "Sustainability",
    color: "about-value-teal",
    desc: "Responsible travel that protects ecosystems, communities, and future generations.",
  },
  {
    icon: "fa-trophy",
    label: "Excellence",
    color: "about-value-blue",
    desc: "Superior service that consistently exceeds traveler expectations.",
  },
];

export default function AboutPage() {
  return (
    <InnerPageLayout
      title="About OWF Trips"
      breadcrumb="About Us"
      currentPage="about"
    >
      {/* ── Mission quote ── */}
      <div className="about-mission-card">
        <span className="about-mission-quote">&ldquo;</span>
        <blockquote className="about-mission-text">
          Travel is more than just visiting new places — it&rsquo;s about
          creating unforgettable experiences, forging connections, and
          discovering the extraordinary in the ordinary.
        </blockquote>
        <p className="about-mission-sub">
          Your Gateway to Extraordinary Adventures
        </p>
      </div>

      {/* ── Our Story ── */}
      <section className="about-story-section">
        <div className="about-section-label">
          <i className="fas fa-book-open" aria-hidden="true"></i> Our Story
        </div>
        <h2 className="about-section-heading">How OWF Trips began</h2>

        <div className="about-story-grid">
          <div className="about-story-text">
            <p>
              OWF — <strong>Our Weekend Fun</strong> — started exactly as it
              sounds: a small group of travel-obsessed friends turning weekend
              getaways into something memorable. What began as spontaneous
              escapes to nearby hill stations quickly grew into a community of
              hundreds of adventurers seeking authentic experiences across India
              and beyond.
            </p>
            <p>
              Founded by travel enthusiasts with extensive international
              experience — from the vibrant markets of Morocco to the raw
              wilderness of Patagonia — our team brings a global perspective to
              every itinerary we design.
            </p>
            <p>
              We handpick every destination, stay, and experience. From the
              misty hills of Meghalaya to the snow-covered valleys of Spiti, we
              walk the paths we recommend — so you travel with confidence and
              come back with stories worth telling.
            </p>
          </div>

          <div className="about-story-highlights">
            <div className="about-highlight-card">
              <i className="fas fa-route" aria-hidden="true"></i>
              <div>
                <strong>Curated Group Trips</strong>
                <p>Fixed-departure trips with handpicked itineraries and verified stays across India.</p>
              </div>
            </div>
            <div className="about-highlight-card">
              <i className="fas fa-sliders-h" aria-hidden="true"></i>
              <div>
                <strong>Custom Trip Planning</strong>
                <p>Tailor-made itineraries built around your preferences, budget, and travel dates.</p>
              </div>
            </div>
            <div className="about-highlight-card">
              <i className="fas fa-headset" aria-hidden="true"></i>
              <div>
                <strong>On-Ground Support</strong>
                <p>Real-time assistance with a fast response team and local contacts at every destination.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What Sets Us Apart ── */}
      <section className="about-differentiators-section">
        <div className="about-section-label">
          <i className="fas fa-gem" aria-hidden="true"></i> What Sets Us Apart
        </div>
        <h2 className="about-section-heading">
          Why travelers choose OWF Trips
        </h2>

        <div className="about-diff-grid">
          {differentiators.map(({ icon, title, desc }) => (
            <div className="about-diff-card" key={title}>
              <div className="about-diff-icon">
                <i className={`fas ${icon}`} aria-hidden="true"></i>
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="about-values-section">
        <div className="about-section-label">
          <i className="fas fa-compass" aria-hidden="true"></i> Core Values
        </div>
        <h2 className="about-section-heading">What we stand for</h2>

        <div className="about-values-grid-new">
          {values.map(({ icon, label, color, desc }) => (
            <div className={`about-value-card-new ${color}`} key={label}>
              <div className="about-value-icon-new">
                <i className={`fas ${icon}`} aria-hidden="true"></i>
              </div>
              <h3>{label}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Company Details ── */}
      <section className="about-company-section">
        <div className="about-section-label">
          <i className="fas fa-building" aria-hidden="true"></i> Company Info
        </div>
        <h2 className="about-section-heading">OWF TRIPS LLP</h2>

        <div className="about-company-card">
          <div className="about-company-grid">
            <div className="about-company-item">
              <span className="about-company-icon">
                <i className="fas fa-id-badge" aria-hidden="true"></i>
              </span>
              <div>
                <span className="about-company-label">LLPIN</span>
                <span className="about-company-value">ACP-8848</span>
              </div>
            </div>
            <div className="about-company-item">
              <span className="about-company-icon">
                <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
              </span>
              <div>
                <span className="about-company-label">Address</span>
                <span className="about-company-value">
                  Varthur Main Rd, opp. Dmart, Brookefield,
                  Bengaluru, Karnataka 560066
                </span>
              </div>
            </div>
            <div className="about-company-item">
              <span className="about-company-icon">
                <i className="fas fa-envelope" aria-hidden="true"></i>
              </span>
              <div>
                <span className="about-company-label">Email</span>
                <a
                  className="about-company-value about-company-link"
                  href="mailto:bookings@owftrips.in"
                >
                  bookings@owftrips.in
                </a>
              </div>
            </div>
            <div className="about-company-item">
              <span className="about-company-icon">
                <i className="fas fa-phone" aria-hidden="true"></i>
              </span>
              <div>
                <span className="about-company-label">Phone</span>
                <a
                  className="about-company-value about-company-link"
                  href="tel:+918296966873"
                >
                  +91-8296966873
                </a>
              </div>
            </div>
            <div className="about-company-item">
              <span className="about-company-icon">
                <i className="fas fa-clock" aria-hidden="true"></i>
              </span>
              <div>
                <span className="about-company-label">Hours</span>
                <span className="about-company-value">
                  11:30 AM – 9:30 PM, Mon–Sun
                </span>
              </div>
            </div>
            <div className="about-company-item">
              <span className="about-company-icon">
                <i className="fas fa-globe" aria-hidden="true"></i>
              </span>
              <div>
                <span className="about-company-label">Website</span>
                <a
                  className="about-company-value about-company-link"
                  href="https://www.owftrips.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.owftrips.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="about-cta-section">
        <div className="about-cta-inner">
          <div className="about-cta-text">
            <h2>Ready to explore the world?</h2>
            <p>
              Let us turn your travel dreams into reality. Talk to our team and
              let&rsquo;s plan your next extraordinary adventure together.
            </p>
          </div>
          <div className="about-cta-actions">
            <a
              href="https://wa.me/message/ZLIG4WNMOLF2P1"
              target="_blank"
              rel="noopener noreferrer"
              className="about-cta-primary"
            >
              <i className="fab fa-whatsapp" aria-hidden="true"></i>
              Chat on WhatsApp
            </a>
            <a
              href="mailto:bookings@owftrips.in"
              className="about-cta-secondary"
            >
              <i className="fas fa-envelope" aria-hidden="true"></i>
              Send an Email
            </a>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
