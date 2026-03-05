import PolicyPageShell from "../components/PolicyPageShell";

export const metadata = {
  title: "Disclaimer",
  description:
    "Read the OWF Trips disclaimer regarding website content, accuracy, third-party links, and liability.",
};

export default function DisclaimerPage() {
  return (
    <PolicyPageShell title="Disclaimer" breadcrumb="Disclaimer">

      {/* Meta bar */}
      <div className="policy-meta-bar">
        <span className="policy-updated-badge">
          <i className="fas fa-clock" aria-hidden="true"></i>
          Last updated: March 2026
        </span>
        <span className="policy-read-time">
          <i className="fas fa-book-open" aria-hidden="true"></i>
          1 min read
        </span>
      </div>

      {/* Intro card */}
      <div className="policy-intro-card">
        <div className="policy-intro-icon">
          <i className="fas fa-shield-alt" aria-hidden="true"></i>
        </div>
        <div className="policy-intro-text">
          <p>
            <strong>OWF Trips</strong> provides the{" "}
            <a href="https://www.owftrips.in">www.owftrips.in</a> website as a
            service to the public and website owners. By using this website, you
            acknowledge and agree to the terms of this disclaimer.
          </p>
        </div>
      </div>

      {/* ── Section 01: Limitation of Liability ── */}
      <section className="policy-section" id="liability">
        <div className="policy-section-header">
          <span className="policy-section-icon">
            <i className="fas fa-balance-scale" aria-hidden="true"></i>
          </span>
          <div>
            <span className="policy-section-num">01</span>
            <h2>Limitation of Liability</h2>
          </div>
        </div>
        <div className="policy-section-body">
          <div className="policy-highlight-box">
            <i className="fas fa-exclamation-triangle" aria-hidden="true"></i>
            <p>
              OWF Trips is not responsible for, and expressly disclaims all
              liability for, damages of any kind arising out of use, reference
              to, or reliance on any information contained within this site.
            </p>
          </div>
          <p>
            While the information contained within the site is periodically
            updated, <strong>no guarantee is given</strong> that the information
            provided on this website is correct, complete, or up-to-date. Users
            are advised to verify any critical information independently before
            making decisions based on content found on this website.
          </p>
        </div>
      </section>

      {/* ── Section 02: Third-Party Links ── */}
      <section className="policy-section" id="third-party-links">
        <div className="policy-section-header">
          <span className="policy-section-icon">
            <i className="fas fa-external-link-alt" aria-hidden="true"></i>
          </span>
          <div>
            <span className="policy-section-num">02</span>
            <h2>Third-Party Links</h2>
          </div>
        </div>
        <div className="policy-section-body">
          <p>
            Although the OWF Trips website may include links providing direct
            access to other Internet resources, including third-party websites,{" "}
            <strong>
              OWF Trips is not responsible for the accuracy or content of
              information contained in these sites.
            </strong>
          </p>
          <ul className="policy-list">
            <li>
              Links from <a href="https://www.owftrips.in">www.owftrips.in</a>{" "}
              to third-party sites do not constitute an endorsement by OWF Trips
              of the parties or their products and services.
            </li>
            <li>
              OWF Trips has no control over the content, privacy policies, or
              practices of any third-party websites. We encourage users to review
              the terms and privacy policies of any external sites they visit.
            </li>
          </ul>
        </div>
      </section>

      {/* ── Section 03: No Endorsement ── */}
      <section className="policy-section" id="no-endorsement">
        <div className="policy-section-header">
          <span className="policy-section-icon">
            <i className="fas fa-ban" aria-hidden="true"></i>
          </span>
          <div>
            <span className="policy-section-num">03</span>
            <h2>No Endorsement</h2>
          </div>
        </div>
        <div className="policy-section-body">
          <p>
            The appearance on this website of advertisements and product or
            service information <strong>does not constitute an endorsement</strong>{" "}
            by OWF Trips of those products, services, or the organisations
            providing them.
          </p>
          <p>
            Any opinions, advice, statements, or other information expressed or
            made available on this website by third parties are those of the
            respective authors and do not necessarily reflect the views of OWF
            Trips.
          </p>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className="policy-section policy-section-cta">
        <div className="policy-section-header">
          <span className="policy-section-icon policy-section-icon-cta">
            <i className="fas fa-headset" aria-hidden="true"></i>
          </span>
          <div>
            <span className="policy-section-num">04</span>
            <h2>Contact Us</h2>
          </div>
        </div>
        <div className="policy-section-body">
          <div className="policy-cta-card">
            <div className="policy-cta-content">
              <h3>Have questions about this disclaimer?</h3>
              <p>
                If you have any concerns or queries regarding the content on our
                website, feel free to reach out to our team during office hours{" "}
                <strong>11:30 AM – 9:30 PM</strong>.
              </p>
              <p>
                <i className="fas fa-phone" aria-hidden="true"></i>{" "}
                <strong>+91 82969 66873</strong>
              </p>
            </div>
            <a
              href="mailto:bookings@owftrips.in"
              className="policy-cta-button"
            >
              <i className="fas fa-envelope" aria-hidden="true"></i>
              bookings@owftrips.in
            </a>
          </div>
        </div>
      </section>

    </PolicyPageShell>
  );
}
