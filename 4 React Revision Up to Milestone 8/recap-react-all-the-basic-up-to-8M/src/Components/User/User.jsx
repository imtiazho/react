import React, { use } from "react";

const User = ({ usersPromise }) => {
  const data = use(usersPromise);

  return <div>Users : {data.length}</div>;
};

export default User;
