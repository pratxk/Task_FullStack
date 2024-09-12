import { Box, Input, Select, Text } from "@chakra-ui/react";

function SearchAndSort() {
  return (
    <Box
      height={{ base: "110px", md: "70px", lg: "70px" }}
      width="100%"
      rounded="md"
      display="flex"
      justifyContent={{
        base: "space-around",
        md: "space-between",
        lg: "space-between",
      }}
      flexDirection={{ base: "column", md: "row", lg: "row" }}
      px={3}
      fontWeight="600"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
      }}
    >
      <Box
        display="flex"
        width={{ base: "60%", md: "50%", lg: "40%" }}
        alignItems="center"
        gap={3}
      >
        <Text>Search:</Text>
        <Input
          borderColor="gray.500"
          rounded="md"
          border="1px"
          placeholder="Search..."
          size="sm"
          fontWeight="600"
        ></Input>
      </Box>
      <Box display="flex" alignItems="center">
        <Text width={{ base: "65px", md: "100px", lg: "100px" }}>
          Sort By:
        </Text>
        <Select
          borderColor="gray.500"
          rounded="md"
          border="1px"
          size="sm"
          fontWeight="600"
          width={{ base: "35%", md: "100%", lg: "100%" }}
        >
          <option value="Recent">Recent</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </Box>
    </Box>
  );
}

export default SearchAndSort;
