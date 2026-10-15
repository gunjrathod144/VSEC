import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  function handleLogout() {
    navigate("/");
  }

  return (
    <div className="gr-dashboard">
      <header className="gr-header">
        <Link
          to="/dashboard"
          className="gr-brand"
          style={{ textDecoration: "none" }}
        >
          <div className="gr-brand-icon">✈</div>

          <div className="gr-brand-text">
            <span className="gr-brand-name">GR AIRWAYS</span>
            <span className="gr-brand-tagline">
              YOUR JOURNEY, OUR PRIORITY
            </span>
          </div>
        </Link>

        <nav className="gr-navigation">
          <button
            className="gr-nav-button"
            onClick={() => navigate("/add-booking")}
          >
            ＋ Book a Flight
          </button>

          <button
            className="gr-nav-button"
            onClick={() => navigate("/bookings")}
          >
            ▤ My Bookings
          </button>

          <button
            className="gr-logout-button"
            onClick={handleLogout}
          >
            ↪ Logout
          </button>
        </nav>
      </header>

      <div className="gr-trust-bar">
        <span>✦ Comfortable journeys</span>
        <span>✦ Easy reservations</span>
        <span>✦ Travel with confidence</span>
      </div>

      <main className="gr-main-content">
        <h1>Welcome to GR Airways</h1>
        <p>Book your flight and manage your reservations easily.</p>

        <button
          className="gr-nav-button"
          onClick={() => navigate("/add-booking")}
          style={{ background: "#102747" }}
        >
          Book a Flight
        </button>
      </main>

      <footer className="gr-footer">
        <div className="gr-footer-brand">
          <span className="gr-footer-plane">✈</span>
          <strong>GR AIRWAYS</strong>
        </div>

        <p>Making every journey memorable.</p>

        <div className="gr-footer-bottom">
          <span>© {new Date().getFullYear()} GR Airways</span>
          <span>Designed for your journey.</span>
        </div>
      </footer>
    </div>
  );
}

export default Dashboard;