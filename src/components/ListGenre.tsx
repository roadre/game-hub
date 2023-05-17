import useGenre from "../hooks/useGenre";

type Props = {};

const GenreList = (props: Props) => {
    const { data } = useGenre();

    return (
        <ul>
            {data.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
            ))}
        </ul>
    );
};

export default GenreList;
