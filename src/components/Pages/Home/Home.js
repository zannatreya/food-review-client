import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../Services/ServiceCard";
import Services from "../Services/Services";
import AboutUs from "./AboutUs";

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="my-16">
        <div className="text-center my-10">
          <h2 className="text-5xl font-bold">Our Services</h2>
        </div>
        <div className="grid gap-10  lg:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
        <div className="text-center my-6">
          <Link to={`/services`} className="text-xl font-semibold tx">
            See All
          </Link>
        </div>
      </div>
      <AboutUs />
    </div>
  );
};

export default Home;
