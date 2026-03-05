import Image from "next/image";
import InnerPageLayout from "../components/InnerPageLayout";
import CopyButton from "../components/CopyButton";

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

      {/* ═══════════════════════════════════════
          METHOD 01 — BANK TRANSFER
      ═══════════════════════════════════════ */}
      <div className="pay-card" id="bank-transfer">
        {/* Card header */}
        <div className="pay-card-head">
          <div className="pay-card-head-left">
            <span className="pay-card-num">01</span>
            <div>
              <h3 className="pay-card-title">Bank Transfer</h3>
              <p className="pay-card-subtitle">NEFT &middot; RTGS &middot; IMPS</p>
            </div>
          </div>
          <div className="pay-card-head-right">
            <span className="pay-tag-free">
              <i className="fas fa-check-circle" aria-hidden="true"></i>
              No extra charges
            </span>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Axis_Bank_logo.svg/400px-Axis_Bank_logo.svg.png"
              alt="Axis Bank"
              width={110}
              height={30}
              className="pay-bank-logo"
            />
          </div>
        </div>

        {/* Card body */}
        <div className="pay-card-body">
          {/* Account Number — hero element */}
          <div className="pay-detail-block">
            <span className="pay-detail-block-label">Account Number</span>
            <div className="pay-detail-block-row">
              <span className="pay-detail-block-num">917010060901712</span>
              <CopyButton text="917010060901712" label="Copy" />
            </div>
          </div>

          {/* IFSC */}
          <div className="pay-detail-block">
            <span className="pay-detail-block-label">IFSC Code</span>
            <div className="pay-detail-block-row">
              <span className="pay-detail-block-num">UTIB0000102</span>
              <CopyButton text="UTIB0000102" label="Copy" />
            </div>
          </div>

          {/* Secondary meta */}
          <div className="pay-meta-grid">
            <div className="pay-meta-item">
              <span className="pay-meta-label">Account Name</span>
              <span className="pay-meta-val">Shivam Gupta</span>
            </div>
            <div className="pay-meta-item">
              <span className="pay-meta-label">Account Type</span>
              <span className="pay-meta-val">Savings</span>
            </div>
            <div className="pay-meta-item pay-meta-item-wide">
              <span className="pay-meta-label">Bank &amp; Branch</span>
              <span className="pay-meta-val">
                Axis Bank, Banashakari Branch, Bangalore
              </span>
            </div>
          </div>
        </div>

        {/* Card footer */}
        <div className="pay-card-foot">
          <i className="fas fa-info-circle" aria-hidden="true"></i>
          <span>
            After transferring, share the payment screenshot on{" "}
            <a
              href="https://wa.me/message/ZLIG4WNMOLF2P1"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>{" "}
            or email{" "}
            <a href="mailto:bookings@owftrips.in">bookings@owftrips.in</a> to
            confirm your booking.
          </span>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          METHOD 02 — UPI
      ═══════════════════════════════════════ */}
      <div className="pay-card" id="upi">
        {/* Card header */}
        <div className="pay-card-head">
          <div className="pay-card-head-left">
            <span className="pay-card-num pay-card-num-green">02</span>
            <div>
              <h3 className="pay-card-title">UPI Payment</h3>
              <p className="pay-card-subtitle">
                GPay &middot; PhonePe &middot; Paytm &middot; BHIM &middot; Any UPI app
              </p>
            </div>
          </div>
          <div className="pay-card-head-right">
            <span className="pay-tag-free">
              <i className="fas fa-check-circle" aria-hidden="true"></i>
              No extra charges
            </span>
            <span className="pay-tag-rec">
              <i className="fas fa-star" aria-hidden="true"></i>
              Recommended
            </span>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/200px-UPI-Logo-vector.svg.png"
              alt="UPI"
              width={72}
              height={24}
              className="pay-upi-logo"
            />
          </div>
        </div>

        {/* Card body */}
        <div className="pay-card-body">
          {/* UPI ID — hero element */}
          <div className="pay-detail-block pay-detail-block-upi">
            <span className="pay-detail-block-label">UPI ID</span>
            <div className="pay-detail-block-row">
              <span className="pay-detail-block-num pay-detail-block-upi-id">
                owftrips@ybl
              </span>
              <CopyButton text="owftrips@ybl" label="Copy" />
            </div>
          </div>

          {/* Verify name notice */}
          <div className="pay-upi-verify">
            <i className="fas fa-user-check" aria-hidden="true"></i>
            <span>
              When paying, verify the registered name shows{" "}
              <strong>Shivam Gupta</strong> before confirming.
            </span>
          </div>

          {/* How to pay steps */}
          <div className="pay-steps">
            <p className="pay-steps-title">How to pay via UPI</p>
            <ol className="pay-steps-list">
              <li>Open any UPI app (GPay, PhonePe, Paytm, BHIM&hellip;)</li>
              <li>Tap &ldquo;Pay&rdquo; or &ldquo;Send Money&rdquo; → enter UPI ID</li>
              <li>
                Type <strong>owftrips@ybl</strong>, verify name:{" "}
                <strong>Shivam Gupta</strong>
              </li>
              <li>Enter exact amount &amp; complete payment</li>
              <li>Share the success screenshot with us on WhatsApp</li>
            </ol>
          </div>
        </div>

        <div className="pay-card-foot">
          <i className="fas fa-info-circle" aria-hidden="true"></i>
          <span>
            UPI payments are processed instantly. Your booking will be
            confirmed within minutes of receipt.
          </span>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          METHOD 03 — CREDIT / DEBIT CARD
      ═══════════════════════════════════════ */}
      <div className="pay-card" id="card-payment">
        {/* Card header */}
        <div className="pay-card-head">
          <div className="pay-card-head-left">
            <span className="pay-card-num pay-card-num-purple">03</span>
            <div>
              <h3 className="pay-card-title">Credit / Debit Card</h3>
              <p className="pay-card-subtitle">
                Powered by Razorpay &middot; 256-bit SSL encrypted
              </p>
            </div>
          </div>
          <div className="pay-card-head-right">
            <span className="pay-tag-fee">
              <i className="fas fa-info-circle" aria-hidden="true"></i>
              3% gateway fee
            </span>
          </div>
        </div>

        {/* Card body */}
        <div className="pay-card-body">
          {/* Accepted cards */}
          <div className="pay-accepted-cards">
            <span className="pay-accepted-label">Accepted payments</span>
            <div className="pay-accepted-row">
              <span className="pay-accepted-item">
                <i className="fab fa-cc-visa" aria-hidden="true"></i> Visa
              </span>
              <span className="pay-accepted-item">
                <i className="fab fa-cc-mastercard" aria-hidden="true"></i> Mastercard
              </span>
              <span className="pay-accepted-item">
                <i className="fab fa-cc-amex" aria-hidden="true"></i> Amex
              </span>
              <span className="pay-accepted-item">
                <i className="fab fa-cc-rupay" aria-hidden="true"></i> RuPay
              </span>
              <span className="pay-accepted-item">
                <i className="fas fa-university" aria-hidden="true"></i> Net Banking
              </span>
            </div>
          </div>

          {/* Gateway notice */}
          <div className="pay-gateway-banner">
            <div className="pay-gateway-banner-icon">
              <i className="fas fa-exclamation-triangle" aria-hidden="true"></i>
            </div>
            <p>
              A <strong>3% payment gateway charge</strong> is added on top of
              the trip cost when paying by card or net banking. This fee is
              charged by the payment processor and is non-refundable.
            </p>
          </div>

          {/* Razorpay CTA */}
          <a
            href="https://razorpay.me/@shivamgupta7"
            target="_blank"
            rel="noopener noreferrer"
            className="pay-razorpay-cta"
          >
            <span className="pay-razorpay-cta-lock">
              <i className="fas fa-lock" aria-hidden="true"></i>
            </span>
            <span className="pay-razorpay-cta-text">
              Pay Securely via Razorpay
            </span>
            <span className="pay-razorpay-cta-arrow">
              <i className="fas fa-arrow-right" aria-hidden="true"></i>
            </span>
          </a>
        </div>

        <div className="pay-card-foot">
          <i className="fas fa-info-circle" aria-hidden="true"></i>
          <span>
            You will be redirected to Razorpay&rsquo;s secure checkout page.
            After payment, send us the transaction ID on WhatsApp.
          </span>
        </div>
      </div>

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
