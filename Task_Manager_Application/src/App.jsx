import React, { useEffect, useState } from "react";
import { Box, Button, SimpleGrid, useDisclosure } from "@chakra-ui/react";
import ModalComponent from "./components/Modal/ModalComponent";
import TaskCard from "./components/TaskCard/TaskCard";
import SearchAndSort from "./components/SearchAndSort/SearchAndSort";
import axios from "axios";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [tasks, setTasks] = useState([]);

  async function fetchTask() {
    try {
      const res = await axios.get("http://localhost:5000/tasks");
      setTasks(res.data);
    } catch (error) {
      console.log(`Error occurred while fetching task ${error}`);
    }
  }

  useEffect(() => {
    fetchTask();
  }, []);

  // Filter tasks by status
  const todoTasks = tasks.filter((task) => task.status === "todo");
  const inProgressTasks = tasks.filter((task) => task.status === "inProgress");
  const doneTasks = tasks.filter((task) => task.status === "done");

  return (
    <div style={{ padding: "10px" }}>
      <Box
        px={5}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexDirection="column"
        gap="20px"
      >
        <Box display="flex" alignItems="start" width={{ base: "100%", md: "70%", lg: "100%" }}>
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

        <SearchAndSort />

        <Box width="100%" height="100vh">
          <SimpleGrid spacing={4} columns={{ base: 1, md: 2, lg: 3 }}>
            <TaskCard title="TODO" tasks={todoTasks} />
            <TaskCard title="IN PROGRESS" tasks={inProgressTasks} />
            <TaskCard title="DONE" tasks={doneTasks} />
          </SimpleGrid>
        </Box>
      </Box>

      <ModalComponent
        isOpen={isOpen}
        onClose={onClose}
        initialRef={initialRef}
        finalRef={finalRef}
      />
    </div>
  );
}

export { App };
