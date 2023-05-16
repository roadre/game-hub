import React from "react";
import useGenres from "../hooks/useGenres";
import { iGenres, iFetchGeneresResponse } from "../services/rawg";

type Props = {};

const GenreList = (props: Props) => {
    const { Genres } = useGenres();

    return (
        <ul>
            {Genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
            ))}
        </ul>
    );
};

export default GenreList;
