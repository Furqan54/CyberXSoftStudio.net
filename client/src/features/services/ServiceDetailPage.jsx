import { useParams } from "react-router-dom";

function ServiceDetailPage() {
  const { serviceSlug } = useParams();

  return (
    <main className="section">
      <div className="container">
        <h1>Service Detail Page</h1>
        <p>{serviceSlug}</p>
      </div>
    </main>
  );
}

export default ServiceDetailPage;