import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cancellation Policy", href: "/cancellation-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Payments", href: "/payments" },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/owftrips",
    icon: "https://owf-website-content.s3.ap-south-1.amazonaws.com/HomePage/facebook-round-color-icon.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/owftrips",
    icon: "https://owf-website-content.s3.ap-south-1.amazonaws.com/HomePage/ig-instagram-icon.svg",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@owftrips",
    icon: "https://owf-website-content.s3.ap-south-1.amazonaws.com/HomePage/youtube-color-icon.svg",
  },
];

export default function Footer() {
  return (
    <footer className="site-footer" aria-label="Company footer">
      <div className="footer-accent-bar" aria-hidden="true"></div>
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
            {quickLinks.map((link) => (
              <Link key={link.href} className="footer-quick-link" href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="footer-social" aria-label="Social links">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              className="footer-social-link"
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
            >
              <Image
                className="footer-social-icon"
                src={social.icon}
                alt=""
                width={21}
                height={21}
              />
            </a>
          ))}
        </div>

        <div className="footer-skyline" aria-hidden="true"></div>
        <p className="footer-copy">&copy; OWF TRIPS LLP, All rights reserved.</p>
      </div>
    </footer>
  );
}
