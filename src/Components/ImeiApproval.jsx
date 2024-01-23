"use client";
import React, { useEffect, useState } from 'react';
import {
    Table,
    Tbody,
    Tr,
    Td,
    Switch,
    Th,
    Thead,
    Card,
    CardBody,
    CardHeader,
    Heading,
    Flex,
    Button,
    useToast, // Import Chakra UI Button
} from '@chakra-ui/react';
import axios from 'axios';

const ImeiApproval = () => {
    const [users, setUsers] = useState([]);
    const toast = useToast();

    useEffect(() => {
        getUsersFun();
    }, []);

    const getUsersFun = async () => {
        const response = await axios.get('/api/user/getUserWithGroups');
        setUsers(response.data.message.filter((item) => typeof item.imeiPMSC == 'string' && !item.imeiPMSCApproved))
    } 

    const handleSwitchChange = (index) => {
        setUsers((prevUsers) => {
            const updatedUsers = [...prevUsers];
            const updatedUser = {
                ...updatedUsers[index],
                approved: !updatedUsers[index].approved,
            };
            updatedUsers[index] = updatedUser;
            return updatedUsers;
        });
    };
    

    const handleUpdateClick = async (userId) => {
        const approve = users.find((user) => user._id === userId).approved;
        console.log(userId, approve);
        const body = {
            _id : userId,
            imeiPMSCApproved : approve
        }
        try {
            await axios.post('/api/user/approveImei', body);
            toast({
                title : "IMEI Status",
                description : `IMEI has been ${approve ? 'approved' : 'disapproved'} succesfully`,
                duration : "3000"
            })
            getUsersFun()

        } catch (error) {
        }

    };

    return (
        <Card>
            <CardHeader
                bg={'teal.500'}
                borderBottomWidth="1px"
                borderColor={'teal.600'}
                color="white"
                textAlign="center"
                padding="4"
            >
                <Flex>
                    <Heading size="md" textTransform="uppercase">
                        {'IMEI Approval'}
                    </Heading>
                </Flex>
            </CardHeader>
            <CardBody>
            <Table variant="striped" colorScheme="teal">
                    <Thead>
                        <Tr>
                            <Th>Employee ID</Th>
                            <Th>Operator Name</Th>
                            <Th>IMEI</Th>
                            <Th>Approval Status</Th>
                            <Th>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {users.map((user, index) => (
                            <Tr key={index}>
                                <Td>{user.pmscUserData.employeeId}</Td>
                                <Td>{user.OperatorName}</Td>
                                <Td>{user.imeiPMSC}</Td>
                                <Td>
                                    <Switch
                                        isChecked={user.approved || false}
                                        onChange={() => handleSwitchChange(index)}
                                    />
                                </Td>
                                <Td>
                                    <Button onClick={() => handleUpdateClick(user._id)}>
                                        Update
                                    </Button>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </CardBody>
        </Card>
    );
};

export default ImeiApproval;
