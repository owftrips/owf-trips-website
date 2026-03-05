import PolicyPageShell from "../components/PolicyPageShell";
import PolicyTOC from "../components/PolicyTOC";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Read the OWF Trips privacy policy regarding collection, use, storage and transfer of personal information.",
};

const tocSections = [
  { id: "user-info", label: "User Information" },
  { id: "cookies", label: "Cookies" },
  { id: "external-links", label: "Links to Other Sites" },
  { id: "info-sharing", label: "Information Sharing" },
  { id: "info-security", label: "Information Security" },
  { id: "contact", label: "Contact Us" },
];

export default function PrivacyPolicyPage() {
  return (
    <PolicyPageShell title="Privacy Policy" breadcrumb="Privacy Policy">
      {/* Last updated badge */}
      <div className="policy-meta-bar">
        <span className="policy-updated-badge">
          <i className="fas fa-clock" aria-hidden="true"></i>
          Last updated: March 2026
        </span>
        <span className="policy-read-time">
          <i className="fas fa-book-open" aria-hidden="true"></i>
          5 min read
        </span>
      </div>

      {/* Intro card */}
      <div className="policy-intro-card">
        <div className="policy-intro-icon">
          <i className="fas fa-shield-alt" aria-hidden="true"></i>
        </div>
        <div className="policy-intro-text">
          <p>
            The terms &ldquo;We&rdquo; / &ldquo;Us&rdquo; / &ldquo;Our&rdquo; /
            &ldquo;Company&rdquo; individually and collectively refer to{" "}
            <strong>OWF Trips</strong> and the terms &ldquo;You&rdquo; /
            &ldquo;Your&rdquo; / &ldquo;Yourself&rdquo; refer to the users.
          </p>
          <p>
            This Privacy Policy is an electronic record in the form of an
            electronic contract formed under the Information Technology Act,
            2000 and the rules made thereunder and the amended provisions about
            electronic documents/records in various statutes as amended by the
            Information Technology Act, 2000. This Privacy Policy does not
            require any physical, electronic or digital signature.
          </p>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="policy-layout">
        <PolicyTOC sections={tocSections} />

        <div className="policy-body">
          {/* Preamble */}
          <div className="policy-preamble">
            <p>
              This Privacy Policy is a legally binding document between you and
              OWF Trips. The terms of this Privacy Policy will be effective upon
              your acceptance of the same (directly or indirectly in electronic
              form, by clicking on the I accept tab by use of the website or by
              other means). They will govern the relationship between you and
              OWF Trips for your use of the website{" "}
              <a
                href="https://www.owftrips.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.owftrips.in
              </a>
              .
            </p>

            <p>
              This document is published and shall be construed by the
              provisions of the Information Technology (reasonable security
              practices and procedures and sensitive personal data or
              information) Rules, 2011 under the Information Technology Act,
              2000; which require publishing of the Privacy Policy for
              collection, use, storage and transfer of sensitive personal data
              or information.
            </p>

            <p>
              Please read this Privacy Policy carefully by using the Website,
              you indicate that you understand, agree and consent to this
              Privacy Policy. If you do not agree with the terms of this Privacy
              Policy, please do not use this Website.
            </p>

            <p>
              By providing us with your Information or by making use of the
              facilities provided by the Website, You hereby consent to the
              collection, storage, processing and transfer of any or all of
              Your Personal Information and Non-Personal Information by us as
              specified under this Privacy Policy. You further agree that such
              collection, use, storage and transfer of Your Information shall
              not cause any loss or wrongful gain to you or any other person.
            </p>
          </div>

          {/* Section 1: User Information */}
          <section className="policy-section" id="user-info">
            <div className="policy-section-header">
              <span className="policy-section-icon">
                <i className="fas fa-user-shield" aria-hidden="true"></i>
              </span>
              <div>
                <span className="policy-section-num">01</span>
                <h2>User Information</h2>
              </div>
            </div>
            <div className="policy-section-body">
              <p>
                To avail of certain services on our Websites, users are required
                to provide certain information for the registration process
                namely:
              </p>

              <div className="policy-info-grid">
                <div className="policy-info-tag">
                  <i className="fas fa-user" aria-hidden="true"></i> Your name
                </div>
                <div className="policy-info-tag">
                  <i className="fas fa-envelope" aria-hidden="true"></i> Email
                  address
                </div>
                <div className="policy-info-tag">
                  <i className="fas fa-venus-mars" aria-hidden="true"></i> Sex
                </div>
                <div className="policy-info-tag">
                  <i className="fas fa-calendar" aria-hidden="true"></i> Age
                </div>
                <div className="policy-info-tag">
                  <i className="fas fa-map-pin" aria-hidden="true"></i> PIN code
                </div>
                <div className="policy-info-tag">
                  <i className="fas fa-credit-card" aria-hidden="true"></i>{" "}
                  Card details
                </div>
                <div className="policy-info-tag">
                  <i className="fas fa-notes-medical" aria-hidden="true"></i>{" "}
                  Medical records
                </div>
                <div className="policy-info-tag">
                  <i className="fas fa-fingerprint" aria-hidden="true"></i>{" "}
                  Biometric info
                </div>
                <div className="policy-info-tag">
                  <i className="fas fa-key" aria-hidden="true"></i> Password
                </div>
                <div className="policy-info-tag">
                  <i className="fas fa-briefcase" aria-hidden="true"></i>{" "}
                  Occupation & interests
                </div>
              </div>

              <p>
                The Information supplied by the users enables us to improve our
                sites and provide you with the most user-friendly experience.
              </p>

              <p>
                All required information is service dependent and we may use the
                above-said user information to maintain, protect, and improve
                its services (including advertising services) and for developing
                new services.
              </p>

              <p>
                Such information will not be considered sensitive if it is freely
                available and accessible in the public domain or is furnished
                under the Right to Information Act, 2005 or any other law for
                the time being in force.
              </p>
            </div>
          </section>

          {/* Section 2: Cookies */}
          <section className="policy-section" id="cookies">
            <div className="policy-section-header">
              <span className="policy-section-icon">
                <i className="fas fa-cookie-bite" aria-hidden="true"></i>
              </span>
              <div>
                <span className="policy-section-num">02</span>
                <h2>Cookies</h2>
              </div>
            </div>
            <div className="policy-section-body">
              <p>
                To improve the responsiveness of the sites for our users, we may
                use &ldquo;cookies&rdquo;, or similar electronic tools to
                collect information to assign each visitor a unique, random
                number as a User Identification (User ID) to understand the
                user&rsquo;s individual interests using the Identified Computer.
                Unless you voluntarily identify yourself (through registration,
                for example), we will have no way of knowing who you are, even
                if we assign a cookie to your computer. The only personal
                information a cookie can contain is information you supply. A
                cookie cannot read data off your hard drive. Our advertisers may
                also assign their own cookies to your browser (if you click on
                their ads), a process that we do not control.
              </p>

              <div className="policy-highlight-box">
                <i className="fas fa-info-circle" aria-hidden="true"></i>
                <p>
                  Our web servers automatically collect limited information about
                  your computer&rsquo;s connection to the Internet, including
                  your IP address, when you visit our site. Your IP address does
                  not identify you personally. We use this information to
                  deliver our web pages to you upon request, to tailor our site
                  to the interests of our users, to measure traffic within our
                  site and to let advertisers know the geographic locations from
                  where our visitors come.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Links to Other Sites */}
          <section className="policy-section" id="external-links">
            <div className="policy-section-header">
              <span className="policy-section-icon">
                <i className="fas fa-external-link-alt" aria-hidden="true"></i>
              </span>
              <div>
                <span className="policy-section-num">03</span>
                <h2>Links to Other Sites</h2>
              </div>
            </div>
            <div className="policy-section-body">
              <p>
                Our policy discloses the privacy practices for our website only.
                Our site provides links to other websites also that are beyond
                our control. We shall in no way be responsible in a way for your
                use of such sites.
              </p>
            </div>
          </section>

          {/* Section 4: Information Sharing */}
          <section className="policy-section" id="info-sharing">
            <div className="policy-section-header">
              <span className="policy-section-icon">
                <i className="fas fa-share-alt" aria-hidden="true"></i>
              </span>
              <div>
                <span className="policy-section-num">04</span>
                <h2>Information Sharing</h2>
              </div>
            </div>
            <div className="policy-section-body">
              <p>
                We share sensitive personal information with any third party
                without obtaining the prior consent of the user in the following
                limited circumstances:
              </p>

              <div className="policy-numbered-list">
                <div className="policy-numbered-item">
                  <span className="policy-numbered-badge">1</span>
                  <p>
                    When it is requested or required by law or by any court or
                    governmental agency or authority to disclose, for
                    verification of identity, or for the prevention, detection,
                    investigation including cyber incidents, or for prosecution
                    and punishment of offences. These disclosures are made in
                    good faith and belief that such disclosure is reasonably
                    necessary for enforcing these Terms; and for complying with
                    the applicable laws and regulations.
                  </p>
                </div>
                <div className="policy-numbered-item">
                  <span className="policy-numbered-badge">2</span>
                  <p>
                    We propose to share such information within its group
                    companies and officers and employees of such group companies
                    to process personal information on its behalf. We also
                    ensure that these recipients of such information agree to
                    process such information based on our instructions and in
                    compliance with this Privacy Policy and any other appropriate
                    confidentiality and security measures.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Information Security */}
          <section className="policy-section" id="info-security">
            <div className="policy-section-header">
              <span className="policy-section-icon">
                <i className="fas fa-lock" aria-hidden="true"></i>
              </span>
              <div>
                <span className="policy-section-num">05</span>
                <h2>Information Security</h2>
              </div>
            </div>
            <div className="policy-section-body">
              <p>
                We take appropriate security measures to protect against
                unauthorized access to or unauthorized alteration, disclosure or
                destruction of data. These include internal reviews of our data
                collection, storage and processing practices and security
                measures, including appropriate encryption and physical security
                measures to guard against unauthorized access to systems where
                we store personal data.
              </p>

              <p>
                All information gathered on our Website is securely stored within
                our controlled database. The database is stored on servers
                secured behind a firewall; access to the servers is
                password-protected and is strictly limited. However, as
                effective as our security measures are, no security system is
                impenetrable. We cannot guarantee the security of our database,
                nor can we guarantee that the information you supply will not be
                intercepted while being transmitted to us over the Internet.
                And, of course, any information you include in a posting to the
                discussion areas is available to anyone with Internet access.
              </p>

              <p>
                However, the internet is an ever-evolving medium. We may change
                our Privacy Policy from time to time to incorporate necessary
                future changes. Of course, our use of any information we gather
                will always be consistent with the policy under which the
                information was collected, regardless of what the new policy may
                be.
              </p>
            </div>
          </section>

          {/* Section 6: Contact CTA */}
          <section className="policy-section policy-section-cta" id="contact">
            <div className="policy-section-header">
              <span className="policy-section-icon policy-section-icon-cta">
                <i className="fas fa-headset" aria-hidden="true"></i>
              </span>
              <div>
                <span className="policy-section-num">06</span>
                <h2>Contact Us</h2>
              </div>
            </div>
            <div className="policy-section-body">
              <div className="policy-cta-card">
                <div className="policy-cta-content">
                  <h3>Have questions about your privacy?</h3>
                  <p>
                    Per the Information Technology Act, of 2000, if you wish to
                    contact OWF Trips about this privacy policy or
                    privacy-related issues via email, we&rsquo;re here to help.
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
        </div>
      </div>
    </PolicyPageShell>
  );
}
