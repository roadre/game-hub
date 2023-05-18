import {
    Text,
    Image,
    HStack,
    List,
    ListItem,
    Spinner,
    Button,
} from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";

interface Props {
    onSelectGenre: (genre: number) => void;
    selectedGenre: number;
}

const ListGenre = ({ onSelectGenre, selectedGenre }: Props) => {
    const { data, isLoading, error } = useGenre();

    if (isLoading) return <Spinner />;

    if (error) return null;

    return (
        <>
            {selectedGenre != 0 ? (
                <Button onClick={() => onSelectGenre(0)}>Reset</Button>
            ) : (
                ""
            )}

            <List>
                {data.map((genre) => (
                    <ListItem key={genre.id} paddingY="5px">
                        <HStack>
                            <Image
                                boxSize="32px"
                                borderRadius={8}
                                src={genre.image_background}
                            ></Image>
                            <Button
                                onClick={() => onSelectGenre(genre.id)}
                                fontSize="small"
                                backgroundColor={
                                    genre.id == selectedGenre ? "#444" : ""
                                }
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default ListGenre;
