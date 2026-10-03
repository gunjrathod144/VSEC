import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Input from "./Input";
import Display from "./Display";

function App() {
  const [coffee, setCoffee] = useState("");
  const [quantity, setQuantity] = useState("");

  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <Input
              setCoffee={setCoffee}
              setQuantity={setQuantity}
            />
          }
        />

        <Route
          path="/display"
          element={
            <Display
              coffee={coffee}
              quantity={quantity}
            />
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
