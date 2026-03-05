"use client";

import { useState } from "react";
import Image from "next/image";
import CopyButton from "./CopyButton";

export default function PayMethodCards() {
  // UPI open by default — most popular in India and marked "Recommended"
  const [openId, setOpenId] = useState("upi");

  const toggle = (id) =>
    setOpenId((prev) => (prev === id ? null : id));

  return (
    <>
      {/* ── Quick method picker ── */}
      <div className="pay-method-picker" role="group" aria-label="Choose payment method">
        <button
          className={`pay-method-pick-btn${openId === "bank-transfer" ? " active" : ""}`}
          onClick={() => toggle("bank-transfer")}
          aria-expanded={openId === "bank-transfer"}
        >
          <i className="fas fa-university" aria-hidden="true"></i>
          <span>Bank Transfer</span>
        </button>
        <button
          className={`pay-method-pick-btn pay-pick-green${openId === "upi" ? " active" : ""}`}
          onClick={() => toggle("upi")}
          aria-expanded={openId === "upi"}
        >
          <i className="fas fa-mobile-alt" aria-hidden="true"></i>
          <span>UPI</span>
          <span className="pay-pick-rec-badge">Best</span>
        </button>
        <button
          className={`pay-method-pick-btn pay-pick-purple${openId === "card-payment" ? " active" : ""}`}
          onClick={() => toggle("card-payment")}
          aria-expanded={openId === "card-payment"}
        >
          <i className="fas fa-credit-card" aria-hidden="true"></i>
          <span>Card / Net Banking</span>
        </button>
      </div>

      {/* ═══════════════════════════════════════
          METHOD 01 — BANK TRANSFER
      ═══════════════════════════════════════ */}
      <div
        className={`pay-card${openId === "bank-transfer" ? " pay-card-expanded" : ""}`}
        id="bank-transfer"
      >
        {/* Clickable header */}
        <div
          className="pay-card-head pay-card-toggle"
          role="button"
          tabIndex={0}
          aria-expanded={openId === "bank-transfer"}
          onClick={() => toggle("bank-transfer")}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              toggle("bank-transfer");
            }
          }}
        >
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
          <span className="pay-card-chevron" aria-hidden="true">
            <i
              className={`fas fa-chevron-${openId === "bank-transfer" ? "up" : "down"}`}
            ></i>
          </span>
        </div>

        {/* Collapsible content */}
        <div
          className={`pay-card-collapsible${openId === "bank-transfer" ? " open" : ""}`}
        >
          <div className="pay-card-collapsible-inner">
            {/* Card body */}
            <div className="pay-card-body">
              {/* Account Number */}
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
        </div>
      </div>

      {/* ═══════════════════════════════════════
          METHOD 02 — UPI
      ═══════════════════════════════════════ */}
      <div
        className={`pay-card${openId === "upi" ? " pay-card-expanded" : ""}`}
        id="upi"
      >
        {/* Clickable header */}
        <div
          className="pay-card-head pay-card-toggle"
          role="button"
          tabIndex={0}
          aria-expanded={openId === "upi"}
          onClick={() => toggle("upi")}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              toggle("upi");
            }
          }}
        >
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
          <span className="pay-card-chevron" aria-hidden="true">
            <i
              className={`fas fa-chevron-${openId === "upi" ? "up" : "down"}`}
            ></i>
          </span>
        </div>

        {/* Collapsible content */}
        <div
          className={`pay-card-collapsible${openId === "upi" ? " open" : ""}`}
        >
          <div className="pay-card-collapsible-inner">
            {/* Card body */}
            <div className="pay-card-body">
              {/* UPI ID */}
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
        </div>
      </div>

      {/* ═══════════════════════════════════════
          METHOD 03 — CREDIT / DEBIT CARD
      ═══════════════════════════════════════ */}
      <div
        className={`pay-card${openId === "card-payment" ? " pay-card-expanded" : ""}`}
        id="card-payment"
      >
        {/* Clickable header */}
        <div
          className="pay-card-head pay-card-toggle"
          role="button"
          tabIndex={0}
          aria-expanded={openId === "card-payment"}
          onClick={() => toggle("card-payment")}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              toggle("card-payment");
            }
          }}
        >
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
          <span className="pay-card-chevron" aria-hidden="true">
            <i
              className={`fas fa-chevron-${openId === "card-payment" ? "up" : "down"}`}
            ></i>
          </span>
        </div>

        {/* Collapsible content */}
        <div
          className={`pay-card-collapsible${openId === "card-payment" ? " open" : ""}`}
        >
          <div className="pay-card-collapsible-inner">
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
        </div>
      </div>
    </>
  );
}
