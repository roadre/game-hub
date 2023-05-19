import { HStack, Image, Select, Text } from "@chakra-ui/react";
import logo from "../assets/images/misc/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import PlatformSelector from "./PlatformSelector";
import SearchInput from "./SearchInput";

interface Props {
    onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
    return (
        <HStack padding="10px">
            <Image src={logo} boxSize="60px" />
            <SearchInput onSearch={onSearch} />
            <ColorModeSwitch></ColorModeSwitch>
        </HStack>
    );
};

export default NavBar;
