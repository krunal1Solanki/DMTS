import { Card, CardHeader, CardBody, Heading, Button, Table, Tbody, Tr, Th, Td, Tooltip, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, Divider } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { Transfer, message, Popconfirm } from 'antd';

import axios from 'axios';
import { useToast } from '@chakra-ui/react';
import Loader from "./LOader"



const CreateGroups = () => {


    const [targetKeys, setTargetKeys] = useState([]);
    const [selectedKeys, setSelectedKeys] = useState([]);
    const [groups, setGroups] = useState([]);
    const [sites, setSites] = useState([]);
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [currentGroup, setCurrentGroup] = useState(null);
    const [creatgroupbuttonLOader, setCreateGroupButtonLOader] = useState(false);
    const [getSitesLOader, setGetSitesLOader] = useState(false);
    useEffect(() => {
        getSites();
        getGroups();
    }, []);

    const confirm = (e) => {
        console.log(e);
        message.success('Click on Yes');
    };
    const cancel = (e) => {
        console.log(e);
        message.error('Click on No');
    };
    const getGroups = async () => {

        try {
            const groups = await axios.get('/api/sites/getSiteGroups');
            setGroups(groups.data.message);
        } catch (err) {
            console.log('err', err.message);
        }
    };

    useEffect(() => {
        // Save targetKeys to localStorage whenever it changes
        localStorage.setItem('targetKeys', JSON.stringify(targetKeys));
    }, [targetKeys]);

    const handleCreateGroup = async () => {
        setCreateGroupButtonLOader(true)
        const pumpNames = pumpData.filter((item) => targetKeys.includes(item.key)).map((item) => item.title);

        // Creating the groupName by concatenating the first two letters of pumpNames
        console.log('ininiddcd', targetKeys, pumpNames);
        const groupName = pumpNames.map((name) => name.slice(0, 2)).join('');

        // Logging the groupName
        const siteArray = [];
        for (let i = 0; i < pumpNames.length; i++) {
            siteArray.push({
                siteId: targetKeys[i],
                pumpName: pumpNames[i]
            })
        }

        console.log('FINAALLLL', siteArray)

        const info = await axios.post('/api/sites/createSiteGroup', {
            groupName,
            sites: siteArray,
        });

        // Resetting targetKeys and selectedKeys
        setTargetKeys([]);
        setSelectedKeys([]);
        setCreateGroupButtonLOader(false)

        toast({
            description: 'Group created successfully',
            status: 'success',
            position: 'top-right',
            duration: 10000,
            isClosable: true,
        });

        // Refresh groups after creating a new one
        getGroups();
    };

    const getSites = async () => {
        setGetSitesLOader(true)
        try {
            const response = await axios.get('/api/sites/getAllSites');
            setSites(response.data.message);
            setGetSitesLOader(false)
        } catch (error) {
            console.error('Error fetching sites:', error);
        }
    };

    const pumpData = sites.map((site) => ({
        key: site._id,
        title: site.pumpName,
        description: site.description,
    }));

    const handleDeleteGroup = async (groupId) => {
        try {
            // Call the API to delete the group
            await axios.post(`/api/sites/deleteGroup`, { groupId });

            // Show a toast indicating successful deletion
            toast({
                description: 'Group deleted successfully',
                status: 'success',
                position: 'top-right',
                duration: 10000,
                isClosable: true,
            });

            // Refresh groups after deletion
            getGroups();
        } catch (error) {
            console.error('Error deleting group:', error);
            // Show a toast indicating an error
            toast({
                description: 'Error deleting group',
                status: 'error',
                position: 'top-right',
                duration: 10000,
                isClosable: true,
            });
        } finally {
            onClose()
        }
    };

    const initialTargetKeys = pumpData.filter((item) => Number(item.key) > 10).map((item) => item.key);

    const onChange = (nextTargetKeys, direction, moveKeys) => {
        setTargetKeys(nextTargetKeys);
    };

    const onSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
        setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
    };

    const handleShowSites = (group) => {
        setCurrentGroup(group);
        onOpen();
    };

    return (
        <Card>
            <CardHeader bg="teal.500" borderBottomWidth="1px" borderColor="teal.600" color="white" textAlign="center" padding="4">
                <Heading size="md" textTransform="uppercase">
                    Create Groups
                </Heading>
            </CardHeader>
            <CardBody>
                {getSitesLOader ? (<Loader />) : (
                    <>
                        <Heading mb={5} size="sm" textTransform="uppercase">
                            Create Group
                        </Heading>
                        <Transfer
                            dataSource={pumpData}
                            titles={['Available', 'Groupped']}
                            targetKeys={targetKeys}
                            selectedKeys={selectedKeys}
                            onChange={onChange}
                            onSelectChange={onSelectChange}
                            listStyle={{
                                width: "100%",
                                height: 350,
                            }}
                            render={(item) => item.title}
                            showSearch={{ filter: (inputValue, option) => option.title.toLowerCase().includes(inputValue.toLowerCase()) }}
                        />
                        <Button mt={5} colorScheme="teal" isLoading={creatgroupbuttonLOader} onClick={handleCreateGroup}>
                            Create Group
                        </Button>
                        <Divider mt={7} />

                        <Heading mt={6} size="xs" textTransform="uppercase">
                            Group List
                        </Heading>
                        <Table variant="simple" mt={4}>
                            <thead>
                                <Tr>
                                    <Th>Index</Th>
                                    <Th>GroupName</Th>
                                    <Th>Sites</Th>
                                    <Th>Created At</Th>
                                    <Th>Action</Th>
                                </Tr>
                            </thead>
                            <Tbody>
                                {groups.map((group, index) => (
                                    <Tr key={group._id}>
                                        <Td>{index + 1}</Td>
                                        <Td>{group.groupName}</Td>
                                        <Td>
                                            <Tooltip label={group.sites.join(', ')} placement="right-end">
                                                <span>{`${group.sites.length} sites`}</span>
                                            </Tooltip>
                                        </Td>
                                        <Td>{new Date(group.creationDate).toLocaleString()}</Td>
                                        <Td>
                                            <Button colorScheme="teal" size="sm" onClick={() => handleShowSites(group)}>
                                                Show Sites
                                            </Button>


                                            <Popconfirm
                                                title="Delete the task"
                                                description="Are you sure to delete this task?"
                                                onConfirm={() => handleDeleteGroup(group._id)}
                                                onCancel={cancel}
                                                okText="Delete"
                                                cancelText="No"
                                            >
                                                <Button size="sm" ml={2} colorScheme="red" >Delete Group</Button>
                                            </Popconfirm>
                                        </Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>

                        {currentGroup && (
                            <Modal isOpen={isOpen} onClose={onClose}>
                                <ModalOverlay />
                                <ModalContent>
                                    <ModalHeader>{`Sites for Group: ${currentGroup.groupName}`}</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody>
                                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                                            {currentGroup.sites.map((site, index) => (
                                                <li key={site.siteId}>{`${index + 1}. ${site.pumpName}`}</li>
                                            ))}
                                        </ul>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button colorScheme="teal" onClick={onClose}>
                                            Close
                                        </Button>
                                    </ModalFooter>
                                </ModalContent>
                            </Modal>
                        )}
                    </>
                )}
            </CardBody>
        </Card>
    );
};

export default CreateGroups;