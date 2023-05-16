import React from "react";
import { Badge } from "@chakra-ui/react";

type Props = {
    score: number;
};

export const CriticScore = ({ score }: Props) => {
    let color = "yellow";
    if (score > 90) {
        color = "green";
    }
    return (
        <Badge
            fontSize="14px"
            paddingX={2}
            borderRadius="4px"
            colorScheme={color}
        >
            {score}
        </Badge>
    );
};
