import React, { use } from "react";

const UsersTwo = ({ user2Promise }) => {
  const users = use(user2Promise);
  console.log(users);
  return <div>UsersTwo</div>;
};

export default UsersTwo;
