const ratings = [
  {
    id: "google",
    iconClass: "fab fa-google",
    score: "4.9",
    reviews: "14001 reviews",
  },
  {
    id: "tripadvisor",
    iconClass: "fab fa-tripadvisor",
    score: "5.0",
    reviews: "3850 reviews",
  },
  {
    id: "facebook",
    iconClass: "fab fa-facebook",
    score: "4.9",
    reviews: "1031 reviews",
  },
];

export default function HeroVideo() {
  return (
    <section className="hero-video-section" aria-label="OWF hero video">
      <div className="hero-video-frame reveal">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-poster.png"
        >
          <source src="https://owf-website-content.s3.ap-south-1.amazonaws.com/HomePage/OWF+Cover+video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="hero-rating-strip reveal" aria-label="Traveler ratings">
        {ratings.map((item) => (
          <div key={item.id} className="hero-rating-item">
            <i className={item.iconClass} aria-hidden="true"></i>
            <div>
              <p className="hero-rating-score">{item.score}</p>
              <p className="hero-rating-reviews">({item.reviews})</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
