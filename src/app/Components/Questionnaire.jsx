"use client";
import React, { useState } from 'react';
import {
  Box,
  Input,
  FormControl,
  Divider,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormLabel,
  Select,
  Button,
  VStack,
  Heading,
  Flex,
  // Import Flex for layout
  Switch,
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import QuestionnaireDisplay from '../Components/QuestionnaireDisplay';
import axios from 'axios';
import Loader from './LOader';

const Questionnaire = () => {
  const toast = useToast();
  const [questionnaire, setQuestionnaire] = useState({
    questionnaireName: '',
    questions: [{ questionText: '', answerType: 'rating' }],
    images: [{ imageName: '' }],
  });
  const [viewMode, setViewMode] = useState(false); // State to track the mode
  const [Loaders, setLOaders] = useState(false);
  const [type, setType] = useState('ONM');

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...questionnaire.questions];
    updatedQuestions[index][field] = value;
    setQuestionnaire({ ...questionnaire, questions: updatedQuestions });
  };
  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleImageChange = (index, field, value) => {
    const updatedImages = [...questionnaire.images];
    updatedImages[index][field] = value;
    setQuestionnaire({ ...questionnaire, images: updatedImages });
  };

  const addQuestion = () => {
    setQuestionnaire({
      ...questionnaire,
      questions: [
        ...questionnaire.questions,
        { questionText: '', answerType: 'rating' },
      ],
    });
  };

  const removeQuestion = (index) => {
    const updatedQuestions = [...questionnaire.questions];
    updatedQuestions.splice(index, 1);
    setQuestionnaire({ ...questionnaire, questions: updatedQuestions });
  };

  const addQuestionnaire = async () => {
    setLOaders(true)
    try {
      questionnaire.type = type;
      const response = await axios.post(
        '/api/setting/addQuestionnaire',
        questionnaire
      );

      // Assuming the API returns the saved questionnaire
      const savedQuestionnaire = response.data;

      setQuestionnaire({
        questionnaireName: '',
        questions: [{ questionText: '', answerType: 'rating' }],
        images: [],
      });

      toast({
        description: 'Questionnaire added successfully',
        status: 'success',
        position: 'top-right',
        duration: 10000,
        isClosable: true,
      });

      console.log('Saved Questionnaire:', savedQuestionnaire);
      setLOaders(false)
    } catch (error) {
      console.error('Error adding questionnaire:', error);
    }
  };

  const addImage = () => {
    setQuestionnaire({
      ...questionnaire,
      images: [...questionnaire.images, { imageName: '' }],
    });
  };

  const removeImage = (index) => {
    const updatedImages = [...questionnaire.images];
    updatedImages.splice(index, 1);
    setQuestionnaire({ ...questionnaire, images: updatedImages });
  };

  return (
    <Card>
      <CardHeader
        bg="teal"
        borderBottomWidth="1px"
        borderColor="teal.600"
        color="white"
        textAlign="center"
        padding="4"
      >
        <Flex align="center" gap='20px'>
          <Heading size="md" textTransform="uppercase">
            {viewMode ? 'View Questionnaire' : 'Add Questionnaire'}
          </Heading>
          <Switch
            colorScheme="teal"
            isChecked={viewMode}
            onChange={() => setViewMode(!viewMode)}
          >
          </Switch>
        </Flex>
      </CardHeader>
      <CardBody>
        {console.log('XXXX', questionnaire)}

        {!viewMode && (
          <>
            {/* Add Questionnaire Form */}
            <Flex gap={'10px'}>
              <FormControl mb={4} >
                <FormLabel>Select Type:</FormLabel>
                <Select value={type} onChange={handleTypeChange}>
                  <option value="ONM">ONM</option>
                  <option value="Survey">Survey</option>
                </Select>
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>{type} Name:</FormLabel>
                <Input
                  type="text"
                  value={questionnaire.questionnaireName}
                  onChange={(e) =>
                    setQuestionnaire({
                      ...questionnaire,
                      questionnaireName: e.target.value,
                    })
                  }
                />
              </FormControl>
            </Flex>

            <Flex justify="space-between">
              {/* Questions */}
              <VStack spacing={4} w="48%">
                <Heading size="md">Questions</Heading>
                {questionnaire.questions.map((question, index) => (
                  <Box key={index} borderWidth="1px" w="100%" p={4} borderRadius="lg">
                    <FormControl mb={2}>
                      <FormLabel>Answer Type:</FormLabel>
                      <Select
                        required
                        value={question.answerType}
                        onChange={(e) =>
                          handleQuestionChange(index, 'answerType', e.target.value)
                        }
                      >
                        <option value="rating">Rating</option>
                        <option value="yesno">Yes/No</option>
                        <option value="text">Text</option>
                      </Select>
                    </FormControl>
                    <FormLabel>Question Text:</FormLabel>
                    <Input
                      type="text"
                      required
                      value={question.questionText}
                      onChange={(e) =>
                        handleQuestionChange(index, 'questionText', e.target.value)
                      }
                    />
                    <Button onClick={() => removeQuestion(index)} colorScheme="red" mt={4}>
                      Remove Question
                    </Button>
                  </Box>
                ))}
              </VStack>

              {/* Images */}
              <VStack spacing={4} w="48%">
                <Heading size="md">Images</Heading>
                {questionnaire.images.map((image, index) => (
                  <Box key={index} borderWidth="1px" w="100%" p={4} borderRadius="md">
                    <FormControl mb={2}>
                      <FormLabel>Image Name:</FormLabel>
                      <Input
                        type="text"
                        value={image.imageName}
                        onChange={(e) =>
                          handleImageChange(index, 'imageName', e.target.value)
                        }
                      />
                    </FormControl>
                    {/* You can add an input for uploading images here */}
                    <Button onClick={() => removeImage(index)} colorScheme="red" mt={4}>
                      Remove Image
                    </Button>
                  </Box>
                ))}
              </VStack>
            </Flex>

            <Divider mt={4} />

            <VStack spacing={4} mt={8}>
              <div
                style={{
                  marginTop: '20px',
                  display: 'flex',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  gap: '10px',
                }}
              >
                <Button onClick={addQuestion} colorScheme="teal">
                  Add Question
                </Button>
                <Button onClick={addImage} colorScheme="teal">
                  Add Image
                </Button>

                <Button onClick={addQuestionnaire} isLoading={Loaders} colorScheme="teal">
                  Submit
                </Button>
              </div>
            </VStack>
          </>
        )}

        {/* View Questionnaire Mode */}
        {viewMode && <Box>{<QuestionnaireDisplay />}</Box>}
      </CardBody>
    </Card>
  );
};

export default Questionnaire;
