"use client";
import React, { useEffect, useState } from 'react';
import {
    Table,
    Card,
    CardBody,
    CardHeader,
    Heading,
    Flex,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';


const ImeiApproval = () => {
    // const dispatch = useDispatch();

    // const getUsersFun = async () => {
    //     const response = await axios.get('/api/user/getUserWithGroups');
    //     dispatch(getUsers(response.data.message))
    // }
    const [users, setUsers] = useState(useSelector((state) => state.userReducer.value.users) || []);

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
                <Flex >
                    <Heading size="md" textTransform="uppercase">
                        {'IMEI Approval'}
                    </Heading>
                </Flex>
            </CardHeader>
            <CardBody>
                <Table variant="striped" colorScheme="teal">
                 </Table>
            </CardBody>
        </Card>
    );
};

export default ImeiApproval ;
