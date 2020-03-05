import React from "react";

import { Link } from "react-router-dom";

import "./UserItem.scss";
import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";

export const UserItem = ({ item }) => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${item.id}/places`}>
          <div className="user-item__image">
            <Avatar image={item.image} alt={item.name} />
          </div>
          <div className="user-item__info">
            <h2>{item.name}</h2>
            <h3>
              {item.places} {item.places === 1 ? "Place" : "Places"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};
