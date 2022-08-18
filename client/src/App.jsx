import React, { useState, useEffect } from "react";
import './App.css';
import lamanik from './lamanik.jpeg'

export default function App() {
  const [cuenta, setCuenta] = useState(0);

  useEffect(() => {
    console.log(`La cuenta es ${cuenta}`);
    document.title = `${cuenta}`
  })
  
  return (
    <>
    <div className="miniheader">Cajitas re lindas</div>
    <div className="header">
     <img src={lamanik} alt="mdn" height={300}/>
     <h4>tienda online</h4>
    </div>
    </>
  );
};
