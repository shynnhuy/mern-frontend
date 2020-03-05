import React from "react";
import { PlaceList } from "../components/PlaceList";
import { useParams } from "react-router-dom";

export const UserPlaces = () => {
  const PLACE = [
    {
      id: 1,
      title: "Shynn's House",
      description: "House of handsome man",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/80/Colonel-Short%27s-Villa-818.JPG",
      address: "16b Nguyễn Tuấn Thiện, Lê Mao, Thành phố Vinh",
      coordinates: {
        lat: 18.671614,
        lng: 105.677587
      },
      creatorId: 'u1'
    },
    {
      id: 2,
      title: "NnyhS's House",
      description: "House of handsome man",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/80/Colonel-Short%27s-Villa-818.JPG",
      address: "16c Nguyễn Tuấn Thiện, Lê Mao, Thành phố Vinh",
      coordinates: {
        lat: 18.671614,
        lng: 105.677587
      },
      creatorId: 'u2'
    },
  ];

  const uid = useParams().uid;

  const loadedPlaces = PLACE.filter(place => place.creatorId === uid);

  return <PlaceList items={loadedPlaces} />;
};
