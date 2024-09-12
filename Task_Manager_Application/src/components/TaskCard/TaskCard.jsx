import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Text,
  Box,
  Button,
} from "@chakra-ui/react";

const TaskCard = ({ title, tasks }) => {
  return (
    <Card>
      <CardHeader bgColor="blue.400" color="white" rounded="sm">
        <Heading size="md">{title}</Heading>
      </CardHeader>
      <CardBody>
        {tasks.map((task) => (
          <Box
            key={task.id}
            p={3}
            borderRadius="md"
            mb={2}
            bgColor="aqua"
            display="flex"
            flexDirection="column"
            gap="20px"
          >
            <Box>
              <Heading size="sm">{task.title}</Heading>
              <Text>{task.description}</Text>
            </Box>

            <Box display="flex" flexDirection="column" gap="10px">
              <Text color="gray" fontSize="xs">
                Created at: 01/09/2024, 05:30:00
              </Text>

              <Box display="flex" justifyContent="end" gap="10px">
                <Button
                  bgColor="red"
                  color="white"
                  fontSize="xs"
                  h="auto"
                  minWidth="auto"
                  px="10px"
                  py="5px"
                >
                  Delete
                </Button>
                <Button
                  bgColor="skyBlue"
                  color="white"
                  fontSize="xs"
                  h="auto"
                  minWidth="auto"
                  px="10px"
                  py="5px"
                >
                  Edit
                </Button>
                <Button
                  bgColor="blue.400"
                  color="white"
                  fontSize="xs"
                  h="auto"
                  minWidth="auto"
                  px="10px"
                  py="5px"
                >
                  View Details
                </Button>
              </Box>
            </Box>
          </Box>
        ))}
      </CardBody>
    </Card>
  );
};

export default TaskCard;
