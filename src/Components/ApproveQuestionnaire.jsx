"use client";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Box, Text, VStack, HStack, Divider, Image } from '@chakra-ui/react';
import { StarIcon, CheckIcon, CloseIcon } from '@chakra-ui/icons';
import { Checkbox, Input, InputGroup, InputLeftElement, Select } from '@chakra-ui/react'; // Add Chakra UI components
import { AiOutlineSearch } from 'react-icons/ai'; // Assuming you have the Ant Design icons

const ApproveQuestionnaire = () => {
    const [questionnaires, setQuestionnaires] = useState([]);
    const [filterOption, setFilterOption] = useState('all'); // 'all' is the default value
    const [userNameSearch, setUserNameSearch] = useState('');

    useEffect(() => {
        getQuestionnaires();
    }, []);

    const getQuestionnaires = async () => {
        try {
            const response = await axios.get("/api/setting/getAnsweredQuestionnaire");
            console.log("RESOOOO", response.data.message)
            setQuestionnaires(response.data.message);
        } catch (error) {
            console.error("Error fetching questionnaires:", error);
        }
    };

    const handleFilterChange = (e) => {
        setFilterOption(e.target.value);
    };

    const handleUserNameSearch = (e) => {
        setUserNameSearch(e.target.value);
    };

    const renderCard = (questionnaire) => {
        const isApproved = questionnaire.isApproved || filterOption === 'all';

        if (
            (!isApproved) ||
            (userNameSearch && !questionnaire.userName.toLowerCase().includes(userNameSearch.toLowerCase()))
        ) {
            return null;
        }

        return (
            <Box
                key={questionnaire._id}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                p={4}
                mb={8}
                boxShadow="lg"
                bg="white"
            >
                <Text fontSize="xl" fontWeight="bold" mb={2}>
                    {questionnaire.userName}
                </Text>
                <Divider />
                <Text fontSize="xl" fontWeight="bold" mb={2}>
                    {questionnaire.questionnaireName}
                </Text>
                <Text fontSize="sm" color="gray.500" mb={4}>
                    Created on {new Date(questionnaire.creationDate).toLocaleString()}
                </Text>
                <Text>
                        {questionnaire.images.map((image) => (
                      <>
                      <Text mb={4}>
                        {image.imageName} : 
                      </Text>
                      <Image
                                key={image._id}
                                src={`data:image/png;base64,${image.answer}`} // Assuming 'answer' contains the image URL
                                alt={image.imageName}
                                mb={4}
                                borderRadius="md"
                                boxShadow="md"
                                style={{ maxHeight: '200px', maxWidth: '100%' }} // Set maximum height and maximum width
                            />
                      </>
                        ))}
                    </Text>

                <VStack align="start" spacing={4}>
                    {questionnaire.questions.map((question) => (
                        <Box key={question._id} w="100%">
                            {question.answerType === 'text' && (
                                <>
                                    <Text fontSize="md">{question.questionText}</Text>
                                    <Text fontSize="sm" mt={1}>{question.answer}</Text>
                                </>
                            )}
                            {question.answerType === 'rating' && (
                                <>
                                    <Text fontSize="md">{question.questionText}</Text>
                                    <HStack mt={1} spacing={2}>
                                        {[...Array(Number(question.answer))].map((_, index) => (
                                            <StarIcon key={index} color="yellow.500" boxSize={5} />
                                        ))}
                                    </HStack>
                                </>
                            )}
                            {question.answerType === 'yesno' && (
                                <>
                                    <Text fontSize="md">{question.questionText}</Text>
                                    <HStack mt={1} spacing={2}>
                                        {question.answer === 'YES' ? (
                                            <CheckIcon color="green.500" boxSize={6} />
                                        ) : (
                                            <CloseIcon color="red.500" boxSize={6} />
                                        )}
                                    </HStack>
                                </>
                            )}
                        </Box>
                    ))}
                </VStack>
            </Box>
        );
    };

    return (
        <Box>
            <Text fontSize="2xl" fontWeight="bold" mb={4}>
                Approve Questionnaires
            </Text>

            <HStack mb={4} spacing={4} align="center">
                <Select
                    value={filterOption}
                    onChange={handleFilterChange}
                >
                    <option value="all">All</option>
                    <option value="approved">Show only approved</option>
                </Select>

                <InputGroup>
                    <InputLeftElement pointerEvents="none">
                        <AiOutlineSearch color="gray.300" />
                    </InputLeftElement>
                    <Input
                        type="text"
                        placeholder="Search by user name"
                        value={userNameSearch}
                        onChange={handleUserNameSearch}
                    />
                </InputGroup>
            </HStack>

            {questionnaires.map((questionnaire) => renderCard(questionnaire))}
        </Box>
    );
};

export default ApproveQuestionnaire;
