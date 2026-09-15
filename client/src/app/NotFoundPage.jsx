import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <main className="section">
      <div className="container">
        <h1>404</h1>
        <p>The page you are looking for could not be found.</p>

        <Link to="/">Return to Home</Link>
      </div>
    </main>
  );
}

export default NotFoundPage;