import React from "react";

import { UserItem } from "./UserItem";

import "./UsersList.scss";
import Card from "../../shared/components/UIElements/Card";

export const UsersList = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No users found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {items.map(item => (
        <UserItem key={item.id} item={item} />
      ))}
    </ul>
  );
};
