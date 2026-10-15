import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBooking() {
  const navigate = useNavigate();

  const emptyForm = {
    passengerName: "",
    email: "",
    from: "",
    to: "",
    travelDate: "",
    flightNumber: "",
    passengers: "1"
  };

  const [form, setForm] = useState(emptyForm);
  const [message, setMessage] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("");

    if (form.from.trim().toLowerCase() === form.to.trim().toLowerCase()) {
      setMessage("Departure and destination must be different.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          passengers: Number(form.passengers)
        })
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setMessage(data.message || "Booking failed.");
        return;
      }

      setMessage("Flight booked successfully!");
      setForm({ ...emptyForm });
    } catch {
      setMessage("Cannot connect to backend.");
    }
  }

  return (
    <section className="booking-page">
      <div className="welcome">
        <h1>Book Your Flight</h1>
        <p>Enter your flight details.</p>
      </div>

      <div className="form-box">
        <h2>Passenger & Flight Details</h2>

        {message && <p>{message}</p>}

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="input-group">
              <label>Passenger Name</label>
              <input
                name="passengerName"
                value={form.passengerName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Departure City</label>
              <input
                name="from"
                value={form.from}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Destination City</label>
              <input
                name="to"
                value={form.to}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Travel Date</label>
              <input
                type="date"
                name="travelDate"
                value={form.travelDate}
                onChange={handleChange}
                min={new Date().toLocaleDateString("en-CA")}
                required
              />
            </div>

            <div className="input-group">
              <label>Flight Number</label>
              <input
                name="flightNumber"
                value={form.flightNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Passengers</label>
              <select
                name="passengers"
                value={form.passengers}
                onChange={handleChange}
              >
                {[1, 2, 3, 4, 5, 6].map((number) => (
                  <option key={number} value={number}>
                    {number}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button className="add-button" type="submit">
            Confirm Flight Booking
          </button>
        </form>

        <button
          className="secondary-button"
          type="button"
          onClick={() => navigate("/bookings")}
        >
          View My Bookings
        </button>
      </div>
    </section>
  );
}



export default AddBooking;


