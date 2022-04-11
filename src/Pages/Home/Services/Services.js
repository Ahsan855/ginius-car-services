import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("Service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="container">
      <h1 className="services-title m-5">Our services: {services.length}</h1>
     <div className="services-sontainer">
     {services.map((service) => (
        <Service key={service.id} service={service}></Service>
      ))}
     </div>
    </div>
  );
};

export default Services;
