import React from "react";
import { useNavigate, useParams } from "react-router";
import PageTitle from "../../Components/PageTitle/PageTitle";

const StudentDetails = () => {
  const { Id } = useParams();
//   console.log(Id);
const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  
  return <div>
    <PageTitle title={`Student Details - ${Id}`}></PageTitle>
    StudentDetails : {Id} <br/>
    <button onClick={handleNavigate}>Back to Home</button>
    </div>;
};

export default StudentDetails;
