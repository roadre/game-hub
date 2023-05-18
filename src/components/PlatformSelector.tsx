import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

interface Props {
    onSelectPlatform: (id: number) => void;
}

const PlatformSelector = ({ onSelectPlatform }: Props) => {
    const { data, isLoading, error } = usePlatform();

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Platform
            </MenuButton>
            <MenuList>
                {data.map((item) => (
                    <MenuItem
                        key={item.id}
                        onClick={(e) => onSelectPlatform(item.id)}
                    >
                        {item.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;
