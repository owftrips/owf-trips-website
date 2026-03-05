import InnerPageLayout from "../components/InnerPageLayout";
import PayMethodCards from "../components/PayMethodCards";

export const metadata = {
  title: "Payments",
  description:
    "Pay securely for your OWF Trips booking via Bank Transfer, UPI, or Credit/Debit Card through Razorpay.",
};

export default function PaymentsPage() {
  return (
    <InnerPageLayout
      title="Make a Payment"
      breadcrumb="Payments"
      currentPage="payments"
    >

      {/* ── Trust bar ── */}
      <div className="pay-trust-bar">
        <div className="pay-trust-item">
          <i className="fas fa-lock" aria-hidden="true"></i>
          <span>256-bit SSL Secured</span>
        </div>
        <div className="pay-trust-sep" aria-hidden="true"></div>
        <div className="pay-trust-item">
          <i className="fas fa-shield-alt" aria-hidden="true"></i>
          <span>Verified Business</span>
        </div>
        <div className="pay-trust-sep" aria-hidden="true"></div>
        <div className="pay-trust-item">
          <i className="fas fa-bolt" aria-hidden="true"></i>
          <span>Booking Confirmed on Receipt</span>
        </div>
      </div>

      {/* ── Payment method cards (accordion + quick picker) ── */}
      <PayMethodCards />

      {/* ── Payment Schedule ── */}
      <div className="pay-card pay-policy-section" id="payment-schedule">
        {/* Card header */}
        <div className="pay-card-head">
          <div className="pay-card-head-left">
            <div className="pay-schedule-icon">
              <i className="fas fa-file-invoice-dollar" aria-hidden="true"></i>
            </div>
            <div>
              <h2 className="pay-card-title">Payment Schedule</h2>
              <p className="pay-card-subtitle">Payment Policy &middot; 3 Simple Stages</p>
            </div>
          </div>
          <div className="pay-card-head-right">
            <span className="pay-tag-free">
              <i className="fas fa-calendar-check" aria-hidden="true"></i>
              Flexible payment stages
            </span>
          </div>
        </div>

        {/* Card body */}
        <div className="pay-card-body">
          <div className="policy-table-wrap">
            <table className="policy-table">
              <thead>
                <tr>
                  <th>Payment Stage</th>
                  <th>Amount Due</th>
                  <th>When</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Booking Confirmation</td>
                  <td>
                    <span className="policy-table-tag">25% of total cost</span>
                  </td>
                  <td>At the time of booking</td>
                </tr>
                <tr>
                  <td>Partial Payment</td>
                  <td>
                    <span className="policy-table-tag">50% of total cost</span>
                  </td>
                  <td>30 days before departure</td>
                </tr>
                <tr>
                  <td>Full Payment</td>
                  <td>
                    <span className="policy-table-tag">100% of total cost</span>
                  </td>
                  <td>15 days before departure</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="policy-note-box">
            <div className="policy-note-item">
              <i className="fas fa-info-circle" aria-hidden="true"></i>
              <span>
                For bookings made within <strong>15 days of departure</strong>,
                full payment is required at the time of booking.
              </span>
            </div>
            <div className="policy-note-item">
              <i className="fas fa-info-circle" aria-hidden="true"></i>
              <span>
                Failure to make payments on time may result in automatic
                cancellation of your booking without a refund of the deposit.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Important Notes ── */}
      <section className="pay-important-section">
        <div className="pay-notes-card">

          {/* Card header */}
          <div className="pay-notes-head">
            <div className="pay-notes-head-icon">
              <i className="fas fa-shield-alt" aria-hidden="true"></i>
            </div>
            <div>
              <h3 className="pay-notes-title">Important Notes</h3>
              <p className="pay-notes-subtitle">
                Please read carefully before making a payment
              </p>
            </div>
          </div>

          {/* Note items */}
          <div className="pay-notes-list">

            <div className="pay-note-row">
              <div className="pay-note-row-icon pay-note-icon-red">
                <i className="fas fa-ban" aria-hidden="true"></i>
              </div>
              <div className="pay-note-row-body">
                <strong>Never pay to an unknown account</strong>
                <p>
                  Always verify the account number and registered name before
                  transferring. OWF Trips will <em>never</em> ask you to pay to
                  a different account via WhatsApp, SMS, or phone call.
                </p>
              </div>
            </div>

            <div className="pay-note-row">
              <div className="pay-note-row-icon pay-note-icon-blue">
                <i className="fas fa-camera" aria-hidden="true"></i>
              </div>
              <div className="pay-note-row-body">
                <strong>Share your payment screenshot</strong>
                <p>
                  After every payment, share the transaction receipt or
                  screenshot with us on{" "}
                  <a
                    href="https://wa.me/message/ZLIG4WNMOLF2P1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>{" "}
                  or email{" "}
                  <a href="mailto:bookings@owftrips.in">
                    bookings@owftrips.in
                  </a>{" "}
                  to confirm your booking.
                </p>
              </div>
            </div>

            <div className="pay-note-row">
              <div className="pay-note-row-icon pay-note-icon-orange">
                <i className="fas fa-money-bill-wave" aria-hidden="true"></i>
              </div>
              <div className="pay-note-row-body">
                <strong>No cash payments accepted</strong>
                <p>
                  OWF Trips does not accept cash under any circumstances. All
                  bookings must be paid through the secure methods listed above.
                </p>
              </div>
            </div>

            <div className="pay-note-row pay-note-row-last">
              <div className="pay-note-row-icon pay-note-icon-teal">
                <i className="fas fa-undo-alt" aria-hidden="true"></i>
              </div>
              <div className="pay-note-row-body">
                <strong>Cancellations &amp; refunds</strong>
                <p>
                  Refund eligibility depends on the timing of cancellation.
                  Please review our{" "}
                  <a href="/cancellation-policy">Cancellation Policy</a> for
                  full details on refund timelines and conditions.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="pay-cta-section">
        <div className="pay-cta-inner">
          <div className="pay-cta-text">
            <h2>Need help with payment?</h2>
            <p>
              Our team is available 11:30 AM – 9:30 PM, Mon–Sun. Reach us
              instantly on WhatsApp or drop an email.
            </p>
          </div>
          <div className="pay-cta-actions">
            <a
              href="https://wa.me/message/ZLIG4WNMOLF2P1"
              target="_blank"
              rel="noopener noreferrer"
              className="about-cta-primary"
            >
              <i className="fab fa-whatsapp" aria-hidden="true"></i>
              Chat on WhatsApp
            </a>
            <a href="mailto:bookings@owftrips.in" className="about-cta-secondary">
              <i className="fas fa-envelope" aria-hidden="true"></i>
              Send an Email
            </a>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
