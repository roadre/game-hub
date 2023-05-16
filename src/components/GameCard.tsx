import React from "react";
import { iGame, iFetchGamesResponse } from "../services/rawg";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

interface Props {
    game: iGame;
}

export const GameCard = ({ game }: { game: iGame }) => {
    return (
        <Card borderRadius={10} overflow="hidden">
            <Image src={game.background_image}></Image>
            <CardBody>
                <Heading fontSize="2xl">{game.name}</Heading>
            </CardBody>
        </Card>
    );
};
