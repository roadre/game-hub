import React from "react";
import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
type Props = { children: ReactNode };

const GameCardContainer = ({ children }: Props) => {
    return (
        <Box width="300px" padding={2} borderRadius={10} overflow="hidden">
            {children}
        </Box>
    );
};

export default GameCardContainer;
