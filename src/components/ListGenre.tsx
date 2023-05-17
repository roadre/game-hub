import { Text, Image, HStack, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";

type Props = {};

const GenreList = (props: Props) => {
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
                        <Text fontSize="large">{genre.name}</Text>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenreList;
