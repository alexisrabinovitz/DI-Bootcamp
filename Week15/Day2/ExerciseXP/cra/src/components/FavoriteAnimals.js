import React from "react";

export const UserFavoriteAnimals = ({favorites}) => {
    return favorites.map((favorite, i) => <li key = {i}>{favorite}</li>)
}