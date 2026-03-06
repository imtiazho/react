import React, { use } from "react";
import { useParams } from "react-router";

const UsersSec = ({ userPromise }) => {
  const data = use(userPromise);
    console.log(data);
  return <div>UsersSec</div>;
};

export default UsersSec;
