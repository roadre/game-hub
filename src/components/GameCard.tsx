import React from "react";
import { iGame, iFetchGamesResponse, iPlatform } from "../services/rawg";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { PlatformIconList } from "./ListPlatformIcon";
import { CriticScore } from "./CriticScore";
import { getCroppedImageUrl } from "../services/image-urls";

interface Props {
    game: iGame;
}

export const GameCard = ({ game }: { game: iGame }) => {
    return (
        <Card borderRadius={10} overflow="hidden">
            <Image src={getCroppedImageUrl(game.background_image)}></Image>
            <CardBody>
                <Heading fontSize="2xl">{game.name}</Heading>
                <HStack justifyContent={"space-between"}>
                    <PlatformIconList
                        platforms={game.parent_platforms.map((p) => p.platform)}
                    ></PlatformIconList>
                    <CriticScore score={game.metacritic}></CriticScore>
                </HStack>
            </CardBody>
        </Card>
    );
};
