import { Card, CardBody } from "@chakra-ui/react";
import { Skeleton, SkeletonText } from "@chakra-ui/skeleton";

type Props = {};

const GameCardPlaceholder = (props: Props) => {
    return (
        <Card>
            <Skeleton height="200px">
                <CardBody>
                    <SkeletonText></SkeletonText>
                </CardBody>
            </Skeleton>
        </Card>
    );
};

export default GameCardPlaceholder;
