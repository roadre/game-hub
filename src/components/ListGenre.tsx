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
}

const ListGenre = ({ onSelectGenre }: Props) => {
    const { data, isLoading, error } = useGenre();

    if (isLoading) return <Spinner />;

    if (error) return null;

    return (
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
                            fontSize="large"
                        >
                            {genre.name}
                        </Button>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default ListGenre;
