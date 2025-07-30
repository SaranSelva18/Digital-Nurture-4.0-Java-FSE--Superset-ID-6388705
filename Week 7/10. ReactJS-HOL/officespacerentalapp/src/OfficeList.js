import React from "react";

// Sample office data
const offices = [
  {
    id: 1,
    name: "Tech Park Office",
    location: "Chennai",
    capacity: 50,
    price: "₹40,000/month"
  },
 
];

const OfficeList = () => {
  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h2> Office Space, at Affordable Range</h2>
      <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
        {offices.map((office) => (
          <div key={office.id} style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "20px",
            margin: "10px",
            width: "300px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
          }}>
            <img
              src="/office.jpg" // from public folder
              alt="Office"
              width="100%"
              height="180px"
              style={{ borderRadius: "10px" }}
            />
            <h3 style={{ color: "#007bff", marginTop: "15px" }}>{office.name}</h3>
            <p> Address : {office.location}</p>
            <p> Rent: {office.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfficeList;
