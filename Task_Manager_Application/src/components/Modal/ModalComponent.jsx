import {
    Button,
    Input,
    FormControl,
    FormLabel,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from "@chakra-ui/react";
  import React from "react";
  
  function ModalComponent({ isOpen, onClose, initialRef, finalRef }) {
    return (
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
    );
  }
  
  export default ModalComponent;
  