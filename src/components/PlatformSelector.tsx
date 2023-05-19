import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { iPlatform } from "../services/rawg";

interface Props {
    onSelectPlatform: (platform: iPlatform) => void;
    selectedPlatform?: iPlatform | null;
}

const PlatformSelector = ({ selectedPlatform, onSelectPlatform }: Props) => {
    const { data, isLoading, error } = usePlatform();

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {selectedPlatform ? selectedPlatform.name : "Platform"}
            </MenuButton>
            <MenuList>
                {data.map((item) => (
                    <MenuItem
                        key={item.id}
                        onClick={(e) => onSelectPlatform(item)}
                    >
                        {item.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;
