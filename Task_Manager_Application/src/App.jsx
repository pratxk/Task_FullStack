import {
  Box,
  Button,
  Input,
  Select,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  SimpleGrid,
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import React from "react";
import "./App.css";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <div style={{padding: "10px"}}>
      <Box
        px={5}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexDirection="column"
        gap="20px"
      >
        <Box
          display="flex"
          alignItems="start"
          width={{ base: "100%", md: "70%", lg: "100%" }}
        >
          <Button
            onClick={onOpen}
            bgColor="blue.400"
            color="white"
            px={14}
            width={{ base: "100%", md: "100%", lg: "20%" }}
          >
            Add Task
          </Button>
        </Box>
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

        <Box width="100%" height="100vh">
          <SimpleGrid spacing={4} columns={{ base: 1, md: 2, lg: 3 }}>
            <Card>
              <CardHeader
                bgColor="blue.400"
                color="white"
                m={3}
                rounded="sm"
                h="50px"
                display="flex"
                alignItems="center"
              >
                <Heading size="md">TODO</Heading>
              </CardHeader>
              <CardBody>
                <Text>
                  View a summary of all your customers over the last month.
                </Text>
              </CardBody>
              <CardFooter>
                <Button>View here</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader
                bgColor="blue.400"
                color="white"
                m={3}
                rounded="sm"
                h="50px"
                display="flex"
                alignItems="center"
              >
                <Heading size="md">IN PROGRESS</Heading>
              </CardHeader>
              <CardBody>
                <Text>
                  View a summary of all your customers over the last month.
                </Text>
              </CardBody>
              <CardFooter>
                <Button>View here</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader
                bgColor="blue.400"
                color="white"
                m={3}
                rounded="sm"
                h="50px"
                display="flex"
                alignItems="center"
              >
                <Heading size="md">DONE</Heading>
              </CardHeader>
              <CardBody>
                <Text>
                  View a summary of all your customers over the last month.
                </Text>
              </CardBody>
              <CardFooter>
                <Button>View here</Button>
              </CardFooter>
            </Card>
          </SimpleGrid>
        </Box>
      </Box>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Task Title</FormLabel>
              <Input ref={initialRef} placeholder="Task Title" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Task Description</FormLabel>
              <Input placeholder="Task Description" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export { App };
