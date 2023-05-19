import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { iGameQuery, iOrder, iOrderEnum } from "../services/rawg";
import { BsChevronDown } from "react-icons/bs";

interface Props {
    selectedOrder?: iOrderEnum | null;
    onSelectOrder: (order: iOrderEnum | null) => void;
}

const SelectorOrder = ({ selectedOrder, onSelectOrder }: Props) => {
    const orderItems: string[] = [];
    for (var i in iOrderEnum) {
        orderItems.push(i);
    }

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {selectedOrder ? "Order by: " + selectedOrder : "Order"}
            </MenuButton>
            <MenuList>
                {orderItems.map((item) => (
                    <MenuItem
                        key={item}
                        onClick={(e) => onSelectOrder(item as iOrderEnum)}
                    >
                        {iOrderEnum[item]}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default SelectorOrder;
