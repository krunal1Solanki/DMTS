"use client"
import React, { useState } from 'react';
import { FloatButton } from 'antd';
import { CustomerServiceOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Box, useToast } from '@chakra-ui/react';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, VStack, Select, Textarea } from '@chakra-ui/react';
import { QuestionIcon, CheckCircleIcon, WarningIcon } from '@chakra-ui/icons';
import axios from 'axios';

const Floater = () => {
  const toast = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [queryType, setQueryType] = useState('');
  const [queryDescription, setQueryDescription] = useState('');

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => {
    setIsOpen(false);
    // Reset form fields on modal close
    setQueryType('');
    setQueryDescription('');
  };

  const handleQuerySubmit = async () => {
    try {
      const info = await axios.post('/api/setting/raiseQuery', { queryType, queryDescription });
      console.log("INFO", info);
      toast({
        title: "Query Submitted",
        description: "Your query has been raised successfully",
        duration: 2000,
        position: 'top-right',
        status: 'success',
        render: ({ onClose }) => (
          <Box onClick={onClose} p={3} color="white" bg="green.500" borderRadius="md" cursor="pointer">
            <CheckCircleIcon mr={2} /> Query submitted successfully!
          </Box>
        ),
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        duration: 2000,
        status: 'error',
        render: ({ onClose }) => (
          <Box onClick={onClose} p={3} color="white" bg="red.500" borderRadius="md" cursor="pointer">
            <WarningIcon mr={2} /> Error submitting query.
          </Box>
        ),
      });
    }
    handleCloseModal();
  };

  return (
    <Box>
      <FloatButton.Group
        trigger="hover"
        type='default'
        style={{
          right: 20,
          bottom: 30,
        }}
        icon={<CustomerServiceOutlined />}
      >
        <FloatButton onClick={handleOpenModal} icon={<QuestionCircleOutlined />} />
      </FloatButton.Group>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent borderRadius="md">
          <ModalHeader textAlign="center" borderBottom="1px" pb={2}>
            Raise Query
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <Select placeholder="Select Query Type" value={queryType} onChange={(e) => setQueryType(e.target.value)}>
                <option value="A">Type A</option>
                <option value="B">Type B</option>
                <option value="C">Type C</option>
              </Select>
              <Textarea placeholder="Query Description" value={queryDescription} onChange={(e) => setQueryDescription(e.target.value)} />
              <Button colorScheme="teal" onClick={handleQuerySubmit}>
                Submit Query
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Floater;
