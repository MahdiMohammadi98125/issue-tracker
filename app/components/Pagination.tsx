import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { Button, Flex, Text } from "@radix-ui/themes";

interface Props {
  pageCount: number;
  pageSize: number;
  currentPage: number;
}

const Pagination = ({ pageCount, pageSize, currentPage }: Props) => {
  const pagesShown = Math.ceil(pageCount / pageSize);
  if (pagesShown === 1) return null;
  return (
    <Flex align="center" gap="4">
      <Text size="2">
        page {currentPage} of {pagesShown}{" "}
      </Text>
      <Button variant="soft" color="gray" disabled={currentPage === 1}>
        <DoubleArrowLeftIcon />
      </Button>
      <Button variant="soft" color="gray" disabled={currentPage === 1}>
        <ChevronLeftIcon />
      </Button>

      <Button variant="soft" color="gray" disabled={currentPage === pageCount}>
        <ChevronRightIcon />
      </Button>

      <Button variant="soft" color="gray" disabled={currentPage === pageCount}>
        <DoubleArrowRightIcon />
      </Button>
    </Flex>
  );
};

export default Pagination;
