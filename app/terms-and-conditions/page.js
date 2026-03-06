import PolicyPageShell from "../components/PolicyPageShell";
import PolicyTOC from "../components/PolicyTOC";

export const metadata = {
  title: "Terms & Conditions",
  description:
    "Read the OWF Trips terms and conditions governing group travel, customized trips, bookings, payments, cancellations, and more.",
};

const tocSections = [
  { id: "introduction", label: "Introduction" },
  { id: "scope-services", label: "Scope of Services" },
  { id: "booking-payment", label: "Booking & Payment" },
  { id: "pricing", label: "Pricing & Inclusions" },
  { id: "cancellations", label: "Cancellations & Refunds" },
  { id: "itinerary", label: "Itinerary Changes" },
  { id: "travel-insurance", label: "Travel Insurance" },
  { id: "health-safety", label: "Health & Safety" },
  { id: "travel-docs", label: "Travel Documents" },
  { id: "airline", label: "Airline Guidelines" },
  { id: "accommodation", label: "Accommodation" },
  { id: "transfers", label: "Transfers & Sightseeing" },
  { id: "liability", label: "Limitation of Liability" },
  { id: "conduct", label: "Conduct & Behavior" },
  { id: "legal", label: "Legal & Governance" },
  { id: "annexure-a", label: "Annexure A" },
];

export default function TermsAndConditionsPage() {
  return (
    <PolicyPageShell
      title="Terms &amp; Conditions"
      breadcrumb="Terms & Conditions"
    >
      {/* Meta bar */}
      <div className="policy-meta-bar">
        <span className="policy-updated-badge">
          <i className="fas fa-clock" aria-hidden="true"></i>
          Last updated: March 2026
        </span>
        <span className="policy-read-time">
          <i className="fas fa-book-open" aria-hidden="true"></i>
          12 min read
        </span>
      </div>

      {/* Intro card */}
      <div className="policy-intro-card">
        <div className="policy-intro-icon">
          <i className="fas fa-handshake" aria-hidden="true"></i>
        </div>
        <div className="policy-intro-text">
          <p>
            These Terms and Conditions (&ldquo;Terms&rdquo;) govern the
            relationship between you (&ldquo;Client&rdquo; or &ldquo;you&rdquo;)
            and <strong>OWF Trips</strong> (&ldquo;OWF Trips,&rdquo;
            &ldquo;company,&rdquo; &ldquo;we,&rdquo; or &ldquo;us&rdquo;). By
            booking any tour or service with OWF Trips, you agree to be bound by
            these Terms.
          </p>
          <p>
            Please read them carefully before making a booking.
          </p>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="policy-layout">
        <PolicyTOC sections={tocSections} />

        <div className="policy-body">

          {/* 1. Introduction */}
          <section className="policy-section" id="introduction">
            <div className="policy-section-header">
              <span className="policy-section-icon">
                <i className="fas fa-info-circle" aria-hidden="true"></i>
              </span>
              <div>
                <span className="policy-section-num">01</span>
                <h2>Introduction</h2>
              </div>
            </div>
            <div className="policy-section-body">
              <p>
                These Terms and Conditions govern the relationship between you
                and OWF Trips. By booking any tour or service with OWF Trips,
                you agree to be bound by these Terms. These Terms constitute the
                entire agreement between you and OWF Trips regarding your use of
                our services.
              </p>
            </div>
          </section>

          {/* 2. Scope of Services */}
          <section className="policy-section" id="scope-services">
            <div className="policy-section-header">
              <span className="policy-section-icon">
                <i className="fas fa-concierge-bell" aria-hidden="true"></i>
              </span>
              <div>
                <span className="policy-section-num">02</span>
                <h2>Scope of Services</h2>
              </div>
            </div>
            <div className="policy-section-body">
              <p>Our services include but are not limited to:</p>
              <div className="policy-info-grid">
                <div className="policy-info-tag">
                  <i className="fas fa-users" aria-hidden="true"></i>
                  Group Travel
                </div>
                <div className="policy-info-tag">
                  <i className="fas fa-map-marked-alt" aria-hidden="true"></i>
                  Customized Trips
                </div>
                <div className="policy-info-tag">
                  <i className="fas fa-hiking" aria-hidden="true"></i>
                  Backpacking &amp; Biking
                </div>
              </div>
              <ul className="policy-list">
                <li>
                  <strong>Group Travel:</strong> Organized tours for groups to
                  various destinations.
                </li>
                <li>
                  <strong>Customized Trips:</strong> Tailor-made itineraries to
                  suit individual or group preferences.
                </li>
                <li>
                  <strong>Backpacking and Biking Trips:</strong>{" "}
                  Adventure-oriented and budget-friendly trips for individuals
                  and groups.
                </li>
              </ul>
            </div>
          </section>

          {/* 3. Booking and Payment Terms */}
          <section className="policy-section" id="booking-payment">
            <div className="policy-section-header">
              <span className="policy-section-icon">
                <i className="fas fa-credit-card" aria-hidden="true"></i>
              </span>
              <div>
                <span className="policy-section-num">03</span>
                <h2>Booking and Payment Terms</h2>
              </div>
            </div>
            <div className="policy-section-body">
              <ul className="policy-list">
                <li>
                  <strong>Booking Confirmation:</strong> To secure your booking,
                  a specified deposit must be paid at the time of booking. All
                  quotes are tentative and subject to change based on
                  availability and pricing at the time of final payment. Any
                  changes pertaining to inclusions of your booking including
                  hotel, airlines, itinerary will be communicated to you within
                  72 hours (excluding Saturday, Sunday, and Public Holidays) of
                  such change occurrence.
                </li>
                <li>
                  <strong>Payment Policy:</strong> Payments must be made
                  according to the Payment Policy provided at the time of
                  booking (refer to Annexure A). Accepted payment methods
                  include credit/debit cards, bank transfers, and online payment
                  gateways. Payments are to be made in INR, with exchange rates
                  applied based on the prevailing Rate of Exchange (ROE) on the
                  day of final payment.
                </li>
                <li>
                  <strong>Failure to Pay:</strong> Failure to pay the full
                  amount by the specified due date may result in the cancellation
                  of your booking or services, at our sole discretion.
                </li>
                <li>
                  <strong>Government Compliance:</strong> As per current Indian
                  government regulations, a 20% TCS (Tax Collected at Source)
                  will be applicable on payments for international travel
                  exceeding ₹7 lakhs in a financial year.
                </li>
                <li>
                  <strong>Forfeiture Clause:</strong> Any cash deposits made
                  without the knowledge of OWF Trips in its bank accounts
                  against a booking will be forfeited.
                </li>
              </ul>
            </div>
          </section>

          {/* 4. Pricing and Inclusions */}
          <section className="policy-section" id="pricing">
            <div className="policy-section-header">
              <span className="policy-section-icon">
                <i className="fas fa-tags" aria-hidden="true"></i>
              </span>
              <div>
                <span className="policy-section-num">04</span>
                <h2>Pricing and Inclusions</h2>
              </div>
            </div>
            <div className="policy-section-body">
              <ul className="policy-list">
                <li>
                  <strong>Pricing Policy:</strong> Prices are based on current
                  availability and foreign exchange rates. The final price will
                  be confirmed at the time of booking and may be subject to
                  change based on fluctuations.
                </li>
                <li>
                  <strong>Inclusions and Exclusions:</strong> The services
                  included in your package will be detailed in your booking
                  confirmation. Any services not explicitly mentioned are
                  excluded and must be paid for separately.
                </li>
                <li>
                  The package price doesn&rsquo;t include special dinner or
                  mandatory charges at times levied by the hotels especially
                  during New Year and Christmas or any special occasions. OWF
                  Trips shall try to communicate the same while booking the
                  package. However, OWF Trips may not have this information
                  readily available all the time.
                </li>
              </ul>
            </div>
          </section>

          {/* 5. Cancellations and Refunds */}
          <section className="policy-section" id="cancellations">
            <div className="policy-section-header">
              <span className="policy-section-icon">
                <i className="fas fa-undo-alt" aria-hidden="true"></i>
              </span>
              <div>
                <span className="policy-section-num">05</span>
                <h2>Cancellations and Refunds</h2>
              </div>
            </div>
            <div className="policy-section-body">
              <ul className="policy-list">
                <li>
                  <strong>Cancellation by Client:</strong> All cancellations
                  must be submitted in writing to OWF Trips. Cancellation
                  charges apply as per the policy provided at the time of
                  booking (refer to Annexure A). Refunds, if applicable, will
                  be processed within 7–10 working days.
                </li>
                <li>
                  <strong>Credit Notes:</strong> In most cases, credit notes may
                  be provided instead of refunds.
                </li>
                <li>
                  <strong>Non-Refundable Charges:</strong> Cancellation charges
                  are non-negotiable and non-refundable. This includes cases of
                  visa rejection where standard cancellation policies apply.
                </li>
                <li>
                  <strong>Responsibility for Travel Documents:</strong> Clients
                  are responsible for thoroughly reviewing all details of their
                  travel documents, such as visas and travel insurance, before
                  the trip commences. Any discrepancies or errors should be
                  addressed promptly.
                </li>
              </ul>
            </div>
          </section>

          {/* 6. Itinerary Changes */}
          <section className="policy-section" id="itinerary">
            <div className="policy-section-header">
              <span className="policy-section-icon">
                <i className="fas fa-route" aria-hidden="true"></i>
              </span>
              <div>
                <span className="policy-section-num">06</span>
                <h2>Itinerary Changes</h2>
              </div>
            </div>
            <div className="policy-section-body">
              <ul className="policy-list">
                <li>
                  <strong>Modification by OWF Trips:</strong> We reserve the
                  right to alter itineraries, accommodations, or transportation
                  arrangements due to unforeseen circumstances, including weather
                  conditions, political unrest, or other factors beyond our
                  control. Any changes will be communicated promptly.
                </li>
                <li>
                  <strong>Group Tours:</strong> Group tours will operate subject
                  to a minimum group strength of 8 full-paying passengers. If
                  the minimum group size is not met, or due to cancellations, an
                  alternative date or tour option may be provided. Refunds or
                  credit notes will be issued for land portions, minus any
                  non-refundable expenses such as visa fees.
                </li>
                <li>
                  <strong>On-Tour Changes:</strong> During the tour, itinerary
                  changes may occur due to natural calamities or safety
                  considerations. OWF Trips will strive to minimize any
                  disruptions to your travel experience.
                </li>
              </ul>
            </div>
          </section>

          {/* 7. Travel Insurance */}
          <section className="policy-section" id="travel-insurance">
            <div className="policy-section-header">
              <span className="policy-section-icon">
                <i className="fas fa-umbrella" aria-hidden="true"></i>
              </span>
              <div>
                <span className="policy-section-num">07</span>
                <h2>Travel Insurance</h2>
              </div>
            </div>
            <div className="policy-section-body">
              <div className="policy-highlight-box">
                <i className="fas fa-exclamation-triangle" aria-hidden="true"></i>
                <p>
                  We <strong>strongly recommend</strong> that all clients obtain
                  comprehensive travel insurance covering trip cancellations,
                  medical emergencies, and loss of baggage. OWF Trips is not
                  responsible for losses not covered by insurance.
                </p>
              </div>
              <ul className="policy-list">
                <li>
                  <strong>Mandatory Insurance:</strong> We strongly recommend
                  that all clients obtain comprehensive travel insurance covering
                  trip cancellations, medical emergencies, and loss of baggage.
                  OWF Trips is not responsible for losses not covered by
                  insurance.
                </li>
                <li>
                  <strong>Medical Conditions:</strong> Clients must disclose any
                  medical conditions that may affect their ability to fully
                  participate in the tour. OWF Trips reserves the right to
                  request a medical fitness certificate.
                </li>
              </ul>
            </div>
          </section>

          {/* 8. Health and Safety */}
          <section className="policy-section" id="health-safety">
            <div className="policy-section-header">
              <span className="policy-section-icon">
                <i className="fas fa-heartbeat" aria-hidden="true"></i>
              </span>
              <div>
                <span className="policy-section-num">08</span>
                <h2>Health and Safety</h2>
              </div>
            </div>
            <div className="policy-section-body">
              <ul className="policy-list">
                <li>
                  <strong>Health Requirements:</strong> Clients are responsible
                  for meeting all health requirements, including vaccinations,
                  for their destination(s). Any existing medical conditions must
                  be disclosed to OWF Trips prior to booking.
                </li>
                <li>
                  <strong>Safety Guidelines:</strong> Clients must adhere to all
                  safety instructions provided during their trip. Failure to do
                  so may result in termination of the tour without refund.
                </li>
                <li>
                  <strong>Adventure Activities:</strong> Clients participating
                  in adventure activities do so at their own risk and must ensure
                  they are medically fit to do so. OWF Trips is not liable for
                  any injury or loss of life resulting from such participation.
                </li>
              </ul>
            </div>
          </section>

          {/* 9. Passports, Visas, and Travel Documents */}
          <section className="policy-section" id="travel-docs">
            <div className="policy-section-header">
              <span className="policy-section-icon">
                <i className="fas fa-passport" aria-hidden="true"></i>
              </span>
              <div>
                <span className="policy-section-num">09</span>
                <h2>Passports, Visas &amp; Travel Documents</h2>
              </div>
            </div>
            <div className="policy-section-body">
              <ul className="policy-list">
                <li>
                  <strong>Client Responsibility:</strong> It is the client&rsquo;s
                  responsibility to obtain and maintain valid travel documents,
                  including passports and visas. OWF Trips is not liable for any
                  issues arising from the lack of necessary documents.
                </li>
                <li>
                  <strong>Visa Assistance:</strong> While OWF Trips may assist
                  in the visa application process, approval of visas is at the
                  discretion of the respective embassies or consulates.
                </li>
                <li>
                  <strong>OTB Requirement:</strong> For ECR passport holders, an
                  OTB (OK to Board) requirement may be necessary depending on
                  the destination.
                </li>
                <li>
                  <strong>Document Validity:</strong> Passports must be valid for
                  at least six months from the date of return to India. For
                  domestic travel, a government-issued ID card with a photograph
                  is required.
                </li>
              </ul>
            </div>
          </section>

          {/* 10. Airline Guidelines */}
          <section className="policy-section" id="airline">
            <div className="policy-section-header">
              <span className="policy-section-icon">
                <i className="fas fa-plane" aria-hidden="true"></i>
              </span>
              <div>
                <span className="policy-section-num">10</span>
                <h2>Airline Guidelines</h2>
              </div>
            </div>
            <div className="policy-section-body">
              <ul className="policy-list">
                <li>
                  <strong>Flight Delays and Cancellations:</strong> OWF Trips is
                  not responsible for any delays, cancellations, or disruptions
                  caused by airlines. Clients must contact the airline directly
                  for assistance.
                </li>
                <li>
                  <strong>Baggage:</strong> OWF Trips is not liable for baggage
                  delays or losses caused by airlines. Travelers must manage such
                  issues directly with the airline.
                </li>
                <li>
                  <strong>Additional Airline Charges:</strong> Any increase in
                  government taxes, airfare, fuel surcharges, or airline taxes
                  charged by the airlines before the issuance of flight tickets
                  will be charged extra, irrespective of the booking date.
                </li>
                <li>
                  <strong>Flight Meals:</strong> Complimentary meals on flights
                  depend on the type of carrier booked. Low-Cost Carriers (LCC)
                  may not include meals or water as part of the ticket price.
                </li>
              </ul>
            </div>
          </section>

          {/* 11. Accommodation Guidelines */}
          <section className="policy-section" id="accommodation">
            <div className="policy-section-header">
              <span className="policy-section-icon">
                <i className="fas fa-hotel" aria-hidden="true"></i>
              </span>
              <div>
                <span className="policy-section-num">11</span>
                <h2>Accommodation Guidelines</h2>
              </div>
            </div>
            <div className="policy-section-body">
              <ul className="policy-list">
                <li>
                  <strong>Check-In/Check-Out Times:</strong> Standard check-in
                  time is 3 PM, and check-out time is 11 AM, subject to hotel
                  policies. Early check-in or late check-out may incur
                  additional charges.
                </li>
                <li>
                  <strong>Room Allocation:</strong> Room sizes and amenities may
                  vary based on the destination and hotel category. Air-conditioned
                  rooms may not be available in certain regions, such as Europe
                  and domestic hill stations in India. Clients are responsible
                  for any damages incurred during their stay.
                </li>
                <li>
                  <strong>Extra Bed:</strong> A maximum of 3 adults are allowed
                  in one room. The third occupant shall be provided a
                  mattress/rollaway bed.
                </li>
                <li>
                  <strong>Additional Hotel Charges:</strong> City tax, mini-bar
                  usage, and room services, if applicable, must be paid directly
                  at the hotel.
                </li>
                <li>
                  <strong>Hotel Changes:</strong> OWF Trips reserves the right
                  to change hotels due to unforeseen circumstances. Clients will
                  be informed of such changes as soon as possible.
                </li>
              </ul>
            </div>
          </section>

          {/* 12. Transfers and Sightseeing */}
          <section className="policy-section" id="transfers">
            <div className="policy-section-header">
              <span className="policy-section-icon">
                <i className="fas fa-bus" aria-hidden="true"></i>
              </span>
              <div>
                <span className="policy-section-num">12</span>
                <h2>Transfers and Sightseeing</h2>
              </div>
            </div>
            <div className="policy-section-body">
              <ul className="policy-list">
                <li>
                  <strong>Transfers:</strong> Transfers are arranged according
                  to the itinerary and are not on a disposable basis. Clients
                  must be punctual for all transfers as delays may affect the
                  overall itinerary.
                </li>
                <li>
                  <strong>Sightseeing:</strong> Sightseeing activities may be
                  subject to change or cancellation due to local conditions. No
                  refunds or compensation will be provided for unused services.
                </li>
                <li>
                  <strong>Self-Arranged Transfers:</strong> For certain
                  customized trips, clients may be required to arrange their own
                  transfers to departure points. OWF Trips will provide guidance
                  on nearby accommodation if necessary.
                </li>
                <li>
                  AC will not be functional anywhere in cool or hilly areas.
                </li>
                <li>
                  Due to permit issues, vehicles may get changed when you cross
                  the border. Although you will be dropped at your hotel in
                  another state in the same car, the vehicle will be changed for
                  local sightseeing the next day.
                </li>
              </ul>
            </div>
          </section>

          {/* 13. Limitation of Liability */}
          <section className="policy-section" id="liability">
            <div className="policy-section-header">
              <span className="policy-section-icon">
                <i className="fas fa-balance-scale" aria-hidden="true"></i>
              </span>
              <div>
                <span className="policy-section-num">13</span>
                <h2>Limitation of Liability</h2>
              </div>
            </div>
            <div className="policy-section-body">
              <ul className="policy-list">
                <li>
                  <strong>Third-Party Services:</strong> OWF Trips acts as an
                  intermediary between clients and third-party service providers
                  (hotels, airlines, transporters, etc.). OWF Trips is not
                  liable for any loss, injury, or damage caused by these third
                  parties.
                </li>
                <li>
                  <strong>Force Majeure:</strong> OWF Trips is not liable for
                  any failure to perform its obligations due to events beyond its
                  control, such as natural disasters, wars, strikes, or
                  pandemics.
                </li>
                <li>
                  <strong>Liability for Personal Belongings:</strong> OWF Trips
                  is not responsible for the loss of personal belongings,
                  including passports, Aadhar cards, PAN cards, driving
                  licenses, etc., during the tour.
                </li>
              </ul>
            </div>
          </section>

          {/* 14. Conduct and Behavior */}
          <section className="policy-section" id="conduct">
            <div className="policy-section-header">
              <span className="policy-section-icon">
                <i className="fas fa-handshake" aria-hidden="true"></i>
              </span>
              <div>
                <span className="policy-section-num">14</span>
                <h2>Conduct and Behavior</h2>
              </div>
            </div>
            <div className="policy-section-body">
              <ul className="policy-list">
                <li>
                  <strong>Code of Conduct:</strong> Clients are expected to
                  behave respectfully towards fellow travelers, local customs,
                  and laws. Misconduct may result in the termination of services
                  without a refund.
                </li>
                <li>
                  <strong>Responsibility for Damages:</strong> Clients will be
                  held responsible for any damages or losses caused by their
                  actions during the trip.
                </li>
              </ul>
            </div>
          </section>

          {/* 15. Legal & Governance (Privacy, Law, Amendments, Misc, Special, Force Majeure) */}
          <section className="policy-section" id="legal">
            <div className="policy-section-header">
              <span className="policy-section-icon">
                <i className="fas fa-gavel" aria-hidden="true"></i>
              </span>
              <div>
                <span className="policy-section-num">15</span>
                <h2>Legal &amp; Governance</h2>
              </div>
            </div>
            <div className="policy-section-body">

              <h3 className="policy-subsection-title">Privacy and Data Protection</h3>
              <ul className="policy-list">
                <li>
                  <strong>Data Collection:</strong> OWF Trips collects personal
                  data to provide travel services. This data will be handled in
                  accordance with our Privacy Policy, compliant with the Indian
                  Information Technology Act, 2000, and GDPR for clients from
                  the EU.
                </li>
                <li>
                  <strong>Data Sharing:</strong> Client data may be shared with
                  third-party service providers as necessary for fulfilling the
                  tour services.
                </li>
              </ul>

              <h3 className="policy-subsection-title">Governing Law and Jurisdiction</h3>
              <ul className="policy-list">
                <li>
                  <strong>Legal Compliance:</strong> These Terms are governed by
                  the laws of India, including the Consumer Protection Act, 2019,
                  and the Information Technology Act, 2000.
                </li>
                <li>
                  <strong>Complaints Procedure:</strong> If you have any
                  complaints, please contact us immediately. We will attempt to
                  resolve your complaint as quickly as possible.
                </li>
                <li>
                  <strong>Dispute Resolution:</strong> Any disputes arising out
                  of these Terms shall be resolved through mediation or
                  arbitration as per Indian law.
                </li>
                <li>
                  <strong>Jurisdiction:</strong> Any disputes arising from these
                  Terms shall be subject to the exclusive jurisdiction of the
                  courts in Delhi, India.
                </li>
              </ul>

              <h3 className="policy-subsection-title">Amendments to Terms</h3>
              <ul className="policy-list">
                <li>
                  <strong>Right to Amend:</strong> OWF Trips reserves the right
                  to amend these Terms at any time. Any changes will be
                  communicated via our website, and continued use of our services
                  constitutes acceptance of the updated Terms.
                </li>
              </ul>

              <h3 className="policy-subsection-title">Miscellaneous</h3>
              <ul className="policy-list">
                <li>
                  <strong>Severability:</strong> If any provision of these Terms
                  is found to be invalid or unenforceable, the remaining
                  provisions shall continue in full force and effect.
                </li>
                <li>
                  <strong>Entire Agreement:</strong> These Terms constitute the
                  entire agreement between you and us regarding your use of our
                  services.
                </li>
              </ul>

              <h3 className="policy-subsection-title">Special Conditions</h3>
              <ul className="policy-list">
                <li>
                  <strong>International Travel Compliance:</strong> Clients must
                  adhere to the laws and regulations of the destination country.
                  Any fines or penalties due to non-compliance are the
                  client&rsquo;s responsibility.
                </li>
                <li>
                  <strong>Customized Trips:</strong> Any changes to customized
                  trips requested by you may incur additional costs.
                </li>
              </ul>

              <h3 className="policy-subsection-title">Force Majeure</h3>
              <ul className="policy-list">
                <li>
                  <strong>Events Covered:</strong> This clause covers natural
                  disasters, wars, strikes, pandemics, or other events beyond our
                  control.
                </li>
                <li>
                  <strong>Rights and Obligations:</strong> In the event of a
                  force majeure, we may cancel the trip, and you may be entitled
                  to a refund minus any non-refundable expenses.
                </li>
              </ul>

              <h3 className="policy-subsection-title">Acceptance of Terms</h3>
              <p>
                By booking a tour with OWF Trips, you acknowledge that you have
                read, understood, and agreed to these Terms and Conditions.
              </p>
            </div>
          </section>

          {/* 16. Annexure A */}
          <section className="policy-section policy-annexure-section" id="annexure-a">
            <div className="policy-section-header">
              <span className="policy-section-icon">
                <i className="fas fa-table" aria-hidden="true"></i>
              </span>
              <div>
                <span className="policy-section-num">16</span>
                <h2>Annexure A</h2>
              </div>
            </div>
            <div className="policy-section-body">

              {/* Payment Policy Table */}
              <div className="policy-table-block">
                <h3 className="policy-table-title">
                  <i className="fas fa-file-invoice-dollar" aria-hidden="true"></i>
                  Payment Policy
                </h3>
                <div className="policy-table-wrap">
                  <table className="policy-table">
                    <thead>
                      <tr>
                        <th>Days Prior to Tour Date</th>
                        <th>Amount to be Paid</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>At the time of booking</td>
                        <td>
                          25% of the full tour cost or cancellation charges
                          whichever is higher{" "}
                          <span className="policy-table-tag">
                            Non-refundable &amp; Non-transferable
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>Within 45 Days from Departure Date</td>
                        <td>
                          50% of the Full Tour Cost or cancellation charges
                          whichever is higher{" "}
                          <span className="policy-table-tag">
                            Non-refundable &amp; Non-transferable
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>Within 30 Days from Date of Departure</td>
                        <td>
                          75% of the Full Tour Cost or cancellation charges
                          whichever is higher{" "}
                          <span className="policy-table-tag">
                            Non-refundable &amp; Non-transferable
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>20 Days from Date of Departure</td>
                        <td>
                          <strong>100% of the Full Tour Cost</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="policy-note-box">
                  <div className="policy-note-item">
                    <i className="fas fa-exclamation-circle" aria-hidden="true"></i>
                    <span>
                      For issuance of Flight Tickets, we require full payment of
                      Airfare.
                    </span>
                  </div>
                  <div className="policy-note-item">
                    <i className="fas fa-exclamation-circle" aria-hidden="true"></i>
                    <span>
                      Non-Refundable Services in the tour package have to be
                      paid in full at the time of Booking.
                    </span>
                  </div>
                  <div className="policy-note-item">
                    <i className="fas fa-exclamation-circle" aria-hidden="true"></i>
                    <span>
                      Payment Policy is non-negotiable and has to be paid
                      accordingly.
                    </span>
                  </div>
                  <div className="policy-note-item">
                    <i className="fas fa-exclamation-circle" aria-hidden="true"></i>
                    <span>
                      Payment Schedule may vary based on the destination and
                      travel date.
                    </span>
                  </div>
                </div>
              </div>

              {/* Cancellation Policy Table */}
              <div className="policy-table-block">
                <h3 className="policy-table-title policy-table-title-cancel">
                  <i className="fas fa-times-circle" aria-hidden="true"></i>
                  Cancellation Policy
                </h3>
                <div className="policy-table-wrap">
                  <table className="policy-table">
                    <thead>
                      <tr>
                        <th>Days Prior to Tour Date</th>
                        <th>Cancellation Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>31 and More Days prior to Departure Date</td>
                        <td>
                          The Booking Amount is Non-Refundable; for balance
                          amount a credit note will be given.
                        </td>
                      </tr>
                      <tr>
                        <td>30 to 16 Days prior to Departure Date</td>
                        <td>
                          50% of the full Tour cost; for balance amount a credit
                          note will be given.
                        </td>
                      </tr>
                      <tr>
                        <td>15 Days prior to Departure Date</td>
                        <td>
                          <strong>100% of the full Tour cost</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="policy-note-box policy-note-box-red">
                  <div className="policy-note-item">
                    <i className="fas fa-exclamation-circle" aria-hidden="true"></i>
                    <span>
                      Actual Airfare Cancellation will be applicable in case of
                      Cancellation.
                    </span>
                  </div>
                  <div className="policy-note-item">
                    <i className="fas fa-exclamation-circle" aria-hidden="true"></i>
                    <span>
                      No Refund will be made against Non-Refundable Services in
                      the Tour Package.
                    </span>
                  </div>
                  <div className="policy-note-item">
                    <i className="fas fa-exclamation-circle" aria-hidden="true"></i>
                    <span>
                      Cancellation Policy is non-negotiable and 5% GST will be
                      applicable on Total Cancellation Amount.
                    </span>
                  </div>
                  <div className="policy-note-item">
                    <i className="fas fa-exclamation-circle" aria-hidden="true"></i>
                    <span>
                      The cancellation fee may vary based on the destination and
                      travel date.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="policy-section policy-section-cta" id="contact">
            <div className="policy-section-header">
              <span className="policy-section-icon policy-section-icon-cta">
                <i className="fas fa-headset" aria-hidden="true"></i>
              </span>
              <div>
                <span className="policy-section-num">17</span>
                <h2>Contact Us</h2>
              </div>
            </div>
            <div className="policy-section-body">
              <div className="policy-cta-card">
                <div className="policy-cta-content">
                  <h3>Have questions about our terms?</h3>
                  <p>
                    For any inquiries or issues, please contact our customer
                    service team. Our office hours are{" "}
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

        </div>
      </div>
    </PolicyPageShell>
  );
}
