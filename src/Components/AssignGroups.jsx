"use client"
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, Heading, Button } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import { Select, Modal } from 'antd';
import { DeleteFilled } from '@ant-design/icons';
import axios from 'axios';
import { Table, Space } from 'antd';
import Loader from "./LOader"
const { Option } = Select;

const AssignGroups = () => {
  const toast = useToast();
  const [users, setUsers] = useState([]);
  const [groups, setGroups] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedGroups, setSelectedGroups] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteConfirmationVisible, setDeleteConfirmationVisible] = useState(false);
  const [deletingGroup, setDeletingGroup] = useState(null);
  const [Loaders, setLoaders] = useState(false);

  useEffect(() => {
    getGroups();
  }, []);

  const getGroups = async () => {
    setLoaders(true)
    try {
      const groupsResponse = await axios.get('/api/sites/getSiteGroups');
      setGroups(groupsResponse.data.message);
      setLoaders(true)
    } catch (err) {
      console.log('err', err.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, [currentPage]);

  const getUsers = async () => {
    setLoaders(true)
    try {

      const response = await axios.get('/api/user/getUserWithGroups', {
        params: {
          page: currentPage,
        },
      });
      setUsers(response.data.message);
      setLoaders(false)
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleAssignSite = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
    setSelectedGroups({});
  };

  const assignGroup = async (record) => {

    try {
      const currGroups = selectedGroups[record._id] || [];
      const data = currGroups.map((groupId) => ({
        groupId,
        groupName: groups.find((item) => item._id === groupId)?.groupName || '',
      }));

      const payload = {
        userId: record._id,
        groups: data,
      };

      const info = await axios.post('/api/sites/assignGroup', payload);
      if (info.data.message == 'Some Groups Are Already Assigned')
        toast({
          title: 'Whoops!',
          position: 'top-right',
          description: 'Some groups are already assigned to the user!',
          status: 'warning',
          duration: '3000',
        });
      else
        toast({
          title: 'Success!',
          position: 'top-right',
          description: 'Groups have been assigned successfully',
          status: 'success',
          duration: '3000',
        });

      setSelectedGroups((prevSelectedGroups) => {
        const updatedSelectedGroups = { ...prevSelectedGroups };
        updatedSelectedGroups[record._id] = [];
        return updatedSelectedGroups;
      });

      console.log('INFOO', info);
    } catch (error) {
      toast({
        title: 'Error occurred',
        description: `${error.message}`,
        position: 'top-right',
        status: 'danger',
        position: 'top-right',
        duration: '3000',
      });
      console.log('ERROR', error.message);
    }
    getUsers();
  };

  const deleteGroup = async (userId, groupId) => {
    try {
      const info = await axios.post('/api/sites/unassignGroup', { userId, groupId });
      toast({
        title: 'Success!',
        description: 'Group has been deleted successfully',
        position: 'top-right',
        status: 'success',
        duration: '3000',
      });
      getUsers();
    } catch (error) {
      toast({
        title: 'Error occurred',
        position: 'top-right',
        description: `${error.message}`,
        status: 'danger',
        position: 'top-right',
        duration: '3000',
      });
      console.log('ERROR', error.message);
    }
  };

  const showDeleteConfirmation = (userId, groupId) => {
    setDeletingGroup({ userId, groupId });
    setDeleteConfirmationVisible(true);
  };

  const handleDeleteConfirmation = async () => {
    if (deletingGroup) {
      const { userId, groupId } = deletingGroup;
      await deleteGroup(userId, groupId);
      setDeletingGroup(null);
      setDeleteConfirmationVisible(false);
    }
  };

  const handleCancelDeleteConfirmation = () => {
    setDeletingGroup(null);
    setDeleteConfirmationVisible(false);
  };

  const columns = [
    {
      title: 'No',
      dataIndex: 'index',
      key: 'index',
      render: (text, record, index) => (currentPage - 1) * 10 + index + 1,
    },
    {
      title: 'Operator Name',
      dataIndex: 'OperatorName',
      key: 'OperatorName',
    },
    {
      title: 'Assigned Groups',
      dataIndex: 'assignedGroups',
      key: 'assignedGroups',
      render: (text, record) => (
        <>
          {record.assignedGroups.map((group) => (
            <span key={group._id} style={{ marginRight: '8px' }}>
              <Button
                size="sm"
                variant="solid"
                colorScheme="teal"
                onClick={() => showDeleteConfirmation(record._id, group.groupId)}
              >
                {group.groupName}
                <DeleteFilled />
              </Button>
            </span>
          ))}
        </>
      ),
    },
    {
      title: 'Assign Group',
      key: 'assignGroup',
      render: (text, record) => (
        <Space size="middle">
          <Select
            mode="multiple"
            style={{ width: '150px' }}
            placeholder="Select groups"
            value={selectedGroups[record._id]}
            onChange={(selectedValues) => setSelectedGroups({ ...selectedGroups, [record._id]: selectedValues })}
          >
            {groups.map((group) => (
              <Option key={group._id} value={group._id}>
                {group.groupName}
              </Option>
            ))}
          </Select>

          <Button onClick={() => assignGroup(record)}>Go</Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Modal
        title="Confirm Deletion"
        visible={deleteConfirmationVisible}
        onOk={handleDeleteConfirmation}
        onCancel={handleCancelDeleteConfirmation}
        okText="Yes"
        cancelText="No"
      >
        Are you sure you want to delete this group?
      </Modal>

      <Card>
        <CardHeader bg="teal.500" borderBottomWidth="1px" borderColor="teal.600" color="white" textAlign="center" padding="4">
          <Heading size="md" textTransform="uppercase">
            Assign Groups
          </Heading>
        </CardHeader>
        {Loaders ? (<Loader />) : (
        <CardBody>
          <Table
            dataSource={users}
            columns={columns}
            pagination={{
              pageSize: 10,
              current: currentPage,
              onChange: (page) => setCurrentPage(page),
            }}
          />
        </CardBody>
        )}
      </Card>
    </>
  );
};

export default AssignGroups ;
