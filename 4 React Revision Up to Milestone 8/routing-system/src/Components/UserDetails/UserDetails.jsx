import React from "react";
import { useLoaderData, useParams } from "react-router";

const UserDetails = () => {
  const data = useLoaderData();
  console.log(data);
  
  return <div>UserDetails</div>;
};

export default UserDetails;
