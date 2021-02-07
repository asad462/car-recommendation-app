import React, { useState } from "react";
import "./styles.css";

var carDB = {
  hatchback: [
    {
      name: "Maruti Suzuki Baleno",
      rating: "4.5/5",
      price: "₹5.89 - ₹9.09 Lakh"
    },
    {
      name: "Tata Altroz",
      rating: "4.7/5",
      price: "₹5.69 - ₹9.45 Lakh"
    }
  ],
  suv: [
    {
      name: "Hyundai Creta",
      rating: "4.2/5",
      price: "₹9.99 - ₹17.53 Lakh"
    },
    {
      name: "Tata Harrier",
      rating: "4.4/5",
      price: "₹13.99 - ₹20.45 Lakh"
    }
  ],
  crossover: [
    {
      name: "Maruti Suzuki Vitara Brezza",
      rating: "4.25/5",
      price: "₹7.39 - ₹11.40 Lakh"
    },
    {
      name: "Nissan Magnite",
      rating: "4.5/5",
      price: "₹5.49 - ₹9.59 Lakh"
    }
  ]
};
export default function App() {
  const [selectedType, setType] = useState("suv");
  function CarClickHandler(segment) {
    setType(segment);
  }
  return (
    <div className="App">
      <h1>🚗 Best Cars in India </h1>
      <p>
        {" "}
        Checkout the best selling cars in India. Click the type of car you want
        and we will let you know!
      </p>

      <div>
        {Object.keys(carDB).map((segment) => (
          <button 
             onClick={() => CarClickHandler(segment)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}>{segment}</button>
        ))}
      </div>
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {carDB[selectedType].map((car) => (
            <li key={car.name}
               style={{
                  
                   listStyle: "none",
                   padding: "1rem",
                   border: "1px solid #D1D5DB",
                   width: "70%",
                   margin: "1rem 0rem",
                   borderRadius: "0.5rem",
                  }} 
            
            >
              {" "}
              <div style={{ fontSize: "larger" }}>{car.name}</div>
              <div style={{ fontSize: "smaller" }}>{car.rating}</div>
              <div style={{ fontSize: "smaller" }}>{car.price}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
