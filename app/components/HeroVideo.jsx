const ratings = [
  {
    id: "google",
    score: "4.9",
    reviews: "14001 reviews",
  },
  {
    id: "tripadvisor",
    score: "5.0",
    reviews: "3850 reviews",
  },
  {
    id: "facebook",
    score: "4.9",
    reviews: "1031 reviews",
  },
];

function GoogleIcon() {
  return (
    <svg className="hero-rating-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <radialGradient id="g_b" cx="1.479" cy="12.788" fx="1.479" fy="12.788" r="9.655" gradientTransform="matrix(.8032 0 0 1.0842 2.459 -.293)" gradientUnits="userSpaceOnUse">
          <stop offset=".368" stopColor="#ffcf09" />
          <stop offset=".718" stopColor="#ffcf09" stopOpacity=".7" />
          <stop offset="1" stopColor="#ffcf09" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="g_c" cx="14.295" cy="23.291" fx="14.295" fy="23.291" r="11.878" gradientTransform="matrix(1.3272 0 0 1.0073 -3.434 -.672)" gradientUnits="userSpaceOnUse">
          <stop offset=".383" stopColor="#34a853" />
          <stop offset=".706" stopColor="#34a853" stopOpacity=".7" />
          <stop offset="1" stopColor="#34a853" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="g_d" x1="23.558" y1="6.286" x2="12.148" y2="20.299" gradientUnits="userSpaceOnUse">
          <stop offset=".671" stopColor="#4285f4" />
          <stop offset=".885" stopColor="#4285f4" stopOpacity="0" />
        </linearGradient>
        <clipPath id="g_a">
          <path d="M22.36 10H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53h-.013l.013-.01c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09c.87-2.6 3.3-4.53 6.16-4.53 1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07 1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93v.01C3.99 20.53 7.7 23 12 23c2.97 0 5.46-.98 7.28-2.66 2.08-1.92 3.28-4.74 3.28-8.09 0-.78-.07-1.53-.2-2.25z" fill="none" />
        </clipPath>
      </defs>
      <path d="M22.36 10H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53h-.013l.013-.01c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09c.87-2.6 3.3-4.53 6.16-4.53 1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07 1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93v.01C3.99 20.53 7.7 23 12 23c2.97 0 5.46-.98 7.28-2.66 2.08-1.92 3.28-4.74 3.28-8.09 0-.78-.07-1.53-.2-2.25z" fill="#fc4c53" />
      <g clipPath="url(#g_a)">
        <ellipse cx="3.646" cy="13.572" rx="7.755" ry="10.469" fill="url(#g_b)" />
        <ellipse cx="15.538" cy="22.789" rx="15.765" ry="11.965" transform="rotate(-7.12 15.539 22.789)" fill="url(#g_c)" />
        <path fill="url(#g_d)" d="M11.105 8.28l.491 5.596.623 3.747 7.362 6.848 8.607-15.897-17.083-.294z" />
      </g>
    </svg>
  );
}

function TripadvisorIcon() {
  return (
    <svg className="hero-rating-icon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" aria-hidden="true">
      <path d="M175.335 281.334c0 24.483-19.853 44.336-44.336 44.336-24.484 0-44.337-19.853-44.337-44.336 0-24.484 19.853-44.337 44.337-44.337 24.483 0 44.336 19.853 44.336 44.337zm205.554-44.337c-24.48 0-44.336 19.853-44.336 44.337 0 24.483 19.855 44.336 44.336 44.336 24.481 0 44.334-19.853 44.334-44.336-.006-24.47-19.839-44.31-44.309-44.323l-.025-.01v-.004zm125.002 44.337c0 68.997-55.985 124.933-124.999 124.933a124.466 124.466 0 01-84.883-33.252l-40.006 43.527-40.025-43.576a124.45 124.45 0 01-84.908 33.3c-68.968 0-124.933-55.937-124.933-124.932A124.586 124.586 0 0146.889 189L6 144.517h90.839c96.116-65.411 222.447-65.411 318.557 0H506l-40.878 44.484a124.574 124.574 0 0140.769 92.333zm-290.31 0c0-46.695-37.858-84.55-84.55-84.55-46.691 0-84.55 37.858-84.55 84.55 0 46.691 37.859 84.55 84.55 84.55 46.692 0 84.545-37.845 84.55-84.54v-.013.003zM349.818 155.1a244.01 244.01 0 00-187.666 0C215.532 175.533 256 223.254 256 278.893c0-55.634 40.463-103.362 93.826-123.786l-.005-.006h-.003zm115.64 126.224c0-46.694-37.858-84.55-84.55-84.55-46.691 0-84.552 37.859-84.552 84.55 0 46.692 37.855 84.55 84.553 84.55 46.697 0 84.55-37.858 84.55-84.55z" fill="#002b11" fillRule="nonzero" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="hero-rating-icon" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 509 509" aria-hidden="true">
      <g fillRule="nonzero">
        <path fill="#0866FF" d="M509 254.5C509 113.94 395.06 0 254.5 0S0 113.94 0 254.5C0 373.86 82.17 474 193.02 501.51V332.27h-52.48V254.5h52.48v-33.51c0-86.63 39.2-126.78 124.24-126.78 16.13 0 43.95 3.17 55.33 6.33v70.5c-6.01-.63-16.44-.95-29.4-.95-41.73 0-57.86 15.81-57.86 56.91v27.5h83.13l-14.28 77.77h-68.85v174.87C411.35 491.92 509 384.62 509 254.5z" />
        <path fill="#fff" d="M354.18 332.27l14.28-77.77h-83.13V227c0-41.1 16.13-56.91 57.86-56.91 12.96 0 23.39.32 29.4.95v-70.5c-11.38-3.16-39.2-6.33-55.33-6.33-85.04 0-124.24 40.16-124.24 126.78v33.51h-52.48v77.77h52.48v169.24c19.69 4.88 40.28 7.49 61.48 7.49 10.44 0 20.72-.64 30.83-1.86V332.27h68.85z" />
      </g>
    </svg>
  );
}

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
            {item.id === "google" && <GoogleIcon />}
            {item.id === "tripadvisor" && <TripadvisorIcon />}
            {item.id === "facebook" && <FacebookIcon />}
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
