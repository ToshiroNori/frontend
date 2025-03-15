import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";

export default function Profile() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  );
}
