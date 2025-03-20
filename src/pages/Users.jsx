import React from "react";
import { styles } from "../styles/styles";
import Filter from "../components/Users/Filter";
import UserList from "../components/Users/UserList";

const Users = () => {
  return (
    <div className="w-full flex flex-col gap-y-4">
      <Filter />
      <UserList />
    </div>
  );
};

export default Users;
