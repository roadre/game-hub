import {
    Button,
    HStack,
    Input,
    InputGroup,
    InputRightElement,
} from "@chakra-ui/react";
import React from "react";

interface Props {}

const SearchInput = (props: Props) => {
    return (
        <HStack>
            <InputGroup size="md">
                <Input
                    width="400px"
                    placeholder="Search Games"
                    borderRadius={5}
                ></Input>
                <InputRightElement width="4.5rem">
                    <Button onClick={() => {}}>Search</Button>
                </InputRightElement>
            </InputGroup>
        </HStack>
    );
};

export default SearchInput;
