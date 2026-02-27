import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";

export default function InnerPageLayout({ title, breadcrumb, currentPage, children }) {
  return (
    <>
      <Header currentPage={currentPage} />
      <main className="inner-page">
        <div className="inner-page-banner">
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="breadcrumb-sep">/</span>
              <span>{breadcrumb}</span>
            </nav>
            <h1>{title}</h1>
          </div>
        </div>
        <div className="container inner-page-content">{children}</div>
      </main>
      <Footer />
    </>
  );
}
