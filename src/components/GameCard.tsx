import React from "react";
import { iGame, iFetchGamesResponse, iPlatform } from "../services/rawg";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { PlatformIconList } from "./PlatformIconList";

interface Props {
    game: iGame;
}

export const GameCard = ({ game }: { game: iGame }) => {
    return (
        <Card borderRadius={10} overflow="hidden">
            <Image src={game.background_image}></Image>
            <CardBody>
                <Heading fontSize="2xl">{game.name}</Heading>
                <PlatformIconList
                    platforms={game.parent_platforms.map((p) => p.platform)}
                ></PlatformIconList>
            </CardBody>
        </Card>
    );
};
