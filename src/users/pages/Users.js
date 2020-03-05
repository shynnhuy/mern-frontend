import React from "react";
import { UsersList } from "../components/UsersList";

export const Users = () => {
  const Users = [
    {
      id: 'u1',
      name: "Shynn",
      image:
        "https://p1.pxfuel.com/preview/851/643/659/dark-dahlia-flower-petals-royalty-free-thumbnail.jpg",
      places: 5
    },
    {
      id: 'u2',
      name: "NnyhS",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnxdSiO4qifcId4uI_dUDGDJ6rpPuAFASU8FdLyhbB-MoeAOBw",
      places: 1
    }
  ];

  return <UsersList items={Users} />;
};
