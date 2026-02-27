import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="not-found-page">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for does not exist or has been moved.</p>
        <Link href="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
      <Footer />
    </>
  );
}
