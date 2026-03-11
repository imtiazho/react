import React from "react";
import { useLoaderData } from "react-router";
import StudentCard from "../../Components/StudentCard/StudentCard";
import PageTitle from "../../Components/PageTitle/PageTitle";

const Students = () => {
  const data = useLoaderData();
  
  return (
    <div className="grid grid-cols-3 gap-8">
      <PageTitle title="Students"></PageTitle>
      {data.map((eachData) => (
        <StudentCard eachData={eachData}></StudentCard>
      ))}
    </div>
  );
};

export default Students;
