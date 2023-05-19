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
import { iGenre } from "../services/rawg";

interface Props {
    onSelectGenre: (genre: iGenre | null) => void;
    selectedGenre?: iGenre | null;
}

const ListGenre = ({ onSelectGenre, selectedGenre }: Props) => {
    const { data, isLoading, error } = useGenre();

    if (isLoading) return <Spinner />;

    if (error) return null;

    return (
        <>
            {selectedGenre ? (
                <Button onClick={() => onSelectGenre(null)}>Reset</Button>
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
                                onClick={() => onSelectGenre(genre)}
                                fontSize="small"
                                backgroundColor={
                                    genre.id == selectedGenre?.id ? "#444" : ""
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
