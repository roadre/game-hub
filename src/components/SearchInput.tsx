import {
    Button,
    HStack,
    Input,
    InputGroup,
    InputRightElement,
} from "@chakra-ui/react";
import { useRef } from "react";

import useForm from "react-hook-form";

interface Props {
    onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
    const ref = useRef<HTMLInputElement>(null);
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                onSearch(ref.current?.value ? ref.current?.value : "");
                return false;
            }}
        >
            <InputGroup>
                <Input
                    ref={ref}
                    placeholder="Search Games"
                    borderRadius={5}
                ></Input>
                <InputRightElement width="4.5rem">
                    <Button
                        onClick={() => {
                            onSearch;
                        }}
                    >
                        Search
                    </Button>
                </InputRightElement>
            </InputGroup>
        </form>
    );
};

export default SearchInput;
