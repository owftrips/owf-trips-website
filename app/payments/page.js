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
      {/* ── Intro banner card ── */}
      <div className="pay-intro-card">
        <div className="pay-intro-icon">
          <i className="fas fa-shield-alt" aria-hidden="true"></i>
        </div>
        <div className="pay-intro-text">
          <h2>Secure & Easy Payments</h2>
          <p>
            Choose your preferred payment method below. All transactions are
            secured and your booking will be confirmed once we receive your
            payment. For any queries, reach us on{" "}
            <a href="tel:+918296966873">+91-8296966873</a>.
          </p>
        </div>
      </div>

      {/* ── Payment methods ── */}
      <section className="pay-methods-section">
        <div className="pay-methods-grid">

          {/* ── Card 1: Bank Transfer ── */}
          <div className="pay-method-card">
            <div className="pay-method-header pay-method-header-bank">
              <div className="pay-method-header-icon">
                <i className="fas fa-university" aria-hidden="true"></i>
              </div>
              <div>
                <h3>Bank Transfer / NEFT / RTGS</h3>
                <p>Direct transfer to our Axis Bank account</p>
              </div>
            </div>
            <div className="pay-method-body">
              {/* Axis Bank logo */}
              <div className="pay-bank-logo-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://owf-website-content.s3.ap-south-1.amazonaws.com/PaymentPage/Axis_Bank_logo_logotype.png"
                  alt="Axis Bank"
                  className="pay-bank-logo"
                />
              </div>

              <div className="pay-detail-rows">
                <div className="pay-detail-row">
                  <span className="pay-detail-label">
                    <i className="fas fa-hashtag" aria-hidden="true"></i>
                    Account Number
                  </span>
                  <div className="pay-detail-value-wrap">
                    <span className="pay-detail-value">917010060901712</span>
                    <CopyButton text="917010060901712" label="Account No." />
                  </div>
                </div>
                <div className="pay-detail-row">
                  <span className="pay-detail-label">
                    <i className="fas fa-user" aria-hidden="true"></i>
                    Account Name
                  </span>
                  <div className="pay-detail-value-wrap">
                    <span className="pay-detail-value">Shivam Gupta</span>
                    <CopyButton text="Shivam Gupta" label="Name" />
                  </div>
                </div>
                <div className="pay-detail-row">
                  <span className="pay-detail-label">
                    <i className="fas fa-code-branch" aria-hidden="true"></i>
                    IFSC Code
                  </span>
                  <div className="pay-detail-value-wrap">
                    <span className="pay-detail-value">UTIB0000102</span>
                    <CopyButton text="UTIB0000102" label="IFSC" />
                  </div>
                </div>
                <div className="pay-detail-row">
                  <span className="pay-detail-label">
                    <i className="fas fa-building" aria-hidden="true"></i>
                    Bank &amp; Branch
                  </span>
                  <div className="pay-detail-value-wrap">
                    <span className="pay-detail-value">
                      Axis Bank, Marathahalli Branch, Bangalore
                    </span>
                  </div>
                </div>
                <div className="pay-detail-row">
                  <span className="pay-detail-label">
                    <i className="fas fa-wallet" aria-hidden="true"></i>
                    Account Type
                  </span>
                  <div className="pay-detail-value-wrap">
                    <span className="pay-detail-value">Savings</span>
                  </div>
                </div>
              </div>

              <div className="pay-method-tip">
                <i className="fas fa-info-circle" aria-hidden="true"></i>
                After transferring, share your payment screenshot on{" "}
                <a
                  href="https://wa.me/message/ZLIG4WNMOLF2P1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>{" "}
                or email us at{" "}
                <a href="mailto:bookings@owftrips.in">bookings@owftrips.in</a>.
              </div>
            </div>
          </div>

          {/* ── Card 2: UPI ── */}
          <div className="pay-method-card">
            <div className="pay-method-header pay-method-header-upi">
              <div className="pay-method-header-icon">
                <i className="fas fa-mobile-alt" aria-hidden="true"></i>
              </div>
              <div>
                <h3>UPI Payment</h3>
                <p>Instant transfer via any UPI app</p>
              </div>
            </div>
            <div className="pay-method-body">
              <div className="pay-upi-apps">
                <span className="pay-upi-app-tag">
                  <i className="fas fa-check-circle" aria-hidden="true"></i>
                  Google Pay
                </span>
                <span className="pay-upi-app-tag">
                  <i className="fas fa-check-circle" aria-hidden="true"></i>
                  PhonePe
                </span>
                <span className="pay-upi-app-tag">
                  <i className="fas fa-check-circle" aria-hidden="true"></i>
                  Paytm
                </span>
                <span className="pay-upi-app-tag">
                  <i className="fas fa-check-circle" aria-hidden="true"></i>
                  BHIM &amp; others
                </span>
              </div>

              <div className="pay-detail-rows">
                <div className="pay-detail-row">
                  <span className="pay-detail-label">
                    <i className="fas fa-at" aria-hidden="true"></i>
                    UPI ID
                  </span>
                  <div className="pay-detail-value-wrap">
                    <span className="pay-detail-value pay-detail-upi">
                      owftrips@ybl
                    </span>
                    <CopyButton text="owftrips@ybl" label="UPI ID" />
                  </div>
                </div>
                <div className="pay-detail-row">
                  <span className="pay-detail-label">
                    <i className="fas fa-user" aria-hidden="true"></i>
                    Registered Name
                  </span>
                  <div className="pay-detail-value-wrap">
                    <span className="pay-detail-value">Shivam Gupta</span>
                    <CopyButton text="Shivam Gupta" label="Name" />
                  </div>
                </div>
              </div>

              <div className="pay-upi-steps">
                <p className="pay-upi-steps-title">How to pay via UPI:</p>
                <ol className="pay-upi-step-list">
                  <li>Open your UPI app (GPay, PhonePe, Paytm, etc.)</li>
                  <li>Choose &ldquo;Send Money&rdquo; or &ldquo;Pay via UPI ID&rdquo;</li>
                  <li>Enter UPI ID: <strong>owftrips@ybl</strong></li>
                  <li>Enter the amount and complete payment</li>
                  <li>Share the screenshot with us on WhatsApp</li>
                </ol>
              </div>

              <div className="pay-method-tip">
                <i className="fas fa-info-circle" aria-hidden="true"></i>
                Verify the name shows <strong>Shivam Gupta</strong> before
                confirming your payment.
              </div>
            </div>
          </div>

          {/* ── Card 3: Razorpay / Credit Card ── */}
          <div className="pay-method-card">
            <div className="pay-method-header pay-method-header-card">
              <div className="pay-method-header-icon">
                <i className="fas fa-credit-card" aria-hidden="true"></i>
              </div>
              <div>
                <h3>Credit / Debit Card</h3>
                <p>Powered by Razorpay — all major cards accepted</p>
              </div>
            </div>
            <div className="pay-method-body">
              <div className="pay-card-brands">
                <span className="pay-card-brand-tag">
                  <i className="fab fa-cc-visa" aria-hidden="true"></i> Visa
                </span>
                <span className="pay-card-brand-tag">
                  <i className="fab fa-cc-mastercard" aria-hidden="true"></i> Mastercard
                </span>
                <span className="pay-card-brand-tag">
                  <i className="fab fa-cc-amex" aria-hidden="true"></i> Amex
                </span>
                <span className="pay-card-brand-tag">
                  <i className="fas fa-university" aria-hidden="true"></i> Net Banking
                </span>
              </div>

              <div className="pay-razorpay-highlight">
                <i className="fas fa-bolt" aria-hidden="true"></i>
                <div>
                  <strong>Pay instantly via Razorpay</strong>
                  <p>Secure checkout with 256-bit SSL encryption</p>
                </div>
              </div>

              <div className="pay-gateway-note">
                <i className="fas fa-exclamation-triangle" aria-hidden="true"></i>
                <span>
                  A <strong>3% payment gateway charge</strong> is applicable on
                  card / online payments. This is a processing fee charged by
                  the payment gateway.
                </span>
              </div>

              <a
                href="https://razorpay.me/@shivamgupta7"
                target="_blank"
                rel="noopener noreferrer"
                className="pay-razorpay-btn"
              >
                <i className="fas fa-lock" aria-hidden="true"></i>
                Pay Securely via Razorpay
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ── Payment Policy table ── */}
      <section className="pay-policy-section">
        <div className="pay-section-label">
          <i className="fas fa-file-invoice-dollar" aria-hidden="true"></i> Payment Policy
        </div>
        <h2 className="pay-section-heading">Payment Schedule</h2>

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
      </section>

      {/* ── Important Notes (red) ── */}
      <section className="pay-important-section">
        <div className="pay-section-label pay-section-label-red">
          <i className="fas fa-exclamation-triangle" aria-hidden="true"></i> Important Notes
        </div>
        <h2 className="pay-section-heading">Please read before paying</h2>

        <div className="policy-note-box-red">
          <div className="policy-note-item">
            <i className="fas fa-times-circle" aria-hidden="true"></i>
            <span>
              <strong>Never pay to an unknown account.</strong> Always verify
              the account number and name before transferring money. OWF Trips
              will never ask you to pay to a different account via WhatsApp or
              SMS.
            </span>
          </div>
          <div className="policy-note-item">
            <i className="fas fa-times-circle" aria-hidden="true"></i>
            <span>
              <strong>Share payment proof.</strong> After making any payment,
              always share the receipt/screenshot with us on WhatsApp or via
              email for confirmation.
            </span>
          </div>
          <div className="policy-note-item">
            <i className="fas fa-times-circle" aria-hidden="true"></i>
            <span>
              <strong>No cash payments.</strong> OWF Trips does not accept cash
              payments. All transactions must be made through the payment
              methods listed above.
            </span>
          </div>
          <div className="policy-note-item">
            <i className="fas fa-times-circle" aria-hidden="true"></i>
            <span>
              <strong>Cancellation &amp; refund.</strong> Please refer to our{" "}
              <a href="/cancellation-policy">Cancellation Policy</a> for details
              on refunds and cancellations.
            </span>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="pay-cta-section">
        <div className="pay-cta-inner">
          <div className="pay-cta-text">
            <h2>Need help with payment?</h2>
            <p>
              Our team is available 11:30 AM – 9:30 PM, Mon–Sun. Reach out to
              us instantly on WhatsApp or drop us an email.
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
