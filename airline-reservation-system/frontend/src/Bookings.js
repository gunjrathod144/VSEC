import { useEffect, useState } from "react";

function Bookings() {
  const [bookings, setBookings] = useState([]);

  function loadBookings() {
    fetch("http://localhost:3000/bookings")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not load bookings");
        }
        return response.json();
      })
      .then((data) => {
        setBookings(Array.isArray(data) ? data : data.bookings || []);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadBookings();
  }, []);

  function cancelBooking(id) {
    if (!window.confirm("Are you sure you want to cancel this booking?")) {
      return;
    }

    fetch(`http://localhost:3000/bookings/${id}`, {
      method: "DELETE"
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Cancellation failed");
        }
        return response.json();
      })
      .then((data) => {
        if (data.success === false) {
          throw new Error("Cancellation failed");
        }

        setBookings((previous) =>
          previous.filter((booking) => booking._id !== id)
        );
      })
      .catch(() => {
        alert("Could not cancel booking. Please try again.");
      });
  }

  return (
    <div className="bookings-page">
      <div className="bookings-box">
        <h1>My Bookings</h1>
        <p>View and manage your flight reservations.</p>

        <button onClick={loadBookings}>Refresh Bookings</button>

        {bookings.length === 0 ? (
          <p className="no-bookings">No bookings yet.</p>
        ) : (
          <div className="bookings-table-wrapper">
            <table className="bookings-table">
              <thead>
                <tr>
                  <th>Passenger</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Travel Date</th>
                  <th>Passengers</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking._id}>
                    <td>{booking.passengerName}</td>
                    <td>{booking.from}</td>
                    <td>{booking.to}</td>
                    <td>{booking.travelDate}</td>
                    <td>{booking.passengers}</td>
                    <td>
                      <button
                        className="cancel-button"
                        onClick={() => cancelBooking(booking._id)}
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Bookings;