
import { useNavigate } from "react-router-dom";

function Input({ setCoffee, setQuantity }) {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Coffee Order</h2>

      <input
        type="text"
        placeholder="Enter Coffee Name"
        onChange={(e) => setCoffee(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Enter Quantity"
        onChange={(e) => setQuantity(e.target.value)}
      />

      <br /><br />

      <button onClick={() => navigate("/display")}>
        Next
      </button>
    </div>
  );
}

export default Input;
