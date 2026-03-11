import React from "react";
import { useParams } from "react-router";
import PageTitle from "../../Components/PageTitle/PageTitle";

const StudentDetails = () => {
  const { Id } = useParams();
//   console.log(Id);
  
  return <div>
    <PageTitle title={`Student Details - ${Id}`}></PageTitle>
    StudentDetails : {Id}</div>;
};

export default StudentDetails;
