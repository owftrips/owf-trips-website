import InnerPageLayout from "../components/InnerPageLayout";

export const metadata = {
  title: "About Us",
  description:
    "Learn about OWF Trips — a travel company founded by enthusiasts offering curated group trips and custom travel planning across India.",
};

export default function AboutPage() {
  return (
    <InnerPageLayout title="About OWF Trips" breadcrumb="About Us" currentPage="about">
      <section className="about-hero-section">
        <p className="about-tagline">Built by travelers, designed for travelers.</p>
      </section>

      <section className="about-story">
        <h2>Our Story</h2>
        <p>
          At OWF Trips, we believe travel should be more than sightseeing — it
          should be about real connections, offbeat experiences, and stories you
          carry for life.
        </p>
        <p>
          Founded by a group of travel enthusiasts, OWF (Our Weekend Fun) started
          as weekend getaways and grew into curated group trips across India. What
          began as a small circle of friends exploring nearby hill stations quickly
          became a community of hundreds of travelers seeking authentic adventures.
        </p>
        <p>
          Our team handpicks every destination, stay, and experience to make sure
          you get the most authentic version of each place. From the misty hills of
          Meghalaya to the snow-covered valleys of Spiti, we have walked the paths
          we recommend — so you travel with confidence and come back with stories
          worth telling.
        </p>
      </section>

      <section className="about-values">
        <h2>What We Do</h2>
        <div className="about-values-grid">
          <div className="about-value-card">
            <div className="about-value-icon">
              <i className="fas fa-route" aria-hidden="true"></i>
            </div>
            <h3>Curated Group Trips</h3>
            <p>
              Fixed-departure trips with handpicked itineraries, verified stays,
              and experienced local partners across India.
            </p>
          </div>
          <div className="about-value-card">
            <div className="about-value-icon">
              <i className="fas fa-map-marked-alt" aria-hidden="true"></i>
            </div>
            <h3>Custom Trip Planning</h3>
            <p>
              Tailor-made itineraries built around your preferences, budget, and
              travel dates — no cookie-cutter packages.
            </p>
          </div>
          <div className="about-value-card">
            <div className="about-value-icon">
              <i className="fas fa-headset" aria-hidden="true"></i>
            </div>
            <h3>On-Ground Support</h3>
            <p>
              Real-time assistance during your trip with a fast response team and
              local contacts at every destination.
            </p>
          </div>
        </div>
      </section>

      <section className="about-company-details">
        <h2>Company Details</h2>
        <div className="about-details-grid">
          <div className="about-detail-item">
            <span className="about-detail-label">Company</span>
            <span className="about-detail-value">OWF TRIPS LLP</span>
          </div>
          <div className="about-detail-item">
            <span className="about-detail-label">LLPIN</span>
            <span className="about-detail-value">ACP-8848</span>
          </div>
          <div className="about-detail-item">
            <span className="about-detail-label">Address</span>
            <span className="about-detail-value">
              Varthur Main Rd, opp. Dmart, Brookefield, Bengaluru, Karnataka 560066
            </span>
          </div>
          <div className="about-detail-item">
            <span className="about-detail-label">Email</span>
            <span className="about-detail-value">
              <a href="mailto:bookings@owftrips.in">bookings@owftrips.in</a>
            </span>
          </div>
          <div className="about-detail-item">
            <span className="about-detail-label">Phone</span>
            <span className="about-detail-value">
              <a href="tel:+918296966873">+91-8296966873</a>
            </span>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <h2>Ready to explore?</h2>
        <p>Let us plan your next adventure.</p>
        <a
          className="about-cta-btn"
          href="https://wa.me/message/ZLIG4WNMOLF2P1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get in touch
        </a>
      </section>
    </InnerPageLayout>
  );
}
