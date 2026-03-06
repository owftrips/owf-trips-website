import PolicyPageShell from "../components/PolicyPageShell";

export const metadata = {
  title: "Cancellation Policy",
  description:
    "Read the OWF Trips cancellation and refund policy. Understand charges, credit notes, and what to expect when cancelling your trip.",
};

export default function CancellationPolicyPage() {
  return (
    <PolicyPageShell title="Cancellation Policy" breadcrumb="Cancellation Policy">

      {/* Meta bar */}
      <div className="policy-meta-bar">
        <span className="policy-updated-badge">
          <i className="fas fa-clock" aria-hidden="true"></i>
          Last updated: March 2026
        </span>
        <span className="policy-read-time">
          <i className="fas fa-book-open" aria-hidden="true"></i>
          3 min read
        </span>
      </div>

      {/* Intro card */}
      <div className="policy-intro-card">
        <div className="policy-intro-icon">
          <i className="fas fa-ban" aria-hidden="true"></i>
        </div>
        <div className="policy-intro-text">
          <p>
            Our cancellation policy defines the charges applicable when you
            cancel a booking with <strong>OWF Trips</strong>. Charges are
            calculated based on the number of days prior to your departure date.
          </p>
          <p>
            All cancellations must be submitted in writing. Please read this
            policy carefully before making a booking.
          </p>
        </div>
      </div>

      {/* ── Section 01: Cancellation Charges ── */}
      <section className="policy-section" id="cancellation-charges">
        <div className="policy-section-header">
          <span className="policy-section-icon">
            <i className="fas fa-times-circle" aria-hidden="true"></i>
          </span>
          <div>
            <span className="policy-section-num">01</span>
            <h2>Cancellation Charges</h2>
          </div>
        </div>
        <div className="policy-section-body">
          <p>
            Cancellation fees are based on how many days before your departure
            date we receive your written cancellation request:
          </p>

          <div className="policy-table-block">
            <div className="policy-table-wrap">
              <table className="policy-table">
                <thead>
                  <tr>
                    <th>Days Prior to Departure Date</th>
                    <th>Cancellation Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>31 or More Days before Departure</td>
                    <td>
                      Booking Amount is{" "}
                      <strong>Non-Refundable</strong>; a credit note will be
                      issued for the remaining balance.
                    </td>
                  </tr>
                  <tr>
                    <td>30 to 16 Days before Departure</td>
                    <td>
                      50% of the full Tour cost is forfeited; a credit note will
                      be issued for the remaining balance.
                    </td>
                  </tr>
                  <tr>
                    <td>15 Days or Less before Departure</td>
                    <td>
                      <strong>100% of the full Tour cost</strong> — no refund or
                      credit note.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Red warning notes */}
            <div className="policy-note-box policy-note-box-red">
              <div className="policy-note-item">
                <i className="fas fa-exclamation-circle" aria-hidden="true"></i>
                <span>
                  Actual Airfare cancellation charges will be applicable
                  separately in all cases of cancellation.
                </span>
              </div>
              <div className="policy-note-item">
                <i className="fas fa-exclamation-circle" aria-hidden="true"></i>
                <span>
                  No refund will be made against Non-Refundable Services
                  included in the Tour Package.
                </span>
              </div>
              <div className="policy-note-item">
                <i className="fas fa-exclamation-circle" aria-hidden="true"></i>
                <span>
                  Cancellation Policy is non-negotiable. 5% GST will be
                  applicable on the total Cancellation Amount.
                </span>
              </div>
              <div className="policy-note-item">
                <i className="fas fa-exclamation-circle" aria-hidden="true"></i>
                <span>
                  The cancellation fee may vary based on the destination and
                  travel date.
                </span>
              </div>
              <div className="policy-note-item">
                <i className="fas fa-exclamation-circle" aria-hidden="true"></i>
                <span>
                  For International Trips, please connect with your sales agent
                  to get exact cancellation and rescheduling charges.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 02: Credit Notes ── */}
      <section className="policy-section" id="credit-notes">
        <div className="policy-section-header">
          <span className="policy-section-icon">
            <i className="fas fa-receipt" aria-hidden="true"></i>
          </span>
          <div>
            <span className="policy-section-num">02</span>
            <h2>Credit Notes</h2>
          </div>
        </div>
        <div className="policy-section-body">
          <div className="policy-highlight-box">
            <i className="fas fa-info-circle" aria-hidden="true"></i>
            <p>
              Where refunds are not applicable, OWF Trips may issue a{" "}
              <strong>credit note</strong> which can be used towards a future
              booking. Credit notes are subject to availability and validity
              conditions.
            </p>
          </div>
          <ul className="policy-list">
            <li>
              Credit notes are valid for <strong>12 months</strong> from the
              date of issue and can be applied to any OWF Trips booking.
            </li>
            <li>
              Credit notes are <strong>non-transferable</strong> and cannot be
              redeemed for cash.
            </li>
            <li>
              Refunds (where applicable) will be processed within{" "}
              <strong>7–10 working days</strong> of the cancellation date.
            </li>
          </ul>
        </div>
      </section>

      {/* ── Section 03: How to Cancel ── */}
      <section className="policy-section" id="how-to-cancel">
        <div className="policy-section-header">
          <span className="policy-section-icon">
            <i className="fas fa-clipboard-list" aria-hidden="true"></i>
          </span>
          <div>
            <span className="policy-section-num">03</span>
            <h2>How to Cancel</h2>
          </div>
        </div>
        <div className="policy-section-body">
          <ul className="policy-list">
            <li>
              All cancellations must be{" "}
              <strong>submitted in writing</strong> via email to{" "}
              <a href="mailto:bookings@owftrips.in">bookings@owftrips.in</a>.
              Verbal or phone cancellations will not be accepted.
            </li>
            <li>
              The cancellation date is the date on which OWF Trips receives your
              written cancellation request.
            </li>
            <li>
              Please include your <strong>booking reference number</strong>,
              full name, and trip details in your cancellation request.
            </li>
            <li>
              You will receive a written acknowledgement of your cancellation
              within 2 business days.
            </li>
          </ul>
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
            <h2>Need Help?</h2>
          </div>
        </div>
        <div className="policy-section-body">
          <div className="policy-cta-card">
            <div className="policy-cta-content">
              <h3>Questions about your cancellation?</h3>
              <p>
                Our team is available{" "}
                <strong>11:30 AM – 9:30 PM</strong> to help with cancellations,
                rescheduling, or any other concerns about your booking.
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
