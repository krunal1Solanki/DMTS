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
  CardBody,
  CardHeader,
  Heading,
  Button,
  useToast,
  Flex,
  Box,
} from '@chakra-ui/react';
import Loader from './LOader';

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
  const [filterStatus, setFilterStatus] = useState('all'); // Default to show all queries
  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const [LOader, setLOader] = useState(false);
  const toast = useToast();

  useEffect(() => {
    getAllQueries();
  }, []);

  useEffect(() => {
    // Filter queries based on selected status
    if (filterStatus === 'all') {
      setFilteredQueries(queries);
    } else {
      const filtered = queries.filter((query) => query.queryStatus === filterStatus);
      setFilteredQueries(filtered);
    }
  }, [queries, filterStatus]);

  const getAllQueries = async () => {
    setLOader(true)
    try {
      const response = await axios.get('/api/setting/getQuery');
      // Add the isModified property to each query object
      const modifiedQueries = response.data.message.map(query => ({ ...query, isModified: false }));
      setQueries(modifiedQueries);
      setLOader(false)
    } catch (error) {
      console.error('Error fetching queries:', error);
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
    updatedQueries[index].isModified = true; // Set isModified to true when changes are made
    setQueries(updatedQueries);
    setUnsavedChanges(true); // Set unsavedChanges to true when changes are made
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
      updatedQueries.find(query => query._id === id).isModified = false; // Reset isModified to false after submitting
      setQueries(updatedQueries);
      setUnsavedChanges(false); // Reset unsavedChanges to false after submitting
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

  return (
    <Card>
      <CardHeader
        bg={'teal.500'} // Change background color based on unsavedChanges
        borderBottomWidth="1px"
        borderColor={'teal.600'} // Change border color based on unsavedChanges
        color="white"
        textAlign="center"
        padding="4"
      >
        <Heading size="md" textTransform="uppercase">
          {'All Queries'}
        </Heading>
      </CardHeader>
      <CardBody>
        <Flex justifyContent='flex-end'>
          <Select w={'200px'} value={filterStatus} onChange={handleFilterChange} mb={4}>
            <option value="all">Show All</option>
            <option value="pending">Pending</option>
            <option value="resolved">Resolved</option>
            <option value="hold">Hold</option>
          </Select>
        </Flex>
        {LOader ? (<Loader/>) : (<>
          <Table variant="simple">
          <Thead>
            <Tr>
              <Th>No</Th>
              <Th>Query Type</Th>
              <Th>Description</Th>
              <Th>Status</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredQueries.map((query, index) => (
              <Tr key={query._id} >
                <Td>{index + 1}</Td>
                <Td>{query.queryType}</Td>
                <Td>{query.queryDescription}</Td>
                <Td>{getStatusBadge(query.queryStatus)}</Td>

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
                  {query.isModified && <Box bg='red' h={'7px'} w={'7px'} borderRadius={'100%'}>
                  </Box>}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        </>)}
      </CardBody>
    </Card>
  );
};

export default QueryDisplay;
