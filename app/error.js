"use client";

export default function Error({ reset }) {
  return (
    <div className="error-page">
      <h2>Something went wrong</h2>
      <p>An unexpected error occurred. Please try again.</p>
      <button className="btn btn-primary" onClick={reset}>
        Try again
      </button>
    </div>
  );
}
