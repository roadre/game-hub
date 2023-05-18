import { HStack, Image, Select, Text } from "@chakra-ui/react";
import logo from "../assets/images/misc/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import PlatformSelector from "./PlatformSelector";

const NavBar = () => {
    return (
        <HStack justifyContent="space-between" padding="10px">
            <Image src={logo} boxSize="60px" />
            <ColorModeSwitch></ColorModeSwitch>
        </HStack>
    );
};

export default NavBar;
