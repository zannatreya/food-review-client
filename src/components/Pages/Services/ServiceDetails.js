import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const service = useLoaderData();
  console.log(service);
  const { title, details, img, price, time, delivery, _id, rating, chef } =
    service;
  return (
    <div>
      <h1 className="text-5xl mb-12 text-rose-600 font-bold">
        Order our {title} !{" "}
      </h1>
    </div>
  );
};

export default ServiceDetails;
