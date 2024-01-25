"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Select,
  Badge,
  IconButton,
  Card,
  Text,
  CardBody,
  CardHeader,
  Heading,
  Button,
  useToast,
  Flex,
  Box,
} from '@chakra-ui/react';

import { BsEye, BsDownload, BsX } from 'react-icons/bs';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react';

const getStatusBadge = (status) => {
  switch (status) {
    case 'pending':
      return <Badge colorScheme="orange">Pending</Badge>;
    case 'resolved':
      return <Badge colorScheme="green">Resolved</Badge>;
    case 'hold':
      return <Badge colorScheme="red">Hold</Badge>;
    default:
      return null;
  }
};
const QueryDisplay = () => {
  const [queries, setQueries] = useState([]);
  const [filteredQueries, setFilteredQueries] = useState([]);
  const [filterStatus, setFilterStatus] = useState('all');
  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const [loader, setLoader] = useState(false);
  const [expandedQuery, setExpandedQuery] = useState(null); // New state for expanded query
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const toast = useToast();

  useEffect(() => {
    getAllQueries();
  }, []);

  useEffect(() => {
    if (filterStatus === 'all') {
      setFilteredQueries(queries);
    } else {
      const filtered = queries.filter((query) => query.queryStatus === filterStatus);
      setFilteredQueries(filtered);
    }
  }, [queries, filterStatus]);

  const getAllQueries = async () => {
    setLoader(true);
    try {
      const response = await axios.get('/api/setting/getQuery');
      const modifiedQueries = response.data.info.map((query) => ({
        ...query,
        isModified: false,
      }));
      setQueries(modifiedQueries);
      setLoader(false);
    } catch (error) {
      console.error('Error fetching queries:', error.message);
      toast({
        title: 'Error',
        description: 'An error occurred while fetching queries.',
        status: 'error',
        position: 'top-right',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleSelectChange = (index, newStatus) => {
    const updatedQueries = [...queries];
    updatedQueries[index].queryStatus = newStatus;
    updatedQueries[index].isModified = true;
    setQueries(updatedQueries);
    setUnsavedChanges(true);
  };

  const handleQueryStatusSubmit = async (id, newStatus) => {
    try {
      await axios.post('/api/setting/updateQueryStatus', {
        _id: id,
        queryStatus: newStatus,
      });

      toast({
        title: 'Submit Successful',
        description: `Query status updated successfully for query with ID ${id}`,
        status: 'success',
        position: 'top-right',
        duration: 3000,
        isClosable: true,
      });

      const updatedQueries = [...queries];
      updatedQueries.find((query) => query._id === id).isModified = false;
      setQueries(updatedQueries);
      setUnsavedChanges(false);
    } catch (error) {
      console.error('Error updating query status:', error);

      toast({
        title: 'Submit Error',
        description: `An error occurred while updating query status for query with ID ${id}`,
        status: 'error',
        position: 'top-right',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleFilterChange = (e) => {
    setFilterStatus(e.target.value);
  };

  // Function to toggle the expanded state for a query and open modal
  const toggleExpandedQuery = (query) => {
    setExpandedQuery(query);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to download the image
  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = `data:image/png;base64,${expandedQuery.attachments}`;
    link.download = `query_${expandedQuery._id}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Card>
      <CardHeader
        bg={'teal.500'}
        borderBottomWidth="1px"
        borderColor={unsavedChanges ? 'red' : 'teal.600'}
        color="white"
        textAlign="center"
        padding="4"
      >
        <Heading size="md" textTransform="uppercase">
          {'All Queries'}
        </Heading>
      </CardHeader>
      <CardBody>
        <Flex justifyContent="flex-end">
          <Select w={'200px'} value={filterStatus} onChange={handleFilterChange} mb={4}>
            <option value="all">Show All</option>
            <option value="pending">Pending</option>
            <option value="resolved">Resolved</option>
            <option value="hold">Hold</option>
          </Select>
        </Flex>
        <>
          <Table variant="simple" overflowX={{ base: 'auto', md: 'hidden' }}>
            <Thead>
              <Tr>
                <Th>No</Th>
                <Th>Query Subject</Th>
                <Th>Query Description</Th>
                <Th> Site</Th>
                <Th>Assigned User</Th>
                <Th>Main User</Th>
                <Th>Priority</Th>
                <Th>Image</Th>
                <Th>Status</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filteredQueries.map((query, index) => (
                <Tr key={query._id}>
                  <Td>{index + 1}</Td>
                  <Td>
                    <Text isTruncated>{query.querySubject}</Text>
                  </Td>
                  <Td>
                    <Text isTruncated>{query.queryDescription}</Text>
                  </Td>
                  <Td>{query.selectedSite}</Td>
                  <Td>{query.selectedUser}</Td>
                  <Td>{query.responsibleUser.name}</Td>
                  <Td>{query.selectedPriority}</Td>
                  <Td>
                    <IconButton
                      icon={<BsEye />}
                      onClick={() => toggleExpandedQuery(query)}
                      variant="ghost"
                      size="sm"
                      aria-label="Toggle Image"
                    />
                  </Td>
                  <Td>
                    <Select
                      value={query.queryStatus}
                      onChange={(e) => handleSelectChange(index, e.target.value)}
                    >
                      <option value="pending">Pending</option>
                      <option value="resolved">Resolved</option>
                      <option value="hold">Hold</option>
                    </Select>
                  </Td>
                  <Td display={'flex'} alignItems={'center'} gap={'7px'}>
                    <Button
                      colorScheme='teal'
                      onClick={() => handleQueryStatusSubmit(query._id, query.queryStatus)}
                    >
                      Submit
                    </Button>
                    {query.isModified && (
                      <Box bg='red' h={'7px'} w={'7px'} borderRadius={'100%'}></Box>
                    )}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </>
        {/* Modal for displaying the image */}
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{`Attachment for query ${expandedQuery?.querySubject}`}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {expandedQuery?.attachments && (
                <img
                  src={`data:image/png;base64,${expandedQuery.attachments}`}
                  alt={`Attachment for query ${expandedQuery._id}`}
                  style={{ width: '100%', maxHeight: '70vh', objectFit: 'contain' }}
                />
              )}
            </ModalBody>
            {/* Action buttons in the modal */}
            <Flex justifyContent="flex-end" p={4}>
              <Button leftIcon={<BsDownload />} colorScheme="teal" onClick={downloadImage}>
                Download
              </Button>
              <Button leftIcon={<BsX />} ml={2} onClick={closeModal}>
                Close
              </Button>
            </Flex>
          </ModalContent>
        </Modal>
      </CardBody>
    </Card>
  );
};

export default QueryDisplay;