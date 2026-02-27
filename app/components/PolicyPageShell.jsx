import InnerPageLayout from "./InnerPageLayout";

export default function PolicyPageShell({ title, breadcrumb, children }) {
  return (
    <InnerPageLayout title={title} breadcrumb={breadcrumb}>
      <article className="policy-content">
        {children || (
          <div className="policy-placeholder">
            <i className="fas fa-file-alt policy-placeholder-icon" aria-hidden="true"></i>
            <p className="policy-placeholder-title">This page is being prepared</p>
            <p>
              The {title.toLowerCase()} for OWF Trips is currently being drafted
              and will be available soon.
            </p>
            <p>
              For questions, please contact us at{" "}
              <a href="mailto:bookings@owftrips.in">bookings@owftrips.in</a>.
            </p>
          </div>
        )}
      </article>
    </InnerPageLayout>
  );
}
