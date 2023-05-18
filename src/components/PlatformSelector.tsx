import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import {
    Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Select,
} from "@chakra-ui/react";

interface Props {}

const PlatformSelector = (props: Props) => {
    const { data, isLoading, error } = usePlatform();

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {" "}
                Platform
            </MenuButton>
            <MenuList>
                {data.map((item) => (
                    <MenuItem key={item.id}>{item.name}</MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;
