
function Display({ coffee, quantity }) {
  return (
    <div>
      <h2>Coffee Order Details</h2>

      <h3>Coffee: {coffee}</h3>
      <h3>Quantity: {quantity}</h3>
    </div>
  );
}

export default Display;
